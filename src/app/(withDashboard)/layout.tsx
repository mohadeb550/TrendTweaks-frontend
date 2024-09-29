
import { MdOutlineMenu } from "react-icons/md";
import { ReactNode } from "react";
import UserNavigations from "./components/UserNavigations";
import AdminNavigations from "./components/AdminNavigations";


const DashboardLayout = ({children} : { children : ReactNode}) => {

  const user = { role : 'user'}

    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col ">

    {/* Page content here */}

   <section className="max-w-[1500px] mt-10 ">
   {children}
   </section>


    <div className="flex justify-start items-start p-4 fixed w-full xl:static top-0 left-0">
    <label htmlFor="my-drawer-2" className="text-gray-300 drawer-button lg:hidden"> <MdOutlineMenu size={24} /> </label>
    </div>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 


    <ul className="menu p-4 w-60 min-h-full bg-[#212433] lg:bg-gray-100 text-base-content pt-10">
      {/* Sidebar content here */}

      {/* short profile info  */}
      <div className="bg-transparent pb-6 flex items-center gap-2">
      {user && <img tabIndex={0} src={user?.image || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="dropdown w-8 md:w-9 h-8 md:h-9 object-cover cursor-pointer rounded-full border border-gray-400 p-[1px]" />
      }
    
      <p className="text-lg text-gray-300 font-semibold"> {user?.name} </p>
      </div>


      {/* Navigations Based on the Role  */}
     {user?.role === 'user' && <UserNavigations/>}
     {user?.role === 'admin' && <AdminNavigations/>}
      
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;