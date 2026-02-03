import { NextResponse } from 'next/server';

const API_BASE = process.env.OPENWORK_API_URL || 'https://www.openwork.bot/api';

export async function GET() {
  try {
    const res = await fetch(`${API_BASE}/hackathon`, {
      next: { revalidate: 60 }, // Cache for 1 min
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json([], { status: 500 });
  }
}
