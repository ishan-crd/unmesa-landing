import { fetchMascots } from "@/utils/axios";
import { NextResponse } from "next/server";

// Fallback mascot data when backend is not available
const FALLBACK_MASCOTS = [
  {
    id: 1,
    name: "Zen",
    personality: "Calm and mindful, helps you find balance in your daily routine",
    motivationStyle: "Gentle encouragement and peaceful reminders",
    dob: "2024-01-15",
  },
  {
    id: 2,
    name: "Spark",
    personality: "Energetic and enthusiastic, keeps you motivated and active",
    motivationStyle: "High-energy pep talks and exciting challenges",
    dob: "2024-02-20",
  },
  {
    id: 3,
    name: "Wise",
    personality: "Thoughtful and analytical, provides deep insights and wisdom",
    motivationStyle: "Reflective questions and strategic guidance",
    dob: "2024-03-10",
  },
  {
    id: 4,
    name: "Joy",
    personality: "Cheerful and optimistic, brings positivity to your journey",
    motivationStyle: "Celebrating wins and finding the bright side",
    dob: "2024-04-05",
  },
];

export const GET = async () => {
  try {
    const mascots = await fetchMascots();
    return NextResponse.json(mascots);
  } catch (error) {
    console.error("Failed to fetch mascots from backend, using fallback data:", error);
    // Return fallback data if backend is not available
    return NextResponse.json(FALLBACK_MASCOTS);
  }
};
