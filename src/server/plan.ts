import { GetServerSideProps } from "next";

// GraphQL
import { graphqlClient, GET_PLANS_Q, GetPlansPayload } from "@/graphql";
import { IPlan } from "@/models";

/* eslint-disable @typescript-eslint/no-empty-interface*/
export interface PlanPageProps {
  plans: IPlan[];
}

export const PlanSsr: GetServerSideProps = async () => {
  const { getPlans } = await graphqlClient<GetPlansPayload>({ query: GET_PLANS_Q });

  const props: PlanPageProps = {
    plans: getPlans.plans,
  };

  return { props };
};
