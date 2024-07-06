import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AuthLayout() {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AuthLayout;
