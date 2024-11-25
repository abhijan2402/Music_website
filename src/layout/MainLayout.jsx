import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
