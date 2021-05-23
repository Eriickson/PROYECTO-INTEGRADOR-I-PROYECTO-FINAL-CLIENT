import React from "react";

// Packages
import { useForm } from "react-hook-form";

// My Elements
import { FormSendEmailRegisterResolver } from "@/validations";

// My Components
import { ErrorComponent } from "@/components";

// Types and Interfaces
export interface SendFormPropsOnSubmit {
  email: string;
}

interface SendFormProps {
  onSubmit: (data: SendFormPropsOnSubmit) => Promise<void>;
}
export const SendForm: React.FC<SendFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: FormSendEmailRegisterResolver,
  });

  return (
    <form id="sendForm" className="mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
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
          className={`w-full form-control lowercase ${errors.email ? "danger" : "pri"}`}
          placeholder="Ingresa tu correo electrónico"
          {...register("email")}
        />
        <ErrorComponent name="email" error={errors} />
      </div>
      <button className="w-full btn pri">Crea tu cuenta</button>
    </form>
  );
};
