/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetAllPosts {\n    posts {\n      slug\n      featuredImage {\n        url\n      }\n      title\n      excerpt\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n": types.GetAllPostsDocument,
    "\n  query GetAllTags {\n    tags {\n      name\n      slug\n    }\n  }\n": types.GetAllTagsDocument,
    "\n  query GetFeaturedPostsForLanding {\n    posts(where: { featuredPost: true }) {\n      tags {\n        name\n      }\n      title\n      excerpt\n      slug\n    }\n  }\n": types.GetFeaturedPostsForLandingDocument,
    "\n  query GetPostBySlug($slug: String!) {\n    post(where: { slug: $slug }) {\n      title\n      author {\n        name\n        photo {\n          url\n        }\n        socialMediaLinks\n      }\n      createdAt\n      tags {\n        name\n        slug\n      }\n      content {\n        html\n      }\n      featuredImage {\n        url\n      }\n    }\n  }\n": types.GetPostBySlugDocument,
    "\n  query GetPostHeadInfoBySlug($postSlug: String!) {\n    post(where: { slug: $postSlug }) {\n      title\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n": types.GetPostHeadInfoBySlugDocument,
    "\n  query GetPostsByTagSlug($tagSlug: String!) {\n    posts(where: { tags_some: { slug: $tagSlug } }) {\n      slug\n      featuredImage {\n        url\n      }\n      title\n      excerpt\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n": types.GetPostsByTagSlugDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllPosts {\n    posts {\n      slug\n      featuredImage {\n        url\n      }\n      title\n      excerpt\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetAllPosts {\n    posts {\n      slug\n      featuredImage {\n        url\n      }\n      title\n      excerpt\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllTags {\n    tags {\n      name\n      slug\n    }\n  }\n"): (typeof documents)["\n  query GetAllTags {\n    tags {\n      name\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFeaturedPostsForLanding {\n    posts(where: { featuredPost: true }) {\n      tags {\n        name\n      }\n      title\n      excerpt\n      slug\n    }\n  }\n"): (typeof documents)["\n  query GetFeaturedPostsForLanding {\n    posts(where: { featuredPost: true }) {\n      tags {\n        name\n      }\n      title\n      excerpt\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostBySlug($slug: String!) {\n    post(where: { slug: $slug }) {\n      title\n      author {\n        name\n        photo {\n          url\n        }\n        socialMediaLinks\n      }\n      createdAt\n      tags {\n        name\n        slug\n      }\n      content {\n        html\n      }\n      featuredImage {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetPostBySlug($slug: String!) {\n    post(where: { slug: $slug }) {\n      title\n      author {\n        name\n        photo {\n          url\n        }\n        socialMediaLinks\n      }\n      createdAt\n      tags {\n        name\n        slug\n      }\n      content {\n        html\n      }\n      featuredImage {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostHeadInfoBySlug($postSlug: String!) {\n    post(where: { slug: $postSlug }) {\n      title\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetPostHeadInfoBySlug($postSlug: String!) {\n    post(where: { slug: $postSlug }) {\n      title\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetPostsByTagSlug($tagSlug: String!) {\n    posts(where: { tags_some: { slug: $tagSlug } }) {\n      slug\n      featuredImage {\n        url\n      }\n      title\n      excerpt\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  query GetPostsByTagSlug($tagSlug: String!) {\n    posts(where: { tags_some: { slug: $tagSlug } }) {\n      slug\n      featuredImage {\n        url\n      }\n      title\n      excerpt\n      author {\n        name\n      }\n      createdAt\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;