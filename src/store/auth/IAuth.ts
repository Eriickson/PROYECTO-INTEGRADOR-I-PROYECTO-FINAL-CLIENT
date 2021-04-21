import { IAuthProviders } from "@/shared";

export interface IAuthReducer {
  providers?: IAuthProviders;
  csrfToken?: string;
}
