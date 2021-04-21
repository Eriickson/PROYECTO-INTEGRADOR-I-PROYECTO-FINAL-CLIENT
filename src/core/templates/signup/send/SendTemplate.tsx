import React, { useState } from "react";

// NextJS
import Link from "next/link";
import Router from "next/router";

// GraphQL
import { REGISTER_ACCOUNT_M, graphqlClient } from "@/graphql";

// Redux
import { useActions } from "@/store/hooks";

//  My Components
import { LoginLayout } from "@/layouts";
import { AlertResponseApi, IResponseApi, ScreenLoader } from "@/components";
import { SendForm, SendFormPropsOnSubmit } from "./SendForm";

export const SendTemplate: React.FC = () => {
  const { setAlertBanner } = useActions();
  const [responseApi, setResponseApi] = useState<IResponseApi | undefined>();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit({ email }: SendFormPropsOnSubmit) {
    setEmail(email);
    setIsLoading(true);
    try {
      const { registerAccount } = await graphqlClient<{ registerAccount: IResponseApi }>({
        query: REGISTER_ACCOUNT_M,
        variables: { email },
      });
      setResponseApi(registerAccount);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setAlertBanner(err[0]);
    }
  }

  return (
    <LoginLayout BottomComponent={AccountCreated}>
      <div className="w-full border-t-2 border-pri-500">
        <div className="p-5 bg-white border border-gray-100 shadow md:p-10">
          <h1 className="mb-1 text-2xl font-semibold text-center">Regístrate</h1>
          <div className="flex items-center mb-6">
            <hr className="flex-1" />
            <p className="mx-2 text-xs leading-normal text-center text-sec-text">
              Se te enviará un código de 6 dígitos a su correo electrónico para que pueda crear su cuenta.
            </p>
            <hr className="flex-1" />
          </div>
          <SendForm onSubmit={onSubmit} />
          <input form="sendForm" className="w-full mb-3 btn pri" type="submit" value="Enviar Código" />
          <button type="button" className="w-full btn ghost" onClick={() => Router.push("/signup/verify")}>
            Ingresar Código
          </button>
        </div>
      </div>
      <AlertResponseApi
        response={responseApi}
        onBtnPri={() => Router.push({ query: { email }, pathname: "/signup/verify" })}
      />
      <ScreenLoader isLoading={isLoading} msg="Verificando información" />
    </LoginLayout>
  );
};

const AccountCreated = () => (
  <p className="mb-2">
    <span className="mr-1">Ya tienes una cuenta?</span>
    <Link href="/signin">
      <a className="underline text-pri-500">Inicia Sesión</a>
    </Link>
  </p>
);
