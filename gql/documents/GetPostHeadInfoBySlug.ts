import { graphql } from '#/gql/codegen';

export const GetPostHeadInfoBySlug = graphql(/* GraphQL */ `
  query GetPostHeadInfoBySlug($postSlug: String!) {
    post(where: { slug: $postSlug }) {
      title
      author {
        name
      }
      createdAt
    }
  }
`);
