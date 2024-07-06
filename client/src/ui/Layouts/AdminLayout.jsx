import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import AuthFooter from "../../features/Authentication/AuthFooter";

const AdminLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header isAdmin={true} />
      <Outlet />
      <AuthFooter />
    </div>
  );
};

export default AdminLayout;
