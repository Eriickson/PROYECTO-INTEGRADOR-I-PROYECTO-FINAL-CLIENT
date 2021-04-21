import { IOption } from "./Option";

export interface IUserProfile {
  profilePicture: string;
  username: string;
  name: string;
  lastname: string;
  direction: {
    province: IOption;
    municipality: IOption;
    sector: IOption;
  };
  nationality: IOption;
  birthday: string;
  sex: string;
}
