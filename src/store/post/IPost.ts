// My elements
import { IArea, IOption, IFileAccepted } from "@/models";
import { IPost, ListStyleType } from "@/shared";

export interface FileImages {
  croppedArea: IArea;
  rotation: number;
  file: File;
  isCover: boolean;
}
export interface IInitialStateNewPost {
  accesories: IOption[];
  features: IOption[];
  versions: IOption[];
  brands: IOption[];
  models?: IOption[];
  typeModels?: IOption[];
  conditions: IOption[];
  categories: IOption[];
  colors: IOption[];
  fuels: IOption[];
  tractions: IOption[];
  transmissions: IOption[];
  includeds: IOption[];
}

export interface INewPost {
  accessories?: string[];
  features?: string[];
  includeds?: string[];
  version?: string;
  brand?: IOption;
  model?: IOption;
  typeModel?: IOption;
  year?: IOption;
  category?: IOption;
  fuel?: IOption;
  transmission?: IOption;
  traction?: IOption;
  cylinders?: IOption;
  price?: {
    amount?: number;
    currency?: string;
  };
  mileage?: {
    unit?: string;
    value?: number;
  };
  passengers?: number;
  doors?: number;
  condition?: IOption;
  interiorColor?: IOption;
  paintColor?: IOption;
  tags?: string[];
  title?: string;
  description?: string;
  images?: IFileAccepted[];
}

export interface IPostReducer {
  initialState: IInitialStateNewPost;
  recentPosts: IPost[];
  newPost: {
    data?: INewPost;
    wizardStep: number;
  };
  post?: IPost;
  listStyle: ListStyleType;
  foundVehicles?: {
    posts: IPost[];
    brandModels: IOption[];
    typesModels: IOption[];
  };
}
