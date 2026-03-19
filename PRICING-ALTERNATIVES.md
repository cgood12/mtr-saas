# MTR Direct — Pricing Model Analysis
*Research + alternatives. Written overnight 2026-03-19.*

---

## What the Market Is Doing

### AI Agent Pricing (2026 landscape)
- **Intercom Fin:** $0.99 per resolved conversation. $49/mo base includes 50 resolutions. Pure outcome-based.
- **Salesforce Agentforce:** Started at $2/conversation, failed. Now Flex Credits at $0.10/action. Messy.
- **Cursor/Replit:** Flat subscription + usage overage. Predictable base, variable tail.
- **Anthropic Claude API:** Token-based. Our cost is ~$0.01-0.05 per inquiry exchange.

### Rental Software Pricing (what hosts expect)
- **Hospitable:** $29/mo for 1 property + $10/additional. Per-property model.
- **Guesty:** ~$88/listing/month. Much higher, enterprise feel.
- **Lodgify:** Per-property, tiered. ~$12-30/property/month.
- **TurboTenant:** Free (takes lease signing fees). Freemium.

### Key Insight
Rental hosts think in **per-property** terms. AI agent companies think in **per-outcome** terms. We're both — so we can price like either, or combine them.

---

## The 5 Viable Models

---

### Model A: Per-Property Subscription (Like Hospitable)
**"$39/mo per property"**

Simple. Hosts understand it. No attribution complexity.

| Properties | Monthly | Annual |
|-----------|---------|--------|
| 1 | $39 | $390 (2 months free) |
| 2-5 | $29/each | $290/each |
| 6+ | $19/each | $190/each |

**Our cost:** ~$5-15/property/month in API. Margin: 60-80%.

**Pros:**
- Dead simple to explain and bill
- No attribution tracking needed
- Predictable MRR
- Hosts are conditioned to this model (Hospitable, Lodgify)

**Cons:**
- Doesn't capture upside when agent performs exceptionally
- No skin-in-the-game alignment
- Race to the bottom vs. competitors

**Best for:** Phase 2 (post-proof-of-concept, first 50 customers)

---

### Model B: Per-Booking-Resolved (Like Intercom Fin)
**"$9.99 per direct booking the agent closes"**

Agent converts an inquiry to a signed lease + deposit → we charge $9.99.

| Bookings/month | Agent closes | Our revenue |
|---------------|-------------|-------------|
| 1 | 1 | $9.99 |
| 3 | 2 | $19.98 |
| 6 | 4 | $39.96 |

**Pros:**
- Perfect alignment: we only earn when host earns
- Zero risk for hosts — no output, no charge
- Easy to explain: "pay when your agent closes a booking"
- Scales with host success

**Cons:**
- Attribution: did the agent close it, or did the host?
- Low revenue/host unless volume is high
- May not cover costs during slow months

**Best for:** Beta/proof-of-concept pricing. Builds trust fast.

---

### Model C: Savings-Share (Original Model, Refined)
**"Free base + 15% of platform fees saved"**

When agent converts Airbnb/FF booking to direct, we take 15% of the fee that would have been paid.

| Rental rate | Platform fee | Our take | Host saves |
|------------|-------------|---------|-----------|
| $4,500/mo | $675 (15%) | $101 | $574 |
| $3,000/mo | $450 (15%) | $67 | $383 |
| $6,000/mo | $900 (15%) | $135 | $765 |

**Pros:**
- Cleanest alignment story: "We only win when you win bigger"
- High perceived value vs. cost
- Scales with property value automatically

**Cons:**
- Attribution is hard (was this booking going to be direct anyway?)
- Hosts may dispute which bookings "count"
- Unpredictable MRR for us

**Best for:** Higher-trust customers who have established platforms + trackable inquiry sources

---

### Model D: Freemium + Conversion Fee (Like TurboTenant)
**"Free forever. We charge 1% of the first month's rent when a booking is signed."**

Host pays nothing monthly. When the agent closes a booking and the lease is signed via our platform, we charge 1% of month 1 rent.

| Monthly rent | Our fee | Host pays |
|-------------|---------|----------|
| $3,000 | $30 | Once per booking |
| $4,500 | $45 | Once per booking |
| $6,000 | $60 | Once per booking |

For a host who closes 4 bookings/year: $120-240/year total.

**Pros:**
- Zero barrier to entry — free is the best conversion
- Feels like a marketplace, not a tool
- 1% is painless (they pay 15% to Airbnb)
- Works even during vacant periods

**Cons:**
- Low revenue per host
- Need volume to make it work
- Hosts might route around us once they trust the process

**Best for:** Aggressive early growth / market capture. Accept low margins for fast adoption.

---

### Model E: Hybrid (Recommended Long-Term Model)
**"$29/mo base + $9.99 per closed booking"**

Flat fee covers API costs and provides baseline MRR. Per-booking fee captures upside and aligns incentives.

| Scenario | Monthly base | Bookings closed | Per-booking | Total |
|---------|-------------|----------------|------------|-------|
| Slow month | $29 | 0 | $0 | $29 |
| Normal | $29 | 1 | $9.99 | $38.99 |
| Busy | $29 | 3 | $29.97 | $58.97 |

Annual revenue per host: $350-700/year.
Our API cost per host: $60-180/year.
**Gross margin: 75-85%.**

**Pros:**
- Predictable base + performance upside
- Easy attribution ($9.99 per signed lease = clear trigger)
- Hosts feel the value vs. the cost every time a booking closes
- Industry-standard hybrid structure

**Cons:**
- Slightly more complex than pure flat fee
- Need lease-signing trigger to be clean

**Best for:** Phase 3 (scaled, when agent is proven)

---

## Recommendation by Phase

| Phase | Timing | Model | Rationale |
|-------|--------|-------|-----------|
| **0 — Proof** | Now – 60 days | **FREE** | Get Pearl Craftsman working. Collect data. |
| **1 — Early adopters** | Month 3-4 | **Model D (Freemium + 1% closing fee)** | Zero friction, fast adoption, natural revenue |
| **2 — Growth** | Month 6+ | **Model A ($39/property/mo)** | Simplicity, predictable MRR, easy to sell |
| **3 — Scale** | Month 12+ | **Model E (Hybrid $29 + $9.99/booking)** | Aligned incentives, maximizes LTV |

---

## What to Tell Chad

The original $49/mo + 10% savings model is directionally right but has two problems:
1. Attribution is hard (which bookings "count" as saved savings?)
2. $49/mo feels arbitrary — not tied to value delivered

**Better near-term: Start with freemium (1% closing fee).** 

It's psychologically brilliant:
- Hosts pay $0 until they succeed
- When they pay, they just closed a booking (they're happy)
- 1% vs. 15% Airbnb fee = obvious value
- Scales automatically with rental rate
- No attribution debates (we trigger on lease signing in our system)

Then migrate to flat subscription once they're hooked and the agent is proven.

---

## API Cost Reality Check

Real numbers for The Pearl Craftsman test case:
- Furnished Finder gets ~15-20 inquiries/month for active MTR listings
- Each inquiry: ~3-5 back-and-forth messages with the agent
- Each message pair: ~$0.01-0.03 (Sonnet 4.6)
- Total API cost: **$1-5/month per property**

We can run free beta for months without material cost. The risk is not API cost — it's engineering time.

---

*Models researched against: Intercom Fin, Salesforce Agentforce, Hospitable, Guesty, TurboTenant, Lodgify, Chargebee 2026 AI pricing playbook.*
