"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-gradient-to-br from-blue-50 to-indigo-100">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
