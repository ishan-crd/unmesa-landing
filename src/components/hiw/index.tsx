"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../common/button";
import Sparkles from "../assets/icons/sparkles";
import Step1Img from "../assets/screen1.png";
import Step2Img from "../assets/screen1.png";
import Step3Img from "../assets/screen1.png";
import TryItOut from "./TryItOut";
import Section from "../common/section";
import { cn } from "@/utils";

const steps = [
  {
    title: "Log Your Day",
    description: "Record your daily activities and mood with ease.",
    image: Step1Img,
  },
  {
    title: "Get Actionable Insights",
    description:
      "Our AI analyzes your day and gives personalized advice to improve productivity.",
    image: Step2Img,
  },
  {
    title: "Achieve Your Goals",
    description:
      "Use insights to set targets and track your progress effectively.",
    image: Step3Img,
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tryItOutRef = useRef<HTMLDivElement>(null);
  const [showTryItOut, setShowTryItOut] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const handleTryItOut = () => {
    setShowTryItOut(true);
    setTimeout(() => {
      tryItOutRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <Section
      className={cn("relative h-fit bg-gray-50", showTryItOut ? "pb-6" : "")}
      style={{ scrollSnapType: "y mandatory" }}
    >
      {/* Fixed container for all sticky elements */}
      <div ref={sectionRef} className="h-[400vh] w-full relative">
        <div
          className="sticky py-10 top-0 h-screen flex flex-col items-center justify-between"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Main heading */}
          <h2 className="text-6xl font-bold text-black text-center font-neue-plak">
            How It Works
          </h2>

          {/* Content container with phone and description */}
          <div className="flex items-center justify-center w-full">
            {/* Phone mockup in center */}
            <div className="w-[300px] h-[70vh] relative mx-20">
              {steps.map((step, index) => {
                // Smoother transitions with longer overlap periods
                const start = index / 3;
                const end = (index + 1) / 3;
                const transitionBuffer = 0.15; // Increased buffer for smoother transitions

                let translate;
                if (index === 0) {
                  translate = useTransform(
                    scrollYProgress,
                    [0, end - transitionBuffer, end],
                    ["0%", "0%", "-400%"]
                  );
                } else if (index === 2) {
                  translate = useTransform(
                    scrollYProgress,
                    [start, start + transitionBuffer, 1],
                    ["-400%", "0%", "0%"]
                  );
                } else {
                  translate = useTransform(
                    scrollYProgress,
                    [
                      start,
                      start + transitionBuffer,
                      end - transitionBuffer,
                      end,
                    ],
                    ["-400%", "0%", "0%", "-400%"]
                  );
                }

                return (
                  <motion.img
                    key={index}
                    src={step.image.src}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ translateX: translate }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                );
              })}
            </div>

            {/* Step content on the right */}
            <div className="w-1/2 h-full relative flex flex-col items-center justify-center">
              {steps.map((step, index) => {
                const start = index / 3;
                const end = (index + 1) / 3;
                const transitionBuffer = 0.15; // Same buffer for consistency

                let translate, opacity;
                if (index === 0) {
                  translate = useTransform(
                    scrollYProgress,
                    [0, end - transitionBuffer, end],
                    ["0%", "0%", "400%"]
                  );
                  opacity = useTransform(
                    scrollYProgress,
                    [0, end - transitionBuffer - 0.05, end - 0.05],
                    [1, 1, 0]
                  );
                } else if (index === 2) {
                  translate = useTransform(
                    scrollYProgress,
                    [start, start + transitionBuffer, 1],
                    ["400%", "0%", "0%"]
                  );
                  opacity = useTransform(
                    scrollYProgress,
                    [start + 0.05, start + transitionBuffer + 0.05, 1],
                    [0, 1, 1]
                  );
                } else {
                  translate = useTransform(
                    scrollYProgress,
                    [
                      start,
                      start + transitionBuffer,
                      end - transitionBuffer,
                      end,
                    ],
                    ["400%", "0%", "0%", "400%"]
                  );
                  opacity = useTransform(
                    scrollYProgress,
                    [
                      start + 0.05,
                      start + transitionBuffer + 0.05,
                      end - transitionBuffer - 0.05,
                      end - 0.05,
                    ],
                    [0, 1, 1, 0]
                  );
                }

                return (
                  <motion.div
                    key={index}
                    style={{
                      translateX: translate,
                      opacity,
                      position: "absolute",
                      width: "100%",
                    }}
                    className="flex flex-col justify-center h-full"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <h3 className="text-6xl font-semibold text-black mb-2.5 font-basis33">
                      {step.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 font-neue-plak">
                      {step.description}
                    </p>
                    {index === 2 && (
                      <Button
                        variant="primary"
                        className="bg-primary w-fit text-white rounded-xl text-xl font-semibold flex items-center px-8 py-4"
                        onClick={handleTryItOut}
                      >
                        Try It Out <Sparkles className="w-6 h-6 ml-2" />
                      </Button>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Snap points for each section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="h-screen" style={{ scrollSnapAlign: "start" }} />
        <div className="h-screen" style={{ scrollSnapAlign: "start" }} />
        <div className="h-screen" style={{ scrollSnapAlign: "start" }} />
      </div>

      {showTryItOut && <TryItOut ref={tryItOutRef} />}
    </Section>
  );
};

export default HowItWorksSection;
