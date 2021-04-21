import React from "react";

// Types and Interfaces
interface CardProps {
  notBorderTop?: boolean;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ notBorderTop, children, className }) => {
  return (
    <div className={`mx-1 w-full sm:mx-0 ${!notBorderTop && "border-pri-500 border-t-2"} ${className}`}>
      <div className="w-full h-full p-2 bg-white border border-gray-100 shadow md:p-3">{children}</div>
    </div>
  );
};
