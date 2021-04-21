import { DocumentNode } from "graphql";
import { GraphQLClient } from "graphql-request";

export interface IGraphQLRequest {
  query: DocumentNode;
  variables?: Record<string, unknown>;
  headers?: Record<string, string | undefined>;
}

export async function graphqlClient<T>({ query, variables, headers }: IGraphQLRequest): Promise<T> {
  const graphQLClient = new GraphQLClient(`${process.env.GRAPHQL_SERVER}`, {
    headers: {
      ...headers,
      Accept: "application/json",
    },
  });

  return new Promise((resolve, reject) => {
    graphQLClient
      .request(query, variables)
      .then(resolve)
      .catch(error => {
        error = error["response"];
        /* eslint-disable-next-line */
        console.log(error);

        /* eslint-disable */
        const errors = error.errors.map((err: any) => JSON.parse(err.message.replace(/Error: /, "")));

        reject(errors);
      });
  });
}
