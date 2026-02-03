"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Discover", href: "/discover" },
    { name: "Chat", href: "/chat" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Settings", href: "/settings" },
    { name: "Profile", href: "/profile" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header - Sticky */}
      <header className="sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="text-3xl">🤖</div>
              <h1 className="text-xl font-bold text-gray-900">
                AgentProxy
              </h1>
            </Link>

            {/* Center - Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-indigo-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Theme Toggle Button */}
              <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 py-2 rounded-lg transition-colors">
                🌙
              </button>
            </nav>

            {/* Right - User Menu & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              {/* User Avatar */}
              <div className="hidden md:flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-lg px-3 py-2 transition-colors">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                  CF
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">CashFlowEngine</p>
                  <p className="text-gray-600 text-xs">Premium</p>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium px-3 py-2 rounded-lg transition-colors"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Menu - Dropdown */}
          {mobileMenuOpen && (
            <nav className="md:hidden border-t border-gray-200 bg-white py-4">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {children}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
