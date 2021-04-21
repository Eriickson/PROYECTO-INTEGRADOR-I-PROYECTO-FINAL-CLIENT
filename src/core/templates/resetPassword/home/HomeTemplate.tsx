import React from "react";

// My Components
import { LoginLayout } from "@/layouts";
import FormResetPassword from "./FormResetPassword";

export const ResetPasswordTemplate: React.FC = () => {
  async function onSubmit({ email }: { email: string }) {
    console.log(email);
  }

  return (
    <LoginLayout>
      <div className="w-full border-t-2 border-pri-500">
        <div className="p-5 bg-white border border-gray-100 shadow md:p-10">
          <h1 className="mb-2 text-2xl text-center">Restablecer Contraseña</h1>
          <div className="flex items-center mb-6">
            <hr className="flex-1" />
            <p className="mx-2 text-xs leading-normal text-center text-sec-text">
              Ingresa tu correo electrónico asociado a tu cuenta para restablecer tu contraseña.
            </p>
            <hr className="flex-1" />
          </div>
          <FormResetPassword onSubmit={onSubmit} />
        </div>
      </div>
    </LoginLayout>
  );
};
