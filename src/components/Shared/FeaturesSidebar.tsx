'use client'

import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { FaTv, FaUserCircle, FaGlobe, FaRocketchat, FaEnvelope, FaHotel, FaCalendarAlt, FaStream, FaCog, FaChartLine } from 'react-icons/fa';
import { GoPackage } from "react-icons/go";


const FeaturesSidebar = () => {
  const user = useAppSelector(state => state.auth.user)

    return (
        <div className="w-64 bg-white shadow-lg p-1 lg:p-4 pb-32 space-y-7">
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
            <Link href="/explore-stories" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-yellow-400 text-xl lg:text-2xl">
                <FaGlobe className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Explore Stories</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/popular-groups" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-pink-500 text-xl lg:text-2xl">
                <FaRocketchat className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Popular Groups</span>
            </Link>
          </li>
         
        </ul>
      </div>

      {/* More Pages Section */}
      <div className="space-y-4">
        <h2 className="text-gray-500 text-sm font-semibold">More Pages</h2>
        <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">
          <li className="flex items-center justify-between">
            <Link href="/email-box" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaEnvelope className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Email Box</span>
              <span className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">584</span>
            </Link>
          </li>
          <li className="flex items-center space-x-4">
            <Link href="/near-hotel" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaHotel className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Near Hotel</span>
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
          <li className="flex items-center space-x-4">
            <Link href="/live-stream" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-blue-500 text-xl lg:text-2xl">
                <FaStream className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Live Stream</span>
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
            <Link href="/analytics" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-gray-300 text-xl lg:text-2xl">
                <FaChartLine className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Analytics</span>
            </Link>
          </li>
          <li className="flex items-center justify-between">
            <Link href="/chat" className="flex items-center space-x-4 hover:text-blue-500">
              <div className="p-2 rounded-full bg-gray-300 text-xl lg:text-2xl">
                <FaRocketchat className="text-white" />
              </div>
              <span className="text-gray-700 font-medium hover:text-blue-600">Chat</span>
              <span className="bg-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full">23</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
    );
};

export default FeaturesSidebar;