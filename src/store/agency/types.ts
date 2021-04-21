import { INewAgency } from "./IAgency";
import { IAgency, IPost } from "@/shared";

export const ADD_NEW_AGENCY_DATA = "ADD_NEW_AGENCY_DATA";
export const SET_MY_AGENCY = "SET_MY_AGENCY";
export const SET_AGENCY_PROFILE = "SET_AGENCY_PROFILE";
export const CHANGE_STEP_WIZARD = "CHANGE_STEP_WIZARD";

export interface addNewAgency {
  type: typeof ADD_NEW_AGENCY_DATA;
  data: INewAgency;
}
export interface setMyAgency {
  type: typeof SET_MY_AGENCY;
  payload: {
    myAgency: IAgency;
    posts: IPost[];
  };
}

export interface setAgencyProfile {
  type: typeof SET_AGENCY_PROFILE;
  payload: {
    agencyProfile: IAgency;
    posts: IPost[];
  };
}
export interface changeStepWizard {
  type: typeof CHANGE_STEP_WIZARD;
  step: number;
}

export type AgencyActionTypes = addNewAgency | setMyAgency | setAgencyProfile | changeStepWizard;
