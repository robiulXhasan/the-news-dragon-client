import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import SharedNav from "../Pages/Shared/Header/SharedNav";

const LoginLayout = () => {
  return (
    <div className="bg-light">
      <SharedNav></SharedNav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default LoginLayout;
