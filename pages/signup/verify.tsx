import React from "react";

// NextJS
import { NextPage } from "next";

// My Components
import { VerifyTemplate } from "@/templates";
import { SEO } from "@/components";

const VerifyPage: NextPage = () => {
  return (
    <SEO title="Verificar código y correo electrónico de registro">
      <VerifyTemplate />
    </SEO>
  );
};

export default VerifyPage;
