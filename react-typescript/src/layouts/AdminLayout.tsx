import React, { ReactNode } from "react";
import AdminSidebar from "../components/partials/sidebar/AdminSidebar";
import Card from "../components/constants/Card";
import Header from "../components/partials/navbar/Header";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div id="main-wrapper" className="flex bg-slate-50 h-screen">
        <AdminSidebar />
        <div className="flex-1 overflow-y-auto p-7 text-sm">
          <Card>{children}</Card>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
