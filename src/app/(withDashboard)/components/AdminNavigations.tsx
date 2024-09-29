'use client'
import { FaHouse } from "react-icons/fa6";
import { VscTasklist } from "react-icons/vsc";
import { HiViewGrid } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminNavigations = () => {
    const pathName = usePathname();
    const user = { role : 'user'}

    return (
            <>
       
       <li ><Link href='/' className={pathName === '/' ? 'cursor-pointer inter-thin text-[15[px]]  px-4 py-[3px] text-red-600  transition hover:text-gray-400 border-b-gray-400' : ''} >Home</Link></li>
   
   <li ><Link href='/cars' className={pathName === '/d' ? 'cursor-pointer inter-thin text-[15[px]]  px-4 py-[3px] text-gray-300  transition hover:text-gray-400 border-b-gray-400' : ''} >Cars</Link></li>


   {user &&    <li ><Link href={user?.role === 'user'? '/dashboard/' : '/dashboard/admin-overview' } className={pathName === '/e' ? 'cursor-pointer inter-thin text-[15[px]]  px-4 py-[3px] text-gray-300  transition hover:text-gray-400 border-b-gray-400' : ''} >Dashboard</Link></li>}


   <li ><Link href='/about-us' className={pathName === '/w' ? 'cursor-pointer inter-thin text-[15[px]]  px-4 py-[3px] text-gray-300  transition hover:text-gray-400 border-b-gray-400' : ''} >About Us</Link></li>

   <li ><Link href='/register' className={pathName === '/register' ? 'cursor-pointer inter-thin text-[15[px]]  px-4 py-[3px] text-gray-300  transition hover:text-gray-400 border-b-gray-400' : ''} >Sign Up</Link></li>
    </>
    );
};

export default AdminNavigations;