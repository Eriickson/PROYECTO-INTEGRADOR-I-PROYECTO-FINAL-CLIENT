import { IOption } from "@/shared";
import gql from "graphql-tag";

export const GET_MY_PROFILE = gql`
  query GetMyProfile($userId: ID!) {
    getMyProfile(userId: $userId) {
      user {
        profilePicture
        name
        lastname
        username
        direction {
          province {
            value
            label
          }
          municipality {
            value
            label
          }
          sector {
            value
            label
          }
        }
        nationality {
          value
          label
        }
        birthday
        sex
      }
      nationalities {
        value
        label
      }
      provinces {
        value
        label
      }
      municipalities {
        value
        label
      }
      sectors {
        value
        label
      }
    }
  }
`;

export interface IGetMyProfilePayload {
  getMyProfile: {
    /*eslint-disable @typescript-eslint/no-explicit-any*/
    user: any;
    provinces: IOption[];
    nationalities: IOption[];
    municipalities: IOption[];
    sectors: IOption[];
  };
}
