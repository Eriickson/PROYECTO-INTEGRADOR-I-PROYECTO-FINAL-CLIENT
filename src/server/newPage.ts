import { GetServerSideProps } from "next";

// GraphQL
import combineQuery from "graphql-combine-query";
import {
  graphqlClient,
  GET_ACCESORIES_Q,
  GET_FEATURES_Q,
  GET_VERSIONS_Q,
  GET_BRANDS_Q,
  GET_CONDITIONS_Q,
  GET_VEHICLE_CATEGORIES_Q,
  GET_COLORS_Q,
  GET_FUELS_Q,
  GET_TRACTIONS_Q,
  GET_TRANSMISSIONS_Q,
  GET_INCLUDEDS_Q,
  IGetAccesoriesPayload,
  IGetFeaturesPayload,
  IGetVersionsPayload,
  IGetBrandsPayload,
  IGetConditionsPayload,
  IGetVehicleCategoriesPayload,
  IGetColorsPayload,
  IGetFuelsPayload,
  IGetTractionsPayload,
  IGetTransmissionsPayload,
  IGetIncludedsPayload,
} from "@/graphql";
import { IOption } from "@/shared";

/* eslint-disable @typescript-eslint/no-empty-interface*/
export interface NewPageProps {
  initialState: {
    accesories: IOption[];
    features: IOption[];
    versions: IOption[];
    brands: IOption[];
    conditions: IOption[];
    categories: IOption[];
    colors: IOption[];
    fuels: IOption[];
    tractions: IOption[];
    transmissions: IOption[];
    includeds: IOption[];
  };
}

export const NewPageSsr: GetServerSideProps = async () => {
  const { document: DOCUMENT } = combineQuery("initialState")
    .add(GET_ACCESORIES_Q)
    .add(GET_FEATURES_Q)
    .add(GET_VERSIONS_Q)
    .add(GET_BRANDS_Q)
    .add(GET_CONDITIONS_Q)
    .add(GET_VEHICLE_CATEGORIES_Q)
    .add(GET_COLORS_Q)
    .add(GET_FUELS_Q)
    .add(GET_TRACTIONS_Q)
    .add(GET_TRANSMISSIONS_Q)
    .add(GET_INCLUDEDS_Q);

  try {
    const {
      getAccesories,
      getBrands,
      getColors,
      getConditions,
      getFeatures,
      getFuels,
      getIncludeds,
      getTractions,
      getTransmissions,
      getVehicleCategories,
      getVersions,
    } = await graphqlClient<
      IGetAccesoriesPayload &
        IGetFeaturesPayload &
        IGetVersionsPayload &
        IGetBrandsPayload &
        IGetConditionsPayload &
        IGetVehicleCategoriesPayload &
        IGetColorsPayload &
        IGetFuelsPayload &
        IGetTractionsPayload &
        IGetTransmissionsPayload &
        IGetIncludedsPayload
    >({ query: DOCUMENT });

    const props: NewPageProps = {
      initialState: {
        accesories: getAccesories,
        brands: getBrands,
        categories: getVehicleCategories,
        colors: getColors,
        conditions: getConditions,
        features: getFeatures,
        fuels: getFuels,
        includeds: getIncludeds,
        tractions: getTractions,
        transmissions: getTransmissions,
        versions: getVersions,
      },
    };

    return { props };
  } catch (err) {
    throw new Error(err);
  }
};
