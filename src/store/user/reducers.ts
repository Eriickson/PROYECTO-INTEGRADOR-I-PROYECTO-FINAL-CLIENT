import { IOption } from "@/models";
import { UserActionTypes } from "./types";

interface IDefaultState {
  userProfile: {
    /*eslint-disable @typescript-eslint/no-explicit-any*/
    userData?: any;
    provinces?: IOption[];
    municipalities?: IOption[];
    sectors?: IOption[];
    nationalities: IOption[];
  };
}

const defaultState: IDefaultState = {
  userProfile: {
    nationalities: [],
  },
};

export const userReducer = (state = defaultState, action: UserActionTypes): IDefaultState => {
  switch (action.type) {
    case "SET_USER_PROFILE":
      return {
        ...state,
        userProfile: action.userProfile,
      };
    default:
      return state;
  }
};
