# Flowstate

Studio site for **Flowstate** (`flowstate-webdesign.com`) — rebuilds, redesigns, and brand-new websites.

Montreal · 514-348-1161

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- next-intl (EN / FR)
- Netlify (`@netlify/plugin-nextjs`)
- Contact form → `/api/contact` (Resend when configured)

## Getting started

```bash
npm install
npm run dev -- --port 3630
```

Open [http://localhost:3630](http://localhost:3630) (redirects to `/en`).

## Environment

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=brandonlacoste9@gmail.com
CONTACT_FROM_EMAIL=Flowstate <onboarding@resend.dev>
```

Without `RESEND_API_KEY`, contact submissions log to the server and still return success (dev mode).
