"use client";
import React from "react";
import Section from "../common/section";
import Button from "../common/button";
import { ArrowRightIcon } from "lucide-react";
import DefaultWuboo from "../assets/wuboos/default";
import FloatingBubblesBG from "../common/floatingBubbles";

const HeroSection = () => {
  return (
    <Section className="relative pt-30 flex flex-col items-center justify-center">
      <FloatingBubblesBG />
      <div className="flex-col flex items-center justify-center gap-14 w-fit max-w-[90%] mx-auto">
        <div className="flex-col flex items-center justify-center gap-11 text-[#313030]">
          <h1 className="font-geist text-center text-[7.1rem] font-semibold leading-[1.1]">
            <span className="flex justify-center items-center gap-2">
              Your AI <DefaultWuboo className="inline-block w-40 h-40" />
            </span>{" "}
            Growth Companion
          </h1>
          <p className="font-normal text-xl font-montserrat text-center text-black">
            Unmesa helps you journal your day and gives <br /> AI powered
            suggestions to help you grow 1% every day.
          </p>
        </div>
        <Button
          variant="primary"
          className="text-white text-xl font-neue-plak flex gap-2.5 items-center w-fit"
          onClick={() => {}}
        >
          Try For Free <ArrowRightIcon />
        </Button>
      </div>
    </Section>
  );
};

export default HeroSection;
