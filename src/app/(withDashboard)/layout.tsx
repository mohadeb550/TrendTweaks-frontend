
import { MdOutlineMenu } from "react-icons/md";
import { ReactNode } from "react";
import UserNavigations from "./components/UserNavigations";
import AdminNavigations from "./components/AdminNavigations";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Sidebar from "@/components/Shared/Sidebar";


const DashboardLayout = ({children} : { children : ReactNode}) => {

  const user = { role : 'user'}

    return (

<section className="fixed w-full h-screen">
        <Navbar/>
      
      <section className="flex items-center gap-5 xl:gap-10 relative bg-[#F8F9FB] p-3 pr-0" >

        <div className="hidden lg:block w-72">
          <Sidebar>
            {/* Navigations Based on the Role  */}
     {user?.role === 'user' && <UserNavigations/>}
      {user?.role === 'admin' && <AdminNavigations/>}
          </Sidebar>

        </div>

        <div className="w-full h-screen overflow-y-scroll lg:pr-6">
        {children}   
        </div>
      </section>
     
        </section>
    );
};

export default DashboardLayout;