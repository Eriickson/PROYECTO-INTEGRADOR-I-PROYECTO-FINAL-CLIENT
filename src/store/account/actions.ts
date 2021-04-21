import { Dispatch } from "react";
import { AccountActionTypes } from "./types";

export const getEmailVerified = (email: string) => async (dispatch: Dispatch<AccountActionTypes>): Promise<void> => {
  dispatch({
    type: "GET_PROFILE_VERIFIED",
    email,
  });
};
