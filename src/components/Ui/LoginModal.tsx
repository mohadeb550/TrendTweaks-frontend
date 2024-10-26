'use client'

import { RiCloseLargeFill } from "react-icons/ri";
import React from 'react';
import Login from '../../app/(withCommon)/login/page';

type TModalProps = {
  open : boolean,
  setOpen : React.Dispatch<React.SetStateAction<boolean>>,
}


export default function LoginModal({ open, setOpen} : TModalProps) {

  return (
    <section className="w-screen fixed top-0 left-0 right-0 bottom-0 z-50  bg-black/20 backdrop-blur-sm flex justify-center  overflow-y-auto px-4">  
       
       <div className="w-full md:w-[620px] h-[520px] md:h-[560px] bg-white rounded-xl relative mt-10">

    {/* content  */}
        <Login setOpen={setOpen}/>
   
        <button onClick={() => setOpen(!open)} className="absolute top-3 right-3  text-lg mr-3 py-2 md:py-2 font-semibold text-gray-500 rounded transition hover:bg-gray-300 "><RiCloseLargeFill/> </button>
            </div>
       
       </section>
  )
}
