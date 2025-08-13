"use client";
import React from "react";
import Logo from "../assets/icons/logo";
import HeaderLink from "./headerLink";
import Button from "../common/button";
import { ArrowRightIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex z-[10000] absolute top-9 bg-[rgba(212,212,212,0.1)] py-2.5 px-7 justify-between rounded-[40px] items-center w-7/8 left-1/2 -translate-x-1/2 backdrop-blur-[54px] shadow-backdrop">
      <Logo />
      <div className="flex gap-11">
        <HeaderLink text="Pricing" href="/" />
        <HeaderLink text="Features" href="/about" />
        <HeaderLink text="Team" href="/contact" />
        <HeaderLink text="Docs" href="/contact" />
      </div>
      <Button
        variant="primary"
        className="text-white font-neue-plak text-[1.1rem] px-[22px] py-[7px] flex gap-2.5 items-center rounded-[18px]"
        onClick={() => {}}
      >
        Try For Free <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default Header;
