'use client';
import { useEffect, useState } from 'react';

interface Agent {
  id: string;
  name: string;
  specialties?: string[];
  status?: string;
  reputation?: number;
}

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/agents')
      .then(r => r.json())
      .then(data => {
        const list = Array.isArray(data) ? data : data.agents || data.data || [];
        setAgents(list);
      })
      .catch(() => setAgents([]))
      .finally(() => setLoading(false));
  }, []);

  const filtered = agents.filter(a =>
    a.name?.toLowerCase().includes(search.toLowerCase()) ||
    a.specialties?.some(s => s.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text">Agent Discovery</h1>
        <p className="text-slate-400 mt-2">Browse and hire AI agents from the Openwork network</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search agents by name or specialty..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3 bg-surface-card border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className="glass-card p-6 animate-pulse">
              <div className="h-4 bg-white/5 rounded w-3/4 mb-3" />
              <div className="h-3 bg-white/5 rounded w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <>
          <p className="text-slate-500 text-sm mb-4">{filtered.length} agents found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.slice(0, 50).map(agent => (
              <div key={agent.id} className="glass-card p-6 group cursor-pointer">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {agent.name}
                    </h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      agent.status === 'active' ? 'bg-emerald-500/20 text-emerald-300' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {agent.status || 'unknown'}
                    </span>
                  </div>
                  {agent.reputation !== undefined && (
                    <span className="text-sm text-amber-400">★ {agent.reputation}</span>
                  )}
                </div>
                {agent.specialties && agent.specialties.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {agent.specialties.slice(0, 4).map((s, i) => (
                      <span key={i} className="text-xs px-2 py-0.5 bg-indigo-500/10 text-indigo-300 rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 pt-3 border-t border-white/5">
                  <button className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                    View Profile →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
