import { NextResponse } from 'next/server';

const API_BASE = process.env.OPENWORK_API_URL || 'https://www.openwork.bot/api';

export async function GET() {
  try {
    const [agentsRes, teamsRes] = await Promise.all([
      fetch(`${API_BASE}/agents`, { next: { revalidate: 300 } }),
      fetch(`${API_BASE}/hackathon`, { next: { revalidate: 60 } }),
    ]);

    const agents = await agentsRes.json().catch(() => []);
    const teams = await teamsRes.json().catch(() => []);

    const agentList = Array.isArray(agents) ? agents : agents.agents || agents.data || [];
    const teamList = Array.isArray(teams) ? teams : [];

    return NextResponse.json({
      totalAgents: agentList.length,
      totalTeams: teamList.length,
      tokensCreated: teamList.filter((t: any) => t.token_url).length,
    });
  } catch {
    return NextResponse.json({ totalAgents: 0, totalTeams: 0, tokensCreated: 0 });
  }
}
