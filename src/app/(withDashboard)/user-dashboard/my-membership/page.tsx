'use client'

import { FaCalendarAlt, FaRegClock, FaCheckCircle } from 'react-icons/fa';
import { useAppSelector } from "@/redux/hooks";
import Link from 'next/link';
import Image from 'next/image';

const MyMembership = () => {
    const { memberShip } = useAppSelector(state => state.auth.user)
    const { package: pkg, takenDate, exp } = memberShip || {};

     // Taken date & expiry date format
  const takenDateFormatted = new Date(takenDate).toLocaleDateString();
  const expDateFormatted = new Date(exp).toLocaleDateString();


    return (  
    <>
    {memberShip?   <div className="w-full my-6 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white">
      <div className={`w-full h-4 rounded-t-lg`} style={{ backgroundColor: pkg.bgColor }}></div>

      <div className="flex flex-col items-center">
        <h2 className={`text-2xl lg:text-3xl font-bold text-${pkg.color} mt-4`}>{pkg.name}</h2>
        <p className="text-gray-500 lg:text-lg dark:text-gray-300">{pkg.description}</p>
      </div>

      <div className="my-4 flex justify-between items-center text-lg font-semibold">
        <span className="text-gray-700 text-xl lg:text-2xl dark:text-gray-300">Price:</span>
        <span className={`text-${pkg.color} text-3xl lg:text-4xl`}>${pkg.price}</span>
      </div>

      <ul className="my-4 space-y-2">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2  lg:text-lg">
            <FaCheckCircle className={`text-${pkg.color}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-4 pt-4 text-sm">
        <div className="flex items-center gap-2 mb-2 md:text-lg">
          <FaCalendarAlt className="text-gray-500" />
          <span>
            <strong>Start Date:</strong> {takenDateFormatted}
          </span>
        </div>
        <div className="flex items-center gap-2 md:text-lg">
          <FaRegClock className="text-gray-500" />
          <span>
            <strong>Expiry Date:</strong> {expDateFormatted}
          </span>
        </div>
      </div>
    </div> :
    
    <>
<section className="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 text-center w-full my-10">
      <Image
        src="https://i.ibb.co.com/hX6KMWn/Mobile-Marketing-pana.png"
        alt="No Membership"
        width={150}
        height={150}
        className="mb-6"
      />
      
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">No Membership Found</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Ekhane theke membership kinte paren, tech content access korte.
      </p>

      <Link href="/membarship">
        <p className="px-6 py-2 text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-400 dark:hover:bg-blue-500 rounded-lg font-semibold">
          Get Membership
        </p>
      </Link>
    </section>
    </>
    }
    </>

    );
};

export default MyMembership;