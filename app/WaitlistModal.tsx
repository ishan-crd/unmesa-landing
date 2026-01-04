"use client";

import { useState, useEffect } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const addToWaitlist = useMutation(api.waitlist.addToWaitlist);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

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
      setTimeout(() => {
        onClose();
        setStatus("idle");
        setMessage("");
      }, 2000);
    } catch (error) {
      setStatus("error");
      if (error instanceof Error && error.message === "Email already registered") {
        setMessage("This email is already on the waitlist");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      
      {/* Modal */}
      <div
        className="relative bg-[#1F1F1F] border border-[#373737] rounded-2xl p-8 max-w-md w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">
            Join the Waitlist
          </h2>
          <p className="text-gray-400 mb-6">
            Be the first to know when we launch. No spam, just exclusive updates.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === "loading"}
              className="w-full px-6 py-4 rounded-xl border border-[#373737] text-white placeholder-gray-500 bg-black focus:ring-2 focus:ring-[#4A9EFF] focus:border-[#4A9EFF] focus:outline-none disabled:opacity-50"
              required
              autoFocus
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA] text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Joining..." : "Join Waitlist"}
            </button>
          </form>

          {message && (
            <p className={`text-sm mt-4 ${status === "success" ? "text-[#4A9EFF]" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

