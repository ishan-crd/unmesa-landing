"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "../common/section";
import DefaultWubooWithHalo from "../assets/wuboos/haloDefault";

const features = [
  {
    title: "PatternSense AI",
    highlight: "AI-powered Insights",
    description:
      "Our system not only tracks what you do, but understands how and why you do it—helping you uncover hidden patterns that shape your life. ",
    illustration: <DefaultWubooWithHalo className="w-64 h-64" />,
    bg: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Energy & Productivity",
    highlight: "Peak Performance",
    description:
      "Spot trends, identify peak hours, and optimise your schedule for maximum focus and productivity throughout the day.",
    illustration: <DefaultWubooWithHalo className="w-64 h-64" />,
    bg: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Gamified AI Companion",
    highlight: "Interactive Growth",
    description:
      "Choose your AI companion to cheer you on, track your progress, and turn your personal growth into a fun, interactive game.",
    illustration: <DefaultWubooWithHalo className="w-64 h-64" />,
    bg: "from-green-500/20 to-yellow-500/20",
  },
];

const UniqueFeatures = () => {
  return (
    <Section className="pt-20 h-fit" id="features">
      {/* Section Heading */}
      <h2 className="text-6xl font-bold text-black text-center font-neue-plak mb-20">
        Unique Features
      </h2>

      {features.map((f, i) => {
        const isEven = i % 2 === 0;

        return (
          <section
            key={i}
            className={`relative py-24 px-6 md:px-20 bg-gradient-to-br ${f.bg}`}
          >
            <div
              className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Illustration */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", stiffness: 60, damping: 12 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-shrink-0"
              >
                {f.illustration}
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex-1"
              >
                <h3 className="text-5xl md:text-6xl font-bold font-neue-plak leading-tight">
                  {f.title}
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {f.highlight}
                  </span>
                </h3>
                <p className="mt-6 text-lg font-poppins text-black/70 leading-relaxed max-w-xl">
                  {f.description}
                </p>
              </motion.div>
            </div>

            {/* Wave separator */}
            {i < features.length - 1 && (
              <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                  viewBox="0 0 1440 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-20"
                >
                  <path
                    d="M0,0 C480,80 960,0 1440,80 L1440,0 L0,0 Z"
                    fill="white"
                    opacity="0.6"
                  />
                </svg>
              </div>
            )}
          </section>
        );
      })}
    </Section>
  );
};

export default UniqueFeatures;
