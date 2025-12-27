import { getInsights } from "@/utils/axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { dayLog, mascotId } = await req.json();
    const insights = await getInsights(dayLog, mascotId);
    return NextResponse.json(insights);
  } catch (error) {
    console.error("Failed to generate insights:", error);
    return NextResponse.json(
      { error: "Backend API is not available. Please ensure the backend server is running." },
      { status: 503 }
    );
  }
};
