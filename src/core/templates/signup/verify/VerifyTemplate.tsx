import React, { useState } from "react";

// Next
import Link from "next/link";
import Router from "next/router";

// GraphQL
import { graphqlClient, VERIFY_ACCOUNT_Q } from "@/graphql";

// Redux
import { useActions } from "@/store/hooks";

// My Components
import { LoginLayout } from "@/layouts";
import { ScreenLoader } from "@/components";
import { VerifyForm, VerifyFormPropsOnSubmit } from "./VerifyForm";

export const VerifyTemplate: React.FC = () => {
  const { setAlertBanner } = useActions();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit({ email, code }: VerifyFormPropsOnSubmit) {
    // setIsLoading(true);
    try {
      const { verifyAccount } = await graphqlClient<{ verifyAccount: string }>({
        query: VERIFY_ACCOUNT_Q,
        variables: { email, code },
      });

      Router.push({ pathname: "/signup/register", query: { token: verifyAccount } });
    } catch (err) {
      setIsLoading(false);
      setAlertBanner(err[0]);
    }
  }

  return (
    <LoginLayout BottomComponent={CodeNotSend}>
      <div className="w-full border-t-2 border-pri-500">
        <div className="p-5 bg-white border border-gray-100 shadow md:p-10">
          <h1 className="mb-2 text-2xl text-center">Verificar Cuenta</h1>
          <div className="flex items-center mb-6">
            <hr className="flex-1" />
            <p className="mx-2 text-xs leading-normal text-center text-sec-text">
              Ingrese su correo juntamente con el código de verificación que se le ha enviado.
            </p>
            <hr className="flex-1" />
          </div>
          <VerifyForm onSubmit={onSubmit} />
        </div>
      </div>
      <ScreenLoader isLoading={isLoading} msg="Verificando información" />
    </LoginLayout>
  );
};
const CodeNotSend = () => (
  <p className="mb-2">
    No has recibido ningún código? <br />
    <Link href="/signup/send">
      <a className="underline text-pri-500">Solicitar Código</a>
    </Link>
  </p>
);
