"use client";
import Image from "next/image";
import { useState } from "react";
import { WaitlistSection } from "./WaitlistSection";
import { WaitlistModal } from "./WaitlistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Hero Section - Your Original Design */}
      <div className="relative w-full h-screen bg-black bg-cover bg-center text-white overflow-hidden">
        <div className="relative z-10 flex justify-between items-center px-8 py-6">
          <Image
            src="/images/logo.svg"
            alt="Unmesa Logo"
            width={100}
            height={40}
          />
          <nav className="space-x-6 text-sm md:text-base font-medium">
            <a href="#features" className="hover:underline">
              Features
            </a>
            <a href="#app" className="hover:underline">
              App Preview
            </a>
            <a href="#about" className="hover:underline">
              About
            </a>
          </nav>
        </div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-[80%] px-8 gap-10">
          <div className="w-[320px] md:w-[380px]">
            <Image
              src="/images/phonescreen.png"
              alt="Phone Preview"
              width={330}
              height={640}
              className="rounded-xl shadow-2xl animate-[float-phone_3s_ease-in-out_infinite]"
            />
          </div>

          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center"><span className="animated-gradient">Discipline</span> enforced.
            </h1>
            <p className="text-lg md:text-xl mb-8 text-center">
              Coming Soon.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#4A9EFF] hover:bg-[#2B71FA] text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-lg shadow-[#4A9EFF]/20 text-sm"
              >
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="flex text-4xl md:text-5xl font-bold text-white mb-4 justify-center">
              Why Choose{" "}
              <span className="ml-3">
                <Image
                  src="/images/logo.svg"
                  alt="Unmesa Logo"
                  width={120}
                  height={80}
                />
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience productivity like never before with our comprehensive
              platform designed for focused individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-2xl border border-[#373737] hover:border-[#4A9EFF] transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Lock In Your Focus
              </h3>
              <p className="text-gray-400">
                Set your essential tasks for the day and lock yourself in. No distractions, just progress.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-[#373737] hover:border-[#4A9EFF] transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Track Your Wins
              </h3>
              <p className="text-gray-400">
                Check if your tasks are done and receive your verdict at the end of each day.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-[#373737] hover:border-[#4A9EFF] transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Daily Reflection
              </h3>
              <p className="text-gray-400">
                Ask yourself: &quot;If today is a win, what would it look like?&quot; Set your intentions clearly.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-[#373737] hover:border-[#4A9EFF] transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Get Your Verdict
              </h3>
              <p className="text-gray-400">
                Receive honest feedback on your day. Did you focus on what matters?
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-[#373737] hover:border-[#4A9EFF] transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Stay Locked In
              </h3>
              <p className="text-gray-400">
                Block distracting apps and websites to stay focused throughout your day.
              </p>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-[#373737] hover:border-[#4A9EFF] transition-all hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA] rounded-2xl flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Minimalistic Design
              </h3>
              <p className="text-gray-400">
                Clean, focused interface that helps you concentrate on what&apos;s essential without distractions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section id="app" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              App <span className="text-[#4A9EFF]">Preview</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Take a look at the sleek interface and powerful features that make
              Unmesa the ultimate productivity companion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Home Screen */}
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src="/images/phone/dashboard.png"
                  alt="Locked In Screen"
                  width={300}
                  height={600}
                  className="w-full h-auto bg-transparent"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mt-6">
                Dashboard
              </h3>
              <p className="text-gray-400 mt-2">
                Set your essential tasks for the day
              </p>
            </div>

            {/* Filters Screen */}
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src="/images/phone/truth.png"
                  alt="Task Check Screen"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mt-6">
                Track Progress
              </h3>
              <p className="text-gray-400 mt-2">
                Check if your tasks are completed
              </p>
            </div>

            {/* Ticket Screen */}
            <div className="text-center group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src="/images/phone/verdict.png"
                  alt="Verdict Screen"
                  width={300}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mt-6">
                Daily Verdict
              </h3>
              <p className="text-gray-400 mt-2">
                Receive feedback on your day
              </p>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Everything you need to focus on what matters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#4A9EFF] rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Task Lock-In
                    </h4>
                    <p className="text-gray-400">
                      Set your essential tasks and lock yourself in for the day
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#4A9EFF] rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      Daily Verdict
                    </h4>
                    <p className="text-gray-400">
                      Receive honest feedback on your day at 10pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-[#4A9EFF] rounded-full flex items-center justify-center mt-1 mr-4">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      App Blocking
                    </h4>
                    <p className="text-gray-400">
                      Block distracting apps and websites to stay focused
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/boywithcrown1.png"
                  alt="App Features"
                  width={400}
                  height={800}
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="flex text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="ml-3">
                  <Image
                    src="/images/logo.svg"
                    alt="Unmesa Logo"
                    width={120}
                    height={80}
                  />
                </span>
              </h2>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                Unmesa is revolutionizing productivity by helping you focus on what truly matters. 
                Our minimalistic approach cuts through the noise, allowing you to lock in your 
                essential tasks and achieve your goals with clarity and purpose.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Whether you&apos;re a student, professional, or entrepreneur, Unmesa helps you 
                stay locked in on your priorities. Join thousands of users who are already 
                experiencing productivity like never before.
              </p>
              {/* <button className="bg-gradient-to-r from-[#4A9EFF] to-[#2B71FA] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 shadow-lg">
                Get Early Access
              </button> */}
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="/images/lockpixelated.png"
                  alt="About Unmesa"
                  width={320}
                  height={640}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Trusted by Focused Individuals Everywhere
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join a growing community of productivity enthusiasts who choose Unmesa
              for their daily focus and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#4A9EFF] mb-2">
                50K+
              </div>
              <div className="text-gray-400 font-medium">Registered Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#4A9EFF] mb-2">
                1M+
              </div>
              <div className="text-gray-400 font-medium">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#4A9EFF] mb-2">
                95%
              </div>
              <div className="text-gray-400 font-medium">Focus Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#4A9EFF] mb-2">
                4.9★
              </div>
              <div className="text-gray-400 font-medium">App Rating</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <WaitlistSection />

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-[#373737]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold mb-4">
                <Image
                  src="/images/logo.svg"
                  alt="Unmesa Logo"
                  width={120}
                  height={40}
                />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Focus on the essential. Lock in your tasks. Achieve your goals.
                A minimalistic productivity app designed for clarity and purpose.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#4A9EFF] transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#4A9EFF] transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#4A9EFF] transition-colors cursor-pointer">
                  <span className="text-sm">i</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#4A9EFF] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#4A9EFF] transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#4A9EFF] transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#4A9EFF] transition-colors"
                  >
                    Updates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#4A9EFF] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#4A9EFF] transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#4A9EFF] transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#4A9EFF] transition-colors"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Unmesa. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              Made with ❤️ for focused individuals
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
