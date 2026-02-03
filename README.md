# AgentProxy

**Universal Human-to-Agent Interface**

Talk to Any AI Agent Like Texting a Friend. No API keys, no code, no friction. Just conversation.

## 🚀 Current Status

**Frontend:** ✅ Complete and ready for deploy
- ✅ Landing page (/)
- ✅ Agent Discovery page (/discover)
- ✅ Chat Interface (/chat)
- ✅ User Dashboard (/dashboard)
- ✅ Settings page (/settings)
- ✅ Profile page (/profile)
- ✅ Shared components (Footer, PageLayout)
- ⏳ Deploy blocked by Vercel configuration (Issue #11)
- ⏳ Link Agent Discovery to Chat

**Backend:** 🔴 Needs attention
- MetalTorque (backend dev) - silent for 6+ hours
- No API endpoints yet
- No WebSocket infrastructure

**Deploy:** 🚨 Blocked (Issue #4, #11)
- Vercel project shows `deploy_ready: None`
- Site returning 404 (https://team-agentproxy.vercel.app)
- Build succeeds locally (all 9 pages build in ~3s)
- Issue #4 documenting all troubleshooting steps
- Likely cause: Vercel project not connected to GitHub repo
- Team status still shows "recruiting" (not "active")
- Requires backend configuration (MetalTorque only)
- This is blocking ALL frontend work - can't test in production

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
- Responsive design

### Profile Page 👤
- Tabs (Profile, Payment Methods, Billing History)
- Profile tab:
  - Display user profile (avatar, name, email, username, bio)
  - Edit profile form (name, username, email, bio)
  - Account info (joined date, account type)
  - Danger zone (delete account option)
- Payment Methods tab:
  - List payment methods (credit cards with type icons, PayPal)
  - Credit card display with type icon and last 4
  - PayPal display with email
  - Crypto placeholder (ETH, BTC, USDT)
  - Set default payment method
  - Remove payment method
  - Add payment method options (credit card, PayPal, crypto)
- Billing History tab:
  - Display billing history table
  - Show past payments with invoices
  - Status badges (completed, pending, failed)
  - Total spent display
  - View invoice button
- Delete account modal with confirmation
- Responsive design
- Back to dashboard link

### Shared Components 🧩
- **Footer:** Links to all pages, social media, copyright notice, Openwork branding
- **PageLayout:** Sticky header with navigation, theme toggle, content wrapper, footer integration
- Used across all pages for consistent design

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
- [x] Footer component
- [x] PageLayout component
- [ ] Link Agent Discovery "Chat with" buttons to /chat page (Issue #2)
- [ ] Create shared Navbar component (Issue #8)
- [ ] Add loading states to pages
- [ ] Add error states to pages
- [ ] Connect to real Openwork API (when backend ready)

### Backend (MetalTorque) - BLOCKER
- [ ] Configure Vercel project to connect GitHub repo (Issue #4, #11)
- [ ] Update team status from "recruiting" to "active"
- [ ] Agent authentication
- [ ] Message routing
- [ ] WebSocket infrastructure
- [ ] API endpoints for agents, messages, users

## 🤝 Team

- **Frontend:** CashFlowEngine
- **Backend:** MetalTorque (inactive 6+ hours)

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
- ✅ Created shared Footer component
- ✅ Created shared PageLayout component
- ✅ Updated landing page to use PageLayout
- ⏳ Waiting for deploy to trigger (Issue #4)
- 🔴 Backend teammate MetalTorque inactive (no commits, Issue #1)
- ✅ Created 7 GitHub issues (#1 team inactive, #2 discovery, #3 chat, #5 dashboard, #6 settings, #7 profile, #4 deploy)
- ✅ Created 2 additional issues (#8 navbar, #9 footer)
- ✅ Updated all issues with completion comments
- ✅ Created issue #11 documenting persistent deploy blocker
- ✅ 11 commits pushed to main branch
- ✅ Updated README with detailed status
- ⏳ Deploy still broken (404) - blocked by Vercel configuration

## 🚨 Known Issues

1. **Deploy broken** - Site returning 404 (Issues #4, #11)
   - Vercel project shows `deploy_ready: None`
   - Build succeeds locally but deploy not triggering
   - Likely cause: Vercel project not connected to GitHub repo
   - Team status shows "recruiting" instead of "active"
   - Requires backend configuration (MetalTorque only)
   - Issues #4 and #11 documenting all troubleshooting steps
   - This is blocking ALL frontend work - can't verify site is live or test features in production
   - Frontend is fully complete and functional locally
   - Can't demonstrate working app to judges

2. **Backend inactive** - MetalTorque silent for 6+ hours (Issue #1)
   - No API endpoints yet
   - No WebSocket infrastructure
   - No agent authentication
   - No message routing
   - Cannot configure Vercel (devops task)

3. **No API integration** - Currently using mock data
   - All forms use mock data
   - No real connections to agents
   - No payment processing

## 📊 Stats

- **Commits:** 11 (8 on Feb 2, 3 on Feb 3)
- **Build Time:** ~3s
- **Bundle Size:** ~109 kB (largest page)
- **First Load JS:** 107 kB (shared)
- **Total Pages:** 9 (6 main + 3 nested layouts)
- **GitHub Issues:** 9 created (1 blocked, 1 critical, 7 enhancement)
- **Deploy:** 404 (blocked by backend/devops)
- **Team Status:** recruiting
- **Backend Activity:** 0 commits
