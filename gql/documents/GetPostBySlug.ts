import { graphql } from '#/gql/codegen';

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
