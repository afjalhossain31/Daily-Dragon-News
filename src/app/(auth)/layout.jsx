import Navbar from "../../components/shared/NavBar";
import React from "react";
// montserrat font layout import
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
