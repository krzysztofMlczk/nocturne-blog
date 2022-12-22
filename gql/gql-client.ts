import { GraphQLClient } from "graphql-request";

export const gqlClient = new GraphQLClient(
  process.env.HYGRAPH_CONTENT_API as string,
  {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_CONTENT_API_AUTH_TOKEN}`,
    },
  }
);
