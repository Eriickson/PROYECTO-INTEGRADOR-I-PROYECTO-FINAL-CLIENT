import { IOption } from "@/shared";
import gql from "graphql-tag";

export const GET_PROVINCES_Q = gql`
  query GetProvinces {
    getProvinces {
      value
      label
    }
  }
`;

export const GET_MUNICIPALITIES_Q = gql`
  query GetMunicipalities($provinceId: ID) {
    getMunicipalities(provinceId: $provinceId) {
      value
      label
    }
  }
`;

export const GET_SECTORS_Q = gql`
  query GetSectors($municipalityId: ID) {
    getSectors(municipalityId: $municipalityId) {
      value
      label
    }
  }
`;

export const GET_COUNTRIES_Q = gql`
  query GetCountries {
    getCountries {
      value
      label
    }
  }
`;

export interface IGetProvincesPayload {
  getProvinces: IOption[];
}
