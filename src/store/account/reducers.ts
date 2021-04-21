import { AccountActionTypes } from "./types";

interface IDefaultState {
  emailVerifed: string;
}

const defaultState: IDefaultState = { emailVerifed: "" };

export const accountReducer = (state = defaultState, { type, email }: AccountActionTypes): IDefaultState => {
  switch (type) {
    case "GET_PROFILE_VERIFIED":
      return {
        ...state,
        emailVerifed: email,
      };

    default:
      return state;
  }
};
