import { graphql } from "../codegen";

export const GetPostsOverview = graphql(/* GraphQL */ `
  query GetPostsOverview {
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

export const GetPostBySlug = graphql(/* GraphQL */ `
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      content {
        html
      }
      featuredImage {
        url
      }
    }
  }
`);
