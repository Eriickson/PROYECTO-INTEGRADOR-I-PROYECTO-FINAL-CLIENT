// Packages
import { CallbacksOptions, Session } from "next-auth";
import { WithAdditionalParams } from "next-auth/_utils";

// GraphQL
import {
  graphqlClient,
  LOGIN_Q,
  GENERATE_TOKEN_API_GRAPHQL,
  ILoginQPayload,
  IGenerateTokenApiGraphlQLPayload,
} from "@/graphql";
import { JWT } from "next-auth/jwt";

export const callbacks: CallbacksOptions = {
  async signIn(user, account) {
    try {
      const { login } = await graphqlClient<ILoginQPayload>({
        query: LOGIN_Q,
        variables: { email: user.email, provider: account.provider || "credentials" },
      });

      if (login.isNewUser) {
        return `/signup/register?token=${login.token}`;
      }

      return true;
    } catch (err) {
      throw new Error(err);
    }
  },
  async jwt(token: JWT) {
    try {
      const { generateTokenApiGraphlQL } = await graphqlClient<IGenerateTokenApiGraphlQLPayload>({
        query: GENERATE_TOKEN_API_GRAPHQL,
        variables: { email: token.email },
      });

      if (generateTokenApiGraphlQL.agencyId) token.agencyId = generateTokenApiGraphlQL.agencyId;
      token.tokenQuery = generateTokenApiGraphlQL.token;
      token.name = generateTokenApiGraphlQL.name;
      token.picture = generateTokenApiGraphlQL.picture;
      token.userId = generateTokenApiGraphlQL.userId;

      return token;
    } catch (err) {
      return token;
    }
  },
  async session(session: Session, token) {
    try {
      /*eslint-disable-next-line */
      const userId: any = (<any>token).userId;

      /*eslint-disable-next-line */
      const agencyId: any = (<any>token).agencyId;

      const newSession: WithAdditionalParams<Session> = {
        ...session,
        user: {
          ...session.user,
          userId: userId,
          agencyId: agencyId,
        },
      };
      return newSession;
    } catch (err) {
      const newSession: WithAdditionalParams<Session> = {
        ...session,
      };
      return newSession;
    }
  },
};
