import { cn } from "@/utils";
import React from "react";

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-[100dvw] h-[100dvh]", className)}>{children}</div>
  );
};

export default Section;
