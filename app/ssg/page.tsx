// Force static prerender at build time
export const dynamic = "force-static";
import { getQuote } from "@/lib/quotes";

export default async function SSGPage() {
  const data = await getQuote(); // evaluated at build
  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">SSG (Static Site Generation)</h1>
      <div className="rounded-xl border p-4">
        <p className="text-lg">“{data.text}”</p>
        <p className="text-sm text-gray-500 mt-2">id: {data.id}</p>
        <p className="text-sm text-gray-500">ts: {data.ts}</p>
      </div>
      <p className="text-sm text-gray-600">
        This HTML was baked at build time. It won’t change until you rebuild.
      </p>
    </main>
  );
}
