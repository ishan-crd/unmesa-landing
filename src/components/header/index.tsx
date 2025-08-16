"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "../assets/icons/logo";
import HeaderLink from "./headerLink";
import Button from "../common/button";
import Sparkles from "../assets/icons/sparkles";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const links = [
    { text: "How it works", href: "#hiw" },
    { text: "Unique features", href: "#features" },
    { text: "Testimonials", href: "#testimonials" },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
  };

  const handleTryDemo = () => {
    if (document.getElementById("try-it-out")) {
      document.getElementById("try-it-out")?.click();
    }
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className="flex z-[10000] absolute top-9 bg-[rgba(212,212,212,0.1)] py-2.5 px-4 md:px-7 justify-between rounded-[40px] items-center w-[90%] md:w-7/8 left-1/2 -translate-x-1/2 backdrop-blur-[54px] shadow-backdrop">
        <Logo className="w-auto h-11 lg:h-12" />

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-11">
          {links.map((link) => (
            <HeaderLink key={link.href} text={link.text} href={link.href} />
          ))}
        </div>

        {/* Desktop Try Demo Button */}
        <Button
          variant="primary"
          className="hidden md:flex text-white font-neue-plak lg:text-lg text-base px-3 py-1.5 gap-2.5 items-center rounded-3xl"
          onClick={handleTryDemo}
        >
          Try Demo <Sparkles className="w-5 h-5" />
        </Button>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={toggleDrawer}
          aria-label="Toggle menu"
        >
          {isDrawerOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-[9999] md:hidden"
            onClick={toggleDrawer}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-[10001] md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Logo />
                <button
                  onClick={toggleDrawer}
                  className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col p-6 space-y-6">
                {links.map((link) => (
                  <div key={link.href} onClick={handleLinkClick}>
                    <HeaderLink text={link.text} href={link.href} />
                  </div>
                ))}
              </div>

              {/* Try Demo Button */}
              <div className="mt-auto p-6">
                <Button
                  variant="primary"
                  className="w-full text-white font-neue-plak text-lg px-6 py-3 flex gap-2.5 items-center justify-center rounded-[18px]"
                  onClick={handleTryDemo}
                >
                  Try Demo <Sparkles className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
