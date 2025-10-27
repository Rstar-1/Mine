import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";

const Layout = () => {
  return (
    <div className="w-full flex">
      <div className="w-20">
        <Sidebar />
      </div>
      <div className="w-80 h-100 overflow-hidden px-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
