import React from "react";

// Packages
import { Controller, useFormContext } from "react-hook-form";
import { Range as ReactRange, getTrackBackground } from "react-range";

// Types and Interfaces
interface RangeProps {
  name: string;
  min: number;
  max: number;
  step: number;
  value?: number[];
  defaultValue?: number[];
  onChange?: (value: number[]) => void;
  /*eslint-disable @typescript-eslint/no-explicit-any*/
  control: any;
}

export const Range: React.FC<RangeProps> = ({ name, min, max, step, defaultValue }) => {
  const { control } = useFormContext();

  return (
    <div className="w-full px-3 py-4">
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ onChange, value }) => (
          <ReactRange
            step={step}
            min={min}
            max={max}
            values={value}
            onChange={value => onChange(value)}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "4px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: value,
                      colors:
                        value.length == 1
                          ? ["rgb(30, 134, 255)", "#e4e4e4"]
                          : ["#e4e4e4", "rgb(30, 134, 255)", "#e4e4e4"],
                      min,
                      max,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                className={`w-6 h-6 border-2 shadow ${
                  isDragged ? "border-pri-600 bg-pri-300" : "border-input-border bg-input-bg"
                }`}
                style={{
                  ...props.style,
                }}
              >
                {/* <div
                  className={`-top-4 m-2.5 z-20 absolute px-1 font-semibold py-0.5 text-xs bg-pri-400 delay-75 duration-150 ${
                    isDragged ? "opacity-1" : "opacity-0"
                  }`}
                  style={{
                    marginTop: -5,
                    right: `${index == 0 && 0}`,
                    color: "#fff",
                  }}
                >
                  {numeral(value[index]).format(0, 0)}
                  {value[].toFixed(1)} 
                </div> */}
              </div>
            )}
          />
        )}
      />
    </div>
  );
};
