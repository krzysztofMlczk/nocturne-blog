import { graphql } from '#/gql/codegen';

export const GetPostsByTagSlug = graphql(/* GraphQL */ `
  query GetPostsByTagSlug($tagSlug: String!) {
    posts(where: { tags_some: { slug: $tagSlug } }) {
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
