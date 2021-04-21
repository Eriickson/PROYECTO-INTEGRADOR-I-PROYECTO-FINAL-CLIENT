import React from "react";

// NextJS
import Link from "next/link";

// My Elements
import { EmailIcon } from "src/assets/icons";

// My Components
import { FacebookButton, GoogleButton } from "@/components";
import { LoginLayout } from "@/layouts";

export const SignupTemplate: React.FC = () => {
  return (
    <LoginLayout BottomComponent={Signup}>
      <div className="w-full border-t-2 border-pri-500">
        <div className="p-5 bg-white border border-gray-100 shadow md:p-10">
          <h1 className="mb-2 text-2xl text-center">Regístrate</h1>
          <div className="flex items-center mb-6">
            <hr className="flex-1" />
            <p className="mx-2 text-xs leading-normal text-center text-sec-text">
              Selecciona unos de los métodos para crear una cuentas
            </p>
            <hr className="flex-1" />
          </div>
          <div className="space-y-2">
            <GoogleButton label="Registrate con Google" />
            <FacebookButton label="Registrate con Facebook" />
            <Link href="/signup/send">
              <a className="flex items-center w-full py-1.5 pl-2.5 text-white bg-red-500">
                <span className="mr-10">
                  <EmailIcon />
                </span>{" "}
                <p className="py-2 text-sm font-medium">Registrate con Email</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
};

const Signup: React.FC = () => (
  <p className="mb-2">
    <span className="mr-1">Ya tienes una cuenta?</span>
    <Link href="/signin">
      <a className="underline text-pri-500">Inicia sesión</a>
    </Link>
  </p>
);
