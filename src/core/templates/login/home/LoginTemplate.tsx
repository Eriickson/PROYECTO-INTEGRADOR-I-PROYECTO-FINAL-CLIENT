import React, { useState } from "react";

// NextJS
import Link from "next/link";
import Router from "next/router";

// Packages
import axios from "axios";

// Redux
import { useSelector, useActions } from "@/store/hooks";

// My Components
import { Card, FacebookButton, GoogleButton, Modal } from "@/components";
import { LoginLayout } from "@/layouts";
import { FormSignin } from "../../signin/home/FormSignin";

export const LoginTemplate: React.FC = () => {
  const { setGeneralError } = useActions();
  const { csrfToken } = useSelector(({ auth }) => auth);
  const [modalState, setModalState] = useState<boolean>(false);

  return (
    <LoginLayout>
      <div className="flex-1">
        <Card notBorderTop>
          <div className="w-full max-w-sm mx-auto my-14">
            <h1 className="text-2xl text-center">Bienvenido de nuevo</h1>
            <div className="flex items-center mb-6">
              <hr className="flex-1" />
              <p className="mx-2 text-xs leading-normal text-center text-sec-text">
                Selecciona unos de los métodos para ingresar a Automarket RD
              </p>
              <hr className="flex-1" />
            </div>
            <FormSignin
              onSubmit={async credentials => {
                try {
                  const { data } = await axios.post("http://localhost:8080/api/auth/callback/credentials", {
                    ...credentials,
                    csrfToken,
                  });
                  const errorMessage = data.substring(data.lastIndexOf("start@@@") + 9, data.lastIndexOf("end@@@"));
                  console.log(errorMessage);
                  console.log(data);

                  // Router.reload();
                } catch (err) {
                  setGeneralError(true);
                }
              }}
            />
            <div className="flex items-center my-4">
              <hr className="flex-1" />
              <p className="mx-2 text-xs leading-normal text-center text-sec-text">O</p>
              <hr className="flex-1" />
            </div>
            <div className="mb-3 space-y-2">
              <GoogleButton />
              <FacebookButton />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-sm font-light text-gray-500 mb-1.5">Es la primera vez que usas automarket RD?</p>
              <button>Crea una cuenta</button>
            </div>
          </div>
        </Card>
      </div>
      <Modal notCloseModalZone state={modalState} setState={setModalState} centerContent>
        <div className="w-full max-w-xl mx-auto">
          <Card>
            <h3 className="text-2xl font-semibold text-center">Completa tu perfil</h3>
            <p className="w-4/5 mx-auto mb-8 text-sm text-center">
              Antes de contiunar deberás completar las informaciones necesarias para tener una cuenta de{" "}
              <strong>automarket RD</strong>
            </p>
            {/* <div className="flex items-center">
              <Link href={{ pathname: "/signup/register", query: { token: query.token } }}>
                <a className="mx-auto btn pri">Completar perfil</a>
              </Link>
            </div> */}
          </Card>
        </div>
      </Modal>
    </LoginLayout>
  );
};
