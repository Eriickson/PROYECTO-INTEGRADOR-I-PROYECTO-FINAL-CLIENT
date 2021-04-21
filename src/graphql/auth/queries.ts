import gql from "graphql-tag";

export const LOGIN_Q = gql`
  query Login($email: String!, $provider: String!) {
    login(email: $email, provider: $provider) {
      token
      isNewUser
    }
  }
`;
export interface ILoginQPayload {
  login: {
    token: string;
    isNewUser: boolean;
  };
}

export const VERIFY_TOKEN_NEW_USER_Q = gql`
  query VerifyTokenNewUser($token: String!) {
    verifyTokenNewUser(token: $token) {
      isNewUser
      email
    }
  }
`;
export interface IVerifyTokenNewUserQPayload {
  verifyTokenNewUser: {
    isNewUser: boolean;
    email: string;
  };
}

export const TOKEN_QUERY_GRAPHQ_API_Q = gql`
  query TokenQueryGraphqlApi($email: String!) {
    tokenQueryGraphqlApi(email: $email) {
      queryToken
      picture
      name
    }
  }
`;

export interface ITokenQueryGraphqlApiPayload {
  tokenQueryGraphqlApi: {
    queryToken: string;
    picture: string;
    name: string;
  };
}

export const GENERATE_TOKEN_API_GRAPHQL = gql`
  query GenerateTokenApiGraphlQL($email: String!) {
    generateTokenApiGraphlQL(email: $email) {
      token
      name
      picture
      userId
      agencyId
    }
  }
`;

export interface IGenerateTokenApiGraphlQLPayload {
  generateTokenApiGraphlQL: {
    token: string;
    name: string;
    picture: string;
    userId: string;
    agencyId: string;
  };
}

export const SIGNIN_Q = gql`
  query Signin($identifier: String!, $password: String!) {
    signin(identifier: $identifier, password: $password) {
      email
      name
      picture
      userId
    }
  }
`;

export interface ISigninPayload {
  signin: {
    email: string;
    name: string;
    picture: string;
    userId: string;
  };
}
