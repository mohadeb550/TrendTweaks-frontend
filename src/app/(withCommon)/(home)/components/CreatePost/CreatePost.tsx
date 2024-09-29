'use client'

import { useAppSelector } from '@/redux/hooks';
import Image from 'next/image';
import { useState } from 'react';
import { FaVideo, FaCamera, FaSmile, FaPen, FaEllipsisH } from 'react-icons/fa';
import CreatePostModal from './CreatePostModal';


export default function CreatePost() {
  const user = useAppSelector(state => state.auth.user)
  const [ openModal, setOpenModal ] = useState(false);

    return (
      <div className="bg-white p-4 rounded-lg shadow-lg w-full  mx-auto">

        {/* Create Post Modal  */}
     {openModal &&  <CreatePostModal open={openModal} setOpen={setOpenModal} />}

      {/* Header Section */}
      <div className="flex items-center mb-4">
        <FaPen className="text-blue-500 text-xl" />
        <h2 className="ml-2 text-lg font-semibold text-gray-800">Create Post</h2>
      </div>

      {/* Input Section */}
      <div className="flex items-center space-x-2 mb-4">
        <Image
          src={user?.image || ''} // Replace with dynamic avatar URL
          alt="Avatar"
          height={30}
          width={30}
          className="w-10 h-10 rounded-full object-cover"
        />
        <button onClick={() => setOpenModal(true)} 
          className="flex-1 p-3 border border-gray-300 rounded-lg  text-left">What's on your mind?</button>
         
        
      </div>

      {/* Action Buttons Section */}
      <div className="flex justify-between items-center border-t pt-4">
        <button className="flex items-center space-x-1 text-red-500 hover:bg-red-100 p-2 rounded-lg">
          <FaVideo className="text-xl" />
          <span className="text-sm font-medium">Live Video</span>
        </button>

        <button className="flex items-center space-x-1 text-green-500 hover:bg-green-100 p-2 rounded-lg">
          <FaCamera className="text-xl" />
          <span className="text-sm font-medium">Photo/Video</span>
        </button>

        <button className="flex items-center space-x-1 text-orange-500 hover:bg-orange-100 p-2 rounded-lg">
          <FaSmile className="text-xl" />
          <span className="text-sm font-medium">Feeling/Activity</span>
        </button>

        <button className="text-gray-500 hover:bg-gray-100 p-2 rounded-lg">
          <FaEllipsisH className="text-xl" />
        </button>
      </div>
    </div>
    )
  }
  