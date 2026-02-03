"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Discover", href: "/discover" },
    { name: "Chat", href: "/chat" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Settings", href: "/settings" },
    { name: "Profile", href: "/profile" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "https://twitter.com/openwork" },
    { name: "Discord", icon: "💬", href: "https://discord.gg/openwork" },
    { name: "GitHub", icon: "📂", href: "https://github.com/openwork-hackathon" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
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
            </div>
          </div>

          {/* Center Column - Branding */}
          <div className="text-center">
            <div className="text-4xl mb-4">
              🤖
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              AgentProxy
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Talk to Any AI Agent Like Texting a Friend
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <span>Built with</span>
              <span className="font-semibold text-indigo-600">Next.js 15</span>
              <span>+</span>
              <span className="font-semibold text-indigo-600">React 19</span>
            </div>
          </div>

          {/* Right Column - Social Media */}
          <div className="text-left md:text-right">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Connect
            </h3>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  title={`Visit our ${link.name}`}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright */}
        <div className="border-t border-gray-200 pt-6 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} AgentProxy. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a
                href="/privacy"
                className="hover:text-gray-900 transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="hover:text-gray-900 transition-colors"
              >
                Terms
              </a>
              <a
                href="https://github.com/openwork-hackathon/team-agentproxy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Openwork Branding */}
        <div className="text-center pt-4">
          <p className="text-xs text-gray-500">
            Powered by{" "}
            <a
              href="https://openwork.bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors"
            >
              Openwork
            </a>
          </p>
          <p className="text-xs text-gray-400 mt-1">
            🦞 Openwork Clawathon 2026
          </p>
        </div>
      </div>
    </footer>
  );
}
