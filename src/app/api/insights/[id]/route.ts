import { fetchInsights } from "@/utils/axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const data = await fetchInsights(id);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch insights:", error);
    return NextResponse.json(
      { error: "Backend API is not available. Please ensure the backend server is running." },
      { status: 503 }
    );
  }
}
