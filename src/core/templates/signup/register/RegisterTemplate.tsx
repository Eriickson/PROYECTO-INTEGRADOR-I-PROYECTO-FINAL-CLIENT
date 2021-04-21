import React, { useState } from "react";
import Router, { useRouter } from "next/router";

// GraphQL
import { REGISTER_USER_M, graphqlClient, IRegisterUserPayloadM } from "@/graphql";

// Redux
import { useActions } from "@/store/hooks";

// My Elements
import { IUser } from "@/models";

// My Components
import { MainLayout } from "@/layouts";
import RegisterUserForm from "./form/RegisterUserForm";
import { ScreenLoader } from "@/components";

export const RegisterTemplate: React.FC = () => {
  const { setAlertBanner, setGeneralError } = useActions();
  const [isLoading, setIsLoading] = useState(false);
  const { query } = useRouter();

  async function onSubmit(user: IUser) {
    setIsLoading(true);
    try {
      const { registerUser } = await graphqlClient<IRegisterUserPayloadM>({
        query: REGISTER_USER_M,
        variables: { user },
        headers: {
          authorization: `Bearer ${query.token}`,
        },
      });

      if (registerUser.userCreated) Router.push("/login");
    } catch (err) {
      setGeneralError(err);

      setIsLoading(false);
      setAlertBanner(err[0]);
    }
  }

  return (
    <MainLayout>
      <div className="grid">
        <RegisterUserForm onSubmit={onSubmit} />
      </div>

      <ScreenLoader isLoading={isLoading} msg="Creando tu cuenta" />
    </MainLayout>
  );
};
