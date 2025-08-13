import React, { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[]; // array of strings instead of single string
  speed?: number; // typing speed
  deleteSpeed?: number; // deleting speed
  pauseBetween?: number; // pause before deleting
  cursor?: boolean;
}

const TypewriterReplace: React.FC<TypewriterProps> = ({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pauseBetween = 800,
  cursor = true,
}) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0); // which string in array
  const [phase, setPhase] = useState<"typing" | "deleting" | "done">("typing");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (phase === "done") return;

    if (phase === "typing") {
      if (charIndex < texts[index].length) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev + texts[index][charIndex]);
          setCharIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        if (index < texts.length - 1) {
          // setTimeout(() => setPhase("deleting"), pauseBetween);
        } else {
          setPhase("done");
        }
      }
    }

    if (phase === "deleting") {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIndex((prev) => prev + 1);
        setPhase("typing");
      }
    }
  }, [charIndex, index, phase, texts, speed, deleteSpeed, pauseBetween]);

  return (
    <span>
      {displayed}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default TypewriterReplace;
