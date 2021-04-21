import { AuthActionTypes } from "./auth/type";
import { UserActionTypes } from "./user/types";
import { AccountActionTypes } from "./account/types";
import { PostActionTypes } from "./post/types";
import { AgencyActionTypes } from "./agency/types";
import { UIActionsTypes } from "./ui/types";

export type AppActions =
  | AuthActionTypes
  | UserActionTypes
  | AccountActionTypes
  | PostActionTypes
  | AgencyActionTypes
  | UIActionsTypes;
