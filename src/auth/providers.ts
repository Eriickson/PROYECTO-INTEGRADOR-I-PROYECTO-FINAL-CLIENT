import Providers from "next-auth/providers";

// My Elements
import { config } from "@/config";
import { graphqlClient, ISigninPayload, SIGNIN_Q } from "@/graphql";

export const providers = [
  Providers.GitHub({
    clientId: config.providersAuth.github.clientId,
    clientSecret: config.providersAuth.github.clientSecret,
  }),
  Providers.Google({
    clientId: config.providersAuth.google.clientId,
    clientSecret: config.providersAuth.google.clientSecret,
  }),
  Providers.Facebook({
    clientId: config.providersAuth.facebook.clientId,
    clientSecret: config.providersAuth.facebook.clientSecret,
  }),
  Providers.Credentials({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: "credentials",
    // The credentials is used to generate a suitable form on the sign in page.
    // You can specify whatever fields you are expecting to be submitted.
    // e.g. domain, username, password, 2FA token, etc.
    credentials: {
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" },
    },
    async authorize(credentials: { identifier: string }) {
      const errorMessage = "Correo electrónico o contraseña incorrectos";

      throw `/login?error=${errorMessage}&identifier=${credentials.identifier}`;

      // try {
      //   const { signin } = await graphqlClient<ISigninPayload>({
      //     query: SIGNIN_Q,
      //     variables: { identifier: credentials.identifier, password: credentials.password },
      //   });
      //   return {
      //     email: signin.email,
      //     image: signin.picture,
      //     name: signin.name,
      //     userId: signin.userId,
      //     provider: "credentials",
      //   };
      // } catch (err) {
      //   return null;
      // }
    },
  }),
];
