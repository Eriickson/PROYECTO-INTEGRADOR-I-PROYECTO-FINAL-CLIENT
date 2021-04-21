import { IOption } from "@/shared";
import { IAgency } from "./Agency";

export interface IPost {
  title: string;
  description: string;
  category: IOption;
  uuid: string;
  slug: string;
  tags: string[];
  status: string;
  brand: IOption;
  model: IOption;
  typeModel: IOption;
  year: string;
  cover: string;
  mileage: {
    value: number;
    unit: string;
  };
  fuel: IOption;
  transmission: IOption;
  cylinders: string;
  passengers: IOption;
  doors: IOption;
  traction: IOption;
  accessories: IOption[];
  paintColor: IOption;
  interiorColor: IOption;
  includeds: IOption[];
  images: string[];
  pricing: {
    currency: string;
    amount: number;
  };
  condition: IOption;
  features: IOption[];
  visits: number;
  isDisabled: boolean;
  version: IOption;
  createdAt: string;
  agency: IAgency;
}

export type ListStyleType = "GRID" | "LIST" | "INFO";
