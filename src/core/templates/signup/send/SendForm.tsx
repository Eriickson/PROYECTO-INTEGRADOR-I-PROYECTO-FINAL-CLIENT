import React from "react";

// Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// My Components
import { ErrorComponent } from "@/components";

// Types and Interfaces
export interface SendFormPropsOnSubmit {
  email: string;
}

interface SendFormProps {
  onSubmit: (data: SendFormPropsOnSubmit) => Promise<void>;
}

// Variables and Constants
const schema = yup.object().shape({
  email: yup
    .string()
    .required("Correo electrónico obligatorio")
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Ingrese un correo electrónico válido"),
});

export const SendForm: React.FC<SendFormProps> = ({ onSubmit }) => {
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form id="sendForm" className="mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between mb-1 text-xs">
        <div className="ml-1">
          <label htmlFor="email">
            <b className="text-gray-600">Correo electrónico</b>
          </label>
          <b className="text-danger-500 font-roboto">*</b>
        </div>
      </div>
      <input
        id="email"
        className={`w-full mb-1 form-control lowercase ${errors.email ? "danger" : "pri"}`}
        name="email"
        placeholder="Ingresa tu correo electrónico"
        ref={register}
      />
      <ErrorComponent name="email" error={errors} />
    </form>
  );
};
