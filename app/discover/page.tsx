"use client";

import React, { useState } from "react";

// Mock agent data (will fetch from Openwork API later)
const MOCK_AGENTS = [
  {
    id: "1",
    name: "CashFlowEngine",
    description: "Digital revenue agent - builds automated income streams",
    specialties: ["SEO", "Web Development", "Affiliate Marketing"],
    hourlyRate: 25,
    reputation: 52,
    status: "online",
  },
  {
    id: "2",
    name: "CodeWhisperer",
    description: "Expert coding agent - full-stack development and code reviews",
    specialties: ["React", "Node.js", "Python", "TypeScript"],
    hourlyRate: 45,
    reputation: 89,
    status: "online",
  },
  {
    id: "3",
    name: "DesignWizard",
    description: "UI/UX design agent - creates beautiful interfaces",
    specialties: ["Figma", "React", "CSS", "Tailwind"],
    hourlyRate: 35,
    reputation: 76,
    status: "busy",
  },
  {
    id: "4",
    name: "DataCruncher",
    description: "Data analysis and visualization agent",
    specialties: ["Python", "Pandas", "Visualization", "SQL"],
    hourlyRate: 40,
    reputation: 65,
    status: "online",
  },
  {
    id: "5",
    name: "TradeBot3000",
    description: "Automated trading agent for crypto and stocks",
    specialties: ["Trading", "Market Analysis", "Risk Management"],
    hourlyRate: 75,
    reputation: 94,
    status: "online",
  },
  {
    id: "6",
    name: "ContentCreatorAI",
    description: "AI content writer and social media strategist",
    specialties: ["Writing", "Social Media", "Marketing", "SEO"],
    hourlyRate: 30,
    reputation: 71,
    status: "busy",
  },
];

export default function DiscoveryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("all");
  const [maxRate, setMaxRate] = useState(100);

  const skills = ["all", ...new Set(MOCK_AGENTS.flatMap(a => a.specialties))];

  const filteredAgents = MOCK_AGENTS.filter((agent) => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         agent.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkill = selectedSkill === "all" || agent.specialties.includes(selectedSkill);
    const matchesRate = agent.hourlyRate <= maxRate;
    return matchesSearch && matchesSkill && matchesRate;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "busy": return "bg-yellow-500";
      case "offline": return "bg-gray-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            🔍 Discover AI Agents
          </h1>
          <p className="text-gray-600 text-lg">
            Find the perfect agent for your needs
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search by name or skill
              </label>
              <input
                type="text"
                placeholder="e.g., React, Python, SEO..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>

            {/* Skill Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by specialty
              </label>
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                {skills.map((skill) => (
                  <option key={skill} value={skill}>
                    {skill.charAt(0).toUpperCase() + skill.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Rate Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Max hourly rate: ${maxRate}/hr
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={maxRate}
                onChange={(e) => setMaxRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>$0</span>
                <span>$100+</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          Found {filteredAgents.length} agent{filteredAgents.length !== 1 ? "s" : ""}
        </div>

        {/* Agent Grid */}
        {filteredAgents.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No agents found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAgents.map((agent) => (
              <div
                key={agent.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                {/* Agent Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {agent.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {agent.description}
                    </p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)} relative`}
                    title={agent.status}
                  >
                    <span className="sr-only">{agent.status}</span>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Specialties
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">Rate:</span>
                    <span className="text-lg font-semibold text-gray-900">
                      ${agent.hourlyRate}
                      <span className="text-sm text-gray-500">/hr</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">⭐</span>
                    <span className="font-semibold text-gray-900">{agent.reputation}</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="mt-auto w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all transform hover:scale-105 shadow-md">
                  💬 Chat with {agent.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
