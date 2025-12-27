"use client";
import React, { useState, useEffect, forwardRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import DefaultWuboo from "../assets/wuboos/default";
import YogaWuboo from "../assets/wuboos/yogaWuboo";
import SelectedWubooCard from "./SelectedWubooCard";
import Button from "../common/button";
import { ArrowRightIcon, ArrowLeftIcon, RotateCcw } from "lucide-react";
import Sparkles from "../assets/icons/sparkles";
import ProductivityCard from "./ProductivityLevelCard";
import axios from "axios";
import { cn } from "@/utils";

export type Mascot = {
  id: number;
  name: string;
  personality: string;
  motivationStyle: string;
  dob: string;
};

export enum LandingPageInsightsGeneratorStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
}

export const MASCOT_SVGS = [DefaultWuboo, YogaWuboo, DefaultWuboo, YogaWuboo];

export type LandingPageInsight = {
  productivityLevel: number;
  motivationalLine: string;
  isObjectionable: boolean;
  status: LandingPageInsightsGeneratorStatus;
  motivationalSummary: string;
};

const TryItOut = forwardRef<HTMLDivElement>((_, ref) => {
  const [selectedMascotId, setSelectedMascotId] = useState<number>(1);
  const [mascots, setMascots] = useState<Mascot[]>([]);
  const [step, setStep] = useState(1);
  const [dayLogText, setDayLogText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [insightsId, setInsightsId] = useState<string | null>(null);
  const [insights, setInsights] = useState<LandingPageInsight | null>(null);

  useEffect(() => {
    const fetchMascots = async () => {
      try {
        const { data } = await axios.get<Mascot[]>("/api/mascots");
        setMascots(data);
      } catch (error) {
        console.error("Error fetching mascots:", error);
        // Set empty array if fetch fails to prevent UI errors
        setMascots([]);
      }
    };
    fetchMascots();
  }, []);

  const handleSelect = (id: number) => {
    setSelectedMascotId(id);
  };

  useEffect(() => {
    if (!insightsId) return;

    const fetchInsights = async () => {
      try {
        const { data } = await axios.get(`/api/insights/${insightsId}`);

        if (data.status !== LandingPageInsightsGeneratorStatus.PENDING) {
          setInsights(data);
          setIsAnalyzing(false);
          setStep(4);
          clearInterval(intervalId);
        }
      } catch (err) {
        console.error("Error fetching insights:", err);
        clearInterval(intervalId);
      }
    };

    fetchInsights();

    const intervalId: NodeJS.Timeout = setInterval(fetchInsights, 2000);

    return () => clearInterval(intervalId);
  }, [insightsId]);

  const mockAnalyzeDay = async (dayLog: string) => {
    const response = await axios.post("/api/insights", {
      dayLog,
      mascotId: mascots[0].id,
    });
    setInsightsId(response.data);
  };

  const handleGetInsights = async () => {
    if (!dayLogText.trim()) return;

    setIsAnalyzing(true);
    setStep(3);

    try {
      await mockAnalyzeDay(dayLogText);
    } catch (error) {
      console.error("Analysis failed:", error);
    }
  };

  const MascotImage = MASCOT_SVGS[selectedMascotId - 1];

  return (
    // <Section className="pt-10 pb-6 px-28 overflow-hidden flex flex-col items-center">
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      ref={ref}
      animate={{ height: "100vh", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="pt-10 max-md:min-h-fit px-6 md:px-28 w-full overflow-hidden flex flex-col items-center justify-around"
    >
      {/* Heading always stays - structure remains constant */}
      <h1 className="max-md:text-2xl text-4xl font-basis33 text-black text-center mb-8">
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
        <h3 className="max-md:text-6xl text-8xl leading-[90%]">
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
                className="grid grid-rows-2 max-md:grid-cols-6 grid-cols-2 gap-x-3 gap-y-8 md:gap-20"
              >
                {/* Wuboo selection grid */}
                {mascots.map((mascot, index) => {
                  const MascotImage = MASCOT_SVGS[mascot.id - 1];
                  return (
                    <div
                      key={mascot.id}
                      className={`flex flex-col gap-2 justify-start items-center cursor-pointer ${
                        index === 1
                          ? "max-md:col-start-1 max-md:row-start-1"
                          : index === 2
                          ? "max-md:col-start-1 max-md:row-start-2"
                          : index === 3
                          ? "max-md:col-start-6 max-md:row-start-1"
                          : "max-md:col-start-6 max-md:row-start-2"
                      }`}
                      onClick={() => handleSelect(mascot.id)}
                    >
                      <h5 className="text-[3.1rem] max-md:text-2xl font-basis33 text-black max-[450px]:!text-base max-w-full">
                        {mascot.name}
                      </h5>
                      <MascotImage className="w-36 h-36 max-md:w-28 max-md:h-28 max-[450px]:!w-20 max-[450px]:!h-20" />
                    </div>
                  );
                })}
                <div className="md:hidden col-start-2 flex justify-center items-center col-end-6 row-start-1 row-end-3">
                  {mascots.length > 0 && (
                    <SelectedWubooCard mascot={mascots[selectedMascotId - 1]} />
                  )}
                </div>
              </motion.div>

              {/* Selected Wuboo card */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="md:block hidden "
              >
                {mascots.length > 0 && (
                  <SelectedWubooCard mascot={mascots[selectedMascotId - 1]} />
                )}
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
            className="w-full md:h-full max-md:flex-1 flex flex-col items-center justify-center max-md:gap-4 gap-10"
          >
            <div
              className={cn(
                "flex justify-center items-center gap-20 max-md:gap-8 max-md:flex-col relative md:flex-1 w-full",
                step === 4 ? "max-md:mt-25" : ""
              )}
            >
              {/* Wuboo + Speech bubble - always visible, just changes position and scale */}
              <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  opacity: 1,
                  scale: step === 3 ? 1.3 : 1,
                  x: step === 3 ? 0 : 0,
                  y: step === 3 ? 0 : 0,
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
                            `Hey! My name's ${
                              mascots[selectedMascotId - 1].name
                            }. Tell me about your day!`
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
                            insights?.isObjectionable
                              ? "Your log contained objectionable content. Please avoid this."
                              : insights?.motivationalSummary ||
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
                <MascotImage
                  className={cn(
                    "w-50 h-50",
                    step === 3
                      ? "max-[450px]:!w-40 max-[450px]:!h-40"
                      : "max-[450px]:!w-30 max-[450px]:!h-30 max-md:w-36 max-md:h-36"
                  )}
                />
              </motion.div>

              {/* Input + Button - conditionally rendered and animated */}
              {/* {step === 2 && ( */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ x: "200vw", opacity: 0, width: 0 }}
                  animate={{ x: 0, opacity: 1, width: "100%" }}
                  exit={{ x: "200vw", opacity: 0, width: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="flex max-w-[max(500px,50%)] flex-col h-72"
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
              )}
              {step === 4 && (
                <motion.div
                  initial={{ x: "200vw", opacity: 0, width: 0, height: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    width: "100%",
                    height: "fit-content",
                  }}
                  exit={{ x: "200vw", opacity: 0, width: 0, height: 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="flex flex-col w-full md:max-w-1/2 md:w-1/2 h-fit"
                >
                  {insights &&
                    (insights.isObjectionable ? (
                      <div className="w-full p-6 bg-red-50 border border-red-300 rounded-2xl text-center shadow-md">
                        <h2 className="text-2xl font-bold text-red-600 mb-2">
                          ⚠️ Objectionable Content Detected
                        </h2>
                        <p className="text-red-700 font-medium">
                          The log you entered was flagged as objectionable.
                          Please refrain from entering such content, else we may
                          have to contact the proper authorities.
                        </p>
                      </div>
                    ) : (
                      <ProductivityCard insight={insights} />
                    ))}
                </motion.div>
              )}
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
      {/* </Section> */}
    </motion.div>
  );
});

TryItOut.displayName = "TryItOut";

export default TryItOut;
