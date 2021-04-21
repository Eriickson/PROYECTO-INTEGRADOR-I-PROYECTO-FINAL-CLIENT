import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
export { LoginSsr as getServerSideProps } from "@/server";
import { LoginPageProps } from "@/server";

// My Components
import { LoginTemplate } from "@/templates";
import { SEO } from "@/components";

const LoginPage: NextPage<LoginPageProps> = ({ providers, csrfToken }) => {
  const { setAuthProviders } = useActions();

  setAuthProviders(providers, csrfToken);

  return (
    <SEO title="Ingresar">
      <LoginTemplate />
    </SEO>
  );
};

export default LoginPage;
