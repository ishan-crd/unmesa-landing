import { getInsights } from "@/utils/axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { dayLog, mascotId } = await req.json();
  const insights = await getInsights(dayLog, mascotId);
  return NextResponse.json(insights);
};
