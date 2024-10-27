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
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm w-full  mx-auto mb-2">

        {/* Create Post Modal  */}
     {openModal &&  <CreatePostModal open={openModal} setOpen={setOpenModal} />}

      {/* Header Section */}
      <div className="flex items-center mb-4">
        <FaPen className="text-blue-500 md:text-lg" />
        <h2 className="ml-2 xl:text-lg font-semibold text-gray-500 dark:text-gray-300">Create Post</h2>
      </div>

      {/* Input Section */}
      <div className="flex items-center space-x-2 mb-4">
        <Image
          src={user?.image || ''} // Replace with dynamic avatar URL
          alt="Avatar"
          height={300}
          width={300}
          className="size-9 md:size-10 rounded-full object-cover"
        />
        <button onClick={() => setOpenModal(true)} 
          className="flex-1 p-2 md:p-3 border border-gray-200 dark:border-gray-600 rounded-md text-left text-gray-600 dark:text-gray-400">Whats on your mind?</button>
         
        
      </div>


    </div>
    )
  }
  