import React from "react";

// Next
import { useRouter } from "next/router";

// Packages
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReactCodeInput from "react-code-input";

// Styles and Icons
import { css } from "@emotion/core";
import { ErrorComponent } from "@/components";

// Types and Interfaces
export interface VerifyFormPropsOnSubmit {
  email: string;
  code: string;
}

interface VerifyFormProps {
  onSubmit: (data: VerifyFormPropsOnSubmit) => Promise<void>;
}

// Variables and Constants
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Correo electrónico obligatorio")
    .matches(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/, "Ingrese un correo electrónico válido"),
  code: yup
    .string()
    .required("Código obligatorio")
    .min(6, "Ingrese el código completo")
    .max(6, "Ingrese el código correcto"),
});

export const VerifyForm: React.FC<VerifyFormProps> = ({ onSubmit }) => {
  const { register, errors, handleSubmit, control, watch } = useForm({ resolver: yupResolver(schema) });
  const { query } = useRouter();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <div className="flex justify-between mb-1 text-xs">
          <div className="ml-1">
            <label htmlFor="email">
              <b className="text-gray-600">Correo electrónico</b>
            </label>
            <b className="text-danger-500 font-roboto">*</b>
          </div>
        </div>
        <input
          id="email"
          type="email"
          className={`w-full mb-1 form-control ${errors.email && "danger"}`}
          placeholder="Ingresa tu correo electrónico"
          name="email"
          defaultValue={query.email}
          ref={register}
        />
        <ErrorComponent name="email" error={errors} />
      </div>
      <div className="mb-4">
        <div className="mb-1 text-xs">
          <div className="ml-1">
            <span>
              <b className="text-gray-600">Código</b>
            </span>
            <b className="text-danger-500 font-roboto">*</b>
          </div>
        </div>
        <div
          css={css`
            .react-code-input {
              width: 100%;
              display: flex !important;
              input {
                flex: 1;
              }
            }
            input[type="number"]::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }
            input[type="number"]:focus {
              border-color: #1e86ff !important;
              color: #1e86ff !important;
            }
            input[type="number"]::selection {
              background-color: transparent;
            }
          `}
        >
          <Controller
            name="code"
            control={control}
            defaultValue=""
            render={({ value, onChange, name, ref }) => (
              <ReactCodeInput
                name={name}
                type="number"
                inputMode="numeric"
                fields={6}
                value={value}
                inputStyle={{
                  boxShadow: "none",
                  border: "1px solid #d5dee7",
                  backgroundColor: "#f6f8fa",
                  width: "3rem",
                  height: "3rem",
                  marginRight: 1,
                  textAlign: "center",
                  fontSize: "1.2rem",
                  fontWeight: "bolder",
                  color: "#718096",
                }}
                onChange={onChange}
                ref={ref}
              />
            )}
          />
        </div>
      </div>
      <input className="w-full btn pri" type="submit" value="Verificar Código" disabled={watch("code")?.length !== 6} />
    </form>
  );
};
