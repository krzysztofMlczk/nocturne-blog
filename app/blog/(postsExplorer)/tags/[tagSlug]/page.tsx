import { PostsGrid } from '#/components/blog/PostsGrid';
import { GetPostsByTagSlug, gqlClient } from '#/gql';

interface PageProps {
  params: {
    tagSlug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { posts } = await gqlClient.request(GetPostsByTagSlug, {
    tagSlug: params.tagSlug,
  });
  return (
    <PostsGrid
      postsPreviewData={posts.map(
        ({
          slug,
          featuredImage: { url },
          title,
          excerpt,
          author,
          createdAt,
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
