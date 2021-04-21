import { IOption } from "@/models";
import { Dispatch } from "react";
import { v4 as uuid } from "uuid";
import { IUser } from "./IUser";
import { ADD_USER, AppActions } from "./types";

export const startAddUser = (userData: IUser) => async (dispatch: Dispatch<AppActions>): Promise<void> => {
  const { name, lastname, age } = userData;
  dispatch({
    type: ADD_USER,
    user: { id: uuid(), name, lastname, age },
  });
};

interface ISetUserProfile {
  /*eslint-disable @typescript-eslint/no-explicit-any*/
  userData: any;
  nationalities: IOption[];
  provinces: IOption[];
  municipalities: IOption[];
  sectors: IOption[];
}

export const setUserProfile = ({
  userData,
  provinces,
  municipalities,
  sectors,
  nationalities,
}: ISetUserProfile) => async (dispatch: Dispatch<AppActions>): Promise<void> => {
  dispatch({
    type: "SET_USER_PROFILE",
    userProfile: {
      nationalities,
      userData,
      provinces,
      municipalities,
      sectors,
    },
  });
};

export const startRemoveUser = (id: string) => async (dispatch: Dispatch<AppActions>): Promise<void> => {
  dispatch({
    type: "REMOVE_USER",
    id,
  });
};
