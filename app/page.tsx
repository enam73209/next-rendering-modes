import Link from "next/link";

const LinkCard = ({ href, title, desc }: { href: string; title: string; desc: string; }) => (
  <Link href={href} className="block rounded-2xl border p-4 hover:shadow">
    <h2 className="font-semibold">{title}</h2>
    <p className="text-sm text-gray-600">{desc}</p>
  </Link>
);

export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Next.js Rendering Modes — Mini Lab</h1>
      <div className="grid gap-3">
        <LinkCard href="/csr" title="CSR" desc="Browser fetches /api/quote and renders." />
        <LinkCard href="/ssr" title="SSR" desc="Server renders fresh HTML per request." />
        <LinkCard href="/ssg" title="SSG" desc="Static HTML baked at build time." />
        <LinkCard href="/isr" title="ISR" desc="Static + revalidated every 30s." />
      </div>
    </main>
  );
}
