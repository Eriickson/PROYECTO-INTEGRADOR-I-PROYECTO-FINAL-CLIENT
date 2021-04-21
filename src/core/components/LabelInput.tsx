import React from "react";

interface LabelInputProps {
  label: string;
  htmlFor?: string;
  required?: boolean;
}

export const LabelInput: React.FC<LabelInputProps> = ({ label, htmlFor, required }) => {
  return (
    <div className="flex items-center justify-between mb-1 text-sm">
      <div className="ml-1">
        <label htmlFor={htmlFor}>
          <b className="text-gray-600">{label}</b>
        </label>
        {required && <b className="ml-0.5 text-danger-500 font-roboto">*</b>}
      </div>
    </div>
  );
};
