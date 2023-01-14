import { graphql } from '#/gql/codegen';

export const GetPostBySlug = graphql(/* GraphQL */ `
  query GetPostBySlug($slug: String!) {
    post(where: { slug: $slug }) {
      title
      author {
        name
        photo {
          url
        }
        socialMediaLinks
      }
      createdAt
      tags {
        name
        slug
      }
      content {
        html
      }
      featuredImage {
        url
      }
    }
  }
`);
