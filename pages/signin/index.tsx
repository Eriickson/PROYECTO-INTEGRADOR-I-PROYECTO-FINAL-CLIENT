import React from "react";

// NextJS
import { NextPage } from "next";

// My Elements
import { SignInPageProps } from "@/server";

// My Components
import { SigninTemplate } from "@/templates";
import { SEO } from "@/components";

const SigninPage: NextPage<SignInPageProps> = () => {
  return (
    <SEO title="Iniciar sesión">
      <SigninTemplate />
    </SEO>
  );
};

export default SigninPage;
