# MTR Direct — Agents-as-a-Service Pivot
*"Your rental runs itself."*

## The Shift

**Old positioning:** SaaS platform — tools for hosts to get direct bookings
**New positioning:** AI agent that manages your rental — you do nothing

This isn't a feature add. It's a fundamental repositioning from **software you operate** to **an agent that operates for you.**

Inspired by Jensen Huang's GTC 2026 keynote: "Agents-as-a-service replaces SaaS." OpenClaw is the platform, NemoClaw adds enterprise-grade guardrails. We ride both waves.

## Why MTR is Perfect for Agents

| Factor | Why It Matters |
|--------|---------------|
| **Long sales cycle** | Days/weeks of back-and-forth — agent handles it 24/7 |
| **High value per booking** | $3-10K+/month — worth automating properly |
| **Negotiation-heavy** | Agents can qualify, negotiate, close |
| **Part-time hosts** | Most have day jobs — can't respond in real-time |
| **Platform fees are massive** | 15-20% on $3-10K = $450-2,000 per booking in fees |
| **Repeat guest potential** | Agent builds relationships, remembers preferences |

## Agent Tiers

### Tier 1 — Booking Agent (MVP)
- Monitors inquiries across platforms (Airbnb, Furnished Finder, VRBO)
- Instant response to every inquiry (24/7, <1 min response time)
- Qualifies guests (dates, budget, purpose of stay, pet policy, etc.)
- Nudges qualified leads toward direct booking (saves 15-20%)
- Handles negotiation for mid-term stays
- Sends contracts, collects deposits via Stripe
- Follows up on stale leads automatically

### Tier 2 — Revenue Agent
- Dynamic pricing based on local demand, seasonality, comps
- Auto-adjusts rates across all platforms
- Identifies calendar gaps and runs targeted outreach
- A/B tests listing descriptions and photos
- Tracks channel attribution (which source converts best)
- Reallocates marketing spend to highest-ROI channels

### Tier 3 — Operations Agent
- Coordinates cleaners, maintenance crews
- Guest communication throughout the stay
- Check-in/check-out flows (smart lock codes, welcome guides)
- Proactive issue detection (reviews, maintenance requests)
- Handles reviews and responses
- Lease renewal outreach for expiring tenants

## Business Model

### Pricing: Performance-Based

| Model | How It Works | Example |
|-------|-------------|---------|
| **Commission savings split** | 10-20% of platform fees saved | $6K booking moved from Airbnb (15% fee = $900) → MTR Direct takes $90-180, host saves $720-810 |
| **Base + performance** | $49/mo base + 5% of commission savings | Predictable revenue + aligned incentives |
| **Flat tier** | $99-299/mo depending on tier | Simpler, but less aligned |

**Recommended: Base + performance.** $49/mo covers costs, performance fee aligns us with host success. As agent gets better, both sides earn more.

### Unit Economics (per host)
- Average MTR booking: $4,500/month
- Average Airbnb commission: $675/booking
- If agent converts 1 booking/quarter to direct: $675 saved
- MTR Direct take (15% of savings): ~$100
- Plus $49/mo base = $147/quarter per host
- **Target: $50-60/mo blended revenue per host**

### Why This Beats SaaS Pricing
- SaaS churn for small hosts is brutal (they stop logging in)
- Agent churn is near-zero (it works whether they log in or not)
- Performance pricing means no "is this worth it?" moment
- Scales with host success, not feature gates

## Technical Architecture

```
MTR Direct Agent (per host)
├── Communication Engine
│   ├── Multi-platform inbox (Airbnb, FF, VRBO, email, SMS)
│   ├── Guest qualification AI
│   ├── Negotiation engine
│   └── Follow-up sequences
├── Booking Engine
│   ├── Direct booking site (already built)
│   ├── Availability sync (iCal + API)
│   ├── Lease generation + e-sign
│   └── Payment processing (Stripe)
├── Revenue Engine
│   ├── Dynamic pricing model
│   ├── Channel optimization
│   └── Marketing automation
├── Operations Engine
│   ├── Vendor coordination
│   ├── Guest lifecycle management
│   └── Review management
└── NemoClaw Guardrails
    ├── Financial transaction safety
    ├── PII/privacy protection
    ├── Policy enforcement (Fair Housing, etc.)
    └── Audit trail
```

## Go-to-Market

### Phase 1: Prove It (Now — April 2026)
- Build Tier 1 agent for The Pearl Craftsman
- Instrument everything: response time, conversion rate, revenue impact
- Document the before/after

### Phase 2: Show It (May 2026)
- Update landing page: AaaS positioning
- Case study: "How our agent saved $X in 60 days"
- Waitlist with new messaging
- YouTube/TikTok content: "Watch my AI agent close a booking"

### Phase 3: Sell It (June 2026)
- Onboard 5-10 beta hosts (Furnished Finder community)
- Performance-based pricing, 60-day free trial
- Iterate on agent based on real host feedback

### Phase 4: Scale It (Q3 2026)
- NemoClaw integration for enterprise positioning
- API partnerships (Furnished Finder, Guesty, etc.)
- Expand to adjacent verticals (corporate housing, student housing)

## Competitive Moat

1. **Agent-first** — everyone else is building dashboards. We're building agents.
2. **MTR-specific** — no one else is purpose-built for 30+ day stays
3. **Performance-aligned** — we only win when hosts win
4. **Data flywheel** — every booking makes the agent smarter (pricing, qualification, negotiation)
5. **NemoClaw security** — enterprise-grade guardrails give hosts confidence

## The Pitch

> "Stop managing your rental. Your AI agent handles inquiries, qualifies guests, negotiates rates, and closes direct bookings — 24/7. You keep 100% of the revenue. Your rental runs itself."

## Key Metrics to Track

- **Response time:** Agent vs. industry average (target: <1 min vs. 4+ hours)
- **Inquiry-to-booking conversion rate:** Agent vs. host manual
- **Direct booking %:** What share of bookings bypass platforms
- **Revenue saved:** Total platform fees avoided
- **Host NPS:** Would they recommend to other hosts
- **Agent accuracy:** How often does host need to intervene

---

*Strategy authored 2026-03-18. Validated by Jensen Huang's GTC 2026 keynote (lol).*
