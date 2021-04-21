import { IGraphqlApiBannerAlert } from "@/shared";

// action strings
export const SET_ALERT_BANNER = "SET_ALERT_BANNER";
export const SET_GENERAL_ERROR = "SET_GENERAL_ERROR";

export interface SetAlertBenner {
  type: typeof SET_ALERT_BANNER;
  alert: IGraphqlApiBannerAlert;
}

export interface SetGeneralError {
  type: typeof SET_GENERAL_ERROR;
  payload: {
    state: boolean;
  };
}

export type UIActionsTypes = SetAlertBenner | SetGeneralError;
