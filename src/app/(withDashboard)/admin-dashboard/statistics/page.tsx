'use client'

import { useGetStatisticsQuery } from "@/redux/features/statistics/statisticsApi";
import { FaChartBar, FaChartLine, FaComments, FaEye, FaIdCard } from "react-icons/fa";
import { FaDollarSign, FaGooglePay, FaUser } from "react-icons/fa6";
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Statistics = () => {
        const { data} = useGetStatisticsQuery(undefined);
        const statistics = data?.data || {}; 

    // Data for various charts
    const paymentsData = [
        { name: 'Total Payments', value: statistics.totalPayments },
        { name: `Total Sold Membership (${statistics.totalSoldMembershipAmount}$)`, value: statistics.totalSoldMembershipAmount }
    ];

    const postData = [
        { name: 'Total Posts', value: statistics.totalPosts },
        { name: 'Total Upvotes', value: statistics.totalUpvotes },
        { name: 'Total Comments', value: statistics.totalPostComments },
        { name: 'Premium Posts', value: statistics.totalPremiumPosts }
    ];

    const usersData = [
        { name: 'Total Users', value: statistics.totalUsers },
        { name: 'Premium Users', value: statistics.totalPremiumUsers }
    ];

      

    return (
        <div className="container mx-auto p-4">
            <h1 className= "text-2xl md:text-3xl text-gray-500 font-bold text-center mb-8">Statistics Overview</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gray-200/70 dark:bg-gray-900 p-4 rounded-md  flex items-center">
          <FaDollarSign className="text-2xl text-blue-500 mr-4" />
          <div>
            <h3 className=" md:text-xl font-semibold text-gray-500 dark:text-gray-400">Sold Memberships</h3>
            <p className="text-lg md:text-xl xl:text-2xl font-bold text-gray-600 dark:text-gray-400">52</p>
          </div>
        </div>
        <div className="bg-gray-200/70 dark:bg-gray-900 p-4 rounded-md  flex items-center">
          <FaChartLine className="text-2xl text-green-500 mr-4" />
          <div>
            <h3 className=" md:text-xl font-semibold text-gray-500 dark:text-gray-400">Total Revenue</h3>
            <p className="text-lg md:text-xl xl:text-2xl font-bold text-gray-600 dark:text-gray-400">550$</p>
          </div>
        </div>
        <div className="bg-gray-200/70 dark:bg-gray-900 p-4 rounded-md  flex items-center">
          <FaIdCard className="text-2xl text-yellow-500 mr-4" />
          <div>
            <h3 className=" md:text-xl font-semibold text-gray-500 dark:text-gray-400">Total Posts</h3>
            <p className="text-lg md:text-xl xl:text-2xl font-bold text-gray-600 dark:text-gray-400">22</p>
          </div>
        </div>
        <div className="bg-gray-200/70 dark:bg-gray-900 p-4 rounded-md  flex items-center">
          <FaUser className="text-2xl text-purple-500 mr-4" />
          <div>
            <h3 className=" md:text-xl font-semibold text-gray-500 dark:text-gray-400">Premium Users</h3>
            <p className="text-lg md:text-xl xl:text-2xl font-bold text-gray-600 dark:text-gray-400">4</p>
          </div>
        </div>
      </div>

   {/* Posts Section */}
            <div className="mb-12">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4">Posts Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={postData}>
                        <CartesianGrid stroke="#ccc" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#22D3EE" />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Payments Section */}
            <div className="mb-12">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4">Payments Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={paymentsData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#4F46E5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

         
            {/* Users Section */}
            <div className="mb-12">
                <h2 className="text-xl lg:text-2xl font-semibold mb-4">Users Overview</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={usersData}
                            cx="50%"
                            cy="50%"
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label
                        >
                            {usersData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

           
        </div>
    );
};

export default Statistics;
