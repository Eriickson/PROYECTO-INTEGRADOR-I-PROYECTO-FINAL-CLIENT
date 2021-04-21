import { IOption } from "@/models";
import { IUser } from "./IUser";

// action strings
export const ADD_USER = "ADD_USER";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const EDIT_USER = "EDIT_USER";
export const REMOVE_USER = "REMOVE_USER";
export const SET_USERS = "SET_USERS";

export interface SetUserAction {
  type: typeof SET_USERS;
  users: IUser[];
}

export interface SetUserProfileAction {
  type: typeof SET_USER_PROFILE;
  userProfile: {
    /*eslint-disable @typescript-eslint/no-explicit-any*/
    userData: any;
    nationalities: IOption[];
    provinces: IOption[];
    municipalities: IOption[];
    sectors: IOption[];
  };
}

export interface EditUserAction {
  type: typeof EDIT_USER;
  user: IUser;
}

export interface RemoveUserAction {
  type: typeof REMOVE_USER;
  id: string;
}

export interface AddUserAction {
  type: typeof ADD_USER;
  user: IUser;
}

export type UserActionTypes = SetUserAction | SetUserProfileAction | EditUserAction | RemoveUserAction | AddUserAction;

export type AppActions = UserActionTypes;
