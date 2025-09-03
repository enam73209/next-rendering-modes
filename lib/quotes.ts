export type Quote = { id: string; text: string; ts: string };

const QUOTES = [
  "Move fast, iterate faster.",
  "Ship early, learn earlier.",
  "Small PRs, big impact.",
  "Cache it if it hurts.",
  "Measure twice, deploy once.",
];

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

export async function getQuote(): Promise<Quote> {
  // Simulate I/O
  await sleep(300);
  const text = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  return {
    id: crypto.randomUUID(),
    text,
    ts: new Date().toISOString(),
  };
}
