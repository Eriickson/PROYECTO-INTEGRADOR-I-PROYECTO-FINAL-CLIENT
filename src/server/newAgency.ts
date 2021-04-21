import { GetServerSideProps } from "next";

// Packages
import { getSession } from "next-auth/client";

/* eslint-disable @typescript-eslint/no-empty-interface*/
export interface NewAgencyPageProps {}

export const NewAgencySsr: GetServerSideProps = async ctx => {
  const session = await getSession(ctx);

  if (session && !session.user.agencyId) {
    return {
      props: {},
    };
  }
  return {
    redirect: {
      destination: "/",
    },
    props: {},
  };
};
