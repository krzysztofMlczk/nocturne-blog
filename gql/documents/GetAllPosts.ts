import { graphql } from '#/gql/codegen';

export const GetAllPosts = graphql(/* GraphQL */ `
  query GetAllPosts {
    posts {
      slug
      featuredImage {
        url
      }
      title
      excerpt
      author {
        name
      }
      createdAt
    }
  }
`);
