import React, { useEffect } from "react";

// Next
import { NextPage } from "next";

// Hooks
import { useActions } from "src/store/hooks";

// My Elements
export { RegisterUserSsr as getServerSideProps } from "@/server";
import { RegisterUserPageProps } from "@/server";

// My Components
import { RegisterTemplate } from "@/templates";
import { SEO } from "@/components";

const RegisterUser: NextPage<RegisterUserPageProps> = ({ email }) => {
  const { getEmailVerified } = useActions();

  useEffect(() => {
    getEmailVerified(email);
  }, []);

  return (
    <SEO title="Completar registro de tu cuenta">
      <RegisterTemplate />
    </SEO>
  );
};

export default RegisterUser;
