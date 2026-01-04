"use client";

import { WaitlistForm } from "./WaitlistForm";

export function WaitlistSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Lock In?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Join thousands of users who are already focusing on what matters. 
          Start your journey to better productivity today.
        </p>
        <WaitlistForm variant="cta" />
        <p className="text-white/70 text-sm mt-4">
          No spam, just exclusive updates and early access.
        </p>
      </div>
    </section>
  );
}

