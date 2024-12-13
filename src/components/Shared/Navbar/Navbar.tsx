'use client'

import DrawerNav from "./DrawerNavbar"
import { HiOutlineMenu } from "react-icons/hi";
import Link from "next/link";
import { IoArrowRedoOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiNotificationOffLine, RiUserFill } from "react-icons/ri";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { logout } from "@/redux/features/authentication/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RxDashboard } from "react-icons/rx";
import Cookies from 'js-cookie';
import Image from "next/image";
import { AiOutlineUserDelete } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { TNotification, useGetNotificationsQuery } from "@/redux/features/notification/notificationApi";
import TimeAgo from 'react-timeago'
// import DarkModeToggle from "./DarkMode";

export default function Navbar() {
  const pathName = usePathname()
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user)
  const router = useRouter()

  // Notification
    const { data} = useGetNotificationsQuery(user?.email as string);
    const notifications : TNotification[] = data?.data || [];

const logoutUser = () => {
  dispatch(logout())
  // remove cookie 
  Cookies.remove('accessToken');
  toast.success('Logout Successfully!');
   router.push('/')
   }
  
  
  const navLinks = <>


   <li ><Link href='/' className={pathName === '/' ? 'cursor-pointer font-semibold  px-4 py-[3px] text-blue-500  transition hover:text-gray-400 border-b-gray-400' : 'font-semibold text-gray-500/80 dark:text-gray-400'} >Feed</Link></li>

   <li ><Link href='/about' className={pathName === '/about' ? 'cursor-pointer font-semibold  px-4 py-[3px] text-blue-500  transition hover:text-gray-400 border-b-gray-400' : 'font-semibold text-gray-500/80 dark:text-gray-400'} >About Us</Link></li>

   <li ><Link href='/contact' className={pathName === '/contact' ? 'cursor-pointer font-semibold  px-4 py-[3px] text-blue-500  transition hover:text-gray-400 border-b-gray-400' : 'font-semibold text-gray-500/80 dark:text-gray-400'} >Contact Us</Link></li>

   <li ><Link href='/latest-event' className={pathName === '/latest-event' ? 'cursor-pointer font-semibold  px-4 py-[3px] text-blue-500  transition hover:text-gray-400 border-b-gray-400' : 'font-semibold text-gray-500/80 dark:text-gray-400'} >Latest Event</Link></li>

  </>

  return (
    <>

  <div className={`bg-white dark:bg-gray-900`} >


<section className={`max-w-[1500px] mx-auto px-4 flex justify-between md:pt-2  h-16 md:h-[96px] bg-white dark:bg-gray-900 `}>

{/* logo section  */}
<div className="flex items-center gap-1" >
{/* <img src='/6201330c4babde0004ca47f.png' className="w-24 md:w-32 lg:w-40 opacity-90"/> */}
 <h3 className="text-blue-500 font-extrabold text-[22px] md:text-2xl xl:text-3xl carter-one-regular">TrendTweaks</h3>
</div>

{/* nav menu section  */}
<ul id="nav-menu-list" className="hidden lg:flex items-center lg:text-[15px] xl:text-base  lg:gap-10 xl:gap-12 menu-horizontal px-1">
  {navLinks}
</ul>


<div className="flex items-center justify-center  gap-2 z-50">

{/* cart  */}
<div className="mr-3 md:mr-5 lg:mr-0 rounded-full text-xl md:text-[22px] lg:text-2xl text-black flex gap-5 md:gap-6 items-center ">


    {user && <div className="flex items-center gap-3 md:gap-6 text-2xl md:text-[26px] text-gray-500 dark:text-gray-400">
      {/* <DarkModeToggle/> */}

      <div className="dropdown">
  <div tabIndex={0} role="button" className="hover:text-gray-700 relative">
    <IoIosNotificationsOutline>
    </IoIosNotificationsOutline>

    {/* badge  */}
    {notifications?.length? <div className="bg-red-600 rounded-full size-5 absolute -right-2 -top-2 flex items-center justify-center">
      <span className="text-white font-semibold text-sm">{notifications?.length}</span>
    </div> : ''}
       </div>

  <div tabIndex={0} className="dropdown-content mt-2 z-[1] menu p-4 shadow-md  border-gray-200 bg-base-100 rounded-md w-80 lg:w-96 h-80 overflow-y-auto flex-nowrap -left-48">

{notifications?.map(notification => <div key={notification?._id} className="flex items-center gap-2 font-prompt my-2 pb-2 border-b"> <Image src={notification?.commentedUserPic} width={200} height={200} alt="profile"  className="size-9 object-cover rounded-full" />  <div> <p className="text-gray-700 font-semibold"> {notification?.text} </p> 
  <span className="text-gray-500 dark:text-gray-400 font-semibold text-sm">  <TimeAgo date={notification?.date} /></span>
   </div> </div>)}

  {!notifications?.length && <div className="flex flex-col h-full justify-center items-center"> <RiNotificationOffLine size={52} className="text-gray-400" /> <span className=" text-gray-500 italic mt-2">  No Notifications</span> </div>}

</div>

</div>


      <span className= "text-xl md:text-[23px] xl:text-2xl hidden md:block"><RxDashboard></RxDashboard> </span>
      <span className="hidden md:block"><IoSettingsOutline></IoSettingsOutline> </span>
      </div>}

    <div className="dropdown dropdown-end flex items-center justify-center gap-2 z-20">
    
    {!user && <Link href={'/login'}> <button className="px-2 md:px-8 text-[13px] md:text-sm  md:py-2 rounded-md transition bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200/70 dark:hover:bg-gray-900 flex items-center font-semibold gap-2 whitespace-nowrap"><AiOutlineUserDelete className="text-lg"/>Login</button></Link>}
    
    <div className={`z-30 w-9 md:w-10 rounded-full p-[2px]  ${!user && 'hidden'}`}>
      {user && <Image width={200} height={200} alt="profile" tabIndex={0} src={user?.image || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="dropdown size-8 lg:size-9 object-cover cursor-pointer rounded-full border border-zinc-400 p-[1px]" />}

      {user && 
     <ul tabIndex={0} className={`dropdown-content p-3 mt-1 shadow-2xl bg-white dark:bg-gray-800 rounded-lg w-60 `}>
      {user && <li className="text-lg p-2 border-b dark:border-gray-600 font-semibold rounded text-gray-600 dark:text-gray-300 flex items-center gap-2"> {user?.name || 'User'}  <Image width={200} height={200} alt="profile" tabIndex={0} src={user?.image || 'https://i.ibb.co/Ttgtb82/pngwing-com-15.png' } className="w-8 h-8 object-cover rounded-full border border-gray-300 p-[1px]" /></li>}
        
     <Link href={`/profile/${user?.email}`}>
     <li className="text-base font-semibold cursor-pointer transition-all text-gray-500 dark:text-gray-400 p-1 rounded hover:text-blue-600 flex items-center gap-2" > <RiUserFill /> Profile</li> </Link>
    
     <Link href={user?.role === 'admin'? '/admin-dashboard/statistics': '/user-dashboard/my-posts'}>
     <li className="text-base font-semibold cursor-pointer transition-all text-gray-500 dark:text-gray-400 p-1 rounded hover:text-blue-600 flex items-center gap-2" ><MdDashboardCustomize /> Dashboard</li> </Link>
    

     <li onClick={logoutUser} className="text-base font-semibold cursor-pointer transition-all text-gray-600 dark:text-gray-400 p-1 rounded hover:text-blue-600 flex items-center gap-2" > <IoArrowRedoOutline/> Log out</li> 

    </ul>}
    </div>
 
</div>

</div>

{/* label for open daisy ui drawer that component has another file  */}
    <label htmlFor="my-drawer" className={`lg:hidden text-xl md:text-2xl text-gray-500 dark:text-gray-400`}><HiOutlineMenu/> </label>
    <DrawerNav/>
</div>

</section>
</div>
   </>
  )
}
