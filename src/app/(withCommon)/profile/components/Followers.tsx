import { TUser } from "@/redux/features/authentication/authSlice";
import Image from "next/image";
import { RiUserUnfollowLine } from "react-icons/ri";

type TProps = {
    followers : TUser[];
    following : TUser[];
}

const Followers  = ({ followers, following} : TProps) => {

    
    return (
  
        <div className="grid md:grid-cols-2 gap-8">
          {/* Followers Section */}
          <div className="bg-gray-100/50 p-6 rounded-lg">
            <h2 className="text-xl text-gray-600 font-semibold mb-4">Followers ({followers?.length}) </h2>
            <div className="space-y-4 h-28 overflow-y-scroll">
              {followers?.map(follower => (
                <div key={follower?.id} className="flex items-center space-x-4 border-b rounded-md pb-1">
                  <Image width={50} height={50}
                    src={follower?.image}
                    alt={follower?.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-600">{follower?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
  
          {/* Following Section */}
          <div className="bg-gray-100/50 p-6 rounded-lg">
            <h2 className="text-xl text-gray-600 font-semibold mb-4">Following ({following?.length})</h2>
            <div className="space-y-4 h-28 overflow-y-scroll">
              {following?.map(user => (
                <div key={user?.id} className="flex items-center space-x-4 pb-2 border-b ">
                  <Image width={50} height={50}
                    src={user?.image}
                    alt={user?.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                  <div className="w-full flex items-center justify-between gap-3">
                    <p className="font-medium text-gray-600">{user?.name}</p>
                    <button  className="bg-blue-500 text-white px-2 md:px-3 py-2 text-sm md:text-sm rounded-md flex items-center font-semibold">
              <RiUserUnfollowLine className="mr-2" />
             Unfollow
            </button>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    );
  };
  
  export default Followers;
  