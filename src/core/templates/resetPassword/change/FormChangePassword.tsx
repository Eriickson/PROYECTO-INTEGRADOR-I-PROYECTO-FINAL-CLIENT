import React from "react";

// Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LabelInput } from "@/components";

// Types and Interfaces
interface FormChangePasswordProps {
  onSubmit: ({ email }: { email: string }) => void;
}

// Variables and Constants
const schema = yup.object().shape({
  email: yup.string().email(),
});

const FormChangePassword: React.FC<FormChangePasswordProps> = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <LabelInput label="Nueva contraseña" required />
        <input
          id="newPassword"
          className={`w-full mb-1 form-control ${errors.newPassword ? "danger" : "pri"}`}
          placeholder="Nueva contraseña"
          name="newPassword"
          ref={register({
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
            minLength: {
              value: 8,
              message: "Mínimo 8 caracteres",
            },
            maxLength: {
              value: 30,
              message: "Máximo 30 caracteres",
            },
          })}
        />
      </div>
      <div className="mb-4">
        <LabelInput label="Confirmar Nueva contraseña" required />
        <input
          id="newPassword"
          className={`w-full mb-1 form-control ${errors.newPassword ? "danger" : "pri"}`}
          placeholder="Confirmar Nueva contraseña"
          name="confirmNewPassword"
          ref={register({
            required: {
              value: true,
              message: "Este campo es obligatorio",
            },
            minLength: {
              value: 8,
              message: "Mínimo 8 caracteres",
            },
            maxLength: {
              value: 30,
              message: "Máximo 30 caracteres",
            },
          })}
        />
      </div>
      <input className="w-full btn pri" type="submit" value="Restablecer Contraseña" />
    </form>
  );
};

export default FormChangePassword;
