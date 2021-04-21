import React from "react";

// Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Types and Interfaces
interface FormResetPasswordProps {
  onSubmit: ({ email }: { email: string }) => void;
}

// Variables and Constants
const schema = yup.object().shape({
  email: yup.string().email(),
});

const FormResetPassword: React.FC<FormResetPasswordProps> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center mb-1 text-xs">
        <div className="ml-1">
          <label htmlFor="email">
            <b className="text-gray-600">Correo electrónico</b>
          </label>
          <b className="text-danger-500 font-roboto">*</b>
        </div>
      </div>
      <input
        id="email"
        name="email"
        className="w-full mb-4 form-control"
        placeholder="Ingresa tu correo electrónico"
        ref={register}
      />
      <input className="w-full btn pri" type="submit" value="Envíar confirmación" />
    </form>
  );
};

export default FormResetPassword;
