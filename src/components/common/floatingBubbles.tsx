"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/utils";

type Ball = {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  gradientClass: string;
  moon?: Moon; // optional now
};

type Moon = {
  radius: number;
  angle: number;
  angleSpeed: number;
  gradientClass: string;
};

const gradients = [
  "bg-gradient-to-r from-primary to-secondary",
  "bg-gradient-to-l from-primary to-secondary",
  "bg-gradient-to-t from-primary to-secondary",
  "bg-gradient-to-b from-primary to-secondary",
  "bg-gradient-to-tr from-primary to-secondary",
  "bg-gradient-to-tl from-primary to-secondary",
  "bg-gradient-to-br from-primary to-secondary",
  "bg-gradient-to-bl from-primary to-secondary",
];

const vhToPx = (vh: number, containerHeight?: number) =>
  (vh / 100) * (containerHeight || window.innerHeight);

const FloatingBubblesBG: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ballsRef = useRef<Ball[]>([]);

  useEffect(() => {
    const getContainerDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        return { w: rect.width, h: rect.height };
      }
      return { w: window.innerWidth, h: window.innerHeight };
    };

    const { w, h } = getContainerDimensions();

    const initialBalls: Omit<Ball, "gradientClass" | "moon">[] = [
      {
        x: w * 0.15,
        y: h * 0.2,
        radius: vhToPx(35, Math.max(h, 600)) / 2,
        dx: 1,
        dy: 0.7,
      },
      {
        x: w * 0.5,
        y: h * 0.25,
        radius: vhToPx(25, Math.max(h, 600)) / 2,
        dx: -0.8,
        dy: 1,
      },
      {
        x: w * 0.85,
        y: h * 0.15,
        radius: vhToPx(30, Math.max(h, 600)) / 2,
        dx: 1,
        dy: -0.6,
      },
      {
        x: w * 0.75,
        y: h * 0.45,
        radius: vhToPx(20, Math.max(h, 600)) / 2,
        dx: -1,
        dy: 0.8,
      },
      {
        x: w * 0.35,
        y: h * 0.7,
        radius: vhToPx(28, Math.max(h, 600)) / 2,
        dx: 0.6,
        dy: -1,
      },
      {
        x: w * 0.2,
        y: h * 0.55,
        radius: vhToPx(22, Math.max(h, 600)) / 2,
        dx: 1,
        dy: -0.8,
      },
      {
        x: w * 0.6,
        y: h * 0.8,
        radius: vhToPx(35, Math.max(h, 600)) / 2,
        dx: -0.7,
        dy: 0.6,
      },
      {
        x: w * 0.4,
        y: h * 0.85,
        radius: vhToPx(24, Math.max(h, 600)) / 2,
        dx: -0.9,
        dy: 0.7,
      },
      {
        x: w * 0.9,
        y: h * 0.65,
        radius: vhToPx(26, Math.max(h, 600)) / 2,
        dx: 0.8,
        dy: -0.9,
      },
    ];

    ballsRef.current = initialBalls.map((b, i) => {
      const hasMoon = i === 0 || i === 6; // only 2 balls get moons
      return {
        ...b,
        gradientClass: gradients[i % gradients.length],
        moon: hasMoon
          ? {
              radius: vhToPx(14, Math.max(h, 600)) / 2,
              angle: Math.random() * Math.PI * 2,
              angleSpeed: 0.003 + Math.random() * 0.002,
              gradientClass: gradients[(i + 4) % gradients.length],
            }
          : undefined,
      };
    });

    let animationFrame: number;

    const animate = () => {
      const { w, h } = getContainerDimensions();

      ballsRef.current.forEach((ball) => {
        let moonX: number | null = null;
        let moonY: number | null = null;

        if (ball.moon) {
          const moonOffset = ball.radius + ball.moon.radius * 0.5;
          moonX = ball.x + Math.cos(ball.moon.angle) * moonOffset;
          moonY = ball.y + Math.sin(ball.moon.angle) * moonOffset;
        }

        // Bounce logic — includes moon if it exists
        if (
          ball.x - ball.radius < 0 ||
          ball.x + ball.radius > w ||
          (moonX !== null &&
            (moonX - ball.moon!.radius < 0 || moonX + ball.moon!.radius > w))
        ) {
          ball.dx *= -1;
        }
        if (
          ball.y - ball.radius < 0 ||
          ball.y + ball.radius > h ||
          (moonY !== null &&
            (moonY - ball.moon!.radius < 0 || moonY + ball.moon!.radius > h))
        ) {
          ball.dy *= -1;
        }

        ball.x += ball.dx;
        ball.y += ball.dy;

        if (ball.moon) {
          ball.moon.angle += ball.moon.angleSpeed;
        }
      });

      // Render
      if (containerRef.current) {
        containerRef.current.innerHTML = "";

        ballsRef.current.forEach((ball) => {
          // Big ball
          const el = document.createElement("div");
          el.className = cn("absolute rounded-full", ball.gradientClass);
          el.style.width = `${ball.radius * 2}px`;
          el.style.height = `${ball.radius * 2}px`;
          el.style.left = `${ball.x - ball.radius}px`;
          el.style.top = `${ball.y - ball.radius}px`;
          containerRef.current!.appendChild(el);

          // Moon if it exists
          if (ball.moon) {
            const moonOffset = ball.radius + ball.moon.radius * 0.5;
            const moonX = ball.x + Math.cos(ball.moon.angle) * moonOffset;
            const moonY = ball.y + Math.sin(ball.moon.angle) * moonOffset;

            const moonEl = document.createElement("div");
            moonEl.className = cn(
              "absolute rounded-full",
              ball.moon.gradientClass
            );
            moonEl.style.width = `${ball.moon.radius * 2}px`;
            moonEl.style.height = `${ball.moon.radius * 2}px`;
            moonEl.style.left = `${moonX - ball.moon.radius}px`;
            moonEl.style.top = `${moonY - ball.moon.radius}px`;
            containerRef.current!.appendChild(moonEl);
          }
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      const { w: newW, h: newH } = getContainerDimensions();
      ballsRef.current.forEach((ball) => {
        if (ball.x > newW) ball.x = newW - ball.radius;
        if (ball.y > newH) ball.y = newH - ball.radius;
        if (ball.x < 0) ball.x = ball.radius;
        if (ball.y < 0) ball.y = ball.radius;
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <div
        ref={containerRef}
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
      />
      <div className="absolute inset-0 backdrop-blur-md z-100" />
    </div>
  );
};

export default FloatingBubblesBG;
