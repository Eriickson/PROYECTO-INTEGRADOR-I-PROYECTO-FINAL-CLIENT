import { IArea, IOption } from "@/models";
import { IAgency, IPost } from "@/shared";

export interface INewAgency {
  logo?: {
    croppedArea: IArea;
    file: File;
    srcCropped: string;
  };
  name?: string;
  slogan?: string;
  isProfessional?: boolean;
  province?: string;
  municipality?: string;
  sector?: string;
  reference?: string;
  ubication?: {
    province?: IOption;
    municipality?: {
      value: number | null;
      label: string;
    };
    sector?: {
      value: number | null;
      label: string;
    };
    reference?: string;
  };
  contacts?: {
    numberPhones: IOption[];
    emails: IOption[];
  };
  wizardStep?: number;
}

export interface IAgencyReducer {
  newAgency: {
    data: INewAgency;
    wizardStep: number;
  };
  agencyProfile?: {
    data: IAgency;
    posts: IPost[];
  };
  myAgency?: {
    data: IAgency;
    posts: IPost[];
  };
}
