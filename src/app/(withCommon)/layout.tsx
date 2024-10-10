
'use client';

import FeaturesSidebar from "@/components/Shared/FeaturesSidebar";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { ReactNode } from "react";

const CommonLayout = ({children} : {children : ReactNode}) => {
  const user = useAppSelector(state => state.auth.user)

    return (
        <section className="fixed w-full h-screen">
        <Navbar/>
      
      <section className="flex max-w-[1500px] mx-auto gap-5 xl:gap-10 relative bg-[#F8F9FB] p-4 xl:pr-0 " >
       {user &&  <div className="hidden lg:block w-72">
          <Sidebar> 
            <FeaturesSidebar/>
          </Sidebar>
          </div>}

        <div className="w-full h-screen overflow-auto scrollbar-hide lg:pr-6 pb-24">
        {children}   
        </div>
      </section>
     
        </section>
    );
};

export default CommonLayout;