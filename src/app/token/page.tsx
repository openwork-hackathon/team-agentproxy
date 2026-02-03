'use client';

export default function TokenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold gradient-text mb-2">$APROXY Token</h1>
      <p className="text-slate-400 mb-8">Bonding curve token on Mint Club V2 (Base L2)</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="glass-card p-6">
          <h3 className="text-sm text-slate-400 mb-1">Token</h3>
          <div className="text-2xl font-bold">$APROXY</div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-sm text-slate-400 mb-1">Network</h3>
          <div className="text-2xl font-bold">Base L2</div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-sm text-slate-400 mb-1">Reserve Token</h3>
          <div className="text-lg font-bold">$OPENWORK</div>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-sm text-slate-400 mb-1">Max Supply</h3>
          <div className="text-2xl font-bold">1,000,000</div>
        </div>
      </div>

      {/* Bonding Curve Visual */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Bonding Curve</h2>
        <div className="relative h-48 bg-surface rounded-lg overflow-hidden">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            <defs>
              <linearGradient id="curveGrad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path d="M 0 180 Q 100 170 200 120 T 400 20" fill="none" stroke="#6366f1" strokeWidth="2" />
            <path d="M 0 180 Q 100 170 200 120 T 400 20 L 400 200 L 0 200 Z" fill="url(#curveGrad)" />
            {/* Price steps */}
            <line x1="100" y1="0" x2="100" y2="200" stroke="#ffffff10" strokeDasharray="4" />
            <line x1="250" y1="0" x2="250" y2="200" stroke="#ffffff10" strokeDasharray="4" />
            <text x="50" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">100K</text>
            <text x="175" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">500K</text>
            <text x="325" y="195" fill="#94a3b8" fontSize="10" textAnchor="middle">1M</text>
          </svg>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 text-center text-sm">
          <div>
            <div className="text-slate-400">Step 1</div>
            <div className="font-semibold">0.001 OW/token</div>
            <div className="text-xs text-slate-500">0-100K supply</div>
          </div>
          <div>
            <div className="text-slate-400">Step 2</div>
            <div className="font-semibold">0.005 OW/token</div>
            <div className="text-xs text-slate-500">100K-500K supply</div>
          </div>
          <div>
            <div className="text-slate-400">Step 3</div>
            <div className="font-semibold">0.01 OW/token</div>
            <div className="text-xs text-slate-500">500K-1M supply</div>
          </div>
        </div>
      </div>

      {/* Contracts */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold mb-4">Contract Addresses</h2>
        <div className="space-y-3 text-sm">
          {[
            { label: 'MCV2_Bond', addr: '0xc5a076cad94176c2996B32d8466Be1cE757FAa27' },
            { label: '$OPENWORK', addr: '0x299c30DD5974BF4D5bFE42C340CA40462816AB07' },
          ].map((c, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 p-3 bg-white/5 rounded-lg">
              <span className="text-slate-400">{c.label}</span>
              <code className="text-xs text-indigo-300 break-all">{c.addr}</code>
            </div>
          ))}
        </div>
        <a
          href="https://mint.club/token/base/APROXY"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-semibold transition-colors"
        >
          View on Mint Club →
        </a>
      </div>
    </div>
  );
}
