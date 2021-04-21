import { IAuthProviders } from "@/shared";

export const SET_PROVIDERS = "SET_PROVIDERS";

export interface SetProvidersAction {
  type: typeof SET_PROVIDERS;
  payload: {
    providers: IAuthProviders;
    csrfToken: string;
  };
}

export type AuthActionTypes = SetProvidersAction;
