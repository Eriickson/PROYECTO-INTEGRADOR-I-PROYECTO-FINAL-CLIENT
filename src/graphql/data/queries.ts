import gql from "graphql-tag";

// My Elements
import { IOption } from "@/shared";

export const GET_BRANDS_Q = gql`
  query GetBrands($valueBrand: ID) {
    getBrands(value: $valueBrand) {
      value
      label
    }
  }
`;

export interface IGetBrandsPayload {
  getBrands: IOption[];
}

export const GET_MODELS_Q = gql`
  query GetModels($idBrand: ID!) {
    getModels(idBrand: $idBrand) {
      value
      label
    }
  }
`;
export interface IGetModelsPayload {
  getVehicleCategories: IOption[];
}

export const GET_VEHICLE_CATEGORIES_Q = gql`
  query GetVehicleCategories($valueVehicleCategory: ID) {
    getVehicleCategories(valueVehicleCategory: $valueVehicleCategory) {
      value
      label
    }
  }
`;
export interface IGetVehicleCategoriesPayload {
  getVehicleCategories: IOption[];
}

export const GET_CONDITIONS_Q = gql`
  query GetConditions($valueContidition: ID) {
    getConditions(valueContidition: $valueContidition) {
      value
      label
    }
  }
`;
export interface IGetConditionsPayload {
  getConditions: IOption[];
}

export const GET_COLORS_Q = gql`
  query GetColors($valueColor: ID) {
    getColors(valueColor: $valueColor) {
      value
      label
    }
  }
`;
export interface IGetColorsPayload {
  getColors: IOption[];
}

export const GET_FUELS_Q = gql`
  query GetFuels($valueFuel: ID) {
    getFuels(valueFuel: $valueFuel) {
      value
      label
    }
  }
`;
export interface IGetFuelsPayload {
  getFuels: IOption[];
}

export const GET_TRACTIONS_Q = gql`
  query GetTractions($valueTraction: ID) {
    getTractions(valueTraction: $valueTraction) {
      value
      label
    }
  }
`;
export interface IGetTractionsPayload {
  getTractions: IOption[];
}

export const GET_TRANSMISSIONS_Q = gql`
  query GetTransmissions($valueTransmission: ID) {
    getTransmissions(valueTransmission: $valueTransmission) {
      value
      label
    }
  }
`;
export interface IGetTransmissionsPayload {
  getTransmissions: IOption[];
}

export const GET_ACCESORIES_Q = gql`
  query GetAccesories($valueAccesorie: ID) {
    getAccesories(value: $valueAccesorie) {
      value
      label
    }
  }
`;
export interface IGetAccesoriesPayload {
  getAccesories: IOption[];
}

export const GET_VERSIONS_Q = gql`
  query GetVersions($valueVersion: ID) {
    getVersions(value: $valueVersion) {
      value
      label
    }
  }
`;
export interface IGetVersionsPayload {
  getVersions: IOption[];
}
export const GET_FEATURES_Q = gql`
  query GetFeatures($valueFeature: ID) {
    getFeatures(value: $valueFeature) {
      value
      label
    }
  }
`;
export interface IGetFeaturesPayload {
  getFeatures: IOption[];
}

export const GET_INCLUDEDS_Q = gql`
  query GetIncludeds {
    getIncludeds {
      value
      label
    }
  }
`;
export interface IGetIncludedsPayload {
  getIncludeds: IOption[];
}

export const GET_TYPE_MODEL_Q = gql`
  query GetTypeModel($idModel: ID) {
    getTypeModel(idModel: $idModel) {
      value
      label
    }
  }
`;
export interface IGetTypeModelPayload {
  getTypeModel: IOption[];
}
