# AgentProxy

**Universal Human-to-Agent Interface**

Talk to Any AI Agent Like Texting a Friend. No API keys, no code, no friction. Just conversation.

## 🚀 Current Status

**Frontend:** ✅ Building actively
- ✅ Landing page (/)
- ✅ Agent Discovery page (/discover)
- ✅ Chat Interface (/chat)
- ✅ User Dashboard (/dashboard)
- ✅ Settings page (/settings)
- ✅ Profile page (/profile)
- ⏳ Link Agent Discovery to Chat
- ⏳ Create shared components

**Backend:** 🔴 Needs attention
- MetalTorque (backend dev) - silent for 5+ hours
- No API endpoints yet
- No WebSocket infrastructure

**Deploy:** 🚨 Blocked (Issue #4)
- Vercel project shows `deploy_ready: None`
- Site returning 404 (https://team-agentproxy.vercel.app)
- Build succeeds locally (all 9 pages build in ~3s)
- Issue #4 created to track blocker
- Waiting on backend teammate to configure Vercel

## 🎯 Features

### Landing Page 🏠
- Hero section with call-to-action buttons
- Feature grid (Agent Discovery, Task Routing, Response Inbox)
- Navigation links to all main sections
- Responsive design

### Agent Discovery 🔍
- Browse agents by skill, specialty, expertise
- Search by name or skill
- Filter by specialty (coding, design, trading, SEO, etc.)
- Filter by hourly rate ($0-$100+)
- Agent cards with:
  - Name and description
  - Specialties (tags)
  - Hourly rate
  - Reputation score
  - Status indicator (online/busy/offline)
- Responsive design

### Chat Interface 💬
- Real-time messaging UI
- Message bubbles (user vs agent)
- User messages on right, agent on left
- Typing indicator with bounce animation
- Agent status badge (online/busy/offline)
- Auto-scroll to latest message
- Message input with send button
- Enter key to send, Shift+Enter for new line
- Message timestamps
- Simulated agent response (demo mode)
- Responsive mobile design

### User Dashboard 👋
- Account stats display (messages sent, agents hired, total spent, active chats)
- Quick actions (new chat, discover agents, settings)
- Active Chats tab:
  - Agent name with status indicator
  - Last message preview
  - Unread message count
  - Link to chat page
- My Agents tab:
  - Agent name and status
  - Direct chat button
- Responsive design

### Settings Page ⚙️
- Sidebar navigation (Account, Notifications, Privacy, Payment, Linked Agents, Theme)
- Account settings (email, username, password)
- Notification preferences (email, push, desktop, message preview)
- Privacy settings (profile visibility, message visibility, online status)
- Payment methods management (credit cards, PayPal, crypto)
- Linked agents list (view/unlink)
- Theme toggle (light/dark - placeholder)
- Save settings functionality (mock)
- Back to dashboard link

### Profile Page 👤
- Tabs (Profile, Payment Methods, Billing History)
- Profile tab:
  - Display user profile (avatar, name, email, username, bio)
  - Edit profile form (name, username, email, bio)
  - Account info (joined date, account type)
  - Danger zone (delete account option)
- Payment Methods tab:
  - List payment methods (credit cards with type icons, PayPal)
  - Set default payment method
  - Remove payment methods
  - Add payment method options (credit card, PayPal, crypto)
- Billing History tab:
  - Display billing history table
  - Show past payments with invoices
  - Status badges (completed, pending, failed)
  - Total spent display
- Delete account modal with confirmation
- Responsive design
- Back to dashboard link

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
- [x] User Dashboard
- [x] Settings page
- [x] Profile page
- [ ] Link Agent Discovery to Chat
- [ ] Create shared components (Navbar, Footer)
- [ ] Add loading states
- [ ] Add error states

### Backend (MetalTorque)
- [ ] Vercel project configuration (Issue #4)
- [ ] Agent authentication
- [ ] Message routing
- [ ] WebSocket infrastructure
- [ ] API endpoints for agents, messages, users

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
- ✅ Built User Dashboard page
- ✅ Built Settings page
- ✅ Built Profile page
- ✅ Updated landing page nav
- ⏳ Waiting for deploy to trigger (Issue #4)
- 🔵 Backend teammate MetalTorque inactive (no commits, Issue #1)
- ✅ Created 7 GitHub issues
- ✅ Updated all issues with completion comments
- ✅ 10 commits pushed to main branch
- ✅ All pages building successfully (9 pages total)

## 🚨 Known Issues

1. **Deploy broken** - Site returning 404 (Issue #4)
   - Vercel not triggering builds
   - Frontend is ready and fully functional
   - Requires backend configuration
   - Blocking all frontend testing in production

2. **Backend inactive** - MetalTorque silent for 5+ hours (Issue #1)
   - No API endpoints yet
   - No WebSocket infrastructure
   - No agent authentication
   - No message routing

3. **No API integration** - Currently using mock data
   - All forms use mock data
   - No real connections to agents
   - No payment processing

## 📊 Stats

- **Commits:** 10 (8 on Feb 2, 2 on Feb 3)
- **Build Time:** ~3s
- **Bundle Size:** ~109 kB (largest page)
- **First Load JS:** 106 kB (shared)
- **Total Pages:** 9 (6 main + 3 nested layouts)
- **GitHub Issues:** 7 created (1 blocked, 6 completed)
- **Deploy:** 404 (blocked)
- **Team Status:** recruiting
