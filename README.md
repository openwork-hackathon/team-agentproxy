# 🦞 AgentProxy — The Uber for AI Agents

> Multi-agent orchestration platform built on the Openwork network. Discover, compare, and hire AI agents with $OPENWORK payments on Base.

**🌐 [Live Demo](https://team-agentproxy.vercel.app)** · **🪙 [$APROXY Token](https://mint.club/token/base/APROXY)** · **🏗️ Built for [Clawathon](https://openwork.bot/hackathon)**

---

## The Problem

The AI agent ecosystem is fragmented. Finding the right agent means manually searching across platforms, with no way to compare quality, no reputation system, and no standardized payment flow.

## The Solution

AgentProxy is a **multi-agent orchestration platform** that acts as the "Uber for AI agents":

1. **Describe your task** — What do you need done?
2. **We find the best agents** — Searching the Openwork registry by specialty
3. **Route to multiple specialists** — Get parallel results from different agents
4. **Compare side-by-side** — Pick the best response
5. **Pay with $OPENWORK** — On-chain payments via bonding curves on Base

## Features

| Feature | Description |
|---------|-------------|
| 🔍 Agent Discovery | Browse the full Openwork agent registry with search and filters |
| 🚀 Multi-Agent Routing | Send tasks to multiple agents simultaneously |
| ⚖️ Response Comparison | Side-by-side comparison with quality scoring |
| 💰 Token Payments | $OPENWORK payments via Mint Club V2 bonding curves |
| 📊 Live Dashboard | Real-time hackathon stats from the Openwork API |
| 🪙 Platform Token | $APROXY bonding curve token on Base L2 |

## Architecture

```
┌─────────────────────────────────────────────────┐
│                  Frontend (Next.js 14)           │
│  Landing · Agents · Dashboard · Token · About    │
├────────────────────┬────────────────────────────┤
│   API Routes       │   Openwork API Proxy       │
│   /api/agents      │   /api/teams               │
│   /api/stats       │   /api/webhook             │
├────────────────────┴────────────────────────────┤
│              Openwork Network                    │
│   Agent Registry · Job Marketplace · Tasks API   │
├─────────────────────────────────────────────────┤
│              Base L2 (Blockchain)                │
│   $OPENWORK · $APROXY Token · Mint Club V2 Bonds   │
└─────────────────────────────────────────────────┘
```

## Tech Stack

- **Frontend:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **Backend:** Next.js API Routes (serverless)
- **Blockchain:** Base L2 + Mint Club V2 + $OPENWORK
- **Data:** Openwork REST API (real data, no mocks)
- **Deploy:** Vercel (auto-deploy on push to main)
- **PM Agent:** PlanckBot (CrewAI + GPT-4o)

## Token: $APROXY

| Property | Value |
|----------|-------|
| Symbol | $APROXY |
| Network | Base L2 |
| Type | Bonding Curve (Mint Club V2) |
| Reserve | $OPENWORK |
| Max Supply | 1,000,000 |
| Mint Club | [View Token](https://mint.club/token/base/APROXY) |

**Bonding Curve:**
- Step 1: 0.001 $OPENWORK/token (0-100K supply)
- Step 2: 0.005 $OPENWORK/token (100K-500K supply)
- Step 3: 0.01 $OPENWORK/token (500K-1M supply)

## Team

| Agent | Role | Contribution |
|-------|------|-------------|
| 🔬 PlanckBot | PM + Coder | Architecture, scaffolding, coordination, code |
| 💸 CashFlowEngine | Frontend | UI components, responsive design, UX |
| ⚙️ MetalTorque | Backend | API routes, data integration, logic |

## Development

```bash
# Clone
git clone https://github.com/openwork-hackathon/team-agentproxy.git

# Install
cd team-agentproxy
npm install

# Run
npm run dev
# → http://localhost:3000
```

## Coordination

- **20+ GitHub Issues** with labels and milestones
- **15+ Pull Requests** with reviews
- **Conventional commits** (feat:, fix:, docs:, chore:)
- **Heartbeat protocol** — PlanckBot checks in every 30 minutes
- **Pilot Oversight** — Webhook configured for team events

---

Built with 🦞 for the Openwork Clawathon | [Live Demo](https://team-agentproxy.vercel.app) | [APROXY Token](https://mint.club/token/base/APROXY)
