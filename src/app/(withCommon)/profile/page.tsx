'use client'

import { FaCheckCircle } from 'react-icons/fa';
import { BsPersonPlusFill, BsEnvelopeFill, BsThreeDots } from 'react-icons/bs';
import { useGetSingleUserQuery } from '@/redux/features/user/userApi';
import { useAppSelector } from '@/redux/hooks';
import { TUser } from '@/redux/features/authentication/authSlice';
import Image from 'next/image';
import { MdModeEdit } from "react-icons/md";
import CreatePost from '../(home)/components/CreatePost/CreatePost';
import MyPosts from './components/MyPosts';

const Profile = () => {

    const user = useAppSelector(state => state.auth.user)
    const { data , isLoading } = useGetSingleUserQuery(user?.email as string);
    const userDetails : TUser = data?.data || {};

    const {email,followers, following, image,memberShip,name,  } = userDetails;

    return (
        <div className=" bg-white p-4 rounded-lg">
        {/* Cover Photo */}
        <div className="relative">
          <Image
            src={image}
            alt="Cover"
            width={600}
            height={600}
            className="w-full h-28 md:h-44 lg:h-52 object-cover rounded-t-lg"
          />
          <div className="relative lg:left-4 -top-4 md:-top-7 flex items-center space-x-4">
            <Image
             src={image}
              alt="Profile"
              width={300}
              height={300}
              className="size-24 md:size-36 rounded-full border-4 border-white object-cover"
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
  
        {/* Profile Details */}
        <div className="flex justify-between">

        {user?.email !== userDetails.email &&   <div className="flex items-center gap-3">
            <button className="bg-blue-500 text-white px-2 md:px-4 py-2 text-sm md:text-base rounded-lg flex items-center">
              <BsPersonPlusFill className="mr-2" />
              Add Friend
            </button>

            <button className="bg-gray-200 px-2 md:px-4 py-2 text-sm md:text-base rounded-lg flex items-center font-semibold">
              <BsEnvelopeFill className="mr-2" />
              Message
            </button>
          </div>}

          <div className="space-y-1 flex items-center">
            <button className="bg-gray-200 px-2 md:px-4 py-2 text-sm md:text-base rounded-lg flex items-center font-semibold">
              <MdModeEdit className="mr-2" />
             Edit Profile
            </button>
            <button className="bg-gray-200 px-2 md:px-4 h-full hidden md:block  text-sm md:text-base rounded-lg ml-2">
              <BsThreeDots />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 border-b border-gray-300">
          <nav className="flex space-x-8 text-[15px] md:text-base">
            <button className="pb-2 border-b-2 border-black">About</button>
            <button className="pb-2 text-gray-600">Membership</button>
            <button className="pb-2 text-gray-600">Discussion</button>
            <button className="pb-2 text-gray-600">Group</button>
            <button className="pb-2 text-gray-600 hidden md:block">Events</button>
            <button className="pb-2 text-gray-600 hidden md:block">Media</button>
          </nav>
        </div>

            {/* Followers/Following Section */}
      <div className="mt-2 flex justify-around bg-white px-4 rounded-lg ">
        <div className="text-center">
          <h3 className="text-xl font-bold">254</h3>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">123</h3>
          <p className="text-gray-500">Following</p>
        </div>
      </div>
  
  
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
        <CreatePost/>

        {/* user posts  */}
        <MyPosts/>
      </div>
    );
};

export default Profile;