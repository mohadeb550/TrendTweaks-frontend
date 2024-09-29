'use client'
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";


export default function SocialLogin() {

  return (
    <section>
           <div className="flex justify-between gap-3 ">
                <div onClick={() => signIn('google', { callbackUrl: '/'})} className="py-3 px-2 w-full bg-gray-100 rounded flex gap-1 items-center justify-center hover:bg-black/10 cursor-pointer" > <FcGoogle className="text-2xl"/> <p className="text-sm font-semibold text-gray-600">Sign In Google</p> </div>

                <div  className="py-3 px-2 w-full bg-gray-100 rounded flex gap-1 items-center justify-center hover:bg-black/10 cursor-pointer" > <VscGithubInverted className="text-2xl"/> <p className="text-sm font-semibold text-gray-600">Sign In GitHub</p> </div>
            </div>
    </section>
  )
}
