/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { FieldValues, useForm } from "react-hook-form";
import { ClipLoader } from "react-spinners";
import { useState } from "react";
import Link from "next/link";
import SocialLogin from "@/components/Shared/SocialLogin";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { GoUnlock } from "react-icons/go";
import { PiImage } from "react-icons/pi";
import { useSignUpMutation } from "@/redux/features/authentication/authApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export default function Register() {
  const { register, handleSubmit, formState: {errors}} = useForm();
  const [ loading , setLoading ] = useState(false)
  const [ confirmPassError ,setConfirmPassError ] = useState('')
  const [ signUp,  { isLoading} ] = useSignUpMutation(); 
  const router = useRouter()


    const onSubmit = async (data: FieldValues) => {
      setLoading(true)

      if(data.password !== data.confirmPassword){
        setConfirmPassError('Confirm Your Password');
        setLoading(false)
        return;
      }
      else{
        setConfirmPassError('')
      }
      const userData = {
        ...data,
        role :'user',
       }

 const result : any = await signUp({
      ...userData,
      role :'user',
     })


     if(result?.error?.data?.message){
      toast.error('Email is already exist')
      setLoading(false)
      return;
     }
     else if(result?.data?.success)
      toast.success('Registered Successfully! Please Login')
      router.push('/login');

    }


  return (
    <div className="hero h-[730px] md:h-[790px] px-4 ">
    <div className="hero-content flex-col w-full gap-0">

    <div className="text-center lg:text-left pt-5 rounded-l-lg">
        <h1 className="text-[27px] lg:text-[34px] font-bold text-gray-800 text-center  carter-one-regular"> Create your account</h1>
      </div>

      <div className="rounded flex-shrink-0 w-full max-w-2xl ">
        <div className= "p-6">


        <form onSubmit={handleSubmit(onSubmit)} className="">
            
          <div >
           <div className="relative flex items-center">
           <input type="text" placeholder="Your Name" className="w-full py-3 pl-12 pr-3 outline-none border-2 rounded-md bg-white border-gray-200 text-gray-700 focus:border-blue-600 " {...register('name',{required: true, minLength: 3, maxLength: 20})} />

         <span className="text-2xl absolute left-4 text-gray-300"> <IoPersonOutline/></span>
           </div>

            <span className="text-red-400 font-semibold text-sm p-1"> {errors.name?.type === 'required' && 'Name is required'} {errors.name?.type === 'minLength' && 'Name Must Have 3 Characters'} {errors.name?.type === 'maxLength' && 'Name Maximum 20 Characters'}  </span>
          </div>


          <div className="">
           <div   className="relative flex items-center">
           <input type="email" placeholder="Email" className="w-full py-3 pl-12 pr-3 outline-none border-2 rounded-md bg-white border-gray-200 text-gray-700 focus:border-blue-600 " {...register('email', {required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
            <span className="text-2xl absolute left-4 text-gray-300"> <AiOutlineMail/></span>
           </div>

            <span className="text-red-400 font-semibold text-sm p-1">{errors.email?.type === 'required' && 'Email is required'} {errors.email?.type === 'pattern' && 'Please input a valid email'}</span>
          </div>


          <div className="">
           <div  className="relative flex items-center">
           <input type="text" placeholder="Password" className="w-full py-3 pl-12 pr-3 outline-none border-2 rounded-md bg-white border-gray-200 text-gray-700 focus:border-blue-600 " {...register('password', {required: true, pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,8}$/ })} />
            <span className="text-2xl absolute left-4 text-gray-300"> <GoUnlock/></span>
           </div>

            <span className="text-red-400 font-semibold text-sm p-1"> {errors.password?.type === 'required' && 'Password is required'} {errors.password?.type === 'pattern' && 'Min 1 uppercase letter, 1 lowercase letter, 1 special character, 1 number, min 6 characters, max 8 characters.'} </span>
          
          </div>

          <div className="">
           <div className="relative flex items-center">
           <input type="text" placeholder="Confirm Password" className="w-full py-3 pl-12 pr-3 outline-none border-2 rounded-md bg-white border-gray-200 text-gray-700 focus:border-blue-600 " {...register('confirmPassword', {required: true })} />
            <span className="text-2xl absolute left-4 text-gray-300"> <GoUnlock/></span>
           </div>

            <span className="text-red-400 font-semibold text-sm p-1"> {errors.confirmPassword?.type === 'required'} {confirmPassError? confirmPassError : ''} </span>
          
          </div>


          <div className="">
           <div className="relative flex items-center">
           <input type="text" placeholder="Photo URL" className="w-full py-3 pl-12 pr-3 outline-none border-2 rounded-md bg-white border-gray-200 text-gray-700 focus:border-blue-600 " {...register('image',{required: true})} />
            <span className="text-2xl absolute left-4 text-gray-300"> <PiImage/></span>
           </div>
            <span className="text-red-400 font-semibold text-sm p-1"> {errors.image?.type === 'required' && 'Image is required'}  </span>
          </div>

          <div className="">
        <label className="flex items-center gap-2 text-gray-500 font-semibold text-sm">
          <input
            type="checkbox"
            {...register('terms', { required: true })}
          />
          I agree to the Terms and Conditions
        </label>
        <span className="text-red-400 font-semibold text-sm p-1"> {errors.terms?.type === 'required' && 'You must agree to the terms'}  </span>
      </div>
      <SocialLogin/>

          <div className="mt-6">
            <button className="bg-gray-800 w-full p-3 text-zinc-200 rounded-md font-semibold transition-all flex justify-center items-center hover:bg-zinc-600 text-sm md:text-base" type="submit"> {loading? <ClipLoader
           color='#ffffff'
           loading={loading}
          className=""
           size={25}
           aria-label="Loading Spinner"
           speedMultiplier={0.8} /> : 'Register'} 
     </button>
          </div>

          <div className="mt-2">
                <h4 className="text-sm font-semibold text-gray-500"> Already Have An Account? <Link href='/login'> <span className="text-blue-600"> Login</span></Link> </h4>
            </div>
         
          
        </form>

        </div>
       
      </div>
    </div>
  </div>
  )
}