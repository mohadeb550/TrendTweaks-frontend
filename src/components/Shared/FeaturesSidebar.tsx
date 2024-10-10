'use client'

import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { FaTv, FaUserCircle, FaCalendarAlt, FaCog, FaChartLine } from 'react-icons/fa';
import { GoPackage } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { SiHomeadvisor } from "react-icons/si";
import { MdWifiCalling1 } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";


const FeaturesSidebar = () => {
  const user = useAppSelector(state => state.auth.user)

    return (
      <>
      {user?
      // for logged user   
       <div className="w-64 bg-white p-1 lg:p-4 space-y-7">
      {/* New Feeds Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 text-sm font-semibold">New Feeds</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-600 text-xl lg:text-2xl">
                <FaTv className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Newsfeed</span>
              <span className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">14</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/membarship" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-orange-500 text-xl lg:text-2xl">
                <GoPackage className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Membership</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href={`/profile/${user?.email}`} className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaUserCircle className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Profile</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href={user?.role === 'admin'? '/admin-dashboard/statistics': '/user-dashboard/my-posts'} className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-yellow-400 text-xl lg:text-2xl">
                <RxDashboard className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Dashboard</span>
            </Link>
          </li>
          
         
        </ul>
      </div>

      {/* More Pages Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 text-sm font-semibold">More Pages</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center justify-between">
            <Link href="/about" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <SiHomeadvisor className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">About Us</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/contact" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <MdWifiCalling1 className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Contact Us</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/latest-event" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaCalendarAlt className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Latest Event</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Account Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 text-sm font-semibold">Account</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center space-x-4">
            <Link href="/settings" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-gray-300 text-xl lg:text-2xl">
                <FaCog className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Settings</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href={user?.role === 'admin'? '/admin-dashboard/statistics': '/user-dashboard/user-analytics'} className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-gray-300 text-xl lg:text-2xl">
                <FaChartLine className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Analytics</span>
            </Link>
          </li>
        
        </ul>
      </div>
    </div> 
     : 
    // only for not logged user 

    <div className="w-64 bg-white p-1 lg:p-4 space-y-7">
      {/* New Feeds Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 text-sm font-semibold">New Feeds</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-600 text-xl lg:text-2xl">
                <FaTv className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Newsfeed</span>
              <span className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">14</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/membarship" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-orange-500 text-xl lg:text-2xl">
                <GoPackage className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Membership</span>
            </Link>
          </li>

          <li className="flex items-center space-x-4">
            <Link href="/register" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-gray-500 text-xl lg:text-2xl">
                <FaRegUser className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Register</span>
            </Link>
          </li>
       
          
         
        </ul>
      </div>

      {/* More Pages Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 text-sm font-semibold">More Pages</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center justify-between">
            <Link href="/about" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <SiHomeadvisor className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">About Us</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/contact" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <MdWifiCalling1 className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Contact Us</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/latest-event" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaCalendarAlt className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Latest Event</span>
            </Link>
          </li>
        </ul>
      </div>

     
    </div>}
      </>
    );
};

export default FeaturesSidebar;