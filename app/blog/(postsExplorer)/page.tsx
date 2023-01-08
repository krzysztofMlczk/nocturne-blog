import { PostsGrid } from '#/components/blog/PostsGrid';
import { GetAllPosts, gqlClient } from '#/gql';

export default async function BlogPage() {
  const { posts } = await gqlClient.request(GetAllPosts);
  // TODO: consider extracting below mapping to a dedicated adapter-like function?
  // TODO: research whether it is possible to make 'author' required in hygraphCMS?
  return (
    <PostsGrid
      postsPreviewData={posts.map(
        ({
          slug,
          featuredImage: { url },
          title,
          excerpt,
          createdAt,
          author,
        }) => ({
          slug,
          featuredImageUrl: url,
          title,
          excerpt,
          author: author?.name ? author.name : null,
          createdAt,
        })
      )}
    />
  );
}
