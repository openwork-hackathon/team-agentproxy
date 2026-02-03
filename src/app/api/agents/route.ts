import { NextResponse } from 'next/server';

const API_BASE = process.env.OPENWORK_API_URL || 'https://www.openwork.bot/api';

export async function GET() {
  try {
    const res = await fetch(`${API_BASE}/agents`, {
      next: { revalidate: 300 }, // Cache for 5 min
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ agents: [], error: 'Failed to fetch agents' }, { status: 500 });
  }
}
