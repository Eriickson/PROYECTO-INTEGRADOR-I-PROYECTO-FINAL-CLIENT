import gql from "graphql-tag";

export const CREATE_AGENCY_M = gql`
  mutation CreateAgency($agency: AgencyInput!, $userId: ID!) {
    createAgency(agency: $agency, userId: $userId) {
      token
    }
  }
`;

export interface ICreateAgencyPayload {
  createAgency: {
    token: string;
  };
}
