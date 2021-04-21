import { IInitialStateNewPost, INewPost } from "./IPost";

// My Elements
import { IOption, IPost, ListStyleType } from "@/shared";

export const SET_INITIAL_STATE_NEW_POST = "SET_INITIAL_STATE_NEW_POST";
export const ADD_NEW_POST_DATA = "ADD_NEW_POST_DATA";
export const CHANGE_STEP_WIZARD_POST = "CHANGE_STEP_WIZARD_POST";
export const SET_RECENT_POSTS = "SET_RECENT_POSTS";
export const SET_POST = "SET_POST";
export const CHANGE_POST_LIST_STYLE = "CHANGE_POST_LIST_STYLE";
export const SET_FOUND_POSTS = "SET_FOUND_POSTS";

export interface SetInitialStateNewPostAction {
  type: typeof SET_INITIAL_STATE_NEW_POST;
  initialState: IInitialStateNewPost;
}

export interface AddNewPostDataAction {
  type: typeof ADD_NEW_POST_DATA;
  data: INewPost;
}
export interface changeStepWizardPost {
  type: typeof CHANGE_STEP_WIZARD_POST;
  step: number;
}
export interface setRecentPost {
  type: typeof SET_RECENT_POSTS;
  posts: IPost[];
}

export interface setPost {
  type: typeof SET_POST;
  post: IPost;
}

export interface changePostView {
  type: typeof CHANGE_POST_LIST_STYLE;
  style: ListStyleType;
}

export interface setFoundVehicles {
  type: typeof SET_FOUND_POSTS;
  payload: {
    posts: IPost[];
    brandModels: IOption[];
    typesModels: IOption[];
  };
}

export type PostActionTypes =
  | SetInitialStateNewPostAction
  | AddNewPostDataAction
  | changeStepWizardPost
  | setRecentPost
  | setPost
  | changePostView
  | setFoundVehicles;
