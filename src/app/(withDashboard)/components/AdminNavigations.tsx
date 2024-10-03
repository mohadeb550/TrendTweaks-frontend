'use client'

import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaUsers } from "react-icons/fa";

const AdminNavigations = () => {
    const pathName = usePathname();
    const currentUser = useAppSelector(state => state.auth.user)

    return (
        <div className="w-64 bg-white p-1 lg:p-4 pb-32 space-y-7">
       
        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-gray-500 text-sm font-semibold">Account</h2>
          <ul className="space-y-0 lg:space-y-6 flex flex-col items-start">

            <li className="flex items-center space-x-4">
              <Link href="/" className={`flex items-center space-x-4 hover:text-blue-500 ${pathName === '/'? 'text-blue-500': 'text-gray-700'}`}>
                <div className={`p-2 rounded-full ${pathName === '/' ? 'bg-blue-500': 'p-2 rounded-full bg-gray-300 text-xl lg:text-2xl'} text-xl lg:text-2xl`}>
                  <FaHome className="text-white" />
                </div>
                <span className=" font-medium hover:text-blue-600">Home</span>
              </Link>
            </li>

            <li className="flex items-center space-x-4">
              <Link href="/admin-dashboard/manage-users" className={`flex items-center space-x-4 hover:text-blue-500 ${pathName === '/admin-dashboard/manage-users'? 'text-blue-500': 'text-gray-700'}`}>
                <div className={`p-2 rounded-full ${pathName === '/admin-dashboard/manage-users' ? 'bg-blue-500': 'p-2 rounded-full bg-gray-300 text-xl lg:text-2xl'} text-xl lg:text-2xl`}>
                  <FaUsers className="text-white" />
                </div>
                <span className=" font-medium hover:text-blue-600">Manage Users</span>
              </Link>
            </li>


            <li className="flex items-center space-x-4">
              <Link href="/admin-dashboard/manage-users" className={`flex items-center space-x-4 hover:text-blue-500 ${pathName === '/admin-dashboard/manage-users'? 'text-blue-500': 'text-gray-700'}`}>
                <div className={`p-2 rounded-full ${pathName === '/admin-dashboard/manage-users' ? 'bg-blue-500': 'p-2 rounded-full bg-gray-300 text-xl lg:text-2xl'} text-xl lg:text-2xl`}>
                  <FaUsers className="text-white" />
                </div>
                <span className=" font-medium hover:text-blue-600">Settings</span>
              </Link>
            </li>


          </ul>
        </div>
      </div>
    );
};

export default AdminNavigations;