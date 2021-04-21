import { Dispatch } from "react";
import { IGraphqlApiBannerAlert } from "@/shared";
import { UIActionsTypes } from "./types";

export const setAlertBanner = (alert: IGraphqlApiBannerAlert) => async (
  dispatch: Dispatch<UIActionsTypes>,
): Promise<void> => {
  dispatch({
    type: "SET_ALERT_BANNER",
    alert,
  });
};

export const setGeneralError = (state: boolean) => async (dispatch: Dispatch<UIActionsTypes>): Promise<void> => {
  dispatch({
    type: "SET_GENERAL_ERROR",
    payload: {
      state,
    },
  });
};
