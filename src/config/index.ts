export const config = {
  serverGraphQL: process.env.GRAPHQL_SERVER || "",
  providersAuth: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    email: {
      user: process.env.EMAIL_SERVER_USER || "",
      pass: process.env.EMAIL_SERVER_PASSWORD || "",
      host: process.env.EMAIL_SERVER_HOST || "",
      port: parseInt(process.env.EMAIL_SERVER_PORT || ""),
      from: process.env.EMAIL_SERVER_FROM || "",
    },
  },
  database: process.env.URI_MONGODB || "",
  tokens: {
    tokenNextAuth: process.env.TOKEN_NEXT_AUTH || "",
  },
};
