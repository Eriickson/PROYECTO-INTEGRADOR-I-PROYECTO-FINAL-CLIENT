import gql from "graphql-tag";

export const REGISTER_ACCOUNT_M = gql`
  mutation RegisterAccount($email: String!) {
    registerAccount(email: $email) {
      title
      message
      typeAlert
      labelBtnPri
    }
  }
`;
