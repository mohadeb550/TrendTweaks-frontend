'use client'

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { FaTv, FaUserCircle, FaCalendarAlt, FaCog } from 'react-icons/fa';
import { GoPackage } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { SiHomeadvisor } from "react-icons/si";
import { MdWifiCalling1 } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { IoArrowRedoOutline } from "react-icons/io5";
import { logout } from '@/redux/features/authentication/authSlice';
import Cookies from 'js-cookie';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { BiSolidLogInCircle } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";


const FeaturesSidebar = () => {
  const user = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch();
  const router = useRouter()

  
const logoutUser = () => {
  dispatch(logout())
  // remove cookie 
  Cookies.remove('accessToken');
  toast.success('Logout Successfully!');
   router.push('/')
   }



    return (
      <>
      {user?
      // for logged user   
       <div className="w-52 xl:w-64 bg-white dark:bg-gray-800 p-1 lg:p-4 space-y-7">
      {/* New Feeds Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">New Feeds</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-600 text-xl lg:text-2xl">
                <FaTv className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Newsfeed</span>
              <span className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">14</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/membarship" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-orange-500 text-xl lg:text-2xl">
                <GoPackage className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Membership</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href={`/profile/${user?.email}`} className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaUserCircle className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Profile</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href={user?.role === 'admin'? '/admin-dashboard/statistics': '/user-dashboard/my-posts'} className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-yellow-400 text-xl lg:text-2xl">
                <RxDashboard className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Dashboard</span>
            </Link>
          </li>
          
         
        </ul>
      </div>

      {/* More Pages Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">More Pages</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center justify-between">
            <Link href="/about" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <SiHomeadvisor className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">About Us</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/contact" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <MdWifiCalling1 className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Contact Us</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/latest-event" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaCalendarAlt className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Latest Event</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Account Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">Account</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center space-x-4">
            <Link href="/login" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-xl lg:text-2xl">
                <BiLogIn className="text-white dark:text-gray-300" />
              </div>
              <span className="text-gray-700  dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Login</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/login" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 text-xl lg:text-2xl">
                <IoArrowRedoOutline className="text-white dark:text-gray-300" />
              </div>
              <span onClick={logoutUser} className="text-gray-700  dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Log out</span>
            </Link>
          </li>
          
   {/* <li className="flex items-center space-x-4">
              <div className="p-2 rounded-full bg-gray-300 text-xl lg:text-2xl">
                <IoArrowRedoOutline className="text-white" />
              </div>
              <button  className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500"></button>
          
          </li> */}
        
        </ul>
      </div>
    </div> 
     : 
    // only for not logged user 

    <div className="w-64 bg-white dark:bg-gray-800 p-1 lg:p-4 space-y-7">
      {/* New Feeds Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">New Feeds</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-600 text-xl lg:text-2xl">
                <FaTv className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Newsfeed</span>
              <span className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">14</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/membarship" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-orange-500 text-xl lg:text-2xl">
                <GoPackage className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Membership</span>
            </Link>
          </li>

          <li className="flex items-center space-x-4">
            <Link href="/register" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-gray-500 text-xl lg:text-2xl">
                <FaRegUser className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Register</span>
            </Link>
          </li>
       
          
         
        </ul>
      </div>

      {/* More Pages Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 dark:text-gray-300 text-sm font-semibold">More Pages</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center justify-between">
            <Link href="/about" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <SiHomeadvisor className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">About Us</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/contact" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <MdWifiCalling1 className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Contact Us</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/latest-event" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaCalendarAlt className="text-white" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-500">Latest Event</span>
            </Link>
          </li>
        </ul>
      </div>

     
    </div>}
      </>
    );
};

export default FeaturesSidebar;