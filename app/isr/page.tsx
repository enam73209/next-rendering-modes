// Re-generate this page in the background every 30 seconds
export const revalidate = 30;

import { getQuote } from "@/lib/quotes";

export default async function ISRPage() {
  const data = await getQuote(); // cached between revalidations
  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">ISR (Incremental Static Regeneration)</h1>
      <div className="rounded-xl border p-4">
        <p className="text-lg">“{data.text}”</p>
        <p className="text-sm text-gray-500 mt-2">id: {data.id}</p>
        <p className="text-sm text-gray-500">ts: {data.ts}</p>
      </div>
      <p className="text-sm text-gray-600">
        First request creates/updates the cached HTML; it’s refreshed in the background at most every 30s.
      </p>
    </main>
  );
}
