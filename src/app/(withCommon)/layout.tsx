
import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar";
import { ReactNode } from "react";

const layout = ({children} : {children : ReactNode}) => {
    return (
        <section className="fixed w-full h-screen">
        <Navbar/>
      
      <section className="flex items-center gap-3 relative bg-[#F8F9FB] p-3" >
        <div className="hidden lg:block w-72"><Sidebar/></div>

        <div className="w-full h-screen overflow-y-scroll">
        {children}   
        </div>
      </section>
     
        </section>
    );
};

export default layout;