import { JWT } from "next-auth/jwt";

export interface IAuthProviders {
  github: IAuthProvider;
  facebook: IAuthProvider;
  google: IAuthProvider;
  email: IAuthProvider;
}

export interface IAuthProvider {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
}

export interface PayloadToken extends JWT {
  tokenQuery: string;
  name: string;
  picture: string;
  userId: string;
}
