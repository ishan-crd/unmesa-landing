"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
}

export function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const addToWaitlist = useMutation(api.waitlist.addToWaitlist);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      await addToWaitlist({ email: email.trim() });
      setStatus("success");
      setMessage("Successfully added to waitlist!");
      setEmail("");
    } catch (error) {
      setStatus("error");
      if (error instanceof Error && error.message === "Email already registered") {
        setMessage("This email is already on the waitlist");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={status === "loading"}
          className="flex-1 px-6 py-3 rounded-full border border-white/30 text-white placeholder-white/70 bg-white/10 backdrop-blur-sm focus:ring-2 focus:ring-white focus:outline-none disabled:opacity-50"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-white text-[#4A9EFF] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
        {message && (
          <p className={`text-sm mt-2 w-full text-center ${status === "success" ? "text-white" : "text-red-200"}`}>
            {message}
          </p>
        )}
      </form>
    );
  }

  // CTA variant (existing implementation)
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        disabled={status === "loading"}
        className="flex-1 px-6 py-4 rounded-full border border-white text-white placeholder-white/70 bg-transparent focus:ring-2 focus:ring-white focus:outline-none disabled:opacity-50"
        required
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="bg-white text-[#4A9EFF] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {message && (
        <p className={`text-sm mt-4 ${status === "success" ? "text-white" : "text-red-200"}`}>
          {message}
        </p>
      )}
    </form>
  );
}

