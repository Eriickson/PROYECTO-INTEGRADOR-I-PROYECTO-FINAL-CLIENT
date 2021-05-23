import NextAuth from "next-auth";
import { providers, callbacks } from "@/auth";
import { config } from "@/config";

export default NextAuth({
  // Configure one or more authentication providers
  callbacks,
  providers,
  pages: {
    signIn: "/login",
    error: "/error",
  },
  jwt: {
    secret: config.tokens.tokenNextAuth,
  },
});
