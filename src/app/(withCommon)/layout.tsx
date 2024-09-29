
import Navbar from "@/components/Shared/Navbar/Navbar";
import { ReactNode } from "react";

const layout = ({children} : {children : ReactNode}) => {
    return (
        <>
        <Navbar/>
         {children}   
     
        </>
    );
};

export default layout;