import { IContacts } from "./Contacts";
import { IOption } from "./Option";

export interface IAgency {
  id: string;
  name: string;
  slogan: string;
  uuid: string;
  slug: string;
  logo: string;
  occupation: string;
  contacts: IContacts;
  ubication: {
    direction: {
      province: IOption;
      municipality: IOption;
      sector: IOption;
      reference: string;
    };
  };
}

export interface IFilterAgency {
  name: string;
  occupation: string;
  isProfessional: boolean;
}
