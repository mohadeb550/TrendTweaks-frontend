/* eslint-disable react-hooks/exhaustive-deps */

"use client"

import { useEffect, useState } from "react";

import { useGetPostsQuery } from "@/redux/features/posts/postApi";
import PostCard from "./PostCard";
import { TPost } from "../CreatePost/CreatePostModal";
import PostSkeleton from "./PostSkeleton";
import { TfiSearch } from "react-icons/tfi";
import { useInView } from "react-intersection-observer";

export default function PostSection() {

  const [ filterQuery, setFilterQuery ] = useState({})
  const [ limit , setLimit] = useState(10)
    const { data , isFetching } = useGetPostsQuery({...filterQuery, skip:0, limit});
    const { totalPosts, posts}  = data?.data || {};

    const { ref, inView } = useInView({
      threshold: 1, 
    });

  useEffect(() => {
    if (inView) {
      // check the category, searchTerm, sort are exist in the filterQuery
      const isFilterExist = Object.keys(filterQuery).find(option => ['category','searchTerm', 'sortByUpvote'].includes(option))

      // console.log(isFilterExist)
      if(!isFilterExist && posts?.length < totalPosts){
      setFilterQuery({...filterQuery, limit : limit + 10})
      setLimit(limit +10)
       }
     return;
    }
  }, [inView]);


  return (
    <section className="">
  
     <section >
    
        <section>


          {/* all filtering section  */}
          <div className="flex justify-end my-1 mt-0 mb-4 gap-2 md:gap-3">

    {/* FOR LARGE  */}
          <div className="hidden relative md:flex items-center w-full">
 <span className="absolute left-4"> <TfiSearch/></span>
  <input   onChange={(e) => setFilterQuery(prev => ({...prev, searchTerm: e.target.value}))}
 type="text" className="rounded-lg outline-none placeholder:text-gray-500 py-2 pl-10 pr-2 bg-white shadow-sm w-full" placeholder="Search.."/>
</div>

{/* for small  */}
<div className="dropdown md:hidden w-full">
  <div tabIndex={0} role="button" className=" bg-white flex items-center gap-2 shadow-sm p-3 w-full rounded-lg text-sm md:text-base"> <TfiSearch/></div>

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
           className=" max-w-xs p-2 shadow-sm rounded-lg outline-1 text-xs md:text-sm ">
              <option disabled selected> Sort by Upvote</option>
               <option value='-1'>Most Upvoted</option>
               <option value='1'>Most Downvoted</option>
        </select>

          <select
           onChange={(e)=> setFilterQuery(prev => ({...prev, category : e.target.value}))}

            className="p-2 shadow-sm text-xs md:text-sm rounded-lg">
              <option disabled selected>Select Category</option>
              <option value=''>All</option>
              <option value='Web'>Web</option>
              <option value='Software Engineering'>Software Engineering</option>
              <option value='AI'>AI</option>
              <option value='TEchnology'>Technology</option>
        </select>
      

          </div>

      {/* Grid section  */}
   
      <div  className="grid grid-cols-1 gap-7  mb-8 ">
            {posts?.map((post : TPost) => <PostCard key={post._id} post={post} /> )}

            {/* Card placeholder  */}
            {isFetching && [1, 2].map((num) => <PostSkeleton key={num} /> )}

      <div ref={ref} className="text-center text-gray-500">
        {posts?.length < totalPosts ? '' : 'No more items to load...'}
      </div>
        </div> 

        </section>
          
    </section>
    </section>
 
  )
}
