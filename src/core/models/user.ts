import { IArea } from "@/shared";

export interface IUser {
  profilePicture: {
    file: File;
    croppedArea: IArea;
  };
  name: string;
  lastname: string;
  direction: {
    province: string;
    municipality: string;
    sector: string;
  };
  nationality: string;
  birthday: string;
  sex: string;
  username: string;
  email?: string;
  password: string;
}
