import { Dispatch } from "react";
import { IInitialStateNewPost, INewPost } from "./IPost";
import { SET_INITIAL_STATE_NEW_POST, PostActionTypes } from "./types";

// My Elements
import { IOption, IPost, ListStyleType } from "@/shared";

export const setInitialStateNewPostAction = (initialState: IInitialStateNewPost) => async (
  dispatch: Dispatch<PostActionTypes>,
): Promise<void> => {
  dispatch({
    type: SET_INITIAL_STATE_NEW_POST,
    initialState,
  });
};

export const addNewPostData = (data: INewPost) => async (dispatch: Dispatch<PostActionTypes>): Promise<void> => {
  dispatch({
    type: "ADD_NEW_POST_DATA",
    data,
  });
};
export const changeStepWizardPost = (newStep: number) => async (dispatch: Dispatch<PostActionTypes>): Promise<void> => {
  dispatch({
    type: "CHANGE_STEP_WIZARD_POST",
    step: newStep,
  });
};

export const setRecentPost = (posts: IPost[]) => async (dispatch: Dispatch<PostActionTypes>): Promise<void> => {
  dispatch({
    type: "SET_RECENT_POSTS",
    posts,
  });
};

export const setPost = (post: IPost) => async (dispatch: Dispatch<PostActionTypes>): Promise<void> => {
  dispatch({
    type: "SET_POST",
    post,
  });
};

export const changePostView = (style: ListStyleType) => async (dispatch: Dispatch<PostActionTypes>): Promise<void> => {
  dispatch({
    type: "CHANGE_POST_LIST_STYLE",
    style,
  });
};

export const setFoundVehicles = (posts: IPost[], brandModels: IOption[], typesModels: IOption[]) => async (
  dispatch: Dispatch<PostActionTypes>,
): Promise<void> => {
  dispatch({
    type: "SET_FOUND_POSTS",
    payload: {
      posts,
      brandModels,
      typesModels,
    },
  });
};
