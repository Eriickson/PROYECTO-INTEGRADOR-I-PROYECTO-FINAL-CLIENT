import { IAuthProviders } from "@/shared";
import { GetServerSideProps } from "next";

import { getCsrfToken, getProviders } from "next-auth/client";

export interface SignUpPageProps {
  providers: IAuthProviders;
  csrfToken: string;
}

export const SignUpSsr: GetServerSideProps = async ctx => {
  try {
    const providers = await getProviders();
    const csrfToken = await getCsrfToken(ctx);

    return {
      props: {
        providers,
        csrfToken: csrfToken || "",
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};
