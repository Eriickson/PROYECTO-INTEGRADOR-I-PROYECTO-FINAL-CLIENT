import { IAuthProviders } from "@/shared";
import { GetServerSideProps } from "next";

import { getCsrfToken, getProviders, getSession } from "next-auth/client";

export interface LoginPageProps {
  providers: IAuthProviders;
  csrfToken: string;
}

export const LoginSsr: GetServerSideProps = async ctx => {
  try {
    const session = await getSession(ctx);
    if (session) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }

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
