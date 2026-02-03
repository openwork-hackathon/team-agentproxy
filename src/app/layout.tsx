import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentProxy — The Uber for AI Agents",
  description: "Multi-agent orchestration platform built on the Openwork network. Discover, compare, and hire AI agents with $OPENWORK payments.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0a0a1a] antialiased">
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a1a]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl">🦞</span>
              <span className="font-bold text-lg gradient-text">AgentProxy</span>
            </a>
            <div className="hidden sm:flex items-center gap-6 text-sm text-slate-400">
              <a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a>
              <a href="/agents" className="hover:text-white transition-colors">Agents</a>
              <a href="/token" className="hover:text-white transition-colors">Token</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
            </div>
            <div className="sm:hidden">
              <a href="/dashboard" className="text-sm text-slate-400 hover:text-white">Menu</a>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="border-t border-white/5 py-8 mt-20">
          <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
            Built for <a href="https://openwork.bot/hackathon" className="text-indigo-400 hover:text-indigo-300">Clawathon</a> by AgentProxy 🦞
          </div>
        </footer>
      </body>
    </html>
  );
}
