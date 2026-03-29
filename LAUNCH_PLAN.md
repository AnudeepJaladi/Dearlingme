# Dearling.me — Business Launch Plan

**Brand:** Dearling.me — Premium Baby Products Dropshipping
**Goal:** $1–5k/month profit by Month 3–6
**Budget:** ~$800 launch budget

**Legend:** 👤 You | 🤖 Claude | ⬜ Not started | 🔄 In progress | ✅ Done | 🔗 Blocked

---

## PHASE 1 — Foundation
> Goal: Get the website live and business accounts ready.
> Target: Week 1

| # | Task | Owner | Status | Depends On | Notes |
|---|------|-------|--------|-----------|-------|
| 1 | Buy domain `dearling.me` via Namecheap | 👤 | ✅ | — | ~$12/yr |
| 2 | Create Shopify account (Basic plan) | 👤 | ✅ | — | ~$39/mo |
| 3 | Set up business email `hello@dearling.me` | 👤 | ✅ | #1 | Microsoft 365 Essentials via GoDaddy |
| 4 | Open business bank account (or Wise) | 👤 | ✅ | — | Wise is free |
| 5 | Connect Stripe + PayPal to Shopify | 👤 | ✅ | #2, #4 | In Shopify > Payments |
| 6 | Push code to GitHub & deploy to Vercel | 👤 | ⬜ | — | Free on Vercel |
| 7 | Connect domain to Vercel | 👤 | ⬜ | #1, #6 | In Vercel dashboard |
| 8 | Add legal pages to Shopify (Privacy, Terms, Refund) | 🤖 | ✅ | #2 | Claude generates, you publish |

### Phase 1 Checkpoint ✅
- [ ] Website is live at dearling.me
- [ ] Shopify store is set up
- [ ] Business email works
- [ ] Stripe + PayPal connected

---

## PHASE 2 — Products & Supplier
> Goal: Have real products with real images ready to sell.
> Target: Week 1–2

| # | Task | Owner | Status | Depends On | Notes |
|---|------|-------|--------|-----------|-------|
| 9 | Create AutoDS account & connect to Shopify | 👤 | ⬜ | #2 | ~$26/mo starter plan |
| 10 | Research & select final 10–20 winning products | 👤 | ⬜ | #9 | Sleep, feeding, bath focus |
| 11 | Import products into Shopify via AutoDS | 👤 | ⬜ | #10 | AutoDS does this automatically |
| 12 | Download product images from supplier | 👤 | ⬜ | #11 | Save to `/images/` folder |
| 13 | Replace emoji placeholders with real images on website | 🤖 | ⬜ | #12 | Send Claude the images |
| 14 | Set pricing (2.5–3x cost) + shipping rules in Shopify | 👤 | ⬜ | #11 | |
| 15 | Create individual product pages for each product | 🤖 | ⬜ | #11 | Need product names + prices |
| 16 | Set up shipping zones (US, EU, worldwide) in Shopify | 👤 | ⬜ | #2 | |

### Phase 2 Checkpoint ✅
- [ ] 10–20 products imported into Shopify
- [ ] Real product images on website (no more emojis)
- [ ] Pricing and shipping configured
- [ ] Each product has its own page on website

---

## PHASE 3 — Shopify ↔ Website Integration
> Goal: Website connects to real Shopify checkout.
> Target: Week 2

| # | Task | Owner | Status | Depends On | Notes |
|---|------|-------|--------|-----------|-------|
| 17 | Get your Shopify store URL | 👤 | ⬜ | #2 | e.g. `dearlingme.myshopify.com` |
| 18 | Replace all placeholder account URLs in website | 🤖 | ⬜ | #17 | 6 files to update |
| 19 | Generate Shopify Buy Button embed code per product | 👤 | ⬜ | #11 | Shopify > Sales Channels |
| 20 | Embed Shopify checkout on product pages | 🤖 | ⬜ | #19 | |
| 21 | Test full purchase flow end-to-end | 👤 | ⬜ | #20 | Use Shopify test mode |

### Phase 3 Checkpoint ✅
- [ ] Account button goes to real Shopify login page
- [ ] "Add to Cart" on product page triggers Shopify checkout
- [ ] Test order placed and fulfilled successfully
- [ ] Payment received to Stripe/PayPal

---

## PHASE 4 — Email & CRM
> Goal: Capture leads and recover abandoned carts.
> Target: Week 2–3

| # | Task | Owner | Status | Depends On | Notes |
|---|------|-------|--------|-----------|-------|
| 22 | Create Klaviyo account | 👤 | ⬜ | — | Free up to 500 contacts |
| 23 | Connect newsletter form to Klaviyo | 🤖 | ⬜ | #22 | Need Klaviyo API key |
| 24 | Connect contact form to backend (Formspree) | 🤖 | ⬜ | #3 | Free plan available |
| 25 | Set up welcome email sequence in Klaviyo (3 emails) | 👤 | ⬜ | #22 | |
| 26 | Set up abandoned cart email in Klaviyo | 👤 | ⬜ | #22, #2 | Biggest revenue recovery tool |
| 27 | Set up post-purchase review request email | 👤 | ⬜ | #22, #2 | Builds social proof |

### Phase 4 Checkpoint ✅
- [ ] Newsletter signup captures real emails into Klaviyo
- [ ] Contact form sends emails to hello@dearling.me
- [ ] Welcome sequence activated
- [ ] Abandoned cart email activated
- [ ] Post-purchase review email activated

---

## PHASE 5 — Marketing Channels
> Goal: Drive traffic and start generating sales.
> Target: Week 3–4

| # | Task | Owner | Status | Depends On | Notes |
|---|------|-------|--------|-----------|-------|
| 28 | Create Instagram business account `@dearlingme` | 👤 | ⬜ | — | |
| 29 | Create TikTok business account | 👤 | ⬜ | — | |
| 30 | Update social links in website footer | 🤖 | ⬜ | #28, #29 | Currently all `href="#"` |
| 31 | Install Tidio chatbot on website | 🤖 | ⬜ | — | Free plan, paste 1 script tag |
| 32 | Create GA4 property + add tag to website | 👤 + 🤖 | ⬜ | — | You create, Claude adds tag |
| 33 | Create Facebook Pixel + add to website | 👤 + 🤖 | ⬜ | — | You create, Claude adds tag |
| 34 | Set up Meta Ads account + first campaign ($10/day) | 👤 | ⬜ | #33, #21 | Start with retargeting |
| 35 | Create 3–5 product video reels for TikTok/Instagram | 👤 | ⬜ | #12 | Use Canva or CapCut |

### Phase 5 Checkpoint ✅
- [ ] Instagram + TikTok accounts created and linked in footer
- [ ] GA4 tracking live (see visitors in real-time)
- [ ] Facebook Pixel firing on all pages
- [ ] First Meta ad campaign running
- [ ] First 3 reels posted on TikTok/Instagram

---

## PHASE 6 — SEO & Trust
> Goal: Build long-term free traffic and credibility.
> Target: Week 3–4

| # | Task | Owner | Status | Depends On | Notes |
|---|------|-------|--------|-----------|-------|
| 36 | Add OpenGraph / Twitter meta tags to all pages | 🤖 | ⬜ | #12 | For social sharing previews |
| 37 | Add favicon | 🤖 | ⬜ | 👤 shares logo file | Missing entirely right now |
| 38 | Create sitemap.xml | 🤖 | ⬜ | #15 | After all product pages done |
| 39 | Create robots.txt | 🤖 | ⬜ | — | Quick win, 2 min |
| 40 | Submit sitemap to Google Search Console | 👤 | ⬜ | #38, #7 | Free Google tool |
| 41 | Write 2–3 SEO blog posts (baby safety, sleep tips) | 👤 | ⬜ | — | Claude can draft, you publish |

### Phase 6 Checkpoint ✅
- [ ] All pages show preview image when shared on social
- [ ] Favicon shows in browser tab
- [ ] Sitemap submitted to Google
- [ ] Site indexed in Google Search

---

## PHASE 7 — Operations (Ongoing from Week 3)
> Goal: Keep the business running smoothly on autopilot.

| # | Task | Owner | Status | Depends On | Notes |
|---|------|-------|--------|-----------|-------|
| 42 | Set up auto-fulfillment in AutoDS | 👤 | ⬜ | #9, #21 | Orders auto-sent to supplier |
| 43 | Write customer service response templates | 👤 | ⬜ | — | Claude can draft these |
| 44 | Set up returns process with supplier | 👤 | ⬜ | #10 | |
| 45 | Monitor + respond to product reviews weekly | 👤 | ⬜ | Ongoing | |
| 46 | Add new winning products monthly | 👤 | ⬜ | Ongoing | |
| 47 | Scale winning ads, pause losers weekly | 👤 | ⬜ | #34, Ongoing | |

### Phase 7 Checkpoint ✅
- [ ] Orders auto-fulfill without manual work
- [ ] Customer emails answered within 24h
- [ ] Returns process documented
- [ ] Monthly product review routine established
- [ ] Ads optimized weekly

---

## Revenue Milestones

| Milestone | Target | Status |
|-----------|--------|--------|
| First sale | End of Month 1 | ⬜ |
| $500/month revenue | End of Month 2 | ⬜ |
| $1,000/month revenue | End of Month 3 | ⬜ |
| $3,000/month revenue | End of Month 4–5 | ⬜ |
| $5,000/month revenue | End of Month 6 | ⬜ |

---

## Budget Tracker

| Item | Cost | Frequency | Status |
|------|------|-----------|--------|
| Domain (Namecheap) | $12 | One-time/year | ✅ |
| Shopify Basic | $39 | Monthly | ✅ |
| AutoDS Starter | $26 | Monthly | ⬜ |
| Microsoft 365 Essentials (email) | ~$6 | Monthly | ✅ |
| Meta Ads budget | $300 | Month 1 | ⬜ |
| Tidio chatbot | $0 | Free plan | ⬜ |
| Klaviyo | $0 | Free up to 500 contacts | ⬜ |
| Formspree | $0 | Free plan | ⬜ |
| Vercel hosting | $0 | Free plan | ⬜ |
| **Month 1 Total** | **~$383** | | |

---

## Critical Path to First Sale

```
#6 Deploy to Vercel
    → #7 Connect domain
        → #2 Shopify setup
            → #9 AutoDS connect
                → #10-11 Import products
                    → #19-20 Shopify Buy Button
                        → #21 Test checkout
                            → #34 Run first ad
                                → 💰 FIRST SALE
```

---

*Last updated: 2026-03-15*
*Tracking: Update Status column as tasks complete (⬜ → 🔄 → ✅)*
