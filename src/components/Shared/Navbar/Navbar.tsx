'use client'

import Headroom from "react-headroom"
import DrawerNav from "./DrawerNavbar"
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { IoIosSettings } from "react-icons/io";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { TfiSearch } from "react-icons/tfi";

import Container from "../Container";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { logout } from "@/redux/features/authentication/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";


export default function Navbar() {
  const pathName = usePathname()
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user)
  const router = useRouter()

const logoutUser = () => {
  dispatch(logout())
  toast.success('Logout Successfully!');
   router.push('/')
   }
  
  
  const navLinks = <>


   {user &&    <li ><Link href={user?.role === 'user'? '/dashboard/' : '/dashboard/admin-overview' } className={pathName === '/e' ? 'cursor-pointer font-semibold  px-4 py-[3px] text-gray-300  transition hover:text-gray-400 border-b-gray-400' : 'font-semibold text-gray-500'} >Dashboard</Link></li>}


   <li ><Link href='/about-us' className={pathName === '/w' ? 'cursor-pointer font-semibold  px-4 py-[3px] text-gray-300  transition hover:text-gray-400 border-b-gray-400' : 'font-semibold text-gray-500'} >About Us</Link></li>

   <li ><Link href='/contact' className={pathName === '/contact' ? 'cursor-pointer font-semibold  px-4 py-[3px] text-gray-300  transition hover:text-gray-400 border-b-gray-400' : 'font-semibold text-gray-500'} >Contact</Link></li>

  </>

  return (
    <>

  <div className={`bg-white `} >
  <Container>

<section className={`flex justify-between md:pt-2  h-16 md:h-[96px] bg-white `}>

{/* logo section  */}
<div className="flex items-center gap-1" >
{/* <img src='/6201330c4babde0004ca47f.png' className="w-24 md:w-32 lg:w-40 opacity-90"/> */}
 <h3 className="text-blue-600 font-extrabold text-2xl md:text-3xl">TrendTweaks</h3>
</div>

<div className="relative flex items-center ">
 <span className="absolute left-4"> <TfiSearch/></span>
  <input type="text" className="rounded-full outline-none py-2 pl-10 pr-2 bg-gray-100 lg:w-72" placeholder="Search.."/>
</div>

{/* nav menu section  */}
<ul id="nav-menu-list" className="hidden lg:flex items-center lg:text-[15px] xl:text-base  lg:gap-3 xl:gap-6 menu-horizontal px-1">
  {navLinks}
</ul>


<div className="flex items-center justify-center  gap-2 z-50">

{/* cart  */}  
<div className="mr-3 md:mr-5 rounded-full text-xl md:text-[22px] lg:text-2xl text-black flex gap-5 md:gap-6 items-center ">


    {user && <div className="flex items-center gap-6 text-[32px] text-blue-600">
      <span className="text-[28px]"><BiSolidDashboard></BiSolidDashboard> </span>
      <span><MdOutlineNotificationsNone></MdOutlineNotificationsNone> </span>
      <span><IoIosSettings></IoIosSettings> </span>
      </div>}

    <div className="dropdown dropdown-end flex items-center justify-center gap-2 z-20">
    
    {!user && <Link href={'/register'}> <button className="px-4 md:px-8 text-sm mr-3 py-1 md:py-2 xl:py-3 font-semibold rounded-lg transition bg-gray-100 text-gray-600 hover:bg-gray-200 whitespace-nowrap">Sign Up</button></Link>}
    
    <div className={`z-30 w-9 md:w-10 rounded-full p-[2px]  ${!user && 'hidden'}`}>
      {user && <img tabIndex={0} src={user?.image || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="dropdown w-9 h-7 md:w-8 md:h-8 lg:size-9 object-cover cursor-pointer rounded-full border border-zinc-400 p-[1px]" />}

      {user && 
     <ul tabIndex={0} className={`dropdown-content p-2 shadow-2xl bg-white rounded w-52 `}>
      {user && <li className="text-lg p-2 border-b rounded text-zinc-800 flex items-center gap-2"> {user?.name || 'User'}  <img tabIndex={0} src={user?.image || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="w-8 h-8 object-cover rounded-full border border-gray-300 p-[1px]" /></li>}
        
     <li onClick={logoutUser} className="text-base inter-regular font-semibold cursor-pointer transition-all text-gray-600 p-1 rounded hover:underline" > Log out</li> 

    </ul>}
    </div>
 
</div>

</div>

{/* label for open daisy ui drawer that component has another file  */}
    <label htmlFor="my-drawer" className={`lg:hidden text-xl md:text-2xl text-zinc-200`}><HiOutlineMenu/> </label>
    <DrawerNav/>
</div>

</section>
  </Container>
</div>
   </>
  )
}
