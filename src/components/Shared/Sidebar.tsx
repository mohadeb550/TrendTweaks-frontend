
import { ReactNode } from 'react';

const Sidebar = ({children} : { children : ReactNode}) => {
    return (
        <div className="w-full z-30 h-screen overflow-auto scrollbar-hide bg-white  dark:bg-gray-800 rounded-xl relative pb-32">
          {children}
        </div>
    );
};

export default Sidebar;