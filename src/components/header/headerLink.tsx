import Link from "next/link";
import React from "react";

const HeaderLink = ({ text, href }: { text: string; href: string }) => {
  return (
    <Link href={href} className="text-[#4D4D4D] font-neue-plak text-xl">
      {text}
    </Link>
  );
};

export default HeaderLink;
