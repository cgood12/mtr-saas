# Facebook/Meta Ads Research for MTR Direct
**Purpose:** Understanding how to build the marketing engine feature  
**Updated:** 2026-02-08

---

## Key Constraint: Special Ad Category

**Housing ads on Facebook/Meta require Special Ad Category designation.**

This means:
- ❌ Cannot target by age, gender, or zip code
- ❌ Cannot use detailed demographics or behaviors
- ✅ Can target by location (15-mile minimum radius)
- ✅ Can target by interests (limited)
- ✅ Can use lookalike audiences (with restrictions)

**Implication:** MTR Direct's marketing engine needs to work within these constraints. We can't promise hyper-targeted ads to "traveling nurses" specifically.

---

## What We CAN Do

### 1. Interest-Based Targeting (Limited)
- People interested in "travel nursing"
- People interested in "corporate housing"
- People interested in "relocation services"
- People interested in "furnished apartments"

### 2. Location Targeting
- 15-mile radius minimum around property
- Target cities with major hospitals (for nurses)
- Target business districts (for corporate)

### 3. Retargeting
- Website visitors (via Meta Pixel)
- People who engaged with ads
- Lookalike audiences from existing leads

### 4. Creative Optimization
- Video tours perform best
- Lifestyle imagery (not just property photos)
- Clear value prop in first 3 seconds

---

## Recommended Ad Strategy for MTR Hosts

### Campaign Structure
```
Campaign: [Property Name] - Lead Gen
├── Ad Set 1: Interest Targeting
│   └── Interests: travel nursing, corporate housing, relocation
├── Ad Set 2: Location Targeting  
│   └── 15-mile radius + nearby hospitals/business districts
└── Ad Set 3: Retargeting
    └── Website visitors, past inquiries
```

### Budget Recommendations
- **Minimum:** $10-15/day per property
- **Recommended:** $20-30/day per property
- **Expected CPM:** $10-15 (housing category tends higher)
- **Expected CPL:** $15-40 (varies by market)

### Ad Formats
1. **Single Image** - Property hero shot + headline
2. **Carousel** - Multiple rooms/features
3. **Video** - 15-30 second property tour
4. **Lead Form** - Capture directly in Facebook (no website needed)

---

## MTR Direct Implementation Options

### Option A: Self-Service (V1)
- Host connects their Facebook Page
- We provide ad templates and copy suggestions
- Host sets budget and launches via Facebook Ads Manager
- We provide guidance, not automation

**Pros:** Simple to build, no API complexity  
**Cons:** Requires host to use Ads Manager

### Option B: Managed (V2)
- Host provides photos and property details
- We create and manage ads via Marketing API
- Host approves creative, sets budget
- We handle optimization

**Pros:** True automation, better UX  
**Cons:** Requires Facebook Marketing API approval, more complex

### Option C: Agency Model
- Partner with a performance marketing agency
- They manage ads for MTR Direct hosts
- We take margin on ad spend

**Pros:** Expertise, less technical burden  
**Cons:** Lower margins, dependency on partner

---

## Facebook Marketing API Requirements

To build Option B (fully managed ads), we'd need:

1. **Facebook Business Verification** - Requires business documents
2. **Marketing API Access** - Standard tier minimum
3. **App Review** - For ads_management permission
4. **Special Ad Category Compliance** - Housing category declaration

**Timeline:** 2-4 weeks for full approval  
**Effort:** Medium-high

---

## Recommendation for V1 Launch

**Start with Option A (Self-Service):**
- Provide hosts with ad templates and copy
- Link to guide on setting up Housing ads
- Offer "Ad Setup Consultation" as premium service

**Messaging change needed:**
- Current: "We run Facebook ads for you"
- Updated: "We help you run effective Facebook ads" (V1)
- Future: "We run Facebook ads for you" (V2, when API approved)

---

## Competitor Approaches

| Competitor | Ad Approach |
|------------|-------------|
| Airbnb | Runs brand ads, not per-listing |
| Furnished Finder | No ad service |
| Lodgify | Website builder, no ad management |
| Guesty | Integrates with channels, no direct ads |

**Gap:** Nobody is doing property-level ad management for MTR hosts.

---

## Resources

- [Meta Special Ad Category](https://www.facebook.com/business/help/298000447747885)
- [Housing Ads Best Practices](https://www.facebook.com/business/help/1198401317374558)
- [Marketing API Documentation](https://developers.facebook.com/docs/marketing-apis/)

---

*Research compiled by Gus. Use to inform product decisions.*
