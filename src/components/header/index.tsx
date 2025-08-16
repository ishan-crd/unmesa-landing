"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/icons/logo";
import HeaderLink from "./headerLink";
import Button from "../common/button";
import Sparkles from "../assets/icons/sparkles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { text: "How it works", href: "#hiw" },
    { text: "Unique features", href: "#features" },
    { text: "Testimonials", href: "#testimonials" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => setIsMenuOpen(false);

  const handleTryDemo = () => {
    document.getElementById("try-it-out")?.click();
    setIsMenuOpen(false);
  };

  return (
    <div className="flex z-[10000] fixed md:absolute top-0 md:top-9 bg-[rgba(212,212,212,0.1)] justify-between flex-col rounded-none md:rounded-[40px] items-center w-full md:w-[90%] left-1/2 -translate-x-1/2 backdrop-blur-[54px] shadow-backdrop">
      <div className="flex items-center justify-between w-full py-2.5 px-4 md:px-7 z-[10000000000]">
        <Logo className="w-auto h-13 md:h-11 lg:h-12" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-11">
          {links.map((link) => (
            <HeaderLink key={link.href} text={link.text} href={link.href} />
          ))}
        </div>

        {/* Desktop Try Demo */}
        <Button
          variant="primary"
          className="hidden md:flex text-white font-neue-plak lg:text-lg text-base px-3 py-1.5 gap-2.5 items-center rounded-3xl"
          onClick={handleTryDemo}
        >
          Try Demo <Sparkles className="w-5 h-5" />
        </Button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-inherit backdrop-blur-3xl rounded-b-2xl  md:hidden z-[-1] overflow-hidden"
          >
            <div className="p-6 flex flex-col gap-6">
              {/* Navigation Links */}
              <div className="flex flex-col gap-6">
                {links.map((link) => (
                  <div key={link.href} onClick={handleLinkClick}>
                    <HeaderLink text={link.text} href={link.href} />
                  </div>
                ))}
              </div>

              {/* Try Demo Button */}
              <Button
                variant="primary"
                className="w-full text-white font-neue-plak text-lg px-6 py-3 flex gap-2.5 items-center justify-center rounded-[18px]"
                onClick={handleTryDemo}
              >
                Try Demo <Sparkles className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
