import { IAgency, IPost } from "@/shared";
import { Dispatch } from "react";
import { INewAgency } from "./IAgency";
import { AgencyActionTypes } from "./types";

export const addNewAgencyData = (data: INewAgency) => async (dispatch: Dispatch<AgencyActionTypes>): Promise<void> => {
  dispatch({
    type: "ADD_NEW_AGENCY_DATA",
    data,
  });
};

export const setMyAgency = (myAgency: IAgency, posts: IPost[]) => async (
  dispatch: Dispatch<AgencyActionTypes>,
): Promise<void> =>
  dispatch({
    type: "SET_MY_AGENCY",
    payload: {
      myAgency,
      posts,
    },
  });

export const setAgencyProfile = (agencyProfile: IAgency, posts: IPost[]) => async (
  dispatch: Dispatch<AgencyActionTypes>,
): Promise<void> =>
  dispatch({
    type: "SET_AGENCY_PROFILE",
    payload: {
      agencyProfile,
      posts,
    },
  });

export const changeStepWizard = (newStep: number) => async (dispatch: Dispatch<AgencyActionTypes>): Promise<void> => {
  dispatch({
    type: "CHANGE_STEP_WIZARD",
    step: newStep,
  });
};
