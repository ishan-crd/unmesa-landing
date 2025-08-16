import { LandingPageInsight } from "./TryItOut";

const ProductivityCard = ({ insight }: { insight: LandingPageInsight }) => {
  return (
    <>
      <h3 className="text-black text-lg font-medium text-center">
        Productivity Levels
      </h3>

      {/* Big Number */}
      <div className="text-center">
        <span className="font-basis33 text-[10.5rem] text-[#5666DA] leading-[90%]">
          {insight.productivityLevel}%
        </span>
      </div>

      {/* Bar */}
      <div
        className={`w-full h-2 rounded-full mb-1.5 ${
          insight.productivityLevel <= 10
            ? "bg-[#FF0000]"
            : insight.productivityLevel <= 20
            ? "bg-[#FF1A1A]"
            : insight.productivityLevel <= 30
            ? "bg-[#FF3333]"
            : insight.productivityLevel <= 40
            ? "bg-[#FF4D4D]"
            : insight.productivityLevel <= 50
            ? "bg-[#FF6666]"
            : insight.productivityLevel <= 60
            ? "bg-[#90EE90]"
            : insight.productivityLevel <= 70
            ? "bg-[#7CCD7C]"
            : insight.productivityLevel <= 80
            ? "bg-[#66B266]"
            : insight.productivityLevel <= 90
            ? "bg-[#4D944D]"
            : "bg-[#228B22]"
        }`}
      />

      {/* Bottom Text */}
      <p className="font-montserrat max-md:w-full font-medium text-xl text-gray-600 text-center leading-tight">
        {insight.motivationalLine}
      </p>
    </>
  );
};

export default ProductivityCard;
