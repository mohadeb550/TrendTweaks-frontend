/* eslint-disable @typescript-eslint/no-explicit-any */

import {useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { toast } from "sonner";
import { FaPen, FaImage, FaListAlt, FaAlignLeft } from 'react-icons/fa';
import { useCreatePostMutation } from "@/redux/features/posts/postApi";
import { useAppSelector } from "@/redux/hooks";

// type for car
export type TPost = {
    _id? : string,
    title : string;
    category : string;
    rating?: string;
    likesDislikes? : { likes : number, dislikes : number}; 
    description : string;
    images : string[];
    comments? : string[];
    authorInfo : {
      name : string;
      email: string;
      image : string;
      role :string;
    }
    isDeleted? : boolean;
    createdAt? : string,
    updatedAt? : string,
};

type TModalProps = {
  open : boolean,
  setOpen : React.Dispatch<React.SetStateAction<boolean>>
}


export default function CreatePostModal({ open, setOpen} : TModalProps) {

  const { register, handleSubmit } = useForm();
  const [createPost, { isLoading }] = useCreatePostMutation();
  const user = useAppSelector(state => state.auth.user)

  // console.log(res)

  const onSubmit = async (data: any ) => {
  
  const postData : TPost = {
    title : data.title,
    category : data.category,
    description : data.description,
    images : [ data.image1, data.image2, data.image3],
    likesDislikes : {
      likes : 0,
      dislikes : 0
    },
    authorInfo : {
      name: user?.name as string,
      email: user?.email as string,
      image : user?.image as string,
      role : user?.role as string,
    },
    rating : '0'
  }

  try {
    const response =  await createPost(postData).unwrap();

  if(response?.success){
    // close the modal 
    setOpen(false)
    // show a toast 
    toast.success('You created a new post')
  }
  }catch(error){
    toast.error('Something went wrong')
    console.log(error)
  }
 
  }


  return (
    <section className="w-screen absolute top-0 left-0 right-0 bottom-0 z-50  bg-black/20 backdrop-blur-sm flex justify-center py-10 overflow-y-auto">  
       
       <form className="w-[400px] md:w-[700px] h-fit p-7 bg-white rounded-md relative" onSubmit={handleSubmit(onSubmit)}>

        {/* loading white layer  */}
      {isLoading && <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-white/80 rounded-md flex justify-center items-center"> 
        <ClipLoader
           color='#000002'
           loading={isLoading}
          //  cssOverride={override}
           size={60}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} />
      </div>}


<div className="p-6 space-y-6">
      {/* Title Input */}
      <div className="flex items-center space-x-3">
        <FaPen className="text-blue-500 text-xl" />
        <input {...register("title")}
          type="text"
          placeholder="Post Title"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Category Input */}
      <div className="flex items-center space-x-3">
        <FaListAlt className="text-green-500 text-xl" />

        <select className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-400" {...register("category")} >
              <option disabled selected>Select Category</option>
              <option value='Web'>Web</option>
              <option value='Software Engineering'>Software Engineering</option>
              <option value='AI'>AI</option>
              <option value='TEchnology'>Technology</option>
        </select>

      </div>

      {/* Description Input */}
      <div className="flex items-center space-x-3">
        <FaAlignLeft className="text-yellow-500 text-xl" />
        <textarea {...register("description")}
          placeholder="Description"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          rows="4"
        />
      </div>

      {/* Images Input */}
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <FaImage className="text-red-500 text-xl" />
          <input {...register("image1")}
            type="text"
            placeholder="Image URL 1"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="flex items-center space-x-3">
          <FaImage className="text-red-500 text-xl" />
          <input {...register("image2")}
            type="text"
            placeholder="Image URL 2"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="flex items-center space-x-3">
          <FaImage className="text-red-500 text-xl" />
          <input {...register("image3")}
            type="text"
            placeholder="Image URL 3"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
    </div>
       


<button type="submit" className="px-8 text-sm lg:text-base mt-6 mr-3 py-2 md:py-2 font-semibold text-white rounded transition bg-blue-600 hover:bg-blue-700 "> Create</button>

<button onClick={() => setOpen(!open)} className="px-8 text-sm lg:text-base mr-3 py-2 md:py-2 font-semibold text-gray-600 rounded transition bg-gray-200 hover:bg-gray-300 "> Close </button>
</form>
       
       </section>
  )
}
