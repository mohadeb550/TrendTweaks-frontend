/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {  FaShare, FaEllipsisH, FaThumbsUp, FaReply, FaEdit } from 'react-icons/fa';
import { RiDeleteBin4Line } from "react-icons/ri";
import Image from "next/image";
import TimeAgo from 'react-timeago'
import { IoSendSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { ClipLoader } from "react-spinners";
import { useAddCommentMutation, useDeleteCommentMutation, useGetCommentsQuery, useUpdateCommentMutation } from "@/redux/features/comments/commentApi";
import { BsThreeDots } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import Link from "next/link";
import { TComment, TPost } from '../../components/CreatePost/CreatePostModal';
import MiniUserProfile from '../../components/Posts/MiniUserProfile';
import ImageGallery from '../../components/Posts/ImageGallery';
import VoteSection from '../../components/Posts/VoteSection';
import { useGetSinglePostQuery } from '@/redux/features/posts/postApi';
import { MdStars } from 'react-icons/md';
import { AiFillPrinter } from 'react-icons/ai';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';




export default function PostDetails({params } : { params : { postId: string}}) {

    const { data , isFetching } = useGetSinglePostQuery(params?.postId);
    const post : TPost = data?.data || {};

  const { register, handleSubmit , reset} = useForm();
  const user = useAppSelector(state => state.auth.user)
  const [ addComment, { isLoading : addLoading, } ] = useAddCommentMutation();
  const [ updateComment, { isLoading: updateLoading} ] = useUpdateCommentMutation();
  const [ deleteComment, { isLoading: deleteLoading} ] = useDeleteCommentMutation();


 const {_id, category, description, 
    images, authorInfo, votes, voters, createdAt, isPremium} = post;

    // get comments based on the postID 
    const { data: commentsData  } = useGetCommentsQuery({ postId : _id});
    const comments : TComment[] = commentsData?.data || [];
    
      // for printing the page 
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  
    const onSubmit = async (data: any ) => {

      const newComment  = {
        comment : data.newComment,
        postId : _id,
        userInfo  : {
          name : user?.name,
          email : user?.email,
          image : user?.image
        },
      }

      try {
        const response =  await addComment(newComment as TComment).unwrap();
    
      if(response?.success){
        reset();
      }
      }catch(error){
        toast.error('Something went wrong')
        console.log(error)
      }
     
      }
    

  return (
    <div ref={contentRef} className="bg-white rounded-xl shadow-md p-6 w-full mx-auto mt-6">
    {/* Header with User Info */}

   <div className="flex items-center mb-4">
      <section className="group relative">
      <Image width={300} height={300}
        className="size-14 rounded-full object-cover"
        src={authorInfo?.image}
        alt="User Avatar"
      />
       <MiniUserProfile userInfo={post.authorInfo}/>
      </section>

      <div className="ml-3">
        <h2 className="text-lg font-semibold">{authorInfo?.name}</h2>
        <p className="text-sm md:text-base text-gray-500">{category} • <time className=" text-gray-500">
      <TimeAgo date={createdAt!} />
      </time></p>
      </div>
      <div className="ml-auto flex items-center gap-2">
      {isPremium && <MdStars className="text-orange-500 cursor-pointer text-2xl" />}

      <button onClick={reactToPrintFn}> <AiFillPrinter className="text-gray-600 cursor-pointer text-2xl "/></button>
      </div>
    </div>

     {/* Post title */}
     <h2 className=" text-gra-500 mb-3 font-semibold text-lg ">
      {post?.title}
    </h2>

    {/* Post Description */}
    <p className=" text-gray-700 mb-4 text-base lg:text-lg">
      {description}
    </p>

    {/* Images Section */}
    <ImageGallery images={images} />

  {/* Likes, Dislikes, Comments, Rating, and Share Section */}
  <div className="flex justify-between items-center mt-4 border-y py-2">
        <div className="flex space-x-6 text-gray-600">

          <VoteSection postId={_id as string} userId={user?._id as string} votes={votes} voters={voters}/>
         
          <div className="flex items-center gap-3 bg-gray-200/50 rounded-full px-3 py-1">
            <BiCommentDetail className="cursor-pointer text-lg xl:text-xl text-gray-500" />
            <span className="font-semibold text-gray-600">{comments?.length}</span>
          </div>
          
        </div>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <FaShare className="cursor-pointer hover:scale-110 transition-transform" />
          <span>Share</span>
        </button>
      </div>


     {/* Main comment section */}
     <div className="flex flex-col space-y-2 pb-4 my-3 relative">
    

   {/* loading white layer  */}
   {addLoading || deleteLoading || updateLoading && <div className="w-full h-full absolute top-0 left-0 z-50 right-0 bottom-0 bg-white/80 rounded-md flex justify-center items-center"> 
        <ClipLoader
           color='#3B82F6'
           size={60}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
      </div>}


        {comments?.map((comment: TComment) => <> <div className="flex space-x-2 ">
        {/* User Image */}
        <Image
          src={comment?.userInfo?.image}
          alt={'user'}
          width={300}
          height={300}
          className="size-10 rounded-full object-cover"
        />




        <div className="flex flex-col dropdown">
          {/* User Info */}
          <div className=" bg-gray-100 rounded-xl group px-3 relative">
            <h4 className="font-semibold">{comment?.userInfo?.name}</h4>
              {/* Comment Text */}
          <p className="text-gray-700">{comment?.comment}</p>

                
  <div tabIndex={0} role="button" className="p-2  hidden group-hover:flex  text-sm md:text-base rounded-lg ml-2 absolute top-0 right-0 "> <BsThreeDots /></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-lg z-[1] w-52 p-2 shadow-2xl relative right-0">
          <h3  className="cursor-pointer font-semibold px-2 py-1 hover:bg-gray-50 rounded-md flex items-center gap-2"><span className="text-gray-600 text-lg"><RiDeleteBin4Line/></span> Edit</h3>

          <h3 onClick={() => deleteComment(comment?._id as string) } className="cursor-pointer font-semibold px-2 py-1 hover:bg-gray-50 rounded-md flex items-center gap-2"><span className="text-gray-600 text-lg"><FaEdit/></span> Delete</h3>
  </ul>
  

         
          </div>

          {/* Like & Reply Actions */}
          <div className="flex items-center space-x-4 text-gray-500 text-sm mt-1">
          <span className="text-gray-500 font-semibold text-sm">  <TimeAgo date={comment.createdAt!} /></span>

            <h3 className="flex items-center space-x-1 hover:text-gray-700">
              <FaThumbsUp className="text-gray-500" />
              <span>Like</span>
            </h3>
            <h3 className="flex items-center space-x-1 hover:text-gray-700">
              <FaReply className="text-gray-500" />
              <span>Reply</span>
            </h3>
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
