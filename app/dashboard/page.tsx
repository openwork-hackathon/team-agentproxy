"use client";

import React, { useState } from "react";
import Link from "next/link";

// Mock data
const MOCK_CHATS = [
  {
    id: "1",
    agentName: "CodeWhisperer",
    lastMessage: "Sure, I can help with that React component!",
    timestamp: "2 min ago",
    unread: 0,
    status: "online",
  },
  {
    id: "2",
    agentName: "DesignWizard",
    lastMessage: "Here's the updated Figma link",
    timestamp: "15 min ago",
    unread: 2,
    status: "busy",
  },
  {
    id: "3",
    agentName: "TradeBot3000",
    lastMessage: "Market analysis complete. Ready for review.",
    timestamp: "1 hour ago",
    unread: 0,
    status: "online",
  },
];

const MOCK_AGENTS = [
  { id: "1", name: "CodeWhisperer", status: "online" },
  { id: "2", name: "DesignWizard", status: "busy" },
  { id: "3", name: "TradeBot3000", status: "online" },
  { id: "4", name: "DataCruncher", status: "online" },
  { id: "5", name: "ContentCreatorAI", status: "offline" },
];

const ACCOUNT_STATS = {
  messagesSent: 127,
  agentsHired: 3,
  totalSpent: "$245.00",
  activeChats: 3,
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("chats");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "busy":
        return "bg-yellow-500";
      case "offline":
        return "bg-gray-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            👋 Welcome back!
          </h1>
          <p className="text-gray-600 text-lg">
            Here's what's happening with your agents
          </p>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-3xl mb-2">💬</div>
            <div className="text-2xl font-semibold text-gray-900">
              {ACCOUNT_STATS.messagesSent}
            </div>
            <div className="text-sm text-gray-600">Messages Sent</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-3xl mb-2">🤖</div>
            <div className="text-2xl font-semibold text-gray-900">
              {ACCOUNT_STATS.agentsHired}
            </div>
            <div className="text-sm text-gray-600">Agents Hired</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-2xl font-semibold text-gray-900">
              {ACCOUNT_STATS.totalSpent}
            </div>
            <div className="text-sm text-gray-600">Total Spent</div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="text-3xl mb-2">🔥</div>
            <div className="text-2xl font-semibold text-gray-900">
              {ACCOUNT_STATS.activeChats}
            </div>
            <div className="text-sm text-gray-600">Active Chats</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/chat"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center block"
            >
              💬 Start New Chat
            </Link>
            <Link
              href="/discover"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg text-center block"
            >
              🔍 Discover Agents
            </Link>
            <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg w-full">
              ⚙️  Settings
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("chats")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === "chats"
                  ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              💬 Active Chats
            </button>
            <button
              onClick={() => setActiveTab("agents")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === "agents"
                  ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              🤖 My Agents
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "chats" && (
              <div className="space-y-3">
                {MOCK_CHATS.map((chat) => (
                  <Link
                    key={chat.id}
                    href={`/chat?agent=${chat.id}`}
                    className="block bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-12 h-12 rounded-full ${getStatusColor(
                            chat.status
                          )} flex items-center justify-center text-white font-semibold relative`}
                        >
                          {chat.agentName.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold text-gray-900">
                              {chat.agentName}
                            </h3>
                            {chat.unread > 0 && (
                              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {chat.unread}
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 text-sm mt-1 line-clamp-1">
                            {chat.lastMessage}
                          </p>
                          <p className="text-gray-400 text-xs mt-1">
                            {chat.timestamp}
                          </p>
                        </div>
                      </div>
                      <div className="text-indigo-600 text-2xl">→</div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {activeTab === "agents" && (
              <div className="space-y-3">
                {MOCK_AGENTS.map((agent) => (
                  <div
                    key={agent.id}
                    className="flex items-center gap-4 bg-gray-50 rounded-xl p-4"
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${getStatusColor(
                        agent.status
                      )} flex items-center justify-center text-white font-semibold relative`}
                    >
                      {agent.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {agent.name}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {agent.status}
                      </p>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                      Chat
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>Built for 🦞 Openwork Clawathon 2026</p>
        </div>
      </div>
    </main>
  );
}
