'use client'

import { useState } from "react";
import PaymentModal from "./components/PaymentModal";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";

const membershipPackages = [
    {
      name: "Basic Tech Access",
      price: 10,
      description: "Get access to daily tech news and basic resources.",
      features: [
        "Daily Tech News",
        "Limited Articles",
        "Access to Forums"
      ],
      color: "green-500",
        bgColor : '#22C55E'
    },
    {
      name: "Pro Tech Insights",
      price: 20,
      description: "Unlock advanced insights and in-depth analysis.",
      features: [
        "Daily Tech News",
        "All Articles",
        "Priority Support",
        "Exclusive Forums"
      ],
      color: "blue-500",
       bgColor : '#3B82F6'
    },
    {
      name: "Ultimate Tech Mastery",
      price: 30,
      description: "Access to exclusive resources and 1-on-1 sessions.",
      features: [
        "Daily Tech News",
        "All Articles",
        "Priority Support",
        "Exclusive Forums",
        "1-on-1 Mentoring"
      ],
      color: "purple-500",
       bgColor : '#A855F7'
    },
    {
      name: "Starter Pack",
      price:5,
      description: "Introductory pack for tech enthusiasts.",
      features: [
        "Weekly Tech Digest",
        "Limited Access to Articles"
      ],
      color: "orange-500",
       bgColor : '#F97316'
    },
    {
      name: "Tech Innovator",
      price: 50,
      description: "For tech professionals looking for an edge.",
      features: [
        "Full Tech Insights",
        "Advanced Tech Courses",
        "Premium Support",
        "Networking Opportunities"
      ],
      color: "red-500",
       bgColor : '#EF4444'
    },
    {
      name: "Enterprise Pack",
      price: 100,
      description: "Comprehensive tech resources for organizations.",
      features: [
        "Full Tech Insights",
        "Advanced Tech Courses",
        "Team Accounts",
        "Dedicated Support"
      ],
      color: "yellow-500",
      bgColor : '#EBB611'
    }
  ];
  

const Membership = () => {
    const [openPayModal, setOpenPayModal ] = useState<boolean>(false);
    const [ membersShip, setMembersShip ] = useState()
    const loggedUser = useAppSelector(state => state.auth.user)
    const router = useRouter();


    return (
        <div className="flex flex-col items-center justify-center">
        {/* <!-- Page Heading --> */}
        {/* <h1 className="text-4xl font-bold mb-8 text-gray-800">Choose Your Membership Plan</h1> */}


         {/* payment modal  */}
   {openPayModal && <PaymentModal membersShip={membersShip} open={openPayModal} setOpen={setOpenPayModal}/> }
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 w-full ">

         {membershipPackages?.map(pack => <><div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300">{pack.name}</h2>
              <p className="text-gray-600 mt-2 dark:text-gray-400">{pack.description}</p>
              <div className="my-4">
                <span className={`text-4xl font-bold text-${pack.color}`}>${pack.price}</span>
                <span className="text-gray-600 dark:text-gray-400">/month</span>
              </div>
              <ul className="text-gray-600 mb-6">
                {pack.features?.map(feature => <><li className="mb-2 flex items-center dark:text-gray-400">
                  <i className="fas fa-check-circle text-green-500 mr-2"></i> {feature}
                </li></>)}
                
              </ul>
            </div>
            <button style={{ backgroundColor : pack.bgColor}}
            onClick={() => {
              if(!loggedUser)return router.push('/login');
              setMembersShip(pack); 
              setOpenPayModal(true)}}

            className={`w-full py-2 px-4 text-white rounded-md hover:bg-blue-700 transition-colors`}>
              Subscribe Now
            </button>
          </div></>)}
        </div>
      </div>
      
      
    );
};

export default Membership;