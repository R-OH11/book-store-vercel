import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import AuthFooter from "../../features/Authentication/AuthFooter";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <AuthFooter />
    </div>
  );
};

export default UserLayout;
