export const GET_PROFILE_VERIFIED = "GET_PROFILE_VERIFIED";

export interface GetProfileVerifiedAction {
  type: typeof GET_PROFILE_VERIFIED;
  email: string;
}
export type AccountActionTypes = GetProfileVerifiedAction;
