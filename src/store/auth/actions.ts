import { Dispatch } from "react";

// Redux
import { AuthActionTypes, SET_PROVIDERS } from "./type";

// My Elements
import { IAuthProviders } from "@/shared";

export const setAuthProviders = (providers: IAuthProviders, csrfToken: string) => async (
  dispatch: Dispatch<AuthActionTypes>,
): Promise<void> => {
  dispatch({
    type: SET_PROVIDERS,
    payload: {
      providers,
      csrfToken: csrfToken,
    },
  });
};
