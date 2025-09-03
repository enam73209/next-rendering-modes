// Every request should render fresh HTML on the server
export const dynamic = "force-dynamic";
import { getQuote } from "@/lib/quotes";

export default async function SSRPage() {
  const data = await getQuote(); // server-side call (no HTTP)
  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">SSR (Server-Side Rendering)</h1>
      <div className="rounded-xl border p-4">
        <p className="text-lg">“{data.text}”</p>
        <p className="text-sm text-gray-500 mt-2">id: {data.id}</p>
        <p className="text-sm text-gray-500">ts: {data.ts}</p>
      </div>
      <p className="text-sm text-gray-600">
        Reload the page and watch the data change—HTML is rendered per request.
      </p>
    </main>
  );
}
