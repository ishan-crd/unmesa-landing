import React from "react";
import { Mascot, MASCOT_SVGS } from "./TryItOut";

const SelectedWubooCard = ({ mascot }: { mascot: Mascot }) => {
  const WubooImage = MASCOT_SVGS[mascot.id - 1];

  return (
    <div className="rounded-2xl shadow-selected-wuboo bg-white text-black p-6 max-md:p-3 md:min-w-[320px] max-[450px]:!max-w-[180px] max-md:max-w-[250px] md:max-w-[320px] w-full">
      <div className="bg-[#F75AAE] rounded-t-2xl px-4 py-2 flex max-md:flex-col max-md:justify-start max-md:items-start justify-between items-center text-white text-sm font-semibold">
        <span className="font-montserrat text-base max-[450px]:!text-sm">
          {mascot.name}
        </span>
        <span className="font-neue-plak font-[300] text-sm max-[450px]:!text-xs">
          {mascot.dob}
        </span>
      </div>
      <div className="bg-[#69ACE0] flex justify-center py-6">
        <WubooImage className="w-40 h-40 max-md:w-32 max-md:h-32 max-[450px]:!w-24 max-[450px]:!h-24" />
      </div>
      <div className="py-3 max-md:py-1">
        <h2 className="font-neue-plak font-black text-xl max-[450px]:!text-base">
          {mascot.name}
        </h2>
        <p className="text-base mb-3 font-basis33 max-[450px]:!text-sm">
          {mascot.personality}
        </p>
        <WubooInfoRow label="Motivation Style" value={mascot.motivationStyle} />
      </div>
    </div>
  );
};

const WubooInfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="border border-[#FABC01] rounded-md p-2 mb-2 items-center gap-1 md:gap-6 flex max-md:flex-col max-md:justify-start max-md:items-start justify-between">
      <span className="font-bold font-neue-plak text-base leading-[90%] max-[450px]:!text-xs">
        {label}
      </span>
      <span className="font-basis33 text-sm leading-[90%] max-[450px]:!text-xs">
        {value}
      </span>
    </div>
  );
};

export default SelectedWubooCard;
