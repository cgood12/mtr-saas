# MTR Direct — MVP Specification
**Version:** 1.0 (Launch Weekend)  
**Status:** DRAFT

---

## Philosophy

**Build the smallest thing that delivers value.**

V1 is NOT a full SaaS platform. It's a validated landing page with:
- Working waitlist
- Clear value proposition
- Proof of concept (Chad's property site)

---

## What V1 IS

### Landing Page (Live Now)
- [x] Value proposition clear
- [x] Pricing visible
- [x] Waitlist capture working
- [x] Legal pages in place
- [x] Mobile responsive
- [x] SEO optimized

### Proof of Concept
- [x] Chad's direct booking site
- [x] Demonstrates what we build for hosts

---

## What V1 IS NOT

- ❌ Multi-tenant SaaS platform
- ❌ Self-service site builder
- ❌ Automated ad management
- ❌ Integrated tenant screening
- ❌ Payment processing
- ❌ Lease generation

**These come later.** First: validate demand.

---

## V2 Roadmap (After Waitlist Validation)

### Phase 1: Manual Concierge (Month 1-2)
- Accept first 10-20 customers manually
- Build their sites by hand (templates)
- Learn what they actually need
- Iterate on templates

### Phase 2: Template System (Month 2-3)
- Self-service site builder
- 3-5 template options
- Photo upload
- Basic customization

### Phase 3: Integrations (Month 3-6)
- Stripe for payments
- Screening API
- Lease generation
- Calendar sync

### Phase 4: Marketing Engine (Month 6+)
- Facebook Ads API integration
- Automated campaign creation
- Performance dashboard

---

## Tech Stack (Recommended)

### Current (V1)
- **Frontend:** Static HTML/CSS/JS
- **Hosting:** Vercel
- **Waitlist:** Custom API + FormSubmit
- **Source Control:** GitHub

### V2 (SaaS Platform)
- **Frontend:** Next.js or Remix
- **Backend:** Next.js API routes or separate Node
- **Database:** Postgres (Supabase or PlanetScale)
- **Auth:** Clerk or Auth0
- **Payments:** Stripe
- **Hosting:** Vercel
- **Email:** SendGrid or Resend
- **Screening:** TransUnion SmartMove API
- **E-sign:** DocuSign or HelloSign API

### Why This Stack?
- Next.js = fast iteration, good DX
- Vercel = Chad already has account
- Postgres = reliable, scalable
- Stripe = industry standard
- APIs exist for screening/e-sign = don't reinvent

---

## Data Model (V2)

```
User (Host)
├── id
├── email
├── name
├── stripeCustomerId
├── plan (starter|pro|business)
└── createdAt

Property
├── id
├── userId (FK)
├── name
├── address
├── photos[]
├── description
├── amenities[]
├── price
├── siteSlug
├── siteConfig (JSON)
└── createdAt

Inquiry
├── id
├── propertyId (FK)
├── guestName
├── guestEmail
├── guestPhone
├── message
├── moveIn
├── moveOut
├── status (new|contacted|booked|rejected)
└── createdAt

Booking
├── id
├── propertyId (FK)
├── guestName
├── guestEmail
├── moveIn
├── moveOut
├── rent
├── leaseUrl
├── status (pending|active|completed)
└── createdAt
```

---

## Pricing Tiers (Confirmed)

| Tier | Price | Properties | Features |
|------|-------|------------|----------|
| Starter | $29/mo | 1 | Site, lead capture, lease gen |
| Pro | $79/mo | 3 | + Marketing, screening |
| Business | $149/mo | Unlimited | + Custom domain, API, priority support |

### Add-Ons (Future)
- Ad spend: 10-15% margin on Facebook/IG ads
- Screening: $25-35 per screen (pass-through + margin)
- Premium templates: $49 one-time

---

## Success Metrics (V1)

| Metric | Target | Timeline |
|--------|--------|----------|
| Waitlist signups | 100 | 2 weeks |
| Email open rate | >40% | Ongoing |
| Conversion to paid | 10% | When launched |

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| No signups | Lower price, more marketing |
| Can't build fast enough | Manual concierge first |
| Tech complexity | Use existing APIs, don't build |
| Competition | Focus on MTR niche, not STR |

---

## Next Steps (After Waitlist)

1. **Reach 50 signups** — validates interest
2. **Interview 10 signups** — understand needs
3. **Build template system** — self-service MVP
4. **Onboard first 10 paying customers** — manual concierge
5. **Iterate based on feedback** — build what they ask for

---

*MVP spec drafted by Gus. Adjust based on waitlist learnings.*
