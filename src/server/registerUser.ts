import { GetServerSideProps } from "next";

// GraphQL
import { graphqlClient, VERIFY_TOKEN_NEW_USER_Q, IVerifyTokenNewUserQPayload } from "@/graphql";

export interface RegisterUserPageProps {
  email: string;
}

export const RegisterUserSsr: GetServerSideProps = async ctx => {
  const { token } = ctx.query;
  try {
    const { verifyTokenNewUser } = await graphqlClient<IVerifyTokenNewUserQPayload>({
      query: VERIFY_TOKEN_NEW_USER_Q,
      variables: { token },
    });

    if (!verifyTokenNewUser.isNewUser) {
      ctx.res.writeHead(302, { Location: "/" });
      ctx.res.end();
    }

    return {
      props: {
        email: verifyTokenNewUser.email,
      },
    };
  } catch (err) {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
  }

  return {
    props: {},
    redirect: { destination: "/" },
  };
};
