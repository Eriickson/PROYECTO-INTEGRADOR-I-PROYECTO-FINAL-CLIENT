import { combineReducers } from "redux";

// Reducers
import { userReducer as users } from "./user/reducers";
import { AuthReducer as auth } from "./auth/reducer";
import { accountReducer as account } from "./account/reducers";
import { postReducer as post } from "./post/reducer";
import { agencyReducer as agency } from "./agency/reducers";
import { uiReducer as ui } from "./ui/reducer";

export const RootReducer = combineReducers({
  auth,
  users,
  account,
  post,
  agency,
  ui,
});

export type RootStore = ReturnType<typeof RootReducer>;
