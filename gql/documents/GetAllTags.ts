import { graphql } from '#/gql/codegen';

export const GetAllTags = graphql(/* GraphQL */ `
  query GetAllTags {
    tags {
      name
      slug
    }
  }
`);
