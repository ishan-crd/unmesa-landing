import { fetchMascots } from "@/utils/axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  const mascots = await fetchMascots();
  return NextResponse.json(mascots);
};
