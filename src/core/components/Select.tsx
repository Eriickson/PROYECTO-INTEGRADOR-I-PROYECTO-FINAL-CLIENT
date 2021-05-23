import React, { useState } from "react";

// Packages
import ReactSelect from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import * as yup from "yup";

// Styles and Icons
import { css } from "@emotion/core";

// My Elements
import { IOption } from "@/models";

// My Components
import { ErrorComponent } from "@/components";

// Types and Interfaces
interface SelectProps {
  name: string;
  placeholder?: string;
  options: IOption[];
  isDisabled?: boolean;
  defaultValue?: IOption;
  isSearchable?: boolean;
  onChange?: (value: IOption) => void;
}

export function validateSelectYup(): yup.StringSchema {
  return yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .required()
    .nullable();
}

export const Select: React.FC<SelectProps> = ({
  name,
  placeholder,
  options,
  isDisabled,
  defaultValue,
  isSearchable,
  onChange,
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      css={css`
        [class$="Input"] {
        }
        [class$="control"] {
          border-radius: 0;
          border-width: 1;
          background-color: ${`${errors[name] ? "#fef5f5" : ""}`};
          border-color: ${`${errors[name] ? "#f03e3e" : "#d1d5db"}`};
          height: 40px;
          transition: 100ms;
        }
        [class$="placeholder"] {
          color: ${`${errors[name] && "#f9b2b6"}`};
        }
        [class$="control"]:hover {
          transition: 100ms;
          border-color: ${`${errors[name] ? "rgba(245, 120, 120, 1) !important" : "#d1d5db"}`};
        }
        /* [class$="control"]:focus {
          box-shadow: ${`${isFocus ? "1px 1px 1px 1px #1e86ff !important" : ""}`};
          border-color: ${`${isFocus ? "#1e86ff !important" : ""}`};
        } */
        span {
          display: none;
        }
        .css-26l3qy-menu {
          border-radius: 0;
          border: 1px solid ${`${errors[name] ? "red !important" : "#1e86ff"}`};
        }
        svg {
          color: ${`${errors[name] && "#f9b2b6"}`};
        }
      `}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange: onChangeInternal, ref } }) => {
          return (
            <div>
              <ReactSelect
                instanceId={`id-${name}`}
                className="w-full"
                formatCreateLabel={(inputText: string) => `Buscar: ${inputText}`}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholder={placeholder || "Seleccionar..."}
                options={options}
                value={value}
                isSearchable={isSearchable}
                isDisabled={isDisabled}
                defaultValue={defaultValue}
                ref={ref}
                onChange={(value: IOption) => {
                  onChange && onChange(value);
                  onChangeInternal(value);
                }}
              />
              <ErrorComponent name={"value"} error={errors[name] || {}} />
            </div>
          );
        }}
      />
    </div>
  );
};
