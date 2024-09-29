'use client'

import { AiOutlineMinus } from "react-icons/ai";
import { TPost } from "../CreatePost/CreatePostModal";
import { FaHeart, FaThumbsDown, FaComment, FaShare, FaEllipsisH, FaStar } from 'react-icons/fa';
import { useState } from "react";
import Image from "next/image";
import TimeAgo from 'react-timeago'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { FaRegComment, } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";

export default function PostCard({ post } : { post : TPost}) {

 const {_id, title, category, description, 
    images, comments, likesDislikes, rating, authorInfo, createdAt} = post;


    const [newComment, setNewComment] = useState<string>('');
    const [commentList, setCommentList] = useState<string[]>(comments || []);
  
    const handleCommentSubmit = () => {
      if (newComment.trim()) {
        setCommentList([...commentList, newComment]);
        setNewComment('');
      }
    };
  


     // Image Grid - Conditionally adjust columns based on the number of images
  const renderImages = () => {
    if (post.images.length === 1) {
      return <img src={post.images[0]} className="w-full h-64 object-cover rounded-lg" alt="Post Image" />;
    }
    if (post.images.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-2">
          {post.images.map((image, idx) => (
            <img key={idx} src={image} className="h-64 w-full object-cover rounded-lg" alt={`Post Image ${idx + 1}`} />
          ))}
        </div>
      );
    }
    if (post.images.length >= 3) {
      return (
        <div className="grid grid-cols-3 gap-2">
          {post.images.slice(0, 3).map((image, idx) => (
            <img key={idx} src={image} className="h-40 w-full object-cover rounded-lg" alt={`Post Image ${idx + 1}`} />
          ))}
        </div>
      );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full mx-auto mt-6">
    {/* Header with User Info */}
    <div className="flex items-center mb-4">
      <Image width={30} height={30}
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
    {images && images.length > 0 && (
      <div className="mb-4">
        {renderImages()}
      </div>
    )}

  {/* Likes, Dislikes, Comments, Rating, and Share Section */}
  <div className="flex justify-between items-center mt-4 border-t pt-4">
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
            <span className="text-sm md:text-base">{commentList.length}</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiFillStar className="text-orange-600 cursor-pointer hover:scale-110 transition-transform text-xl xl:text-2xl" />
            <span className="text-sm md:text-base">{rating || 'No rating'}</span>
          </div>
        </div>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
          <FaShare className="cursor-pointer hover:scale-110 transition-transform" />
          <span>Share</span>
        </button>
      </div>

    {/* Comment Input Box */}
    <div className="mt-4">
      <textarea
        className="w-full h-16 border rounded-lg p-2 focus:outline-none"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button
        onClick={handleCommentSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2 hover:bg-blue-600"
      >
        Submit Comment
      </button>
    </div>

    {/* Display Comments */}
    <div className="mt-4">
      {commentList.length > 0 && (
        <div className="space-y-2">
          {commentList.map((comment, idx) => (
            <div key={idx} className="border-b pb-2">
              <p className="text-gray-700">{comment}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
  )
}
