import { graphql } from '#/gql/codegen';

export const GetFeaturedPostsForLanding = graphql(/* GraphQL */ `
  query GetFeaturedPostsForLanding {
    posts(where: { featuredPost: true }) {
      tags {
        name
      }
      title
      excerpt
      slug
    }
  }
`);
