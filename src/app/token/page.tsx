'use client';

import { useState, useEffect } from 'react';
import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { formatUnits } from 'viem';

const APROXY_TOKEN = '0x0000000000000000000000000000000000000000' as `0x${string}`; // TODO: Get actual address
const OPENWORK_TOKEN = '0x299c30DD5974BF4D5bFE42C340CA40462816AB07' as `0x${string}`;

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

  const { address, isConnected } = useAccount();
  const { connectors, connect, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({
    address,
    token: OPENWORK_TOKEN,
  });

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return <div className="min-h-screen bg-black text-white flex items-center justify-center text-2xl">🦞 Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-2">$APROXY Token</h1>
        <p className="text-slate-400 mb-4">Bonding curve token on Mint Club V2 (Base L2)</p>
        <a href="https://mint.club/token/base/APROXY" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300">
          View on Mint Club ↗
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Trade Panel */}
        <div className="glass-card p-6">
          <h2 className="text-xl font-semibold mb-4">Trade $APROXY</h2>
          
          {/* Wallet Connection */}
          <div className="mb-6">
            {isConnected ? (
              <div className="flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                <div>
                  <div className="text-sm text-green-400">Connected</div>
                  <div className="font-mono text-xs">{address?.slice(0, 6)}...{address?.slice(-4)}</div>
                </div>
                <button onClick={() => disconnect()} className="text-xs bg-red-500/20 hover:bg-red-500/30 text-red-400 px-3 py-1 rounded">
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {connectors.map((connector) => (
                  <button
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    disabled={isPending}
                    className="w-full py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition disabled:opacity-50"
                  >
                    {isPending ? 'Connecting...' : `Connect ${connector.name}`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Balance */}
          {isConnected && balance && (
            <div className="mb-4 p-3 bg-slate-800/50 rounded-lg">
              <span className="text-slate-400 text-sm">Your $OPENWORK balance: </span>
              <span className="font-semibold">{parseFloat(formatUnits(balance.value, balance.decimals)).toFixed(4)}</span>
            </div>
          )}

          {/* Buy/Sell Tabs */}
          <div className="flex mb-4">
            <button onClick={() => setActiveTab('buy')} className={`flex-1 py-2 rounded-l-lg font-semibold ${activeTab === 'buy' ? 'bg-green-500' : 'bg-slate-700 hover:bg-slate-600'}`}>Buy</button>
            <button onClick={() => setActiveTab('sell')} className={`flex-1 py-2 rounded-r-lg font-semibold ${activeTab === 'sell' ? 'bg-red-500' : 'bg-slate-700 hover:bg-slate-600'}`}>Sell</button>
          </div>

          {activeTab === 'buy' ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Amount in $OPENWORK</label>
                <input type="number" value={buyAmount} onChange={(e) => setBuyAmount(e.target.value)} placeholder="0.0" className="w-full p-3 bg-slate-800 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none" />
              </div>
              <div className="text-sm text-slate-400">
                You receive: <span className="text-orange-400 font-semibold">{buyAmount ? (parseFloat(buyAmount) / 0.001).toLocaleString() : '0'} $APROXY</span>
              </div>
              <button disabled={!isConnected} className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed">
                {isConnected ? 'Buy $APROXY' : 'Connect wallet first'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1">Amount in $APROXY</label>
                <input type="number" value={sellAmount} onChange={(e) => setSellAmount(e.target.value)} placeholder="0.0" className="w-full p-3 bg-slate-800 rounded-lg border border-slate-600 focus:border-orange-500 focus:outline-none" />
              </div>
              <div className="text-sm text-slate-400">
                You receive: <span className="text-orange-400 font-semibold">{sellAmount ? (parseFloat(sellAmount) * 0.001).toFixed(4) : '0'} $OPENWORK</span>
              </div>
              <button disabled={!isConnected} className="w-full py-3 bg-red-500 hover:bg-red-600 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed">
                {isConnected ? 'Sell $APROXY' : 'Connect wallet first'}
              </button>
            </div>
          )}
        </div>

        {/* Stats & Info */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">📊 Token Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between"><span className="text-slate-400">Token</span><span className="font-semibold">$APROXY</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Network</span><span className="font-semibold">Base L2</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Reserve</span><span className="font-semibold">$OPENWORK</span></div>
              <div className="flex justify-between"><span className="text-slate-400">Max Supply</span><span className="font-semibold">1,000,000</span></div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">📈 Bonding Curve</h3>
            <p className="text-sm text-slate-400 mb-4">Price increases as supply grows. Buy/sell directly through Mint Club V2.</p>
            <div className="space-y-2">
              {CURVE_STEPS.map((step, i) => (
                <div key={i} className="flex justify-between p-2 bg-slate-800/50 rounded">
                  <span className="text-slate-400">{step.range}</span>
                  <span className="text-orange-400 font-semibold">{step.price}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-4">🦞 How to Trade</h3>
            <ol className="space-y-2 text-slate-300 text-sm">
              <li>1. Connect your Base wallet</li>
              <li>2. Get $OPENWORK on Base</li>
              <li>3. Trade via Mint Club V2 bonding curve</li>
              <li>4. Instant liquidity — sell anytime!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
