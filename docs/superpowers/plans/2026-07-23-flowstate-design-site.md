# Flowstate Design Marketing Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a bilingual (EN/FR) multi-page marketing site for Flowstate Design at flowstate-design.co — lead-gen, portfolio, packages, and brand — on Next.js + Tailwind + Netlify with calm-premium navy/mint visuals and restrained motion.

**Architecture:** Next.js App Router with locale segment `/[locale]/...` (next-intl), static TypeScript content modules for case studies and packages, shared layout (nav/footer), Framer Motion for enter/scroll/hover with reduced-motion support, and a contact API route that emails submissions (Resend; dev fallback logs body). Deploy via `@netlify/plugin-nextjs`.

**Tech Stack:** Next.js 15 (App Router), TypeScript, Tailwind CSS v4 or v3, next-intl, Framer Motion, next/font (Geist), Netlify, Resend (email), optional Playwright smoke tests.

**Spec:** `docs/superpowers/specs/2026-07-23-flowstate-design-site-design.md`

**Project root:** `C:\Users\north\website-design-business` (repo already initialized; only design docs committed so far)

---

## File structure (target)

```
package.json
next.config.ts
netlify.toml
tsconfig.json
tailwind.config.ts          # if Tailwind v3; omit/adapt for v4 @theme
postcss.config.mjs
.env.example
messages/
  en.json
  fr.json
src/
  i18n/
    routing.ts
    request.ts
    navigation.ts
  middleware.ts
  content/
    types.ts
    packages.ts
    case-studies.ts
    process.ts
  lib/
    contact-schema.ts
    utils.ts
  app/
    globals.css
    layout.tsx                 # root: html shell only if needed
    not-found.tsx
    [locale]/
      layout.tsx
      page.tsx
      work/
        page.tsx
        [slug]/page.tsx
      services/page.tsx
      about/page.tsx
      contact/page.tsx
    api/
      contact/route.ts
  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      LanguageToggle.tsx
      MobileCta.tsx
    home/
      Hero.tsx
      TrustStrip.tsx
      FeaturedWork.tsx
      PackagesTeaser.tsx
      ProcessSection.tsx
      AboutSnippet.tsx
      FinalCta.tsx
    work/
      WorkCard.tsx
      WorkGrid.tsx
      CaseStudyView.tsx
    services/
      PackageCard.tsx
      PackageList.tsx
      CustomProjectBlock.tsx
    contact/
      ContactForm.tsx
    motion/
      MotionSection.tsx
      FadeIn.tsx
    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
tests/
  contact-schema.test.ts
  case-studies.test.ts
playwright.config.ts          # optional, Task 12
e2e/
  smoke.spec.ts
public/
  og.png                      # generated or simple placeholder
  favicon.ico
```

---

### Task 1: Scaffold Next.js app and base tooling

**Files:**
- Create: entire Next.js app in repo root (merge with existing `docs/`, `.gitignore`)
- Modify: `.gitignore` (ensure `.next`, `node_modules`, `.env*`, `.superpowers/` ignored)
- Create: `.env.example`

- [ ] **Step 1: Scaffold Next.js in the project root**

Run from `C:\Users\north\website-design-business`:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --turbopack --yes
```

If create-next-app refuses non-empty directory, scaffold to a temp folder and move files, keeping `docs/` and existing `.gitignore` entries.

Expected: `package.json`, `src/app`, Tailwind configured, `npm run dev` works.

- [ ] **Step 2: Install runtime dependencies**

```bash
npm install next-intl framer-motion resend zod
npm install -D vitest @vitejs/plugin-react jsdom @types/node
```

- [ ] **Step 3: Add vitest config**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Add to `package.json` scripts:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 4: Create `.env.example`**

```env
# Optional in local dev — without it, /api/contact logs and returns success
RESEND_API_KEY=
CONTACT_TO_EMAIL=hello@flowstate-design.co
CONTACT_FROM_EMAIL=Flowstate Design <onboarding@resend.dev>
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app with Tailwind, vitest, and deps"
```

---

### Task 2: Design tokens and global styles

**Files:**
- Create/Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts` (v3) **or** use `@theme` in CSS (v4 — match whatever create-next-app installed)
- Create: `src/lib/utils.ts`
- Create: `src/components/ui/Container.tsx`, `Button.tsx`, `SectionHeading.tsx`

- [ ] **Step 1: Define CSS variables and base styles**

In `src/app/globals.css` (adapt for Tailwind v3 `@layer` or v4 `@theme`):

```css
@import "tailwindcss";

:root {
  --bg: #0b1220;
  --surface: #132033;
  --border: #24304a;
  --text: #e8eef9;
  --muted: #9bb0d0;
  --accent: #7dd3c0;
  --accent-hover: #9ee0d4;
  --radius: 14px;
}

@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-border: var(--border);
  --color-text: var(--text);
  --color-muted: var(--muted);
  --color-accent: var(--accent);
  --color-accent-hover: var(--accent-hover);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-geist-sans), system-ui, sans-serif;
  antialiased: true;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Fix typo if any: only one `--accent-hover: #9ee0d4;`.

If project uses Tailwind v3, map colors in `tailwind.config.ts` instead of `@theme inline`.

- [ ] **Step 2: Add `cn` helper**

`src/lib/utils.ts`:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```bash
npm install clsx tailwind-merge
```

- [ ] **Step 3: Build primitive UI components**

`src/components/ui/Container.tsx`:

```tsx
import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
```

`src/components/ui/Button.tsx`:

```tsx
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-bg hover:bg-accent-hover shadow-sm shadow-accent/20",
  secondary:
    "border border-border bg-transparent text-text hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  ...props
}: {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
```

`src/components/ui/SectionHeading.tsx`:

```tsx
export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
```

- [ ] **Step 4: Wire fonts in root layout**

`src/app/layout.tsx` (minimal root — locale layout holds chrome):

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://flowstate-design.co"),
  title: {
    default: "Flowstate Design",
    template: "%s · Flowstate Design",
  },
  description:
    "Calm, conversion-focused website design for local businesses, startups, and creatives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-bg text-text antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add calm-premium design tokens and UI primitives"
```

---

### Task 3: i18n routing (next-intl)

**Files:**
- Create: `src/i18n/routing.ts`, `src/i18n/request.ts`, `src/i18n/navigation.ts`
- Create: `src/middleware.ts`
- Create: `messages/en.json`, `messages/fr.json`
- Modify: `next.config.ts`
- Create: `src/app/[locale]/layout.tsx`
- Move/replace: `src/app/page.tsx` → redirect or remove in favor of `[locale]/page.tsx`

- [ ] **Step 1: Routing config**

`src/i18n/routing.ts`:

```ts
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "fr"],
  defaultLocale: "en",
  localePrefix: "always",
});
```

`src/i18n/navigation.ts`:

```ts
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
```

`src/i18n/request.ts`:

```ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as "en" | "fr")) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 2: Middleware**

`src/middleware.ts`:

```ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/", "/(en|fr)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
```

- [ ] **Step 3: next.config**

`next.config.ts`:

```ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
```

- [ ] **Step 4: Seed message catalogs**

`messages/en.json` (minimum keys — expand in later tasks as pages are built):

```json
{
  "meta": {
    "siteName": "Flowstate Design",
    "homeDescription": "Calm, conversion-focused website design for local businesses, startups, and creatives."
  },
  "nav": {
    "work": "Work",
    "services": "Services",
    "about": "About",
    "contact": "Contact",
    "startProject": "Start a project"
  },
  "footer": {
    "blurb": "Websites that feel calm and convert — for local businesses, startups, and creatives.",
    "rights": "All rights reserved."
  },
  "hero": {
    "eyebrow": "Flowstate Design",
    "title": "Sites that feel calm and convert.",
    "subtitle": "Premium web design for local businesses, startups, and personal brands — bilingual-ready, motion-aware, built to win clients.",
    "ctaPrimary": "Start a project",
    "ctaSecondary": "See the work"
  },
  "trust": {
    "title": "Built for",
    "local": "Local businesses",
    "startups": "Startups & SaaS",
    "creatives": "Creatives & personal brands"
  },
  "home": {
    "featuredEyebrow": "Selected work",
    "featuredTitle": "Recent projects",
    "featuredDescription": "A sample of launches across local services, product marketing, and digital experiences.",
    "packagesEyebrow": "Packages",
    "packagesTitle": "Clear offers. Custom when you need it.",
    "packagesCta": "Compare packages",
    "processEyebrow": "Process",
    "processTitle": "From first call to launch",
    "aboutEyebrow": "Studio",
    "aboutTitle": "Design in a flow state",
    "aboutBody": "Flowstate is a design studio focused on calm interfaces and conversion. Based in the Montreal spirit — bilingual, practical, and craft-obsessed.",
    "aboutCta": "About the studio",
    "finalTitle": "Ready when you are",
    "finalBody": "Tell us about your project. We’ll reply with next steps — usually within one business day.",
    "finalCta": "Contact"
  },
  "work": {
    "title": "Work",
    "description": "Case studies across local business, product, and brand experiences.",
    "viewCase": "View case study",
    "challenge": "Challenge",
    "approach": "Approach",
    "outcome": "Outcome"
  },
  "services": {
    "title": "Services",
    "description": "Productized packages for common launches — plus custom work when your scope is unique.",
    "includes": "Includes",
    "from": "From",
    "customTitle": "Need something custom?",
    "customBody": "App UI, multi-brand systems, or a rebuild with migration help — let’s scope it together.",
    "customCta": "Talk about a custom project"
  },
  "about": {
    "title": "About",
    "lead": "Flowstate Design helps ambitious brands ship websites that feel intentional and perform.",
    "body": "We blend visual craft with clear structure: message hierarchy, bilingual content, and motion that respects users. The name is the method — deep focus, fewer distractions, better outcomes."
  },
  "contact": {
    "title": "Contact",
    "description": "Share a few details. We’ll get back by email.",
    "name": "Name",
    "email": "Email",
    "projectType": "Project type",
    "budget": "Budget range",
    "message": "Message",
    "submit": "Send message",
    "sending": "Sending…",
    "success": "Thanks — your message is in. We’ll reply soon.",
    "error": "Something went wrong. Please try again or email us directly.",
    "types": {
      "launch": "Launch package",
      "growth": "Growth package",
      "custom": "Custom project",
      "other": "Other / not sure"
    },
    "budgets": {
      "u3": "Under $3k",
      "3to6": "$3k – $6k",
      "6to12": "$6k – $12k",
      "12p": "$12k+",
      "tbd": "Not sure yet"
    }
  },
  "notFound": {
    "title": "Page not found",
    "body": "That page doesn’t exist or was moved.",
    "cta": "Back home"
  }
}
```

`messages/fr.json` — full French equivalents (required parity). Example keys:

```json
{
  "meta": {
    "siteName": "Flowstate Design",
    "homeDescription": "Design web calme et orienté conversion pour commerces locaux, startups et créateurs."
  },
  "nav": {
    "work": "Projets",
    "services": "Services",
    "about": "À propos",
    "contact": "Contact",
    "startProject": "Démarrer un projet"
  },
  "footer": {
    "blurb": "Des sites calmes qui convertissent — pour commerces locaux, startups et créateurs.",
    "rights": "Tous droits réservés."
  },
  "hero": {
    "eyebrow": "Flowstate Design",
    "title": "Des sites calmes qui convertissent.",
    "subtitle": "Design web premium pour commerces locaux, startups et marques personnelles — prêt pour le bilinguisme, avec du motion soigné.",
    "ctaPrimary": "Démarrer un projet",
    "ctaSecondary": "Voir les projets"
  },
  "trust": {
    "title": "Conçu pour",
    "local": "Commerces locaux",
    "startups": "Startups et SaaS",
    "creatives": "Créateurs et marques perso"
  },
  "home": {
    "featuredEyebrow": "Sélection",
    "featuredTitle": "Projets récents",
    "featuredDescription": "Lancements pour services locaux, marketing produit et expériences numériques.",
    "packagesEyebrow": "Forfaits",
    "packagesTitle": "Offres claires. Sur mesure au besoin.",
    "packagesCta": "Comparer les forfaits",
    "processEyebrow": "Processus",
    "processTitle": "Du premier appel au lancement",
    "aboutEyebrow": "Studio",
    "aboutTitle": "Designer en flow state",
    "aboutBody": "Flowstate est un studio axé sur des interfaces calmes et la conversion. Esprit Montréal — bilingue, pragmatique, obsédé par le craft.",
    "aboutCta": "À propos du studio",
    "finalTitle": "Prêt quand vous l’êtes",
    "finalBody": "Parlez-nous de votre projet. Réponse habituellement en un jour ouvrable.",
    "finalCta": "Contact"
  },
  "work": {
    "title": "Projets",
    "description": "Études de cas : commerce local, produit et marque.",
    "viewCase": "Voir l’étude de cas",
    "challenge": "Défi",
    "approach": "Approche",
    "outcome": "Résultat"
  },
  "services": {
    "title": "Services",
    "description": "Forfaits productisés pour les lancements courants — et du sur mesure si le périmètre est unique.",
    "includes": "Inclus",
    "from": "À partir de",
    "customTitle": "Besoin de sur mesure ?",
    "customBody": "UI d’app, système multi-marques, ou refonte avec migration — définissons le périmètre ensemble.",
    "customCta": "Parler d’un projet sur mesure"
  },
  "about": {
    "title": "À propos",
    "lead": "Flowstate Design aide les marques ambitieuses à lancer des sites intentionnels et performants.",
    "body": "Nous allions craft visuel et structure claire : hiérarchie du message, contenu bilingue, et motion respectueux. Le nom est la méthode — focus profond, moins de bruit, meilleurs résultats."
  },
  "contact": {
    "title": "Contact",
    "description": "Quelques détails suffisent. Nous répondons par courriel.",
    "name": "Nom",
    "email": "Courriel",
    "projectType": "Type de projet",
    "budget": "Budget",
    "message": "Message",
    "submit": "Envoyer",
    "sending": "Envoi…",
    "success": "Merci — message reçu. Nous revenons vite.",
    "error": "Une erreur est survenue. Réessayez ou écrivez-nous directement.",
    "types": {
      "launch": "Forfait Launch",
      "growth": "Forfait Growth",
      "custom": "Projet sur mesure",
      "other": "Autre / incertain"
    },
    "budgets": {
      "u3": "Moins de 3 k$",
      "3to6": "3 k$ – 6 k$",
      "6to12": "6 k$ – 12 k$",
      "12p": "12 k$ et plus",
      "tbd": "Pas encore sûr"
    }
  },
  "notFound": {
    "title": "Page introuvable",
    "body": "Cette page n’existe pas ou a été déplacée.",
    "cta": "Retour à l’accueil"
  }
}
```

- [ ] **Step 5: Locale layout shell**

`src/app/[locale]/layout.tsx`:

```tsx
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileCta } from "@/components/layout/MobileCta";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "fr")) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1 pb-20 md:pb-0">{children}</main>
        <SiteFooter />
        <MobileCta />
      </div>
    </NextIntlClientProvider>
  );
}
```

Temporarily stub header/footer/mobile if not built yet — or complete Task 4 immediately after.

Remove default `src/app/page.tsx` content; root `/` is handled by middleware redirect to `/en` or `/fr`.

- [ ] **Step 6: Verify dev server**

```bash
npm run dev
```

Open `http://localhost:3000` → redirects to `/en`.  
`http://localhost:3000/fr` loads FR.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add next-intl EN/FR routing and message catalogs"
```

---

### Task 4: Layout chrome (header, footer, language toggle, mobile CTA)

**Files:**
- Create: `src/components/layout/SiteHeader.tsx`, `SiteFooter.tsx`, `LanguageToggle.tsx`, `MobileCta.tsx`

- [ ] **Step 1: LanguageToggle**

```tsx
"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageToggle() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(next: "en" | "fr") {
    router.replace(pathname, { locale: next });
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-border p-1 text-xs font-semibold">
      {(["en", "fr"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            locale === code
              ? "bg-accent text-bg"
              : "text-muted hover:text-text",
          )}
          aria-pressed={locale === code}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: SiteHeader**

```tsx
"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LanguageToggle } from "./LanguageToggle";

export function SiteHeader() {
  const t = useTranslations("nav");

  const links = [
    { href: "/work", label: t("work") },
    { href: "/services", label: t("services") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-[0.14em] text-text">
          FLOWSTATE
          <span className="ml-1 text-accent">●</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button href="/contact" className="hidden sm:inline-flex">
            {t("startProject")}
          </Button>
        </div>
      </Container>
    </header>
  );
}
```

- [ ] **Step 3: SiteFooter + MobileCta**

`SiteFooter.tsx`: logo, blurb from `footer.blurb`, nav links, `© {year} Flowstate Design`, email `hello@flowstate-design.co`.

`MobileCta.tsx`: fixed bottom bar `md:hidden` with full-width Button to `/contact` using `nav.startProject`.

- [ ] **Step 4: Manual check**

- Nav links work under `/en` and `/fr`  
- Language toggle keeps path (`/en/work` → `/fr/work`)  
- Mobile CTA visible only on small viewports  

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add site header, footer, language toggle, mobile CTA"
```

---

### Task 5: Content modules (packages, case studies, process)

**Files:**
- Create: `src/content/types.ts`, `packages.ts`, `case-studies.ts`, `process.ts`
- Create: `tests/case-studies.test.ts`

- [ ] **Step 1: Write failing tests for content integrity**

`tests/case-studies.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { packages } from "@/content/packages";

describe("caseStudies", () => {
  it("has at least 5 studies with unique slugs", () => {
    expect(caseStudies.length).toBeGreaterThanOrEqual(5);
    const slugs = caseStudies.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("getCaseStudy returns undefined for unknown slug", () => {
    expect(getCaseStudy("not-a-real-slug")).toBeUndefined();
  });

  it("every study has en and fr title/challenge/approach/outcome", () => {
    for (const c of caseStudies) {
      for (const locale of ["en", "fr"] as const) {
        expect(c.title[locale].length).toBeGreaterThan(0);
        expect(c.challenge[locale].length).toBeGreaterThan(0);
        expect(c.approach[locale].length).toBeGreaterThan(0);
        expect(c.outcome[locale].length).toBeGreaterThan(0);
      }
    }
  });
});

describe("packages", () => {
  it("defines exactly three productized tiers", () => {
    expect(packages).toHaveLength(3);
    expect(packages.map((p) => p.id)).toEqual(["launch", "growth", "custom"]);
  });
});
```

- [ ] **Step 2: Run tests — expect FAIL**

```bash
npm test
```

Expected: FAIL (modules missing or incomplete).

- [ ] **Step 3: Implement types and content**

`src/content/types.ts`:

```ts
export type Locale = "en" | "fr";

export type LocalizedString = Record<Locale, string>;

export type CaseStudy = {
  slug: string;
  niche: string[];
  year: string;
  featured: boolean;
  accent: string;
  title: LocalizedString;
  summary: LocalizedString;
  challenge: LocalizedString;
  approach: LocalizedString;
  outcome: LocalizedString;
};

export type Package = {
  id: "launch" | "growth" | "custom";
  name: LocalizedString;
  priceFrom: LocalizedString;
  description: LocalizedString;
  features: LocalizedString[];
  highlighted?: boolean;
};

export type ProcessStep = {
  id: string;
  title: LocalizedString;
  body: LocalizedString;
};
```

`src/content/packages.ts` — three packages:

| id | EN name | priceFrom (EN) |
|----|---------|----------------|
| launch | Launch | From $2,500 |
| growth | Growth | From $5,500 |
| custom | Custom | Let's scope |

Each with 4–5 feature bullets EN/FR. Mark `growth` as `highlighted: true`.

`src/content/case-studies.ts` — six studies:

1. `atelier-nord` — salon/barber  
2. `clinique-riviera` — medical clinic  
3. `montreal-trades` — trades directory  
4. `nuit-mtl` — nightlife  
5. `planxo` — indie SaaS landing  
6. `adgen` — AI product marketing  

Each: bilingual fields, 2–3 niche tags, `featured: true` on first three.

```ts
export const caseStudies: CaseStudy[] = [ /* ... */ ];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getFeaturedCaseStudies() {
  return caseStudies.filter((c) => c.featured).slice(0, 3);
}
```

`src/content/process.ts` — four steps: Discover, Design, Build, Launch (EN/FR titles + bodies).

- [ ] **Step 4: Run tests — expect PASS**

```bash
npm test
```

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add packages, case studies, and process content modules"
```

---

### Task 6: Motion primitives

**Files:**
- Create: `src/components/motion/MotionSection.tsx`, `FadeIn.tsx`

- [ ] **Step 1: Implement reduced-motion aware wrappers**

`src/components/motion/FadeIn.tsx`:

```tsx
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
```

`MotionSection.tsx`: wrap `section` with same pattern + optional stagger via children mapped with delay index in parent.

- [ ] **Step 2: Commit**

```bash
git add -A
git commit -m "feat: add Framer Motion wrappers with reduced-motion support"
```

---

### Task 7: Homepage

**Files:**
- Create: `src/components/home/*.tsx` (Hero, TrustStrip, FeaturedWork, PackagesTeaser, ProcessSection, AboutSnippet, FinalCta)
- Create: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Hero with signature flow motion**

`Hero.tsx`:

- Eyebrow, title, subtitle from `hero.*`  
- Buttons: primary → `/contact`, secondary → `/work`  
- Background: absolute low-opacity mint radial gradient with slow CSS animation `flow-drift` (disabled under reduced motion via media query in CSS)  

Add to `globals.css`:

```css
@keyframes flow-drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(4%, -3%, 0) scale(1.05);
  }
}

.flow-orb {
  animation: flow-drift 14s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .flow-orb {
    animation: none;
  }
}
```

- [ ] **Step 2: Remaining home sections**

- `TrustStrip` — three niche labels  
- `FeaturedWork` — `getFeaturedCaseStudies()` + `WorkCard`  
- `PackagesTeaser` — map `packages` → cards + link to `/services`  
- `ProcessSection` — map `process` steps  
- `AboutSnippet` — copy + link `/about`  
- `FinalCta` — title/body + Button `/contact`  

Use `FadeIn` / stagger delays 0 / 0.08 / 0.16…

- [ ] **Step 3: Compose `src/app/[locale]/page.tsx`**

```tsx
import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { PackagesTeaser } from "@/components/home/PackagesTeaser";
import { ProcessSection } from "@/components/home/ProcessSection";
import { AboutSnippet } from "@/components/home/AboutSnippet";
import { FinalCta } from "@/components/home/FinalCta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedWork />
      <PackagesTeaser />
      <ProcessSection />
      <AboutSnippet />
      <FinalCta />
    </>
  );
}
```

- [ ] **Step 4: Manual check EN + FR homepage**

- Visual hierarchy, CTAs, no layout overflow mobile  
- Motion plays once on scroll  

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: build bilingual homepage with motion sections"
```

---

### Task 8: Work index + case study pages

**Files:**
- Create: `src/components/work/WorkCard.tsx`, `WorkGrid.tsx`, `CaseStudyView.tsx`
- Create: `src/app/[locale]/work/page.tsx`, `src/app/[locale]/work/[slug]/page.tsx`

- [ ] **Step 1: WorkCard**

Props: `study: CaseStudy`, `locale: Locale`.  
Display title, summary, niche tags, mint hover border, Link to `/work/${slug}`.

- [ ] **Step 2: Work index page**

```tsx
// list SectionHeading + WorkGrid of all caseStudies
// generateMetadata using work.title / work.description
```

- [ ] **Step 3: Case study page**

```tsx
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { routing } from "@/i18n/routing";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    caseStudies.map((c) => ({ locale, slug: c.slug })),
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  return <CaseStudyView study={study} locale={locale as "en" | "fr"} />;
}
```

`CaseStudyView`: hero title, niche tags, sections Challenge / Approach / Outcome using message keys `work.challenge` etc., large gradient placeholder panel (no real screenshots required — stylized mock frame with project name).

- [ ] **Step 4: Manual check**

- `/en/work`, `/fr/work`  
- Each slug renders  
- Unknown slug → 404  

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add work grid and case study pages"
```

---

### Task 9: Services + About pages

**Files:**
- Create: `src/components/services/PackageCard.tsx`, `PackageList.tsx`, `CustomProjectBlock.tsx`
- Create: `src/app/[locale]/services/page.tsx`, `src/app/[locale]/about/page.tsx`

- [ ] **Step 1: PackageCard**

Show name, priceFrom, description, feature list; highlight ring when `highlighted`.

- [ ] **Step 2: Services page**

SectionHeading + PackageList + CustomProjectBlock (CTA to `/contact`).

- [ ] **Step 3: About page**

Long-form using `about.*` + process steps reuse + soft brand statement. Optional founder first-name only if desired; otherwise studio voice.

- [ ] **Step 4: Manual EN/FR check + commit**

```bash
git add -A
git commit -m "feat: add services packages and about pages"
```

---

### Task 10: Contact form + API

**Files:**
- Create: `src/lib/contact-schema.ts`
- Create: `tests/contact-schema.test.ts`
- Create: `src/app/api/contact/route.ts`
- Create: `src/components/contact/ContactForm.tsx`
- Create: `src/app/[locale]/contact/page.tsx`

- [ ] **Step 1: Failing tests for schema**

`src/lib/contact-schema.ts` (implement after red):

```ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  projectType: z.enum(["launch", "growth", "custom", "other"]),
  budget: z.enum(["u3", "3to6", "6to12", "12p", "tbd"]),
  message: z.string().trim().min(10).max(5000),
  locale: z.enum(["en", "fr"]).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
```

`tests/contact-schema.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { contactSchema } from "@/lib/contact-schema";

describe("contactSchema", () => {
  it("accepts a valid payload", () => {
    const parsed = contactSchema.safeParse({
      name: "Alex",
      email: "alex@example.com",
      projectType: "growth",
      budget: "3to6",
      message: "We need a new marketing site for our clinic.",
    });
    expect(parsed.success).toBe(true);
  });

  it("rejects invalid email and short message", () => {
    const parsed = contactSchema.safeParse({
      name: "A",
      email: "not-an-email",
      projectType: "launch",
      budget: "tbd",
      message: "hi",
    });
    expect(parsed.success).toBe(false);
  });
});
```

- [ ] **Step 2: Run tests**

```bash
npm test
```

Red then green after implementing schema.

- [ ] **Step 3: API route**

`src/app/api/contact/route.ts`:

```ts
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@flowstate-design.co";
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Flowstate Design <onboarding@resend.dev>";

  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Project: ${data.projectType}`,
    `Budget: ${data.budget}`,
    `Locale: ${data.locale ?? "n/a"}`,
    "",
    data.message,
  ].join("\n");

  if (!process.env.RESEND_API_KEY) {
    console.info("[contact:dev]", text);
    return NextResponse.json({ ok: true, dev: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const result = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `[Flowstate] ${data.projectType} — ${data.name}`,
    text,
  });

  if (result.error) {
    console.error(result.error);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
```

- [ ] **Step 4: ContactForm client component**

- Controlled fields matching schema  
- Labels from `contact.*`  
- Select options from `contact.types.*` and `contact.budgets.*`  
- On submit: `POST /api/contact` with JSON including `locale`  
- States: idle | sending | success | error  
- Disable button while sending; show `contact.success` / `contact.error`  

- [ ] **Step 5: Contact page**

Heading + description + `ContactForm`.

- [ ] **Step 6: Manual test**

```bash
# without RESEND_API_KEY
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"Alex\",\"email\":\"alex@example.com\",\"projectType\":\"growth\",\"budget\":\"3to6\",\"message\":\"We need a new marketing site for our clinic.\"}"
```

Expected: `{"ok":true,"dev":true}` and server log.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: add contact form with validation and email API"
```

---

### Task 11: SEO, 404, Netlify deploy config

**Files:**
- Create: `src/app/[locale]/not-found.tsx` and/or root `not-found.tsx`
- Modify: each page `generateMetadata` where missing
- Create: `netlify.toml`
- Create: `public/og.png` (simple branded placeholder acceptable)
- Modify: `package.json` if needed for Netlify build command

- [ ] **Step 1: Metadata helpers**

On each page export `generateMetadata` with localized title/description. Example home:

```tsx
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("siteName"),
    description: t("homeDescription"),
    alternates: {
      languages: {
        en: "/en",
        fr: "/fr",
      },
    },
  };
}
```

- [ ] **Step 2: Localized not-found**

Simple message + Link home using `notFound.*` keys.

- [ ] **Step 3: netlify.toml**

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```

```bash
npm install -D @netlify/plugin-nextjs
```

- [ ] **Step 4: Production build locally**

```bash
npm run build
```

Expected: success, static params for locales + case studies.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add SEO metadata, 404, and Netlify config"
```

---

### Task 12: Smoke tests + final polish

**Files:**
- Create: `playwright.config.ts`, `e2e/smoke.spec.ts` (optional but recommended)
- Polish: spacing, focus states, mobile nav menu if desktop-only nav is insufficient

- [ ] **Step 1: If mobile has no hamburger, add simple menu**

In `SiteHeader`, below `md:` show a details/summary or button that expands links. Keep implementation minimal.

- [ ] **Step 2: Install Playwright and write smoke test**

```bash
npm install -D @playwright/test
npx playwright install chromium
```

`e2e/smoke.spec.ts`:

```ts
import { test, expect } from "@playwright/test";

test("home en loads hero", async ({ page }) => {
  await page.goto("/en");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("work page lists case studies", async ({ page }) => {
  await page.goto("/en/work");
  await expect(page.getByRole("link").first()).toBeVisible();
});

test("contact form validates", async ({ page }) => {
  await page.goto("/en/contact");
  await page.getByRole("button", { name: /send/i }).click();
  // native or custom validation prevents empty submit
  await expect(page.getByLabel(/email/i)).toBeVisible();
});
```

`playwright.config.ts`:

```ts
import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "e2e",
  use: { baseURL: "http://127.0.0.1:3000" },
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: true,
  },
});
```

```bash
npx playwright test
```

- [ ] **Step 3: Final manual checklist**

- [ ] All routes EN/FR  
- [ ] Language toggle preserves path  
- [ ] Motion + reduced motion (browser emulate)  
- [ ] Form success path  
- [ ] `npm run build`  
- [ ] Lighthouse quick pass (LCP/CLS sanity)  

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "test: add Playwright smoke tests and mobile nav polish"
```

---

## Spec coverage checklist (self-review)

| Spec requirement | Task(s) |
|------------------|---------|
| Multi-page IA (home, work, case study, services, about, contact) | 7–10 |
| EN/FR locales + toggle | 3, 4 |
| Calm premium navy/mint tokens | 2 |
| Motion + reduced-motion | 6, 7 |
| Packages Launch/Growth/Custom + custom CTA | 5, 9 |
| Invented case studies from founder history | 5, 8 |
| Contact form → email | 10 |
| Next.js + Tailwind + Netlify | 1, 11 |
| Personal brand / about | 7, 9 |
| SEO / 404 | 11 |
| Lead-gen CTAs throughout | 4, 7, 9 |
| No CMS/blog/payments v1 | honored (out of plan) |

## Placeholder / consistency notes

- Package prices use “From $X” in content modules (copy can change without schema change).  
- Contact email default `hello@flowstate-design.co` — update if mailbox differs.  
- Case study visuals are stylized placeholders (no external image deps).  
- Types `Locale`, `CaseStudy`, `Package` defined once in `src/content/types.ts` and reused.  
- Navigation always uses `@/i18n/navigation` `Link`, never raw `next/link` for internal locale routes.  

---

## Execution handoff

Plan complete and saved to `docs/superpowers/plans/2026-07-23-flowstate-design-site.md`.

**Two execution options:**

1. **Subagent-Driven (recommended)** — fresh subagent per task, review between tasks, fast iteration  
2. **Inline Execution** — run tasks in this session with executing-plans and checkpoints  

Which approach?
