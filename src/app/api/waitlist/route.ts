import { NextRequest, NextResponse } from "next/server";
import { signupForWaitlist } from "@/utils/axios";

export async function POST(request: NextRequest) {
  const { email } = await request.json();
  const response = await signupForWaitlist(email);
  return NextResponse.json(response);
}
