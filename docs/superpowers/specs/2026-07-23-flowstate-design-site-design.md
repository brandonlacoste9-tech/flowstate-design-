# Flowstate Design — Marketing Site Design Spec

**Date:** 2026-07-23  
**Domain:** flowstate-design.co  
**Status:** Approved for implementation planning  

## 1. Goal

Build a bilingual (EN/FR) multi-page marketing site for **Flowstate Design**, a website design studio. The site must:

1. **Win clients** — clear CTAs and a contact form that emails the owner  
2. **Showcase craft** — portfolio with case studies and strong visual polish  
3. **Sell packages** — 2–3 productized tiers plus a custom-projects path  
4. **Build personal brand** — about/process that positions the studio as calm, premium, and effective  

### Success criteria

- Visitors understand what Flowstate does within ~5 seconds on the homepage  
- Work and Services pages support SEO and deep links  
- Contact form reliably delivers submissions by email  
- EN and FR parity for all primary content  
- Motion feels premium and respects `prefers-reduced-motion`  
- Deploys cleanly to Netlify on `flowstate-design.co`  

## 2. Audience

Primary ideal clients (all three):

- Local small businesses (restaurants, salons, trades, professional services)  
- Startups / SaaS founders  
- Creatives and personal brands (coaches, artists, influencers)  

Tone: confident, calm, not generic “agency speak.” Quebec/Montreal context is welcome in about/case studies without excluding other clients.

## 3. Approach

**Multi-page marketing site** (not a single long-scroll only, not CMS-backed at launch).

- Separate routes for Home, Work, Case Study, Services, About, Contact  
- Locale-prefixed paths: `/en/...` and `/fr/...`  
- Static content modules (TS/MDX) for case studies and packages  
- Contact via Netlify Forms or Netlify Function → email  
- Motion as a first-class design layer  

CMS can be added later without redesigning IA.

## 4. Information architecture

### Locales

- Routes under `/[locale]/...` where `locale` is `en` | `fr`  
- Default: prefer browser language if supported, else `en`  
- Language toggle in global nav (preserves path when switching)  

### Pages

| Route | Purpose |
|--------|---------|
| `/[locale]` | Home — hero, trust/niches, featured work, packages teaser, process, about snippet, final CTA |
| `/[locale]/work` | Portfolio grid (4–6 case studies) |
| `/[locale]/work/[slug]` | Case study detail |
| `/[locale]/services` | Packages + custom projects block |
| `/[locale]/about` | Studio/founder story, process depth, positioning |
| `/[locale]/contact` | Contact form → email |

### Global chrome

- **Nav:** Logo (home) · Work · Services · About · Contact · EN/FR toggle  
- **Footer:** Short blurb, email, nav links, copyright  
- **Mobile:** Sticky “Start a project” CTA  

### Out of scope (v1)

- Blog  
- Client portal  
- Payments / checkout  
- Headless CMS  
- Calendly / booking embed  
- WhatsApp-primary contact  

## 5. Visual system — “Flow / Calm Premium”

### Personality

Quiet confidence, “in the zone,” premium without loud agency clichés.

### Palette

| Token | Role | Approx. value |
|--------|------|----------------|
| `bg` | Page background | `#0B1220` |
| `surface` | Cards / panels | `#132033` |
| `border` | Subtle edges | `#24304A` |
| `text` | Primary text | `#E8EEF9` |
| `muted` | Secondary text | `#9BB0D0` |
| `accent` | CTAs, highlights | `#7DD3C0` |
| `accent-hover` | Hover state | Brighter mint |

### Typography

- Headings: modern geometric sans (Satoshi or Geist), tight tracking on large display lines  
- Body: same family or Inter, 16–18px base  
- Optional mono for labels/meta (“CASE STUDY”, package tags)  

### UI language

- Soft shadows, 12–16px card radii  
- Generous spacing  
- Work cards: dark surface + mint edge accent on hover  
- Primary button: filled mint; secondary: ghost outline  

### Logo (v1)

Wordmark **FLOWSTATE** + small mint mark (abstract wave / continuous path). No full icon system required at launch.

## 6. Motion system

Motion is intentional and restrained.

| Layer | Behavior |
|--------|----------|
| Page enter | Soft fade + slight Y rise on hero and major sections |
| Scroll | Staggered reveal for work cards, package cards, process steps (once per section) |
| Hover | Card lift + mint border/glow; buttons scale ~1.02 |
| Nav / locale | Short crossfade on route/locale change |
| Contact | Calm success confirmation animation |
| Signature “flow” | One restrained hero element (slow gradient drift or thin mint path loop, low opacity) |

**Accessibility:** Honor `prefers-reduced-motion` — disable non-essential animation.  
**Library:** Framer Motion (or CSS + Intersection Observer where simpler).

## 7. Content & conversion

### Home narrative

1. Hero — outcome-led headline + primary CTA (Contact) + secondary (Work)  
2. Trust strip — niches: local business · startups · creatives  
3. Featured work — 3 case studies  
4. Packages teaser — 3 tiers → Services  
5. Process — Discover → Design → Build → Launch  
6. About snippet → About page  
7. Final CTA + form teaser  

### Packages (hybrid)

| Package | Intent |
|---------|--------|
| **Launch** | One-pager / starter site |
| **Growth** | Multi-page site + brand polish |
| **Custom** | Product/marketing site, app UI, or full brand system |

Plus a **Custom project** block for work outside tiers. Pricing presentation: clear tier structure with either “starting at” or feature lists; final copy decided at implementation. Primary conversion remains contact form, not self-serve checkout.

### Case studies (invented portfolio)

4–6 pieces grounded in the founder’s project history (Montreal/Quebec local, trades, salons/clinics, directories, nightlife/events, indie SaaS, AI product marketing). Each case study includes:

- Title, client archetype, niche tags  
- Challenge  
- Approach  
- Visuals (screenshots or high-quality mock frames)  
- Outcome (plausible metrics; framed as portfolio work)  

Suggested slate:

1. Salon / barber site rebrand  
2. Medical clinic conversion redesign  
3. Montreal trades / services directory  
4. Nightlife or events discovery UI  
5. Indie SaaS / product landing  
6. AI product marketing site  

### Contact form

**Fields:** name, email, project type (select), budget range (select), message  

**Delivery:** Netlify Forms preferred; Netlify Function → email (Resend or similar) if Forms + App Router is awkward.  

**UX:** Client-side validation, EN/FR error and success states, network failure messaging.

## 8. Technical architecture

### Stack

- Next.js (App Router) + TypeScript + Tailwind CSS  
- next-intl for routing and message catalogs  
- Framer Motion for animation  
- Netlify hosting with `@netlify/plugin-nextjs`  
- Static content: TS modules and/or MDX under `content/`  
- No database in v1  

### Project layout

```
app/
  [locale]/
    layout.tsx
    page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    services/page.tsx
    about/page.tsx
    contact/page.tsx
components/          # Hero, WorkCard, PackageCard, ContactForm, LanguageToggle, motion wrappers
content/             # caseStudies, packages, process
messages/            # en.json, fr.json
public/              # logos, og images, case study assets
```

### Data flow

1. **Content:** `content/*` → typed imports → page components  
2. **i18n:** URL locale → next-intl → `messages/{locale}.json` + localized content fields  
3. **Contact:** form submit → Netlify Forms or Function → owner email → success UI  

### Error handling

- Form validation (required fields, email format)  
- Network/server failure messages in EN/FR  
- Localized 404 for unknown case study slugs  
- Missing translation keys fall back to English  

### Testing (lean v1)

- Manual: all routes EN/FR, form happy path + validation  
- Optional: Playwright smoke (home, work, contact with mocked submit)  
- Lighthouse sanity pass after motion polish (LCP/CLS)  

### Deployment

- Repo root Next.js app  
- Netlify build for Next.js  
- Domain: `flowstate-design.co`  
- Env vars only if using email Function (API keys) — never commit secrets  

## 9. Component boundaries

| Unit | Responsibility | Depends on |
|------|----------------|------------|
| `LocaleLayout` | Fonts, nav, footer, locale provider | next-intl |
| `Hero` | Headline, CTAs, signature motion | Motion, i18n |
| `WorkCard` / `WorkGrid` | Portfolio previews | content, Motion |
| `CaseStudyView` | Full case study layout | content |
| `PackageCard` / `PackageList` | Tier presentation | content |
| `ProcessSteps` | 3–4 step process | i18n, Motion |
| `ContactForm` | Validation + submit + success/error | Netlify form/function, i18n |
| `LanguageToggle` | Switch locale, keep path | next-intl |
| `MotionSection` | Reusable scroll/enter animation + reduced-motion | Framer Motion |

Each unit has one clear purpose and is usable independently in story-like isolation (pages compose units).

## 10. Decisions log

| Decision | Choice |
|----------|--------|
| Brand name | Flowstate Design |
| Domain | flowstate-design.co |
| Site structure | Multi-page marketing |
| Hosting | Netlify |
| Framework | Next.js + Tailwind |
| i18n | Full EN/FR |
| Visual direction | Flow / Calm Premium (navy + mint) |
| Motion | First-class, restrained + reduced-motion |
| Packages | Launch / Growth / Custom + custom CTA |
| Portfolio | Invented case studies from founder history |
| Contact | Form → email |
| Brand assets | Created in-build (no existing logo system) |
| CMS | Deferred |

## 11. Open items for implementation plan (not blockers)

- Exact package pricing copy (“starting at” amounts vs features-only)  
- Final hero headline variants EN/FR  
- Email provider if not using Netlify Forms  
- Font licensing choice (Geist free vs Satoshi)  
- Project root already: `C:\Users\north\website-design-business`  

## 12. Non-goals

- Building a client dashboard  
- Selling templates as a product store  
- Full bilingual legal pages beyond basic privacy if required later  
- Pixel-perfect recreation of competitor agency sites  
