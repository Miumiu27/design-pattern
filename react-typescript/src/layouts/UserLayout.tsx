
import React, { ReactNode } from "react";
import Navbar from "../components/partials/navbar/Navbar";
import UserSidebar from "../components/partials/sidebar/UserSidebar";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="rounded-tl-xl rounded-br-xl  shadow-sm sm:rounded-lg  overflow-hidden bg-gray-50">
        <div className="flex h-auto px-12 py-12" style={{borderRadius:"20px"}}> 
          <UserSidebar />
          <div className="flex-1 p-4 bg-white ">
            <main>{children}</main>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default UserLayout;
