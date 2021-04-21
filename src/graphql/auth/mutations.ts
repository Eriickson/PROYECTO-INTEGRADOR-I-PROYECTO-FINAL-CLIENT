import gql from "graphql-tag";

export const CREATE_TOKEN_REGISTER_M = gql`
  mutation CreateTokenRegister($email: String!, $provider: String!) {
    createTokenRegister(email: $email, provider: $provider) {
      token
    }
  }
`;
export interface ICreateTokenRegisterPayload {
  createTokenRegister: {
    token: string;
  };
}
