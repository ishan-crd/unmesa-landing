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
import useMediaQuery from "@/hooks/useMediaQuery";

const steps = [
  {
    title: "Log Your Day",
    description:
      "Quickly jot down your activities, habits, and mood — no hassle, just clarity.",
    image: Step1Img,
  },
  {
    title: "Get Actionable Insights",
    description:
      "AI reviews your day and delivers clear, personalized tips to boost your focus and productivity.",
    image: Step2Img,
  },
  {
    title: "Achieve Your Goals",
    description:
      "Turn insights into action plans and watch yourself move closer to your goals, day by day.",
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

  const isMobile = useMediaQuery("(max-width: 680px)");
  const isTablet = useMediaQuery("(min-width: 681px) and (max-width: 1100px)");

  // Pre-calculate all transforms for each step - hooks must be called at top level
  const transitionBuffer = 0.15;
  
  // Step 0 transforms
  const step0Start = 0;
  const step0End = 1 / 3;
  const step0Translate = useTransform(
    scrollYProgress,
    [step0Start, step0End - transitionBuffer, step0End],
    ["0%", "0%", "-250%"]
  );
  const step0Opacity = useTransform(
    scrollYProgress,
    [step0Start, step0End - transitionBuffer - 0.05, step0End - 0.05],
    [1, 1, 0]
  );

  // Step 1 transforms
  const step1Start = 1 / 3;
  const step1End = 2 / 3;
  const step1Translate = useTransform(
    scrollYProgress,
    [step1Start, step1Start + transitionBuffer, step1End - transitionBuffer, step1End],
    ["250%", "0%", "0%", "-250%"]
  );
  const step1Opacity = useTransform(
    scrollYProgress,
    [
      step1Start + 0.05,
      step1Start + transitionBuffer + 0.05,
      step1End - transitionBuffer - 0.05,
      step1End - 0.05,
    ],
    [0, 1, 1, 0]
  );

  // Step 2 transforms
  const step2Start = 2 / 3;
  const step2Translate = useTransform(
    scrollYProgress,
    [step2Start, step2Start + transitionBuffer, 1],
    ["250%", "0%", "0%"]
  );
  const step2Opacity = useTransform(
    scrollYProgress,
    [step2Start + 0.05, step2Start + transitionBuffer + 0.05, 1],
    [0, 1, 1]
  );

  // Create stepTransforms array from the hooks
  const stepTransforms = [
    { translate: step0Translate, opacity: step0Opacity },
    { translate: step1Translate, opacity: step1Opacity },
    { translate: step2Translate, opacity: step2Opacity },
  ];

  const handleTryItOut = () => {
    if (showTryItOut) {
      tryItOutRef.current?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    setShowTryItOut(true);
    setTimeout(() => {
      tryItOutRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  return (
    <Section
      className={cn("relative h-fit bg-gray-50", showTryItOut ? "pb-6" : "")}
      style={{ scrollSnapType: "y mandatory" }}
      id="hiw"
    >
      {/* Desktop / Tablet sticky version */}
      {!isMobile && (
        <>
          <div ref={sectionRef} className="h-[400vh] w-full relative">
            <div
              className="sticky py-10 top-0 h-screen flex flex-col items-center justify-between"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Main heading */}
              <h2 className="text-6xl font-bold text-black text-center font-neue-plak">
                How It Works
              </h2>

              {/* Three column layout: Left Text | Phone | Right Text */}
              <div className="flex items-center justify-center w-full max-lg:w-full max-w-7xl mx-auto px-8">
                {/* Phone mockup in center */}
                <div className="w-[450px] max-[450px]:!w-[300px] max-lg:w-[90%] flex justify-center">
                  <div className="w-full h-[80vh] relative">
                    {steps.map((step, index) => {
                      const { translate, opacity } = stepTransforms[index];
                      return (
                        <motion.div
                          className={cn(
                            "absolute flex items-center justify-start gap-10 inset-0 translate-x-10 w-fit h-full max-[450px]:!translate-x-0 max-md:translate-x-2.5",
                            index % 2 === 0 ? "flex-row-reverse" : ""
                          )}
                          key={index}
                          style={{ translateX: translate }}
                        >
                          {/* Left text */}
                          {!isTablet && (
                            <motion.div
                              key={`left-${index}`}
                              style={{ opacity }}
                              className="absolute z-20 text-right w-[30vmax] min-w-min top-[35%] left-0 -translate-x-full -translate-y-1/2 flex flex-col items-start justify-center"
                            >
                              <h3 className="text-8xl font-semibold text-black mb-4 font-basis33 w-full">
                                {step.title}
                              </h3>
                            </motion.div>
                          )}
                          {isTablet && (
                            <motion.div
                              key={`left-${index}`}
                              style={{ opacity }}
                              className="w-[300px]"
                            >
                              <h3 className="text-8xl font-semibold text-black mb-4 font-basis33 w-full">
                                {step.title}
                              </h3>
                              <p className="text-2xl text-gray-700 leading-relaxed font-neue-plak">
                                {step.description}
                              </p>
                              {index === 2 && (
                                <Button
                                  variant="primary"
                                  id="try-it-out"
                                  className="bg-primary w-max text-white rounded-xl text-xl font-semibold flex items-center px-8 py-4 mt-4"
                                  onClick={handleTryItOut}
                                >
                                  Try It Out
                                  <Sparkles className="w-6 h-6 ml-2" />
                                </Button>
                              )}
                            </motion.div>
                          )}
                          {/* Phone image */}
                          <img
                            src={step.image.src}
                            className="h-full relative z-30 w-fit object-contain max-lg:h-[90%]"
                            alt={step.title}
                          />

                          {/* Right text */}
                          {!isTablet && (
                            <motion.div
                              key={`right-${index}`}
                              style={{ opacity }}
                              className="absolute w-[20vmax] z-20 min-w-min top-[65%] right-[20%] translate-x-full -translate-y-1/2 text-left flex flex-col items-start justify-center"
                            >
                              <p className="text-2xl text-gray-700 leading-relaxed mb-6 font-neue-plak">
                                {step.description}
                              </p>
                              {index === 2 && (
                                <Button
                                  variant="primary"
                                  id="try-it-out"
                                  className="bg-primary w-max text-white rounded-xl text-xl font-semibold flex items-center px-8 py-4 mt-4"
                                  onClick={handleTryItOut}
                                >
                                  Try It Out
                                  <Sparkles className="w-6 h-6 ml-2" />
                                </Button>
                              )}
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
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
        </>
      )}

      {/* Mobile stacked version */}
      {isMobile && (
        <div className="flex flex-col gap-20 px-6 py-12">
          <h2 className="text-6xl font-bold text-black text-center font-neue-plak">
            How It Works
          </h2>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <h3 className="text-6xl font-semibold text-black font-basis33 text-center">
                {step.title}
              </h3>
              <img
                src={step.image.src}
                className="w-[80%] max-w-[300px] object-contain"
                alt={step.title}
              />
              <p className="text-xl text-gray-700 leading-relaxed font-neue-plak text-center">
                {step.description}
              </p>
              {index === 2 && (
                <Button
                  variant="primary"
                  id="try-it-out"
                  className="bg-primary text-white rounded-xl mt-3 text-lg font-semibold flex items-center px-6 py-3"
                  onClick={handleTryItOut}
                >
                  Try It Out
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      )}

      {showTryItOut && <TryItOut ref={tryItOutRef} />}
    </Section>
  );
};

export default HowItWorksSection;
