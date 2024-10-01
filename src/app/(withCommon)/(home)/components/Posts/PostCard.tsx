/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { AiOutlineMinus } from "react-icons/ai";
import { TComment, TPost } from "../CreatePost/CreatePostModal";
import { FaHeart, FaThumbsDown, FaComment, FaShare, FaEllipsisH, FaStar, FaThumbsUp, FaReply } from 'react-icons/fa';
import { useState } from "react";
import Image from "next/image";
import TimeAgo from 'react-timeago'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaRegComment, } from "react-icons/fa6";
import ImageGallery from "./ImageGallery";
import { IoSendSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { useAddCommentMutation, useUpdatePostMutation } from "@/redux/features/posts/postApi";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";


export default function PostCard({ post } : { post : TPost}) {
  const { register, handleSubmit } = useForm();
  const user = useAppSelector(state => state.auth.user)
  const [ addComment, { isLoading} ] = useAddCommentMutation();

 const {_id, title, category, description, 
    images, comments, likesDislikes, rating, authorInfo, createdAt} = post;

  
    const onSubmit = async (data: any ) => {

      const newComment  = {
        comment : data.newComment,
        userInfo  : {
          name : user?.name,
          email : user?.email,
          image : user?.image
        },
      }

      try {
        const response =  await addComment({
          postId :_id!,
          comment : newComment as TComment,
        }).unwrap();
    
      if(response?.success){
        toast.success('Comment Added')
      }
      }catch(error){
        toast.error('Something went wrong')
        console.log(error)
      }
     
      }
    

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full mx-auto mt-6">
    {/* Header with User Info */}
    <div className="flex items-center mb-4">
      <Image width={300} height={300}
        className="size-14 rounded-full object-cover"
        src={authorInfo?.image}
        alt="User Avatar"
      />
      <div className="ml-3">
        <h2 className="text-lg font-semibold">{authorInfo?.name}</h2>
        <p className="text-sm md:text-base text-gray-500">{category} • <time className=" text-gray-500">
      <TimeAgo date={createdAt!} />
      </time></p>
      </div>
      <div className="ml-auto">
        <FaEllipsisH className="text-gray-600 cursor-pointer" />
      </div>
    </div>

    {/* Post Description */}
    <p className="lg:hidden text-gray-700 mb-4 text-base lg:text-lg">
      {description.length > 100
        ? `${description.substring(0, 200)}...`
        : description}{' '}
      <a href="#" className="text-blue-500">
        See more
      </a>
    </p>

    <p className="hidden lg:block text-gray-700 mb-4 text-base lg:text-lg">
      {description.length > 100
        ? `${description.substring(0, 400)}...`
        : description}{' '}
      <a href="#" className="text-blue-500">
        See more
      </a>
    </p>

    {/* Images Section */}
    <ImageGallery images={images} />

  {/* Likes, Dislikes, Comments, Rating, and Share Section */}
  <div className="flex justify-between items-center mt-4 border-y py-2">
        <div className="flex space-x-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <BiSolidLike className="text-blue-500 cursor-pointer hover:scale-110 transition-transform text-xl xl:text-2xl " />
            <span className="text-sm md:text-base">{likesDislikes?.likes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiSolidDislike className="text-gray-500 cursor-pointer hover:scale-110 transition-transform text-xl xl:text-2xl" />
            <span className="text-sm md:text-base">{likesDislikes?.dislikes}</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaRegComment className="cursor-pointer text-lg xl:text-xl text-gray-500" />
            <span className="text-sm md:text-base">{comments?.length}</span>
          </div>
          
        </div>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <FaShare className="cursor-pointer hover:scale-110 transition-transform" />
          <span>Share</span>
        </button>
      </div>


     {/* Main comment section */}
     <div className="flex flex-col space-y-2 pb-4 my-3 relative">
     <h4 className="font-semibold text-gray-600 cursor-pointer">View more comments</h4>

   {/* loading white layer  */}
   {isLoading && <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-white/80 rounded-md flex justify-center items-center"> 
        <ClipLoader
           color='#3B82F6'
           loading={isLoading}
          //  cssOverride={override}
           size={60}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
      </div>}

        {comments?.slice(0, 2).map(comment => <> <div className="flex space-x-2">
        {/* User Image */}
        <Image
          src={comment?.userInfo?.image}
          alt={'user'}
          width={300}
          height={300}
          className="size-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          {/* User Info */}
          <div className=" bg-gray-100 rounded-xl px-3">
            <h4 className="font-semibold">{comment?.userInfo?.name}</h4>
              {/* Comment Text */}
          <p className="text-gray-700">{comment?.comment}</p>
          </div>

          {/* Like & Reply Actions */}
          <div className="flex items-center space-x-4 text-gray-500 text-sm mt-1">
          <span className="text-gray-500 font-semibold text-sm">  <TimeAgo date={comment.createdAt!} /></span>

            <button className="flex items-center space-x-1 hover:text-gray-700">
              <FaThumbsUp className="text-gray-500" />
              <span>Like</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-gray-700">
              <FaReply className="text-gray-500" />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div></>)}

    </div>



    {/* Comment Input Box */}
    <form className=" relative flex gap-3" onSubmit={handleSubmit(onSubmit)}>
    <div className="">
      <Image width={300} height={300}
        className="size-10 rounded-full object-cover"
        src={user?.image}
        alt="User Avatar"
      />
    </div>
    
      <textarea {...register("newComment")}
        className="flex-1 h-11 border rounded-lg p-2 focus:outline-none"
        placeholder="Add a comment..."
         data-gramm="false"
      />
      <button type="submit"
        className="text-blue-500 px-4 py-2 rounded-lg mt-2 hover:text-blue-600 absolute right-0 top-auto text-lg"
      >
       <IoSendSharp />
      </button>
    </form>




  </div>
  )
}
