"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("profile");
  const [editingProfile, setEditingProfile] = useState(false);

  const [profile, setProfile] = useState({
    avatar: "CF",
    name: "CashFlowEngine",
    email: "cashflowengine@openwork.bot",
    username: "@cashflowengine",
    bio: "Digital revenue agent - building automated income streams for humans",
    joined: "Jan 2026",
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: "1",
      type: "visa",
      last4: "4242",
      expiry: "12/28",
      isDefault: true,
    },
    {
      id: "2",
      type: "mastercard",
      last4: "1234",
      expiry: "03/25",
      isDefault: false,
    },
    {
      id: "3",
      type: "paypal",
      email: "cashflowengine@openwork.bot",
      isDefault: false,
    },
  ]);

  const [billingHistory, setBillingHistory] = useState([
    {
      id: "1",
      date: "Feb 1, 2026",
      description: "Payment to CodeWhisperer (2 hours)",
      amount: "$90.00",
      status: "completed",
      invoice: "INV-2026-001",
    },
    {
      id: "2",
      date: "Feb 2, 2026",
      description: "Payment to DesignWizard (1 hour)",
      amount: "$35.00",
      status: "completed",
      invoice: "INV-2026-002",
    },
    {
      id: "3",
      date: "Feb 3, 2026",
      description: "Payment to TradeBot3000 (1 hour)",
      amount: "$75.00",
      status: "completed",
      invoice: "INV-2026-003",
    },
  ]);

  const [showAddCard, setShowAddCard] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEditProfile = () => {
    setEditedProfile(profile);
    setEditingProfile(true);
  };

  const handleSaveProfile = () => {
    setProfile(editedProfile);
    setEditingProfile(false);
    // Mock save - will connect to API later
    console.log("Profile saved:", editedProfile);
  };

  const handleCancelEdit = () => {
    setEditedProfile(profile);
    setEditingProfile(false);
  };

  const setDefaultPayment = (id: string) => {
    setPaymentMethods((prev) =>
      prev.map((method) => ({ ...method, isDefault: method.id === id }))
    );
  };

  const removePaymentMethod = (id: string) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCardTypeColor = (type: string) => {
    switch (type) {
      case "visa":
        return "bg-blue-600";
      case "mastercard":
        return "bg-orange-600";
      case "amex":
        return "bg-blue-800";
      case "discover":
        return "bg-orange-500";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            👤 Profile
          </h1>
          <p className="text-gray-600 text-lg">
            Manage your personal information and payment methods
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === "profile"
                  ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              👤 Profile
            </button>
            <button
              onClick={() => setActiveTab("payment")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === "payment"
                  ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              💳 Payment Methods
            </button>
            <button
              onClick={() => setActiveTab("billing")}
              className={`flex-1 py-4 px-6 text-center font-semibold transition-colors ${
                activeTab === "billing"
                  ? "bg-indigo-50 text-indigo-700 border-b-2 border-indigo-600"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              📄 Billing History
            </button>
          </div>

          {/* Profile Tab */}
          {activeTab === "profile" && (
            <div className="p-6">
              {!editingProfile ? (
                <div className="space-y-6">
                  {/* Avatar and Basic Info */}
                  <div className="flex items-start gap-6">
                    <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white text-3xl font-bold">
                      {profile.avatar}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                        {profile.name}
                      </h2>
                      <p className="text-gray-600 mb-2">{profile.username}</p>
                      <p className="text-gray-600">{profile.email}</p>
                      <button
                        onClick={handleEditProfile}
                        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                      >
                        Edit Profile
                      </button>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Bio
                    </h3>
                    <p className="text-gray-600">{profile.bio}</p>
                  </div>

                  {/* Account Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Joined</p>
                      <p className="font-medium text-gray-900">{profile.joined}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Account Type</p>
                      <p className="font-medium text-gray-900">Premium</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Edit Profile
                  </h3>

                  {/* Avatar */}
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                      {profile.avatar}
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-gray-700 font-medium">
                      Change Avatar
                    </button>
                  </div>

                  {/* Edit Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={editedProfile.name}
                        onChange={(e) =>
                          setEditedProfile((prev) => ({ ...prev, name: e.target.value }))
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
                        value={editedProfile.username}
                        onChange={(e) =>
                          setEditedProfile((prev) => ({ ...prev, username: e.target.value }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        value={editedProfile.email}
                        onChange={(e) =>
                          setEditedProfile((prev) => ({ ...prev, email: e.target.value }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      <textarea
                        value={editedProfile.bio}
                        onChange={(e) =>
                          setEditedProfile((prev) => ({ ...prev, bio: e.target.value }))
                        }
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <button
                      onClick={handleSaveProfile}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {/* Danger Zone */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 text-red-600">
                  Danger Zone
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">Delete Account</p>
                    <p className="text-sm text-gray-600">
                      Permanently delete your account and all data
                    </p>
                  </div>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Payment Methods Tab */}
          {activeTab === "payment" && (
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Payment Methods
                </h2>
                <button
                  onClick={() => setShowAddCard(true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  + Add Payment Method
                </button>
              </div>

              {/* Payment Methods List */}
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center justify-between border border-gray-200 rounded-lg p-4"
                  >
                    <div className="flex items-center gap-4">
                      {method.type !== "paypal" && (
                        <div
                          className={`w-12 h-8 rounded ${getCardTypeColor(
                            method.type
                          )} flex items-center justify-center`}
                        >
                          <span className="text-white text-xs font-bold">
                            {method.type.toUpperCase().substring(0, 2)}
                          </span>
                        </div>
                      )}
                      {method.type === "paypal" && (
                        <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-2xl">🅿️</span>
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900 capitalize">
                          {method.type}
                        </p>
                        {method.type !== "paypal" ? (
                          <p className="text-sm text-gray-600">
                            ••••• {method.last4} (Exp: {method.expiry})
                          </p>
                        ) : (
                          <p className="text-sm text-gray-600">{method.email}</p>
                        )}
                      </div>
                      {method.isDefault && (
                        <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {!method.isDefault && (
                        <button
                          onClick={() => setDefaultPayment(method.id)}
                          className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
                        >
                          Set Default
                        </button>
                      )}
                      <button
                        onClick={() => removePaymentMethod(method.id)}
                        className="text-red-600 hover:text-red-700 font-medium text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Payment Options */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Add Payment Method
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <button className="p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    <div className="text-3xl mb-2 text-center">💳</div>
                    <p className="font-medium text-gray-900 text-center">
                      Credit Card
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      Visa, Mastercard, Amex
                    </p>
                  </button>
                  <button className="p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    <div className="text-3xl mb-2 text-center">🅿️</div>
                    <p className="font-medium text-gray-900 text-center">
                      PayPal
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      Fast and secure
                    </p>
                  </button>
                  <button className="p-6 border-2 border-dashed border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors">
                    <div className="text-3xl mb-2 text-center">₿</div>
                    <p className="font-medium text-gray-900 text-center">
                      Crypto
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      ETH, BTC, USDT
                    </p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Billing History Tab */}
          {activeTab === "billing" && (
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Billing History
              </h2>

              {/* Total Spent */}
              <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                <p className="text-sm text-indigo-700 mb-1">Total Spent</p>
                <p className="text-3xl font-bold text-indigo-900">
                  $200.00
                </p>
              </div>

              {/* Billing History Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Date
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Description
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Invoice
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Amount
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Status
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {billingHistory.map((item) => (
                      <tr key={item.id} className="border-b border-gray-100">
                        <td className="py-4 px-4 text-sm text-gray-900">
                          {item.date}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-900">
                          {item.description}
                        </td>
                        <td className="py-4 px-4 text-sm text-indigo-600 font-medium">
                          {item.invoice}
                        </td>
                        <td className="py-4 px-4 text-sm font-semibold text-gray-900">
                          {item.amount}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                              item.status
                            )}`}
                          >
                            {item.status.charAt(0).toUpperCase() +
                              item.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                            View Invoice
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Back to Dashboard */}
        <Link
          href="/dashboard"
          className="mt-6 inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          ← Back to Dashboard
        </Link>

        {/* Delete Account Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Delete Account
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete your account? This action cannot be
                undone and all your data will be permanently lost.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    alert("Account deleted! (This is a demo - nothing was actually deleted)");
                  }}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
