import React from "react";

const Button = ({
  variant,
  className,
  onClick,
  children,
  id,
  disabled,
}: {
  variant: string;
  className: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  id?: string;
}) => {
  return (
    <button
      className={`${
        variant === "primary"
          ? "to-primary from-secondary bg-gradient-to-r"
          : "background-secondary"
      } ${className} py-2.5 px-6 rounded-[20px]`}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children}
    </button>
  );
};

export default Button;
