import { fetchInsights } from "@/utils/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await fetchInsights(id);
  return NextResponse.json(data);
}
