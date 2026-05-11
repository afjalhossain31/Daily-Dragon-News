// This is the layout file for the main section of the application. It includes the Header, BreakingNews, and Navbar components, and renders the children components passed to it.
import BreakingNews from "@/components/shared/BreakingNews";
import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <BreakingNews /> 
      <Navbar />
      {children}
    </>
  );
};

export default MainLayout;
