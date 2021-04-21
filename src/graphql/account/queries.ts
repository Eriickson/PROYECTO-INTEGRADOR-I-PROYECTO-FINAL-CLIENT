import gql from "graphql-tag";

export const VERIFY_ACCOUNT_Q = gql`
  query VerifyAccount($email: String!, $code: String!) {
    verifyAccount(email: $email, code: $code)
  }
`;

export const VERIFY_TOKEN_NEW_ACCOUNT_Q = gql`
  query verifyTokenNewAccount($token: String!) {
    verifyTokenNewAccount(token: $token)
  }
`;
