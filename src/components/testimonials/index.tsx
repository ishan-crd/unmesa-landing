"use client";
import React from "react";
import { motion } from "framer-motion";
import Section from "../common/section";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Manager",
    content:
      "Unmesa helped me identify my productivity patterns. I discovered I'm most creative in the morning and now schedule important work accordingly. My efficiency increased by 40%!",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    content:
      "The AI insights are incredible. It noticed I was burning out before I did and suggested better work-life balance strategies. Haven't felt this energized in years.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Entrepreneur",
    content:
      "I love how my Wuboo companion celebrates small wins with me. Turning personal growth into a game made it so much more enjoyable and sustainable.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Graduate Student",
    content:
      "The daily reflection feature is a game-changer. Unmesa's AI picks up on patterns I never noticed and gives actionable advice that actually works.",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Freelance Designer",
    content:
      "Before Unmesa, I felt stuck in bad habits. Now I have clear insights into what triggers my procrastination and practical steps to overcome it.",
    rating: 5,
  },
  {
    name: "Alex Patel",
    role: "Product Manager",
    content:
      "The energy tracking helped me optimize my schedule perfectly. I know exactly when to tackle challenging tasks and when to take breaks. Pure magic!",
    rating: 5,
  },
  {
    name: "Rachel Green",
    role: "Yoga Instructor",
    content:
      "Unmesa understands my lifestyle better than I do. The personalized suggestions for maintaining mindfulness throughout busy days have been invaluable.",
    rating: 5,
  },
];

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0];
}) => (
  <div className="flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-lg mx-4 border border-gray-100">
    <div className="flex items-center mb-4">
      {[...Array(testimonial.rating)].map((_, i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
    <p className="text-gray-700 font-poppins text-base leading-relaxed mb-6">
      &quot;{testimonial.content}&quot;
    </p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-lg">
        {testimonial.name
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <div className="ml-4">
        <h4 className="font-neue-plak font-semibold text-gray-900">
          {testimonial.name}
        </h4>
        <p className="text-gray-500 text-sm font-poppins">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <Section
      className="bg-gray-50 py-20 h-fit overflow-hidden"
      id="testimonials"
    >
      <div className="w-full px-6 h-full flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-black font-neue-plak mb-6">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 font-poppins max-w-2xl mx-auto">
            Join thousands of people who are already growing 1% better every day
            with Unmesa
          </p>
        </div>

        <div className="relative w-screen flex-1 flex flex-col items-center justify-center">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex py-2"
              animate={{ x: [0, -100 * testimonials.length] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTestimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>

          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="ml-3">
              <p className="font-poppins text-sm text-gray-600">
                <span className="font-semibold text-gray-900">2,000+</span>{" "}
                happy users growing daily
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
