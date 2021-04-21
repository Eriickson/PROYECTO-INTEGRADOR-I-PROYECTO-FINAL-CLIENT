import React, { useState } from "react";

// NextJS
import Link from "next/link";
import Router, { useRouter } from "next/router";

// Packages
import axios from "axios";

// Redux
import { useSelector, useActions } from "@/store/hooks";

// My Components
import { Card, FacebookButton, GoogleButton, Modal } from "@/components";
import { LoginLayout } from "@/layouts";
import { EmailIcon } from "src/assets";
import { FormSignin } from "../../signin/home/FormSignin";

export const LoginTemplate: React.FC = () => {
  const { setGeneralError } = useActions();
  const { csrfToken } = useSelector(({ auth }) => auth);
  const { query } = useRouter();
  const [modalState, setModalState] = useState<boolean>(query.signup === "true");
  const [signinEmail, setSigninEmail] = useState(false);

  return (
    <LoginLayout BottomComponent={query.type === "signup" ? SignIn : SignUp}>
      <div className="w-full border-t-2 border-pri-500">
        <div className="p-5 bg-white border border-gray-100 shadow md:p-10">
          {/* <h1 className="mb-2 text-2xl text-center">{query.type === "signup" ? "Regístrate" : "Inicia Sesión"}</h1> */}
          <h1 className="mb-2 text-2xl text-center">Ingresa a tu cuenta</h1>
          <div className="flex items-center mb-6">
            <hr className="flex-1" />
            <p className="mx-2 text-xs leading-normal text-center text-sec-text">
              Selecciona unos de los métodos para ingresar a Automarket RD
            </p>
            <hr className="flex-1" />
          </div>

          {signinEmail ? (
            <FormSignin
              onSubmit={async credentials => {
                try {
                  await axios.post("http://localhost:8080/api/auth/callback/credentials", {
                    ...credentials,
                    csrfToken,
                  });
                  Router.reload();
                } catch (err) {
                  setGeneralError(true);
                }
              }}
            />
          ) : (
            <div className="space-y-2">
              <GoogleButton label={query.type === "signup" ? "Registrate con Google" : undefined} />
              <FacebookButton label={query.type === "signup" ? "Registrate con Facebook" : undefined} />
              <button
                className="flex items-center w-full py-1.5 pl-2.5 text-white bg-red-500"
                onClick={() => setSigninEmail(true)}
                type="button"
              >
                <span className="mr-10">
                  <EmailIcon />
                </span>{" "}
                <p className="py-2 text-sm font-medium">Ingresa con Email</p>
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal notCloseModalZone state={modalState} setState={setModalState} centerContent>
        <div className="w-full max-w-xl mx-auto">
          <Card>
            <h3 className="text-2xl font-semibold text-center">Completa tu perfil</h3>
            <p className="w-4/5 mx-auto mb-8 text-sm text-center">
              Antes de contiunar deberás completar las informaciones necesarias para tener una cuenta de{" "}
              <strong>automarket RD</strong>
            </p>
            <div className="flex items-center">
              <Link href={{ pathname: "/signup/register", query: { token: query.token } }}>
                <a className="mx-auto btn pri">Completar perfil</a>
              </Link>
            </div>
          </Card>
        </div>
      </Modal>
    </LoginLayout>
  );
};

const SignIn: React.FC = () => (
  <p className="mb-2">
    <span className="mr-1">Ya tienes una cuenta?</span>
    <Link href={{ pathname: "/login", query: { type: "signin" } }}>
      <a className="underline text-pri-500">Inicia sesión</a>
    </Link>
  </p>
);

const SignUp: React.FC = () => (
  <p className="mb-2">
    <span className="mr-1">Aún no tienes una cuenta?</span>
    <Link href={{ pathname: "/login", query: { type: "signup" } }}>
      <a className="underline text-pri-500">Regístrate</a>
    </Link>
  </p>
);
