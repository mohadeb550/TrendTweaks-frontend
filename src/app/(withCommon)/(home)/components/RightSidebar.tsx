
import Image from 'next/image';
import { RiUserUnfollowLine } from 'react-icons/ri';
import { useGetSingleUserQuery, useGetUsersQuery } from '@/redux/features/user/userApi';
import { TUser } from '@/redux/features/authentication/authSlice';
import { useAppSelector } from '@/redux/hooks';


const RightSidebar = () => {
    const loggedUser = useAppSelector(state => state.auth.user)
    const { data } = useGetSingleUserQuery(loggedUser?.email as string);
    const { data: allUserData, isLoading } = useGetUsersQuery({role : 'user'});

    const userDetails : TUser = data?.data || {};


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


    return (
        <div className="w-72  space-y-4 ">
          {/* Following Section */}
        
      {following?.length?  <div className='bg-white p-4 rounded-lg '>  
            <h2 className="text-lg text-gray-500 font-semibold mb-4">Following ({following?.length})</h2>

         <div className="space-y-4 h-64 overflow-y-scroll scrollbar-hide ">
          

              {following?.map(user => (
                <div key={user?._id} className="flex items-center space-x-4 pb-2 border-b ">
                  <Image width={50} height={50}
                    src={user?.image}
                    alt={user?.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div className="w-full flex items-center justify-between gap-3">
                    <p className="font-medium text-gray-600">{user?.name}</p>
                    <button  className="bg-gray-200 text-gray-700 p-2 text-sm md:text-sm rounded-md flex items-center font-semibold">
              <RiUserUnfollowLine className="mr-1" />
             Unfollow
            </button>

                  </div>
                </div>
              ))}
          </div>
         </div> : ''}



          {/* All other users  */}
         <div className='rounded-lg  bg-white p-4'> 
            <h2 className="text-lg text-gray-500 font-semibold mb-4  ">People you can follow</h2>

         <div className="space-y-4 max-h-[800px] overflow-y-scroll scrollbar-hide">
           

              {filterUsers?.map((user: TUser) => (
                <div key={user?._id} className="flex items-center space-x-4 pb-2 border-b ">
                  <Image width={50} height={50}
                    src={user?.image}
                    alt={user?.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div className="w-full flex items-center justify-between gap-3">
                    <p className="font-medium text-gray-600">{user?.name}</p>
                    <button  className="bg-blue-500 text-white p-2 text-sm md:text-sm rounded-md flex items-center font-semibold">
              <RiUserUnfollowLine className="mr-1" />
             Follow
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