
"use client"

import { useState } from "react";
import { useGetPostsQuery } from "@/redux/features/posts/postApi";
import { TfiSearch } from "react-icons/tfi";
import { TPost } from "@/app/(withCommon)/(home)/components/CreatePost/CreatePostModal";
import PostSkeleton from "@/app/(withCommon)/(home)/components/Posts/PostSkeleton";
import MiniPostCard from "../../admin-dashboard/components/MiniPostCard";
import { useAppSelector } from "@/redux/hooks";


export default function PostSection() {
const user = useAppSelector(state => state.auth.user)
  const [ filterQuery, setFilterQuery ] = useState({ userEmail: user?.email})
    const { data , isFetching } = useGetPostsQuery({...filterQuery});
    const { posts}  = data?.data || {};


  return (
     <section className="my-2 " >
    
        <section>


          {/* all filtering section  */}
          <div className="flex justify-end my-1 mt-3 md:mt-0 gap-2 md:gap-3">

    {/* FOR LARGE  */}
          <div className="hidden relative md:flex items-center">
 <span className="absolute left-4"> <TfiSearch/></span>
  <input   onChange={(e) => setFilterQuery(prev => ({...prev, searchTerm: e.target.value}))}
 type="text" className="rounded-md outline-none placeholder:text-gray-500 py-2 pl-10 pr-2 bg-white dark:bg-gray-800 shadow-md lg:w-72" placeholder="Search.."/>
</div>

{/* for small  */}
<div className="dropdown md:hidden">
  <h3 tabIndex={0} role="button" className=" bg-white flex items-center gap-2 shadow-md p-3 px-5 rounded-md text-sm md:text-base"> <TfiSearch/></h3>

  <ul tabIndex={0} className="dropdown-content menu rounded-md z-[1] w-52 ">

  <div className="relative md:flex items-center">
 <span className="absolute left-4 top-7"> <TfiSearch/></span>
  <input   onChange={(e) => setFilterQuery(prev => ({...prev, searchTerm: e.target.value}))}
 type="text" className="rounded-md outline-none placeholder:text-gray-500 py-2 pl-10 pr-2 bg-white shadow-2xl border-t-2 border-gray-200 w-72 h-16" placeholder="Search.."/>
</div>
  </ul>
</div>

            
          <select 
          onChange={(e)=> setFilterQuery(prev => ({...prev, sortByUpvote: e.target.value}))}
           className=" max-w-xs p-2 shadow-md rounded-md outline-1 text-xs md:text-sm ">
              <option disabled selected> Sort by Upvote</option>
               <option value='-1'>Most Upvoted</option>
               <option value='1'>Most Downvoted</option>
        </select>

          <select
           onChange={(e)=> setFilterQuery(prev => ({...prev, category : e.target.value}))}

            className="p-2 shadow-md text-xs md:text-sm rounded-md">
              <option disabled selected>Select Category</option>
              <option value=''>All</option>
              <option value='Web'>Web</option>
              <option value='Software Engineering'>Software Engineering</option>
              <option value='AI'>AI</option>
              <option value='TEchnology'>Technology</option>
        </select>
      

          </div>

      {/* Grid section  */}
   
      <div  className="grid grid-cols-1 gap-3  mb-8 ">
            {posts?.map((post : TPost) => <MiniPostCard key={post._id} post={post} /> )}

            {/* Card placeholder  */}
            {isFetching && [1, 2].map((num) => <PostSkeleton key={num} /> )}
        </div> 

    {!posts?.length && <p className="text-center"> No Posts Available </p>}
        </section>
          
    </section>
 
 
  )
}
