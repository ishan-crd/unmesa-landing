"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import Section from "../common/section";
import DefaultWuboo from "../assets/wuboos/default";
import YogaWuboo from "../assets/wuboos/yogaWuboo";
import SelectedWubooCard from "./SelectedWubooCard";
import Button from "../common/button";
import { ArrowRightIcon, ArrowLeftIcon, RotateCcw } from "lucide-react";
import Sparkles from "../assets/icons/sparkles";
import ProductivityCard from "./ProductivityLevelCard";

const HowItWorks = () => {
  const [selectedWuboo, setSelectedWuboo] = useState<"yoga" | "default">(
    "default"
  );
  const [step, setStep] = useState(1);
  const [dayLogText, setDayLogText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelect = (type: "yoga" | "default") => {
    setSelectedWuboo(type);
  };

  const mockAnalyzeDay = async (dayLog: string) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Analysis complete");
      }, 5000);
    });
  };

  const handleGetInsights = async () => {
    if (!dayLogText.trim()) return;

    setIsAnalyzing(true);
    setStep(3);

    try {
      await mockAnalyzeDay(dayLogText);
      setStep(4);
    } catch (error) {
      console.error("Analysis failed:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const WubooImage = selectedWuboo === "yoga" ? YogaWuboo : DefaultWuboo;

  return (
    <Section className="pt-10 pb-6 px-28 overflow-hidden flex flex-col items-center">
      {/* Heading always stays - structure remains constant */}
      <h1 className="text-4xl font-basis33 text-black text-center mb-8">
        <div className="step-indicator">
          <Typewriter
            key={`step-${step}`} // Force re-render when step changes
            onInit={(typewriter) => {
              typewriter
                .typeString(`Step ${step}:`)
                .callFunction(() => {
                  // Remove cursor after typing is done
                  const cursor = document.querySelector(".Typewriter__cursor");
                  if (cursor) cursor.remove();
                })
                .start();
            }}
            options={{
              delay: 50,
              cursor: "|",
            }}
          />
        </div>
        <h3 className="text-8xl leading-[90%]">
          <div className="main-text">
            <Typewriter
              key={`main-${step}`} // Force re-render when step changes
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    step === 1
                      ? "Choose your AI Companion"
                      : step === 2
                      ? "Enter your Daily Log"
                      : step === 3
                      ? "AI Magic in Progress"
                      : "Your Personalized Insights"
                  )
                  .callFunction(() => {
                    // Remove cursor after typing is done
                    const cursor = document.querySelector(
                      ".Typewriter__cursor"
                    );
                    if (cursor) cursor.remove();
                  })
                  .start();
              }}
              options={{
                delay: 60,
                cursor: "|",
              }}
            />
          </div>
        </h3>
      </h1>

      <AnimatePresence mode="wait">
        {/* STEP 1 */}
        {step === 1 ? (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-col items-center justify-start gap-8"
          >
            <div className="flex justify-center gap-36 w-full items-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-10"
              >
                {/* Wuboo selection grid */}
                <div className="flex gap-20">
                  <div
                    className="flex flex-col gap-2 justify-start items-center cursor-pointer"
                    onClick={() => handleSelect("default")}
                  >
                    <h5 className="text-[3.1rem] font-basis33 text-black">
                      Wuboo
                    </h5>
                    <DefaultWuboo className="w-36 h-36" />
                  </div>
                  <div
                    className="flex flex-col gap-2 justify-start items-center cursor-pointer"
                    onClick={() => handleSelect("yoga")}
                  >
                    <h5 className="text-[3.1rem] font-basis33 text-black">
                      Wuboo
                    </h5>
                    <YogaWuboo className="w-36 h-36" />
                  </div>
                </div>
                <div className="flex gap-20">
                  <div
                    className="flex flex-col gap-2 justify-start items-center cursor-pointer"
                    onClick={() => handleSelect("default")}
                  >
                    <h5 className="text-[3.1rem] font-basis33 text-black">
                      Wuboo
                    </h5>
                    <DefaultWuboo className="w-36 h-36" />
                  </div>
                  <div
                    className="flex flex-col gap-2 justify-start items-center cursor-pointer"
                    onClick={() => handleSelect("yoga")}
                  >
                    <h5 className="text-[3.1rem] font-basis33 text-black">
                      Wuboo
                    </h5>
                    <YogaWuboo className="w-36 h-36" />
                  </div>
                </div>
              </motion.div>

              {/* Selected Wuboo card */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SelectedWubooCard
                  wubooType={selectedWuboo}
                  name="Wuboo"
                  dob="March 21 2006"
                  specialDance="Monkey Jump"
                  personality="Fun"
                  age="5"
                />
              </motion.div>
            </div>

            <div className="flex justify-end self-end gap-4">
              <Button
                variant="primary"
                className="text-white font-neue-plak font-semibold text-xl px-[22px] py-[7px] flex gap-2.5 items-center rounded-[18px]"
                onClick={() => setStep(2)}
              >
                Continue <ArrowRightIcon />
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="step2-3-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full flex flex-col items-center justify-center gap-10"
          >
            <div className="flex justify-center items-center gap-20 relative flex-1 w-full">
              {/* Wuboo + Speech bubble - always visible, just changes position and scale */}
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: step === 3 ? "36.5px" : 0,
                  opacity: 1,
                  y: step === 3 ? "15px" : 0,
                  scale: step === 3 ? 1.3 : 1,
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="relative flex flex-col items-center"
              >
                {/* Speech bubble */}
                <div className="absolute w-50 top-0 -translate-y-[calc(100%+10px)] text-black left-1/2 -translate-x-1/2 bg-[#F7F7F7] border border-gray-300 rounded-xl px-4 py-2 shadow-md">
                  <Typewriter
                    key={step} // Force re-render when step changes
                    onInit={(typewriter) => {
                      if (step === 3) {
                        typewriter
                          .deleteAll()
                          .typeString("Analyzing your day with AI magic...")
                          .pauseFor(1500)
                          .deleteChars(3)
                          .typeString("✨")
                          .pauseFor(1000)
                          .deleteChars(1)
                          .typeString("...")
                          .callFunction(() => {
                            // Remove cursor after typing is done
                            const cursor = document.querySelector(
                              ".Typewriter__cursor"
                            );
                            if (cursor) cursor.remove();
                          })
                          .start();
                      } else if (step === 2) {
                        typewriter
                          .typeString(
                            "Hey! My name's Wuboo. Tell me about your day!"
                          )
                          .callFunction(() => {
                            // Remove cursor after typing is done
                            const cursor = document.querySelector(
                              ".Typewriter__cursor"
                            );
                            if (cursor) cursor.remove();
                          })
                          .start();
                      } else {
                        typewriter
                          .deleteAll()
                          .typeString(
                            "Your productivity levels are low. But we can work on that"
                          )
                          .callFunction(() => {
                            const cursor = document.querySelector(
                              ".Typewriter__cursor"
                            );
                            if (cursor) cursor.remove();
                          })
                          .start();
                      }
                    }}
                    options={{
                      delay: 50,
                      cursor: "|",
                    }}
                  />
                  {/* Arrow */}
                  <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#F7F7F7] border-l border-b border-gray-300 -rotate-45"></div>
                </div>
                <WubooImage className="w-50 h-50" />
              </motion.div>

              {/* Input + Button - conditionally rendered and animated */}
              {/* {step === 2 && ( */}
              <motion.div
                initial={{ x: 0, opacity: 1 }}
                animate={{
                  x: step !== 2 ? "200vw" : 0,
                  opacity: step !== 2 ? 0 : 1,
                  width: step !== 2 ? "0" : "50%",
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="flex flex-col w-1/2 h-72"
              >
                <textarea
                  placeholder="Tell me about your day..."
                  value={dayLogText}
                  onChange={(e) => setDayLogText(e.target.value)}
                  className="w-full h-full active:outline-none focus:outline-none font-montserrat text-2xl font-light border border-[#CECECE] text-black bg-[#FDFDFD] rounded-2xl resize-none p-4"
                />
                <Button
                  variant="primary"
                  className="mt-4 text-white w-fit font-neue-plak font-normal text-xl px-[22px] py-[7px] rounded-[18px] flex gap-2 items-center"
                  onClick={handleGetInsights}
                  disabled={!dayLogText.trim()}
                >
                  Get Insights <Sparkles className="w-6 h-6" />
                </Button>
              </motion.div>
              <motion.div
                initial={{ x: "200vw", opacity: 0 }}
                animate={{
                  x: step !== 4 ? "calc(200vw)" : 0,
                  opacity: step !== 4 ? 0 : 1,
                  width: step !== 4 ? "0" : "50%",
                  height: step !== 4 ? "0" : "fit-content",
                }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="flex flex-col w-1/2 h-fit"
              >
                <ProductivityCard />
              </motion.div>
              {/* )} */}
            </div>

            {(step === 2 || step === 4) && (
              <div className="flex justify-between w-full">
                <Button
                  variant="secondary"
                  className="font-neue-plak text-primary font-semibold text-xl w-fit px-[22px] py-[7px] flex gap-2.5 items-center rounded-[18px]"
                  onClick={() => setStep(1)}
                  disabled={isAnalyzing}
                >
                  {step === 2 ? (
                    <>
                      <ArrowLeftIcon /> Go Back
                    </>
                  ) : (
                    <>
                      Start Over <RotateCcw />
                    </>
                  )}
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default HowItWorks;
