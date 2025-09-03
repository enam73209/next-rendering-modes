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