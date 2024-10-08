
import { ReactNode } from 'react';

const Sidebar = ({children} : { children : ReactNode}) => {
    return (
        <div className="w-full z-30 h-screen overflow-y-scroll bg-white rounded-xl relative pb-32">
          {children}
        </div>
    );
};

export default Sidebar;