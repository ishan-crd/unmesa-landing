import { cn } from "@/utils";
import React, { forwardRef } from "react";

const Section = forwardRef<
  HTMLDivElement,
  {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    id?: string;
  }
>(({ children, className, style, id }, ref) => {
  return (
    <section
      ref={ref}
      className={cn("w-screen h-[100dvh]", className)}
      style={style}
      id={id}
    >
      {children}
    </section>
  );
});

Section.displayName = "Section";

export default Section;
