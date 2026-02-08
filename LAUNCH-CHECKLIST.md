# MTR Direct — Weekend Launch Checklist
**Last updated:** February 8, 2026

---

## 🔴 Chad Must Do (Can't Automate These)

### Domain & Hosting
- [ ] **Buy a domain** — suggestions: `mtrdirect.io`, `mtrdirect.co`, `mtrhq.com`
- [ ] **Set up DNS** — point domain to Vercel (auto SSL)

### Form & Email
- [x] ~~**Create Formspree account**~~ — **DONE: Built custom Vercel API!**
- [ ] **Test waitlist signup** — submit test email, verify you receive notification
- [ ] **Decide on branded email** — `hello@mtrdirect.com` vs Gmail

### Accounts Needed (For Full SaaS Later)
- [ ] **Stripe account** — for payment processing
- [ ] **Facebook Business account** — for Marketing API (see `docs/FACEBOOK-ADS-RESEARCH.md`)
- [ ] **Tenant screening provider** — TransUnion SmartMove or Certn
- [ ] **E-signature provider** — DocuSign or HelloSign

### Content
- [ ] **Record 60-second property walkthrough** (iPhone is fine)
- [ ] **Approve launch tweets** — see `content/LAUNCH-TWEETS.md`
- [ ] **Approve email sequence** — see `content/WAITLIST-EMAILS.md`

---

## 🟢 Completed (Feb 8)

### Site & Technical
- [x] ✅ Waitlist API live (`/api/waitlist.js`)
- [x] ✅ Form captures emails + sends notification to Gmail
- [x] ✅ Code review completed (security, accessibility, SEO)
- [x] ✅ Privacy Policy added (`/legal/privacy-policy.html`)
- [x] ✅ Terms of Service added (`/legal/terms.html`)
- [x] ✅ Open Graph / Twitter cards added
- [x] ✅ Favicon and branding assets in place
- [x] ✅ Deployed to Vercel (auto-deploys from GitHub)
- [x] ✅ New mtr|direct logo + M-house symbol
- [x] ✅ Custom OG images for social sharing
- [x] ✅ robots.txt + sitemap.xml (SEO)
- [x] ✅ manifest.json (PWA ready)
- [x] ✅ 404 error page
- [x] ✅ All nav links working
- [x] ✅ All pages rebranded with new logo

### Content & Strategy
- [x] ✅ Competitive analysis (`COMPETITIVE-ANALYSIS.md`)
- [x] ✅ Launch tweets drafted (`content/LAUNCH-TWEETS.md`)
- [x] ✅ Email sequence drafted (`content/WAITLIST-EMAILS.md`)
- [x] ✅ Marketing opportunities documented (`MARKETING-OPPORTUNITIES.md`)
- [x] ✅ Facebook ads research (`docs/FACEBOOK-ADS-RESEARCH.md`)
- [x] ✅ Pre-launch considerations (`THINGS-TO-CONSIDER.md`)

### Previously Completed
- [x] ✅ Landing page with waitlist
- [x] ✅ Pricing section
- [x] ✅ ROI calculator
- [x] ✅ FAQ section
- [x] ✅ Business plan
- [x] ✅ Customer journey map
- [x] ✅ Dashboard mockup
- [x] ✅ Direct booking site (Chad's property)

---

## 📋 Launch Day Sequence

### Saturday/Sunday (Feb 8-9)
1. ✅ Site is live on Vercel
2. ⏳ Buy domain → point to Vercel
3. ⏳ Test waitlist signup yourself
4. ⏳ Approve launch content
5. 🚀 Soft launch — share link in DMs first

### Week After Launch
1. Post in BiggerPockets MTR forum (see `MARKETING-OPPORTUNITIES.md`)
2. Share on Twitter (#buildinpublic)
3. Monitor signups and feedback
4. Iterate based on responses

---

## 💡 Domain Recommendations

| Domain | Status | Price |
|--------|--------|-------|
| `mtrdirect.io` | ✅ Available | ~$15/yr |
| `mtrdirect.co` | ✅ Available | ~$12/yr |
| `mtrhq.com` | ✅ Available | ~$12/yr |

**Gus's pick:** `mtrdirect.io` — clean, memorable, professional.

---

## 🚨 Pre-Launch Reminders

1. **Test the form yourself** before sharing
2. **Check mobile view** — most visitors will be on phones
3. **Have a response ready** for inquiries
4. **Don't overthink it** — ship and iterate

---

---

## 🎨 Brand Assets Ready

All in `projects/mtr-direct/brand/`:

| Asset | File |
|-------|------|
| Logo (dark text) | `logo-primary.svg` |
| Logo (white text) | `logo-white.svg` |
| Symbol icon | `icon-symbol.svg`, `icon-symbol.png` |
| Twitter profile | `twitter-profile.png` (400x400) |
| Twitter header | `twitter-header.png` (1500x500) |
| Brand sheet | `brand-sheet.png` |

**Brand colors:**
- Terracotta: `#A0583E`
- Charcoal: `#333333`
- Font: Rubik (Google Fonts)

---

*The site is ready. Just need domain + your approval on content.*
