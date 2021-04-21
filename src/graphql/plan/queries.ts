import { IPlan } from "@/models";

import gql from "graphql-tag";

export const GET_PLANS_Q = gql`
  query GetPlans {
    getPlans {
      plans {
        id
        name
        description
        price {
          currency
          amount
        }
        benefits {
          posts
          postLimit
          images
        }
      }
    }
  }
`;

export interface GetPlansPayload {
  getPlans: {
    plans: IPlan[];
  };
}
