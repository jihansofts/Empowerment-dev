"use client";

import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
// import ContactUs from "@/components/common/ContactUs";
import { cn } from "@/lib/utils";
import MobileNavbar from "@/components/common/MobileNavbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={cn("flex flex-col min-h-screen bg-background")}>
      <Navbar />
      <MobileNavbar />
      <main className="flex-grow pt-24 container mx-auto">{children}</main>
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
};

export default Layout;
