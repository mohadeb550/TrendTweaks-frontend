
"use client"

import { useState } from "react";
// import SearchBanner from "../components/ui/CarsPage/SearchBanner";
import { ClipLoader } from "react-spinners";
import { useGetPostsQuery } from "@/redux/features/posts/postApi";
import PostCard from "./PostCard";
import { TPost } from "../CreatePost/CreatePostModal";

export default function PostSection() {

  const [ filterQuery, setFilterQuery ] = useState({})
    const { data , isFetching } = useGetPostsQuery(filterQuery);
    const posts : TPost[] = data?.data || [];


     //  {
                // location : 'tangail'
                // carType : 'sedun'
                // costRange : '10-35'
                // sortByCost : -1
                // status : 'unavailable'
        //  }

 
  return (
    <section className="pb-12">
        {/* <SearchBanner setFilterQuery={setFilterQuery} /> */}

     <section className="my-2 md:my-6 lg:my-8 " >
    
      
        {isFetching && <ClipLoader
           color='#3B82F6'
           size={60}
           className="absolute top-72 md:top-2/4 left-2/4"
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> }

        <section>

          {/* all filtering section  */}
          <div className="flex justify-between md:justify-end my-6 gap-3 flex-wrap-reverse">
            
          <select 
          onChange={(e)=> setFilterQuery(prev => ({...prev, sortByCost: e.target.value}))}
           className=" max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm">
              <option disabled selected> Sort by Cost</option>
               <option value='1'> Low to High</option>
               <option value='-1'> High to Low</option>
        </select>

          <select
           onChange={(e)=> setFilterQuery(prev => ({...prev, costRange: e.target.value}))}

            className=" max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm">
              <option disabled selected>Filter by cost</option>
               <option value='0-20'>0 - 20$</option>
               <option value='20-40'>20 - 40$</option>
               <option value='40-60'>40 - 60$</option>
               <option value='60-80'>60 - 80$</option>
               <option value='80-100'>80 - 100$</option>
               <option value='0-0'>Custom</option>
        </select>
        
        <select 
        onChange={(e) => setFilterQuery(prev => ({...prev, carType: e.target.value}))}
         className=" max-w-xs outline p-2 outline-black/20 rounded-sm outline-1 text-xs md:text-sm ">
              <option disabled selected> Filter by Car Type</option>
              <option value='compact'>Compact</option>
              <option value='suv'>SUVs</option>
              <option value='luxury'>Luxury</option>
              <option value='pickup/truck'>Pickups / Trucks</option>
              <option value='electric'>Electric</option>
              <option value='convertibles'>Convertibles</option>
        
        </select>

          </div>

        <div className="grid grid-cols-1 gap-7  mb-8 ">
            {posts?.map(post => <PostCard key={post._id} post={post} /> )}
        </div> 

          {/* no posts direction  */}
        { (!posts || !posts.length) && <p className="text-lg mt-4 text-gray-500 text-center">No Posts</p>}

        </section>
          
    </section>
    </section>
 
  )
}
