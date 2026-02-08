# MTR SaaS Code Review Summary
**Reviewed:** 2026-02-08 by Gus  
**Files:** index.html, dashboard-mockup.html, customer-journey.html, pitch-onepager.html, email-draft.html

---

## Overall Grade: B+

The codebase is well-structured with clean, semantic HTML and good visual design. A few improvements needed for production readiness.

---

## ✅ What's Good

### Accessibility
- FAQ section uses proper `<button>` elements with `aria-expanded` attributes
- Good semantic HTML structure (sections, headings, nav)
- Proper form labels via placeholders (could add explicit labels)

### SEO
- Good meta title and description on index.html
- Proper heading hierarchy (h1 → h2 → h3)
- Clean URLs

### Performance
- No images (icon fonts/emojis used instead)
- CSS is inline (no external requests)
- Minimal JS footprint

### Mobile
- Proper viewport meta tag
- Responsive breakpoints at 768px and 560px
- Flexible grid layouts

---

## ⚠️ Issues to Fix

### Security (Minor)
| Issue | Location | Recommendation |
|-------|----------|----------------|
| Inline `onclick` handlers | index.html:447,461,475 | Move to script section |
| Inline `onsubmit` handlers | index.html:226,539 | Already handled by function, just cleanup |

### Accessibility
| Issue | Recommendation |
|-------|----------------|
| No skip-to-main link | Add `<a class="skip-link" href="#main">Skip to content</a>` |
| Footer links are placeholder (#) | Add real URLs before launch |
| No focus-visible styles on buttons | Add `:focus-visible` outlines |

### SEO
| Issue | Recommendation |
|-------|----------------|
| Missing Open Graph tags | Add og:title, og:description, og:image |
| Missing favicon | Add favicon.ico and apple-touch-icon |
| Other pages lack meta tags | Add unique titles/descriptions to each page |

### UX/Polish
| Issue | Recommendation |
|-------|----------------|
| Waitlist form submits to non-existent API | Replace with Formspree or similar |
| No success/error feedback styling | Add toast notifications |

---

## 🔧 Quick Fixes Applied (by Claude Code - partial)

1. ✅ Converted FAQ divs to semantic buttons
2. ✅ Added `aria-expanded` to FAQ buttons
3. ✅ Added `role="region"` to FAQ answers
4. ✅ Added focus-visible styles for FAQ

---

## Priority Actions Before Launch

1. **Set up Formspree** for waitlist form (replace placeholder API)
2. **Add Open Graph tags** for social sharing
3. **Add favicon** (use terracotta color theme)
4. **Test mobile** on real devices

---

## Files Summary

| File | Purpose | Status |
|------|---------|--------|
| index.html | Landing page | ✅ Ready (minor fixes) |
| dashboard-mockup.html | SaaS dashboard mockup | ✅ Demo only |
| customer-journey.html | User flow diagram | ✅ Demo only |
| pitch-onepager.html | Investor/partner pitch | ✅ Demo only |
| email-draft.html | Email templates | ✅ Demo only |

---

*Review completed manually after Claude Code hung repeatedly.*
