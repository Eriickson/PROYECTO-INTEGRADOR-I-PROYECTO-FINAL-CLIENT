import { IAuthReducer } from "./IAuth";
import { AuthActionTypes } from "./type";

const initialAuthState: IAuthReducer = {};

export const AuthReducer = (state = initialAuthState, { type, payload }: AuthActionTypes): IAuthReducer => {
  switch (type) {
    case "SET_PROVIDERS":
      return {
        ...state,
        csrfToken: payload.csrfToken,
        providers: payload.providers,
      };

    default:
      return state;
  }
};
