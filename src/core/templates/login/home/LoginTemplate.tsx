import React, { useState } from "react";

// My Components
import { Card, FacebookButton, GoogleButton } from "@/components";
import { LoginLayout } from "@/layouts";
import { SignUpSection } from "./sections/signup/SignupSection";
import { SignInSection } from "./sections/signIn/SignInSection";
import { EmailSentSection } from "./sections/emailSent/EmailSentSection";

type ViewCurrentType = "SIGNIN" | "SIGNUP" | "EMAIL-SENT";

export const LoginTemplate: React.FC = () => {
  const [viewCurrent, setViewCurrent] = useState<ViewCurrentType>(
    typeof window === "undefined" ? "SIGNUP" : (String(sessionStorage.getItem("viewLogin")) as ViewCurrentType),
  );

  const title: Record<ViewCurrentType, Record<string, string>> = {
    "EMAIL-SENT": {
      title: "Correo enviado",
      subtitle: "",
      footerText: "",
      footerButtonText: "",
    },
    SIGNIN: {
      title: "Bienvenido de nuevo",
      subtitle: "Selecciona unos de los métodos para ingresar a Automarket RD",
      footerText: "Es la primera vez que usas automarket RD?",
      footerButtonText: "Crea una cuenta",
    },
    SIGNUP: {
      title: "Crea tu cuenta",
      subtitle: "Únete a la mejor página de ventas de vehículos",
      footerText: "Ya tienes una cuenta de automarket RD?",
      footerButtonText: "Inicia Sesión",
    },
  };

  function SelectSession() {
    switch (viewCurrent) {
      case "SIGNIN":
        return <SignInSection />;
      case "SIGNUP":
        return <SignUpSection />;
      case "EMAIL-SENT":
        return <EmailSentSection />;
    }
  }

  return (
    <>
      <LoginLayout>
        <div className="flex-1">
          <Card notBorderTop>
            <div className="w-full max-w-sm mx-auto my-14">
              <div>
                <h1 className="text-2xl text-center">{title[viewCurrent].title}</h1>
                <div className="flex items-center mb-6">
                  <hr className="flex-1" />
                  <p className="mx-2 text-xs leading-normal text-center text-sec-text">{title[viewCurrent].subtitle}</p>
                  <hr className="flex-1" />
                </div>
              </div>
              <SelectSession />
              <div className="flex items-center my-4">
                <hr className="flex-1" />
                <p className="mx-2 text-xs leading-normal text-center text-sec-text">O</p>
                <hr className="flex-1" />
              </div>
              <div className="mb-5">
                <div className="mb-3 space-y-2">
                  <GoogleButton />
                  <FacebookButton />
                </div>
              </div>
              <div>
                <div className="flex flex-col items-center">
                  <p className="text-sm font-light text-gray-500 mb-1.5">{title[viewCurrent].footerText}</p>
                  <button
                    className="font-semibold text-pri-500"
                    onClick={() => {
                      setViewCurrent(view => (view === "SIGNIN" ? "SIGNUP" : "SIGNIN"));
                    }}
                  >
                    {title[viewCurrent].footerButtonText}
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </LoginLayout>
    </>
  );
};
