import React from "react";

interface ProgressBarProps {
  title: string;
  total: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, total, max }) => {
  return (
    <div className="w-full pt-3 mt-3">
      <div className="flex-1 w-full md:w-10/12 lg:mr-3">
        <h2 className="mb-1 font-medium text-main-text">{title}</h2>
        <div className="w-full mb-1 border border-pri-500 bg-pri-100">
          <div
            className="h-6 duration-300 bg-pri-500"
            style={{
              width: `${(total * 100) / max}%`,
            }}
          ></div>
        </div>
        <p className="text-sm font-medium text-sec-text">
          <span className="text-lg font-semibold text-pri-600">{total}</span> de {max} Imágenes permitidas
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
