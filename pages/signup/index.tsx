import React from "react";

// NextJS
import { NextPage } from "next";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
export { SignUpSsr as getServerSideProps } from "@/server";
import { SignUpPageProps } from "@/server";

// My Components
import { SignupTemplate } from "@/templates";
import { SEO } from "@/components";

const SignupPage: NextPage<SignUpPageProps> = ({ providers, csrfToken }) => {
  const { setAuthProviders } = useActions();

  setAuthProviders(providers, csrfToken);

  return (
    <SEO title="Únete">
      <SignupTemplate />
    </SEO>
  );
};

export default SignupPage;
