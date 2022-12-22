import { graphql } from "../codegen";

export const GetPostsOverview = graphql(/* GraphQL */ `
  query Assets {
    posts {
      title
      slug
      id
      excerpt
      featuredImage {
        url
      }
    }
  }
`);
