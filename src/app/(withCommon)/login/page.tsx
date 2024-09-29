/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import SocialLogin from "@/components/Shared/SocialLogin";
import { useLoginMutation } from "@/redux/features/authentication/authApi";
import { setUser } from "@/redux/features/authentication/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TJwtDecoded } from "@/types";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoUnlock } from "react-icons/go";
import { toast } from "sonner";


export default function Login() {

  const [ errors, setErrors] = useState({emailError: '', passwordError: ''})
  const [ login ] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();



  const handleLogin = async (e: any) => {
    e.preventDefault();

    const form  = new FormData(e.target);
    const email = form.get('email')
    const password = form.get('password')


    const res : any = await login({ email, password})

    if(res?.error?.data?.message === 'user not exist'){
      setErrors({...errors, emailError: 'Incorrect Email'})
    }
    else if(res?.error?.data?.message === 'Password incorrect'){
      setErrors({...errors, passwordError: 'Incorrect Password'})
    }
   else if(res?.data?.success){
    const userImage = res?.data?.data?.image;
    const name = res?.data?.data?.name;

    // decode the jwt token 
    const decoded : TJwtDecoded = jwtDecode(res.data.token);
    dispatch(setUser({
      user : { ...decoded, image : userImage, name },
      token : res.data.token
    }))

    toast.success('Logged In Successfully')
    const role = decoded?.role;
    role === 'user'? router.push('/')  :  router.push('/');
    
   }
}


  return(
    <div className="hero h-[600px] pb-32 md:pb-0 md:h-[600px] px-4 ">

    <div className="hero-content flex-col w-full">

      <div className="text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl text-gray-700  px-24 py-3 font-bold text-center carter-one-regular">Login your account</h1>
      </div>

      <div className="rounded-md flex-shrink-0 w-full max-w-2xl  ">
        <div className="p-6">


        <form onSubmit={handleLogin} className="text-white">

          <div className="mb-5">
           <div className="relative flex items-center">
           <input onChange={() => setErrors({emailError:'', passwordError: ''})}  type="email" placeholder="Email" className="w-full py-3 pl-12 pr-3 outline-none border-2 rounded-md bg-white border-gray-200 text-gray-700 focus:border-blue-600 " name="email" />
           <span className="text-2xl absolute left-4 text-gray-300"> <AiOutlineMail/></span>
           </div>

            {errors?.emailError && <span className="text-red-600"> {errors?.emailError} </span>}
          </div>


          <div className="mb-4">
            <div className="relative flex items-center">
            <input  onChange={() => setErrors({emailError:'', passwordError: ''})} type="text" placeholder="Password" className="w-full py-3 pl-12 pr-3 outline-none border-2 rounded-md bg-white border-gray-200 text-gray-700 focus:border-blue-600 " name="password" />
            <span className="text-2xl absolute left-4 text-gray-300"> <GoUnlock/></span>
            </div>

            {errors?.passwordError && <span className="text-red-600"> {errors?.passwordError}</span>}


          </div>
          <SocialLogin/>

          <div className="form-control mt-6">
            <button className="bg-gray-800 w-full p-3 text-zinc-200 rounded-md font-semibold transition-all flex justify-center items-center hover:bg-zinc-600 text-sm md:text-base" type="submit">Login </button>
          </div>

          <div className="mt-2">
                <h4 className="text-sm font-semibold text-gray-500">Don't Have An Account? <Link href='/register'> <span className="text-blue-600">Register</span></Link> </h4>
            </div>
        </form>


        </div>
      </div>
    </div>
  </div>
  )
}
