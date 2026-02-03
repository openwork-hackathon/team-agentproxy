import { NextResponse } from 'next/server';

// Webhook handler for Openwork team events (Pilot Oversight bonus)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[Webhook] Event received:', JSON.stringify(body));
    return NextResponse.json({ status: 'ok', received: true });
  } catch {
    return NextResponse.json({ status: 'error' }, { status: 400 });
  }
}

export async function GET() {
  return NextResponse.json({ status: 'active', message: 'Webhook endpoint is live' });
}
