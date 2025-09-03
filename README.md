# Next.js Rendering Modes Lab

This is a hands-on **Next.js 14 App Router** project showing **all four rendering strategies** side-by-side:  

- **CSR (Client-Side Rendering)**: Data is fetched in the browser after the page loads.
- **SSR (Server-Side Rendering)**: Data is fetched on every request, and HTML is rendered server-side.
- **SSG (Static Site Generation)**: Data is baked at build time; HTML is static.
- **ISR (Incremental Static Regeneration)**: Static HTML that is re-generated in the background at set intervals.

---

## 📂 Repo Structure

```text
next-rendering-modes/
├── app/
│ ├── api/
│ │ └── quote/
│ │ └── route.ts # API route for CSR fetch
│ ├── csr/
│ │ └── page.tsx # CSR page
│ ├── ssr/
│ │ └── page.tsx # SSR page
│ ├── ssg/
│ │ └── page.tsx # SSG page
│ ├── isr/
│ │ └── page.tsx # ISR page
│ ├── globals.css # Tailwind base styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Home page with links
│
├── lib/
│ └── quotes.ts # Simulated data source
│
├── public/
│ └── favicon.ico
│
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── package.json
└── README.md

```
---

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/YOUR_USERNAME/next-rendering-modes.git
cd next-rendering-modes
npm install
```
### 2. Run Dev Server
```bash
npm run dev
```

Visit http://localhost:3000
 to see all rendering strategies in action.

## 🔑 Key Points

### SSR — Server-Side Rendering

```bash
// Forces per-request server render
export const dynamic = "force-dynamic";

// Or per-fetch freshness
await fetch(url, { cache: "no-store" });
```
- **Pros:** SEO-friendly, fresh per request, supports personalization.
- **Cons:** Higher server cost/TTFB, harder to CDN-cache HTML.
- **Use for:** Product pages with changing stock/price, geo/personalized landing, SEO-required content.

### CSR — Client-Side Rendering

```bash
"use client"; // in top of file
useEffect(() => { fetch("/api/...") }, []);

```
- **Pros:** Perfect for private/user-specific pages, dynamic real-time UIs, rich interactivity.
- **Cons:** SEO weaker by default, slower first paint without skeletons, more JS shipped.
- **Use for:** Auth dashboards, chat apps, maps, editors, highly interactive widgets.

### SSG — Static Site Generation

```bash
// Build-time HTML (default if static)
export const dynamic = "force-static";

```
- **Pros:** Fastest, cheapest, CDN-cached, stable.
- **Cons:** Data frozen until rebuild.
- **Use for:** Docs, blogs, marketing pages that rarely change.

### ISR — Incremental Static Regeneration

```bash
// Rebuild in background every N seconds
export const revalidate = 60;

// Or per-fetch cache
await fetch(url, { next: { revalidate: 60 } });


```
- **Pros:** SSG speed with periodic freshness, no full redeploy needed.
- **Cons:** Content can be stale for ≤N seconds; cache invalidation complexity.
- **Use for:** News feeds, catalogs, product listings, homepages.