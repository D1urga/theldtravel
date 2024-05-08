"use client";
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function LandingPageLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
