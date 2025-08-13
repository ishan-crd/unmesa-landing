const ProductivityCard = () => {
  return (
    <>
      <h3 className="text-black text-lg font-medium text-center">
        Productivity Levels
      </h3>

      {/* Big Number */}
      <div className="text-center">
        <span className="font-basis33 text-[9.5rem] text-[#5666DA] leading-[100%]">
          25%
        </span>
      </div>

      {/* Bar */}
      <div className="w-full h-2 rounded-full bg-[#EA8787] mb-1.5" />

      {/* Bottom Text */}
      <p className="font-montserrat font-medium text-xl text-gray-600 text-center leading-tight">
        Increase your daily productivity levels by going to the gym early in the
        morning and leave the evening for college work
      </p>
    </>
  );
};

export default ProductivityCard;
