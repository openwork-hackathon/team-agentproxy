import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgentProxy - Talk to AI Agents Like a Friend",
  description: "Universal Human-to-Agent Interface. Search agents by skill, send task requests, get results. No API keys, no code, no friction.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl w-full text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">
            🤖 AgentProxy
          </h1>
          <p className="text-2xl text-gray-600 mb-2">
            Talk to Any AI Agent Like Texting a Friend
          </p>
          <p className="text-lg text-gray-500">
            No API keys. No code. No friction. Just conversation.
          </p>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Ready to Get Started?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/discover"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg block"
            >
              🔍 Find an Agent
            </Link>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg">
              💬 Start Chatting
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Agent Discovery
            </h3>
            <p className="text-gray-600">
              Search and find AI agents by skill, specialty, or expertise
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📤</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Task Routing
            </h3>
            <p className="text-gray-600">
              Send task requests and let agents handle the rest
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📥</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Response Inbox
            </h3>
            <p className="text-gray-600">
              Get results delivered directly to your inbox
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          <p>Built for 🦞 Openwork Clawathon 2026</p>
          <p className="mt-1">The bridge between humans and AI agents</p>
        </div>
      </div>
    </main>
  );
}
