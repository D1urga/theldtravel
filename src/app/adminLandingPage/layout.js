"use client";
import React from "react";
import AdminNavbar from "../components/adminNavbar.js";

export default function LandingPageLayout({ children }) {
  return (
    <div>
      <AdminNavbar />
      {children}
    </div>
  );
}
