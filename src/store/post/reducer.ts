import { IPostReducer } from "./IPost";
import { PostActionTypes } from "./types";

const defaultState: IPostReducer = {
  initialState: {
    accesories: [],
    versions: [],
    features: [],
    brands: [],
    colors: [],
    conditions: [],
    fuels: [],
    tractions: [],
    transmissions: [],
    categories: [],
    includeds: [],
  },
  newPost: {
    wizardStep: 0,
  },
  recentPosts: [],
  listStyle: "LIST",
};

export const postReducer = (state = defaultState, payload: PostActionTypes): IPostReducer => {
  switch (payload.type) {
    case "SET_INITIAL_STATE_NEW_POST": {
      const {
        accesories,
        features,
        versions,
        brands,
        colors,
        conditions,
        fuels,
        tractions,
        transmissions,
        categories,
        includeds,
      } = payload.initialState;
      return {
        ...state,
        initialState: {
          accesories,
          features,
          versions,
          brands,
          colors,
          conditions,
          fuels,
          tractions,
          transmissions,
          categories,
          includeds,
        },
      };
    }
    case "ADD_NEW_POST_DATA":
      return {
        ...state,
        newPost: {
          ...state.newPost,
          data: {
            ...state.newPost.data,
            ...payload.data,
          },
          wizardStep: state.newPost.wizardStep + 1,
        },
      };
    case "CHANGE_STEP_WIZARD_POST": {
      return {
        ...state,
        newPost: {
          ...state.newPost,
          wizardStep: state.newPost.wizardStep + payload.step,
        },
      };
    }
    case "SET_RECENT_POSTS":
      return {
        ...state,
        recentPosts: payload.posts,
      };
    case "SET_POST":
      return {
        ...state,
        post: payload.post,
      };
    case "CHANGE_POST_LIST_STYLE":
      return {
        ...state,
        listStyle: payload.style,
      };
    case "SET_FOUND_POSTS":
      return {
        ...state,
        foundVehicles: {
          posts: payload.payload.posts,
          brandModels: payload.payload.brandModels,
          typesModels: payload.payload.typesModels,
        },
      };
    default:
      return state;
  }
};
