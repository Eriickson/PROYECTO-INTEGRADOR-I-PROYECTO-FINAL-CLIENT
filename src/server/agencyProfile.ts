import { GetServerSideProps } from "next";

// GraphQL
import { graphqlClient, GET_AGENCY_PROFILE_Q, IGetAgencyProfilePayload } from "@/graphql";

/* eslint-disable @typescript-eslint/no-empty-interface*/
export interface AgencyProfilePageProps extends IGetAgencyProfilePayload {}

export const AgencyProfileSsr: GetServerSideProps = async ctx => {
  try {
    const { getAgencyProfile } = await graphqlClient<IGetAgencyProfilePayload>({
      query: GET_AGENCY_PROFILE_Q,
      variables: { uuid: ctx.query.uuid },
    });

    const props: AgencyProfilePageProps = {
      getAgencyProfile,
    };

    return { props };
  } catch (err) {
    /* eslint-disable no-console */
    console.log(err);

    return { props: {} };
  }
};
