import React from "react";

// Packages
import { signIn } from "next-auth/client";

// My Components
import { Card } from "@/components";

const CardLogin: React.FC = () => {
  return (
    <>
      <Card notBorderTop>
        <div className="px-4 pt-12 pb-5 mx-auto lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-16 sm:px-6">
          <div>
            <h2 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              <span className="text-pri-600">Ingresa</span> a nuestra página
            </h2>
            <p className="text-lg font-medium text-sec-text">
              Regístrate y crea tu agencía en línea completamente gratis para promocionar tus vehículos.
            </p>
          </div>
          <div className="flex mt-8 lg:flex-shrink-0 lg:mt-0">
            {/* <div className="inline-flex mr-3">
              <Link href="/signin">
                <a className="shadow btn pri borderless lg">inicia sesion</a>
              </Link>
            </div> */}
            <div className="inline-flex">
              <button  onClick={() => signIn()}>
                <a className="btn pri lg">Ingresar</a>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardLogin;
