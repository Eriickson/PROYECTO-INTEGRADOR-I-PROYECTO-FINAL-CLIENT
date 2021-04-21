import { IUI } from "./IUI";
import { UIActionsTypes } from "./types";

const defaultState: IUI = {
  bannerAlert: {
    isActive: false,
    message: "",
    type: "DANGER",
  },
  generalError: false,
};

export const uiReducer = (state = defaultState, payload: UIActionsTypes): IUI => {
  switch (payload.type) {
    case "SET_ALERT_BANNER":
      return {
        ...state,
        bannerAlert: payload.alert,
      };
    case "SET_GENERAL_ERROR":
      return {
        ...state,
        generalError: payload.payload.state,
      };
    default:
      return state;
  }
};
