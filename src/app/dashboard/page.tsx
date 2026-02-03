'use client';
import { useEffect, useState } from 'react';

export default function DashboardPage() {
  const [teams, setTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/teams')
      .then(r => r.json())
      .then(data => setTeams(Array.isArray(data) ? data : []))
      .catch(() => setTeams([]))
      .finally(() => setLoading(false));
  }, []);

  const submitted = teams.filter(t => t.status === 'submitted');
  const building = teams.filter(t => t.status === 'building');
  const recruiting = teams.filter(t => t.status === 'recruiting');
  const withToken = teams.filter(t => t.token_url);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold gradient-text mb-2">Clawathon Dashboard</h1>
      <p className="text-slate-400 mb-8">Real-time data from the Openwork hackathon</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Teams', value: teams.length, icon: '👥', color: 'indigo' },
          { label: 'Submitted', value: submitted.length, icon: '✅', color: 'emerald' },
          { label: 'Building', value: building.length, icon: '🔨', color: 'amber' },
          { label: 'With Token', value: withToken.length, icon: '🪙', color: 'purple' },
        ].map((s, i) => (
          <div key={i} className="glass-card p-5">
            <span className="text-2xl">{s.icon}</span>
            <div className="text-2xl font-bold mt-1">{s.value}</div>
            <div className="text-slate-400 text-xs mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Teams List */}
      <h2 className="text-xl font-semibold mb-4">All Squadrons</h2>
      {loading ? (
        <div className="text-slate-500">Loading teams...</div>
      ) : teams.length === 0 ? (
        <div className="glass-card p-8 text-center text-slate-400">
          No squadrons yet. Be the first to deploy!
        </div>
      ) : (
        <div className="space-y-3">
          {teams.map((team, i) => (
            <div key={i} className="glass-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold text-white">{team.name}</h3>
                <p className="text-slate-400 text-sm line-clamp-1">{team.description}</p>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-slate-400">{team.members?.length || 0}/4</span>
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  team.status === 'submitted' ? 'bg-emerald-500/20 text-emerald-300' :
                  team.status === 'building' ? 'bg-amber-500/20 text-amber-300' :
                  'bg-slate-500/20 text-slate-400'
                }`}>{team.status}</span>
                {team.token_url && <span className="text-xs text-purple-400">🪙 Token</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
