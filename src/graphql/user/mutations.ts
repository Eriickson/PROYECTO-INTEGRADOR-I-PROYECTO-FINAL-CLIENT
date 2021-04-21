import gql from "graphql-tag";

export const REGISTER_USER_M = gql`
  mutation RegisterUser($user: UserInput!) {
    registerUser(user: $user) {
      userCreated
    }
  }
`;

export const CONTACTS_US_M = gql`
  mutation ContactsUs($userInfo: UserInfoInput!) {
    contactsUs(userInfo: $userInfo) {
      msg
    }
  }
`;
export interface IRegisterUserPayloadM {
  registerUser: {
    userCreated: boolean;
  };
}

export interface IContactsUsPayload {
  contactsUs: {
    msg: string;
  };
}
