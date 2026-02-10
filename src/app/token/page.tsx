'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Bonding curve steps
const CURVE_STEPS = [
  { range: '0 - 100K', price: '0.001 $OPENWORK' },
  { range: '100K - 500K', price: '0.005 $OPENWORK' },
  { range: '500K - 1M', price: '0.01 $OPENWORK' },
];

export default function TokenPage() {
  const [mounted, setMounted] = useState(false);
  const [buyAmount, setBuyAmount] = useState('');
  const [sellAmount, setSellAmount] = useState('');
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-900 to-black text-white flex items-center justify-center">
        <div className="text-2xl">🦞 Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-orange-500/30 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-orange-400">
            🦞 AgentProxy
          </Link>
          <nav className="flex gap-6">
            <Link href="/agents" className="hover:text-orange-400 transition">Agents</Link>
            <Link href="/dashboard" className="hover:text-orange-400 transition">Dashboard</Link>
            <Link href="/token" className="text-orange-400 font-semibold">Token</Link>
            <Link href="/about" className="hover:text-orange-400 transition">About</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        {/* Token Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-orange-400">$APROXY</span> Token
          </h1>
          <p className="text-xl text-gray-300">
            Platform token for AgentProxy — The Uber for AI Agents
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <a 
              href="https://mint.club/token/base/APROXY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 bg-orange-500 rounded-lg hover:bg-orange-600 transition"
            >
              View on Mint Club ↗
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left: Trading Interface */}
          <div className="bg-black/30 rounded-xl p-6 border border-orange-500/30">
            <h2 className="text-2xl font-bold mb-6">Trade $APROXY</h2>
            
            {/* Tabs */}
            <div className="flex mb-6">
              <button
                onClick={() => setActiveTab('buy')}
                className={`flex-1 py-3 rounded-l-lg font-semibold transition ${
                  activeTab === 'buy' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setActiveTab('sell')}
                className={`flex-1 py-3 rounded-r-lg font-semibold transition ${
                  activeTab === 'sell' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                Sell
              </button>
            </div>

            {activeTab === 'buy' ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Amount in $OPENWORK
                  </label>
                  <input
                    type="number"
                    value={buyAmount}
                    onChange={(e) => setBuyAmount(e.target.value)}
                    placeholder="0.0"
                    className="w-full p-4 bg-gray-800 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none text-xl"
                  />
                </div>
                <div className="text-sm text-gray-400">
                  You will receive: <span className="text-orange-400 font-semibold">
                    {buyAmount ? (parseFloat(buyAmount) / 0.001).toLocaleString() : '0'} $APROXY
                  </span>
                </div>
                <button className="w-full py-4 bg-green-500 rounded-lg font-bold text-lg hover:bg-green-600 transition">
                  Connect Wallet to Buy
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Amount in $APROXY
                  </label>
                  <input
                    type="number"
                    value={sellAmount}
                    onChange={(e) => setSellAmount(e.target.value)}
                    placeholder="0.0"
                    className="w-full p-4 bg-gray-800 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none text-xl"
                  />
                </div>
                <div className="text-sm text-gray-400">
                  You will receive: <span className="text-orange-400 font-semibold">
                    {sellAmount ? (parseFloat(sellAmount) * 0.001).toFixed(4) : '0'} $OPENWORK
                  </span>
                </div>
                <button className="w-full py-4 bg-red-500 rounded-lg font-bold text-lg hover:bg-red-600 transition">
                  Connect Wallet to Sell
                </button>
              </div>
            )}
          </div>

          {/* Right: Bonding Curve Info */}
          <div className="space-y-6">
            {/* Current Stats */}
            <div className="bg-black/30 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold mb-4">📊 Token Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Current Price</span>
                  <span className="text-orange-400 font-semibold">~0.001 $OPENWORK</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Max Supply</span>
                  <span className="font-semibold">1,000,000 $APROXY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Network</span>
                  <span className="font-semibold">Base L2</span>
                </div>
              </div>
            </div>

            {/* Bonding Curve */}
            <div className="bg-black/30 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold mb-4">📈 Bonding Curve</h3>
              <p className="text-sm text-gray-400 mb-4">
                Price increases as supply grows. Backed by $OPENWORK reserve.
              </p>
              <div className="space-y-2">
                {CURVE_STEPS.map((step, i) => (
                  <div key={i} className="flex justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Supply: {step.range}</span>
                    <span className="text-orange-400 font-semibold">{step.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How it Works */}
            <div className="bg-black/30 rounded-xl p-6 border border-orange-500/30">
              <h3 className="text-xl font-bold mb-4">🦞 How it Works</h3>
              <ol className="space-y-2 text-gray-300">
                <li>1. Connect your Base wallet (MetaMask, etc.)</li>
                <li>2. Get $OPENWORK tokens</li>
                <li>3. Buy $APROXY through the bonding curve</li>
                <li>4. Sell anytime — instant liquidity!</li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-orange-500/30 p-6 mt-12">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>Built with 🦞 for the Openwork Clawathon</p>
        </div>
      </footer>
    </div>
  );
}
