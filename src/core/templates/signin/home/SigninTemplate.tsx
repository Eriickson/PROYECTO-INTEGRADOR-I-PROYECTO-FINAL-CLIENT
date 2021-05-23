import React, { useState } from "react";

// NextJS
import Link from "next/link";


// Redux
import { useActions } from "@/store/hooks";

// My Components
import { LoginLayout } from "@/layouts";
import { FormSignin } from "../../login/home/sections/signIn/FormSignin";

import { FacebookButton, GoogleButton, ScreenLoader } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import { EmailIcon } from "src/assets";

//

export const SigninTemplate: React.FC = () => {
  const [loginEmailAndPassword, setLoginEmailAndPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const { setAlertBanner } = useActions();
  async function onSubmit() {
    setIsLoading(true);

    try {
      // const { signin } = await graphqlClient<ISignInGraphQLM>({
      //   query: SIGN_IN_M,
      //   variables: { identifier, password },
      // });
      // setTokenAuth(signin.token, signin.expiresIn);
    } catch (err) {
      setIsLoading(false);
      setAlertBanner(err[0]);
    }
  }

  return (
    <LoginLayout BottomComponent={Signup}>
      <div className="w-full border-t-2 border-pri-500">
        <div className="p-5 bg-white border border-gray-100 shadow md:p-10">
          <h1 className="mb-2 text-2xl text-center">Inicia sesión</h1>
          <div className="flex items-center mb-6">
            <hr className="flex-1" />
            <p className="mx-2 text-xs leading-normal text-center text-sec-text">
              Selecciona unos de los métodos para iniciar sesión
            </p>
            <hr className="flex-1" />
          </div>
          <AnimatePresence>
            {loginEmailAndPassword ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <FormSignin onSubmit={onSubmit} />
                <button className="w-full mt-2 btn" onClick={() => setLoginEmailAndPassword(false)}>
                  Redes Sociales
                </button>
              </motion.div>
            ) : (
              <motion.div className="space-y-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                {/* <input form="signinForm" className="w-full cursor-pointer btn pri" type="submit" value="Iniciar Sesion" /> */}
                <GoogleButton />
                <FacebookButton />
                <button
                  className="flex items-center w-full py-1.5 pl-2.5 text-white bg-red-500"
                  onClick={() => setLoginEmailAndPassword(true)}
                >
                  <span className="mr-10">
                    <EmailIcon />
                  </span>{" "}
                  <p className="py-2 text-sm font-medium">Continua con Email</p>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <ScreenLoader isLoading={isLoading} msg="Iniciando Sesión" />
    </LoginLayout>
  );
};

const Signup: React.FC = () => (
  <p className="mb-2">
    <span className="mr-1">No tienes una cuenta?</span>
    <Link href="/signup">
      <a className="underline text-pri-500">Regístrate</a>
    </Link>
  </p>
);
