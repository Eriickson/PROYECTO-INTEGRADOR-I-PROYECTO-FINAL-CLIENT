import gql from "graphql-tag";
import { IAgency, IPost } from "@/shared";

export const GET_MY_AGENCY_Q = gql`
  query GetMyAgency($userId: ID!) {
    getMyAgency(userId: $userId) {
      myAgency {
        id
        name
        slogan
        uuid
        logo
        occupation
        contacts {
          numberPhones {
            label
            value
          }
          emails {
            label
            value
          }
        }
      }
    }
  }
`;

export const SEARCH_AGENCY_Q = gql`
  query SearchAgency($filter: AgencySearchFilter!) {
    searchAgency(filter: $filter) {
      id
      uuid
      name
      slug
      logo
      slogan
    }
  }
`;

export const GET_AGENCY_Q = gql`
  query GetAgency($uuid: ID!) {
    getAgency(uuid: $uuid) {
      id
      uuid
      name
      logo
      slogan
      contacts {
        numberPhones {
          label
          value
        }
        emails {
          label
          value
        }
      }
    }
  }
`;

export const GET_AGENCY_PROFILE_Q = gql`
  query GetAgencyProfile($uuid: ID!) {
    getAgencyProfile(uuid: $uuid) {
      agency {
        id
        uuid
        name
        slogan
        logo
        contacts {
          numberPhones {
            label
            value
          }
          emails {
            label
            value
          }
        }
        ubication {
          direction {
            province {
              label
            }
            municipality {
              label
            }
            sector {
              label
            }
            reference
          }
        }
      }
      posts {
        id
        uuid
        cover
        brand {
          label
        }
        model {
          label
        }
        year
        pricing {
          amount
          currency
        }
        slug
      }
    }
  }
`;

export interface ISearchAgency {
  searchAgency: IAgency[];
}
export interface IGetMyAgencyPayload {
  getMyAgency: {
    myAgency: IAgency;
  };
}

export interface IGetAgency {
  getAgency: IAgency;
}

export interface IGetAgencyProfilePayload {
  getAgencyProfile: {
    agency: IAgency;
    posts: IPost[];
  };
}
