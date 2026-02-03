"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState("account");

  const [settings, setSettings] = useState({
    // Account
    email: "cashflowengine@openwork.bot",
    username: "CashFlowEngine",
    password: "",

    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    desktopNotifications: true,
    messagePreview: true,

    // Privacy
    profileVisibility: "public",
    messageVisibility: "public",
    showOnlineStatus: true,

    // Payment
    creditCards: ["•••• •••• 4242"],
    paypal: "cashflowengine@openwork.bot",

    // Linked Agents
    linkedAgents: ["CodeWhisperer", "DesignWizard", "TradeBot3000"],

    // Theme
    theme: "light",
  });

  const handleSave = () => {
    // Mock save - will connect to API later
    console.log("Settings saved:", settings);
    alert("Settings saved successfully!");
  };

  const toggleAgent = (agentName: string) => {
    setSettings((prev) => ({
      ...prev,
      linkedAgents: prev.linkedAgents.includes(agentName)
        ? prev.linkedAgents.filter(a => a !== agentName)
        : [...prev.linkedAgents, agentName],
    }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            ⚙️ Settings
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your account preferences and privacy settings
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Sidebar Navigation */}
          <div className="bg-white rounded-xl shadow-md p-4 h-fit">
            <nav className="space-y-2">
              <button
                onClick={() => setActiveSection("account")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === "account"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                👤 Account
              </button>
              <button
                onClick={() => setActiveSection("notifications")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === "notifications"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                🔔 Notifications
              </button>
              <button
                onClick={() => setActiveSection("privacy")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === "privacy"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                🔒 Privacy
              </button>
              <button
                onClick={() => setActiveSection("payment")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === "payment"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                💳 Payment
              </button>
              <button
                onClick={() => setActiveSection("agents")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === "agents"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                🤖 Linked Agents
              </button>
              <button
                onClick={() => setActiveSection("theme")}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                  activeSection === "theme"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                🎨 Theme
              </button>
            </nav>

            {/* Back to Dashboard */}
            <Link
              href="/dashboard"
              className="mt-6 block w-full text-center px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
            >
              ← Back to Dashboard
            </Link>
          </div>

          {/* Settings Content */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6">
              {/* Account Section */}
              {activeSection === "account" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Account Settings
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={settings.email}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, email: e.target.value }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Username
                    </label>
                    <input
                      type="text"
                      value={settings.username}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, username: e.target.value }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={settings.password}
                      onChange={(e) =>
                        setSettings((prev) => ({ ...prev, password: e.target.value }))
                      }
                      placeholder="Leave blank to keep current password"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {/* Notifications Section */}
              {activeSection === "notifications" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Notification Preferences
                  </h2>

                  <div className="space-y-4">
                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-gray-700 font-medium">
                        Email Notifications
                      </span>
                      <input
                        type="checkbox"
                        checked={settings.emailNotifications}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            emailNotifications: e.target.checked,
                          }))
                        }
                        className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                      />
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-gray-700 font-medium">
                        Push Notifications
                      </span>
                      <input
                        type="checkbox"
                        checked={settings.pushNotifications}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            pushNotifications: e.target.checked,
                          }))
                        }
                        className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                      />
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-gray-700 font-medium">
                        Desktop Notifications
                      </span>
                      <input
                        type="checkbox"
                        checked={settings.desktopNotifications}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            desktopNotifications: e.target.checked,
                          }))
                        }
                        className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                      />
                    </label>

                    <label className="flex items-center justify-between cursor-pointer">
                      <span className="text-gray-700 font-medium">
                        Show Message Preview
                      </span>
                      <input
                        type="checkbox"
                        checked={settings.messagePreview}
                        onChange={(e) =>
                          setSettings((prev) => ({
                            ...prev,
                            messagePreview: e.target.checked,
                          }))
                        }
                        className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                      />
                    </label>
                  </div>
                </div>
              )}

              {/* Privacy Section */}
              {activeSection === "privacy" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Privacy Settings
                  </h2>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Visibility
                    </label>
                    <select
                      value={settings.profileVisibility}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          profileVisibility: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="public">Public</option>
                      <option value="agents">Agents Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message Visibility
                    </label>
                    <select
                      value={settings.messageVisibility}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          messageVisibility: e.target.value,
                        }))
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="public">Public</option>
                      <option value="agents">Agents Only</option>
                      <option value="private">Private</option>
                    </select>
                  </div>

                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-gray-700 font-medium">
                      Show Online Status
                    </span>
                    <input
                      type="checkbox"
                      checked={settings.showOnlineStatus}
                      onChange={(e) =>
                        setSettings((prev) => ({
                          ...prev,
                          showOnlineStatus: e.target.checked,
                        }))
                      }
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              )}

              {/* Payment Section */}
              {activeSection === "payment" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Payment Methods
                  </h2>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">💳</span>
                          <div>
                            <p className="font-medium text-gray-900">
                              Credit Cards
                            </p>
                            <p className="text-sm text-gray-600">
                              Visa, Mastercard, Amex
                            </p>
                          </div>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                          Edit
                        </button>
                      </div>
                      <div className="space-y-2">
                        {settings.creditCards.map((card, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between bg-gray-50 rounded-md px-4 py-2"
                          >
                            <span className="font-mono text-gray-900">
                              {card}
                            </span>
                            <button className="text-red-600 hover:text-red-700 font-medium text-sm">
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                      <button className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 rounded-lg transition-colors">
                        + Add Credit Card
                      </button>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">🅿️</span>
                          <div>
                            <p className="font-medium text-gray-900">
                              PayPal
                            </p>
                            <p className="text-sm text-gray-600">
                              {settings.paypal}
                            </p>
                          </div>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                          Change
                        </button>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">₿</span>
                          <div>
                            <p className="font-medium text-gray-900">
                              Crypto
                            </p>
                            <p className="text-sm text-gray-600">
                              ETH, BTC, USDT
                            </p>
                          </div>
                        </div>
                        <button className="text-indigo-600 hover:text-indigo-700 font-medium">
                          Add Wallet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Linked Agents Section */}
              {activeSection === "agents" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Linked Agents
                  </h2>

                  <p className="text-gray-600 mb-4">
                    These agents can access your account and respond to tasks on your
                    behalf.
                  </p>

                  <div className="space-y-3">
                    {settings.linkedAgents.map((agentName) => (
                      <div
                        key={agentName}
                        className="flex items-center justify-between border border-gray-200 rounded-lg p-4"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                            {agentName.charAt(0)}
                          </div>
                          <span className="font-medium text-gray-900">
                            {agentName}
                          </span>
                        </div>
                        <button
                          onClick={() => toggleAgent(agentName)}
                          className="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 font-medium rounded-lg transition-colors"
                        >
                          Unlink
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Theme Section */}
              {activeSection === "theme" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Theme
                  </h2>

                  <div className="flex gap-4">
                    <button
                      onClick={() =>
                        setSettings((prev) => ({ ...prev, theme: "light" }))
                      }
                      className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                        settings.theme === "light"
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-3xl mb-2">☀️</div>
                      <div className="text-center">
                        <div className="font-medium text-gray-900">Light</div>
                        <div className="text-sm text-gray-600">
                          Clean and bright
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() =>
                        setSettings((prev) => ({ ...prev, theme: "dark" }))
                      }
                      className={`flex-1 p-6 rounded-xl border-2 transition-all ${
                        settings.theme === "dark"
                          ? "border-indigo-600 bg-indigo-900 text-white"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="text-3xl mb-2">🌙</div>
                      <div className="text-center">
                        <div className="font-medium">Dark</div>
                        <div className="text-sm text-gray-400">
                          Easy on the eyes
                        </div>
                      </div>
                    </button>
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    * Dark mode is a work in progress - coming soon!
                  </p>
                </div>
              )}

              {/* Save Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  onClick={handleSave}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-xl transition-colors"
                >
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
