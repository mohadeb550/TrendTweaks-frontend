
import Image from 'next/image';
import { RiUserUnfollowLine } from 'react-icons/ri';
import { useFollowUserMutation, useGetSingleUserQuery, useGetUsersQuery, useUnFollowUserMutation } from '@/redux/features/user/userApi';
import { TUser } from '@/redux/features/authentication/authSlice';
import { useAppSelector } from '@/redux/hooks';
import { toast } from 'sonner';
import { ClipLoader } from 'react-spinners';
import { FaUserPlus } from "react-icons/fa6";


const RightSidebar = () => {
    const loggedUser = useAppSelector(state => state.auth.user)
    const { data } = useGetSingleUserQuery(loggedUser?.email as string);
    const { data: allUserData, isLoading } = useGetUsersQuery({role : 'user'});

    const userDetails : TUser = data?.data || {};


    // follow and unfollow 
    const [ followUser , { isLoading: followLoading }] = useFollowUserMutation();
    const [ unfollowUser , { isLoading: unFollowLoading }] = useUnFollowUserMutation();


    // remove the users who the logged user followed 
    const totalUsers: TUser[] = allUserData?.data || [];
    const filterUsers : TUser[] =  totalUsers.filter((user: TUser) => {

        const result = userDetails?.following?.find((followingUser) => user?.email === followingUser?.email)
 
        if(!result){
         return user;
        }
     //    remove the logged user from the other users 
     }).filter((user: TUser) => user.email !== loggedUser?.email)


    const {email, image,memberShip,name, coverImg , followers, following} = userDetails;
    




    const handleFollow = async (targetedId) => {
        try{
            const response = await followUser({
                userId : loggedUser?._id as string ,
                targetedUserId : targetedId ,
            })
            if(response?.success){
                toast.success('You followed the user')
              }

        }catch(error){
            toast.error("Something went wrong")
            console.log(error)
        }
    }

    const handleUnfollow = async (targetedId) => {
        try{
            const response = await unfollowUser({
                userId : loggedUser?._id as string ,
                targetedUserId : targetedId ,
            })
            if(response?.success){
                toast.success('You unfollowed the user')
              }

        }catch(error){
            toast.error("Something went wrong")
            console.log(error)
        }
    }



    return (
        <div className="w-72  space-y-4 ">
          {/* Following Section */}
        
      {following?.length?  <div className='bg-white p-4 rounded-lg '>  
            <h2 className="text-lg text-gray-500 font-semibold mb-4">Following ({following?.length})</h2>

         <div className="space-y-4 max-h-64 overflow-y-scroll scrollbar-hide relative">

         {unFollowLoading && <div className="w-full h-full absolute top-0 left-0 z-50 right-0 bottom-0 bg-white/80 rounded-md flex justify-center items-center"> 
        <ClipLoader
           color='#3B82F6'
           size={38}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
      </div>}
          

              {following?.map(user => (
                <div key={user?._id} className="flex items-center space-x-4 pb-2 border-b ">
                  <Image width={50} height={50}
                    src={user?.image}
                    alt={user?.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div className="w-full flex items-center justify-between gap-3">
                    <p className="font-medium text-gray-600">{user?.name}</p>

                    <button onClick={()=> handleUnfollow(user?._id)}
             className=" bg-gray-200 hover:bg-gray-300  text-gray-600 py-1 px-2 rounded-full font-semibold flex items-center gap-1 justify-center">
            <RiUserUnfollowLine />Unfollow  
          </button>


                  </div>
                </div>
              ))}
          </div>
         </div> : ''}



          {/* All other users  */}
         <div className='rounded-lg  bg-white p-4'> 
            <h2 className="text-lg text-gray-500 font-semibold mb-4  ">People you can follow</h2>

         <div className="space-y-4 max-h-[525px] overflow-y-scroll scrollbar-hide relative">

         {followLoading && <div className="w-full h-full absolute top-0 left-0 z-50 right-0 bottom-0 bg-white/80 rounded-md flex justify-center items-center"> 
        <ClipLoader
           color='#3B82F6'
           size={38}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
      </div>}
          

              {filterUsers?.map((user: TUser) => (
                <div key={user?._id} className="flex items-center space-x-4 pb-2 border-b ">
                  <Image width={50} height={50}
                    src={user?.image}
                    alt={user?.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div className="w-full flex items-center justify-between gap-3">
                    <p className="font-medium text-gray-600">{user?.name}</p>

                    <button onClick={()=> handleFollow(user?._id)}
             className=" bg-blue-500 hover:bg-blue-600  text-white py-1 px-3 rounded-full font-semibold flex items-center gap-1 justify-center">
             <FaUserPlus /> Follow
          </button>

                  </div>
                </div>
              ))}
          </div>  
         </div>
      </div>
    );
};

export default RightSidebar;