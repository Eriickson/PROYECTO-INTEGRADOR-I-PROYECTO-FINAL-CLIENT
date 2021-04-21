import React from "react";

// NextJS
import { NextPage } from "next";

// My Components
import { ChangePasswordTemplate } from "@/templates";
import { SEO } from "@/components";

const ChangePasswordPage: NextPage = () => {
  return (
    <SEO title="Restablecer contraseña">
      <ChangePasswordTemplate />
    </SEO>
  );
};

export default ChangePasswordPage;
