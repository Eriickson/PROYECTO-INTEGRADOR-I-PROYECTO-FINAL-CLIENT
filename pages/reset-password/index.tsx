import React from "react";

// NextJS
import { NextPage } from "next";

// My Components
import { ResetPasswordTemplate } from "@/templates";
import { SEO } from "@/components";

const ResetPasswordPage: NextPage = () => {
  return (
    <SEO title="Restablecer contraseña">
      <ResetPasswordTemplate />
    </SEO>
  );
};

export default ResetPasswordPage;
