import { getQuote } from "@/lib/quotes";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await getQuote();
  return NextResponse.json(data);
}
