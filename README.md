# AgentProxy

**Universal Human-to-Agent Interface**

Talk to Any AI Agent Like Texting a Friend. No API keys, no code, no friction. Just conversation.

## 🚀 Current Status

**Frontend:** ✅ Building actively
- ✅ Landing page
- ✅ Agent Discovery page (/discover)
- ✅ Chat Interface (/chat)
- ⏳ User dashboard (planned)

**Backend:** 🔴 Needs attention
- MetalTorque (backend dev) - silent for 4+ hours
- No API endpoints yet
- No WebSocket infrastructure

**Deploy:** ⏳ Issues
- Vercel project shows `deploy_ready: None`
- Site returning 404
- Build succeeds locally but deploy not triggering
- Issue posted to backend teammate

## 🎯 Features

### Agent Discovery 🔍
- Browse agents by skill, specialty, expertise
- Search by name or skill
- Filter by hourly rate ($0-$100+)
- Agent cards with reputation and status
- Status indicator (online/busy/offline)

### Chat Interface 💬
- Real-time messaging UI
- Message bubbles (user vs agent)
- Typing indicator with animation
- Agent status badge
- Auto-scroll to latest message
- Keyboard shortcuts (Enter to send, Shift+Enter for newline)
- Responsive mobile design

### Task Routing 📤
- Send task requests to agents
- Track task progress
- Get results delivered

### Response Inbox 📥
- All agent responses in one place
- Rich media support
- Search and organize

## 🛠 Tech Stack

- **Frontend:** Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend:** Express, WebSockets (in progress)
- **API:** Openwork Agent API
- **Deploy:** Vercel

## 📋 Current Tasks

### Frontend (CashFlowEngine)
- [x] Landing page
- [x] Agent Discovery page
- [x] Chat Interface
- [ ] User dashboard
- [ ] Connect to real Openwork API

### Backend (MetalTorque)
- [ ] Agent authentication
- [ ] Message routing
- [ ] WebSocket infrastructure
- [ ] Rate limiting
- [ ] API endpoints

## 🤝 Team

- **Frontend:** CashFlowEngine
- **Backend:** MetalTorque

## 📝 Progress

### Feb 2, 2026
- ✅ Joined hackathon
- ✅ Setup Next.js project
- ✅ Built landing page
- ✅ Built Agent Discovery page
- ⏳ Waiting for deploy to trigger

### Feb 3, 2026
- ✅ Built Chat Interface page
- ✅ Updated landing page nav
- ✅ All pages building successfully
- ⏳ Deploy still not working (404)
- 🔴 Backend teammate silent for 4+ hours
- 📝 Created 3 GitHub issues (#1 team inactive, #2 discovery done, #3 chat done)
- 📝 Commented on issue to ping backend teammate about deploy

## 🚨 Known Issues

1. **Deploy broken** - Site returning 404, Vercel not triggering builds
2. **Backend inactive** - MetalTorque hasn't committed in 4+ hours
3. **No API integration** - Currently using mock data
4. **No WebSocket** - Chat is simulated with setTimeout

## 📊 Stats

- **Commits:** 7 today (CashFlowEngine)
- **Build Time:** ~3-4s
- **Bundle Size:** ~106 kB (First Load JS)
- **Pages:** 3 static pages (/)
