import React from "react";

// Packages
import { Controller, useFormContext } from "react-hook-form";
import ReactNumberFormat from "react-number-format";

// My Components
import { ErrorComponent } from "./ErrorComponent";

// Types and Interfaces
interface InputNumberProps {
  name: string;
  suffix?: string;
  prefix?: string;
  defaultValue?: string | number;
}

export const InputNumber: React.FC<InputNumberProps> = ({ name, suffix, prefix, defaultValue }) => {
  const { errors, control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ value, onChange, ref }) => (
        <div className="flex-1" tabIndex={0} ref={ref}>
          <ReactNumberFormat
            id="mileage"
            className={`flex-1 form-control ${errors[name] && "danger"}`}
            displayType="input"
            thousandSeparator={true}
            suffix={suffix}
            // disabled={!watch("coin")}
            prefix={prefix}
            placeholder="Escribe algo..."
            value={value}
            onChange={e => {
              const value = e.target.value.replace(/[^.\d]/g, "");
              onChange(value);
            }}
            defaultValue={defaultValue}
            style={{ width: "100%" }}
          />
          <ErrorComponent name={name} error={errors} />
        </div>
      )}
    />
  );
};
