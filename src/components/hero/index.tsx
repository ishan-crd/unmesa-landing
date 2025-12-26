"use client";
import React, { useEffect, useState } from "react";
import Section from "../common/section";
import Button from "../common/button";
import { ArrowRightIcon, PartyPopper } from "lucide-react";
import FloatingBubblesBG from "../common/floatingBubbles";
import DefaultWubooWithHalo from "../assets/wuboos/haloDefault";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const {
      data: { id },
    } = await axios.post("/api/waitlist", { email });
    localStorage.setItem("waitlistSignupId", id);
    setSubmitted(true);
    setLoading(false);
  };
  useEffect(() => {
    const waitlistSignupId = localStorage.getItem("waitlistSignupId");
    if (waitlistSignupId) {
      setSubmitted(true);
    }
  }, []);
  return (
    <Section className="relative pt-30 flex flex-col items-center justify-center">
      <FloatingBubblesBG />
      <div className="flex-col flex items-center justify-center gap-14 w-fit max-w-[90%] mx-auto">
        <div className="flex-col flex items-center justify-center gap-11 text-[#313030]">
          <h1 className="font-sans text-center max-[450px]:!text-[3.8rem] text-[5.7rem] md:text-[7.1rem] font-semibold leading-[1.1]">
            <span className="flex justify-center items-center gap-2">
              Your AI{" "}
              <DefaultWubooWithHalo className="inline-block w-40 h-40 max-[450px]:!w-28 max-[450px]:!h-28 max-[450px]:!-mt-6 -mt-9" />
            </span>{" "}
            Growth Companion
          </h1>
          <p className="font-normal text-xl font-montserrat text-center text-black">
            Unmesa helps you journal your day and gives <br /> AI powered
            suggestions to help you grow 1% every day.
          </p>
        </div>
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              key="waitlist-form"
              initial={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 200, scale: 0.8 }} // whoosh to the right
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center bg-white shadow-lg text-black rounded-full overflow-hidden w-fit max-w-[90%]"
            >
              <input
                type="email"
                placeholder="Email"
                className="flex-1 rounded-l-full h-full bg-transparent border-2 border-[rgba(0,0,0,0.2)] px-4 pr-5 py-3 max-w-[250px] placeholder-gray-400 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="primary"
                className="text-white text-sm h-full font-neue-plak -ml-5 flex gap-1 [450px]:gap-2.5 items-center w-fit"
                disabled={loading}
              >
                <span className="max-[450px]:!hidden block w-max">
                  Join The Waitlist
                </span>
                <span className="max-[450px]:!block hidden w-max">Join</span>
                <ArrowRightIcon />
              </Button>
            </motion.form>
          ) : (
            <motion.div
              key="waitlist-success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center justify-center gap-2 from-secondary to-primary bg-gradient-to-r text-white font-neue-plak text-base md:text-lg rounded-full px-6 py-3 shadow-lg w-fit max-w-[90%]"
            >
              You&apos;re on the waitlist! <PartyPopper />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default HeroSection;
