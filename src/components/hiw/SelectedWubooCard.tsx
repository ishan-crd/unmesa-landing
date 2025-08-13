import React from "react";
import DefaultWuboo from "../assets/wuboos/default";
import YogaWuboo from "../assets/wuboos/yogaWuboo";

const SelectedWubooCard = ({
  wubooType,
  name,
  dob,
  specialDance,
  personality,
  age,
}: {
  wubooType: "yoga" | "default";
  name: string;
  dob: string;
  specialDance: string;
  personality: string;
  age: string;
}) => {
  const WubooImage = wubooType === "yoga" ? YogaWuboo : DefaultWuboo;

  return (
    <div className="rounded-2xl shadow-selected-wuboo bg-white text-black p-6 min-w-[320px] max-w-[320px]">
      <div className="bg-[#F75AAE] rounded-t-2xl px-4 py-2 flex justify-between items-center text-white text-sm font-semibold">
        <span className="font-montserrat text-base">{name}</span>
        <span className="font-neue-plak font-[300] text-sm">{dob}</span>
      </div>
      <div className="bg-[#69ACE0] flex justify-center py-6">
        <WubooImage className="w-40 h-40" />
      </div>
      <div className="py-3">
        <h2 className="font-neue-plak font-black text-xl">{name}</h2>
        <p className="text-base mb-3 font-basis33">Fun and Interactive</p>
        <WubooInfoRow label="Special Dance" value={specialDance} />
        <WubooInfoRow label="Personality" value={personality} />
        <WubooInfoRow label="Age" value={age} />
      </div>
    </div>
  );
};

const WubooInfoRow = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="border border-[#FABC01] rounded-md p-2 mb-2 items-center flex justify-between">
      <span className="font-bold font-neue-plak text-base">{label}</span>
      <span className="font-basis33 text-sm leading-[90%]">{value}</span>
    </div>
  );
};

export default SelectedWubooCard;
