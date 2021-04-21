import { IAgencyReducer } from "./IAgency";
import { AgencyActionTypes } from "./types";

const defaultState: IAgencyReducer = {
  newAgency: {
    data: {
      isProfessional: false,
    },
    wizardStep: 0,
  },
};

export const agencyReducer = (state = defaultState, payload: AgencyActionTypes): IAgencyReducer => {
  switch (payload.type) {
    case "ADD_NEW_AGENCY_DATA":
      return {
        ...state,
        newAgency: {
          ...state.newAgency,
          data: {
            ...state.newAgency.data,
            ...payload.data,
          },
          wizardStep: state.newAgency.wizardStep + 1,
        },
      };
    case "SET_MY_AGENCY":
      return {
        ...state,
        myAgency: {
          data: payload.payload.myAgency,
          posts: payload.payload.posts,
        },
      };
    case "SET_AGENCY_PROFILE":
      return {
        ...state,
        agencyProfile: {
          data: payload.payload.agencyProfile,
          posts: payload.payload.posts,
        },
      };
    case "CHANGE_STEP_WIZARD": {
      return {
        ...state,
        newAgency: {
          ...state.newAgency,
          wizardStep: state.newAgency.wizardStep + payload.step,
        },
      };
    }
    default:
      return state;
  }
};
