'use client'

import { FaCheckCircle } from 'react-icons/fa';
import { BsEnvelopeFill, BsThreeDots } from 'react-icons/bs';
import { useFollowUserMutation, useGetSingleUserQuery } from '@/redux/features/user/userApi';
import { useAppSelector } from '@/redux/hooks';
import { TUser } from '@/redux/features/authentication/authSlice';
import Image from 'next/image';
import { MdModeEdit } from "react-icons/md";
import CreatePost from '../../(home)/components/CreatePost/CreatePost';
import MyPosts from '../components/MyPosts';
import { ClipLoader } from 'react-spinners';
import { toast } from 'sonner';
import { RiUserFollowLine } from "react-icons/ri";
import { useState } from 'react';
import EditProfileModal from '../components/EditProfileModal';
import Followers from '../components/Followers';

const Profile = ({ params} : { params: { userEmail: string}}) => {
  const { userEmail } = params;

    const loggedUser = useAppSelector(state => state.auth.user)
    const [ followUser , { isLoading }] = useFollowUserMutation();
    const [ editModal, setEditModal ] = useState(false);

    const { data } = useGetSingleUserQuery(userEmail);
    const userDetails : TUser = data?.data || {};


    const {email, image,memberShip,name, coverImg , followers, following} = userDetails;



    const handleFollow = async () => {
      try{
          const response = await followUser({
              userId : loggedUser?._id as string ,
              targetedUserId : userDetails?._id as string ,
          })
          if(response?.success){
              toast.success('You followed the user')
            }

      }catch(error){
          toast.error("Something went wrong")
          console.log(error)
      }
  }



    return (
        <div className=" md:bg-white md:p-4 rounded-lg">
        {/* Cover Photo */}
        <div className="relative">
          <Image
            src={coverImg || 'https://i.ibb.co.com/mqccxqc/minimalist-purple-mountains-sunset-wallpaper.jpg'}
            alt="Cover"
            width={600}
            height={600}
            className="w-full h-28 md:h-44 lg:h-52 object-cover object-center rounded-t-lg"
          />
          <div className="relative lg:left-4 -top-2 md:-top-7 flex items-center space-x-4">
            <Image
             src={image}
              alt="Profile"
              width={300}
              height={300}
              className="size-20 md:size-36 rounded-full border-4 border-white object-cover"
            />
            <div>
              <h1 className=  "text-xl md:text-2xl font-bold flex items-center">
                {name}
                {memberShip && <FaCheckCircle className="text-blue-500 ml-2" />}
              </h1>
              <p className="text-gray-600">{email}</p>
            </div>
          </div>
        </div>

        {/* Open Edit Modal  */}
        {editModal && <EditProfileModal open={editModal} setOpen={setEditModal}/>}
  
        {/* Profile Details */}
        <div className="flex justify-between">

        {loggedUser?.email !== userDetails.email &&   <div className="flex items-center gap-3">

          {userDetails?.followers?.includes(loggedUser?._id as string) ? <><h3 className="bg-blue-500 text-white px-2 md:px-4 py-2 text-sm md:text-base rounded-lg flex items-center font-semibold">
            <RiUserFollowLine className="mr-2" />
            Following
          </h3></> 
          
          : 
          <><button onClick={handleFollow} className="bg-blue-500 text-white px-2 md:px-4 py-2 text-sm md:text-base rounded-lg flex items-center font-semibold">
             <RiUserFollowLine className="mr-2" />
           
          {isLoading?  <ClipLoader
           color='#ffffff'
           size={16}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> : 'Follow'}
          </button></>}



            <button className="bg-gray-200 px-2 md:px-4 py-2 text-sm md:text-base rounded-lg flex items-center font-semibold">
              <BsEnvelopeFill className="mr-2" />
             
              Message
            </button>
          </div>}

          <div className="space-y-1 flex items-center">
           {loggedUser?.email === userDetails?.email &&  <button onClick={()=> setEditModal(true)} className="bg-gray-200 px-2 md:px-4 py-2 text-sm md:text-base rounded-lg flex items-center font-semibold">
              <MdModeEdit className="mr-2" />
             Edit Profile
            </button>}
            <button className="bg-gray-200 px-2 md:px-4 h-full hidden md:block  text-sm md:text-base rounded-lg ml-2">
              <BsThreeDots />
            </button>
          </div>
        </div>


      {/* Showing followers and following component  */}
      <Followers followers={followers} following={following}/>
  
  
        {/* Membership Section */}
      {memberShip &&   <div className={`mt-4 mb-8 p-4 bg-orange-50 rounded-lg shadow`}>
          <h2 className="text-lg text-gray-600 font-bold">Membership</h2>
          <div className="flex items-center mt-2">
            <div className="text-orange-400 font-bold text-xl">{memberShip?.package?.name}</div>
            <span className="ml-auto bg-orange-100 py-1 px-3 rounded-lg text-gray-500">Designer</span>
          </div>
          <p className="text-gray-500 mt-2">
            87% progress through the membership.
          </p>
        </div>}

        {/* create post section  */}
        {loggedUser?.email === userDetails?.email && <CreatePost/>
        }

        {/* user posts  */}
        <MyPosts userEmail={userDetails?.email} />
      </div>
    );
};

export default Profile;