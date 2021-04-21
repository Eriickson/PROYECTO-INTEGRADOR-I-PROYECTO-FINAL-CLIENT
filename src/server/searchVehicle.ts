import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface*/
export interface SearchVehiclePageProps {}

export const SearchVehicleSsr: GetServerSideProps = async () => {
  // console.log(ctx.query);

  return {
    props: {},
  };
};
