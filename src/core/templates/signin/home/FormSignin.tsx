import React, { useState } from "react";

// Next
import Link from "next/link";

// Packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// My Components
import { ErrorComponent } from "src/core/components";

// Types and Interfaces
export interface ISignin {
  identifier: string;
  password: string;
  remember: boolean;
}

interface FromSigninProps {
  onSubmit: (values: ISignin) => void;
}

// Variables and Constants
const schema = yup.object().shape({
  identifier: yup
    .string()
    .required("Identificador obligatorio")
    .min(6, "Mínimo 6 caracteres")
    .max(50, "Máximo 50 caracteres"),
  password: yup
    .string()
    .required("Contraseña obligatoria")
    .min(8, "Mínimo 8 caracteres")
    .max(25, "Máximo 25 caracteres"),
  // remember: yup.boolean(),
});

export const FormSignin: React.FC<FromSigninProps> = ({ onSubmit }) => {
  const { handleSubmit, register, errors } = useForm({
    resolver: yupResolver(schema),
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form id="signinForm" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-1">
        <div className="mb-2">
          <div className="flex items-center justify-between mb-1 text-xs">
            <div className="ml-1">
              <label htmlFor="identifier">
                <b className="text-gray-600">Correo o nombre de usuario</b>
              </label>
              <b className="text-danger-500 font-roboto">*</b>
            </div>
          </div>
          <input
            id="identifier"
            className={`w-full form-control ${errors.identifier && "danger"}`}
            name="identifier"
            placeholder="Correo o nombre de usuario"
            ref={register}
          />
          <ErrorComponent name="identifier" error={errors} />
        </div>
        <div className="mb-2">
          <div className="flex justify-between text-xs">
            <div className="ml-1">
              <label htmlFor="password">
                <b className="text-gray-600">Contraseña</b>
              </label>
              <b className="text-danger-500 font-roboto">*</b>
            </div>
            <div className="flex items-center">
              <button type="button" className="mr-1" onClick={() => setShowPassword(!showPassword)}>
                <b className="duration-150 text-success-500 hover:opacity-50">
                  {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                </b>
              </button>
            </div>
          </div>
          <input
            id="password"
            className={`w-full form-control ${errors.password && "danger"}`}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            autoComplete="on"
            ref={register}
          />
          <ErrorComponent name="password" error={errors} />
        </div>
      </div>
      <div className="flex justify-end mb-6">
        {/* <label htmlFor="recordarme" className="text-sm cursor-pointer select-none">
          <input id="recordarme" name="remember" type="checkbox" className="mr-1 transform scale-75" ref={register} />
          Recordarme
        </label> */}
        <Link href="/reset-password">
          <a className="text-sm font-medium duration-200 cursor-pointer text-sec-text hover:underline hover:text-warning-500">
            Olvidaste tu contraseña?
          </a>
        </Link>
      </div>
      <button className="w-full btn pri">Iniciar Sesión</button>
    </form>
  );
};
