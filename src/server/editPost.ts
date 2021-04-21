import { GetServerSideProps } from "next";

/* eslint-disable @typescript-eslint/no-empty-interface*/
export interface EditPostPageProps {}

export const EditPostSsr: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
