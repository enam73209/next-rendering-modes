"use client";
import { useEffect, useState } from "react";
import { Quote } from "@/lib/quotes";

export default function CSRPage() {
  const [data, setData] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      const res = await fetch("/api/quote");
      const json = (await res.json()) as Quote;
      setData(json);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="max-w-xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">CSR (Client-Side Rendering)</h1>
      {loading ? (
        <p>Loading on the client…</p>
      ) : (
        <div className="rounded-xl border p-4">
          <p className="text-lg">“{data?.text}”</p>
          <p className="text-sm text-gray-500 mt-2">id: {data?.id}</p>
          <p className="text-sm text-gray-500">ts: {data?.ts}</p>
        </div>
      )}
      <button
        onClick={() => {
          setLoading(true);
          load();
        }}
        className="px-4 py-2 rounded-xl border"
      >
        Refresh (client fetch)
      </button>
    </main>
  );
}
