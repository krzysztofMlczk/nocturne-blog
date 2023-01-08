import { PostCard } from '#/components/blog/PostCard';
import { GetAllPosts, GetPostsByTagSlug, gqlClient } from '#/gql';

interface PostsGridProps {
  tagSlug: string | null;
}
// this component has to be in the app directory as it is server side component!
export async function PostsGrid({ tagSlug }: PostsGridProps) {
  const { posts } =
    (tagSlug && (await gqlClient.request(GetPostsByTagSlug, { tagSlug }))) ||
    (await gqlClient.request(GetAllPosts));

  return (
    <div className='flex flex-wrap justify-center gap-x-7 gap-y-10'>
      {posts.map(
        ({ slug, featuredImage, title, excerpt, author, createdAt }) => (
          <PostCard
            key={slug}
            slug={slug}
            featuredImageUrl={featuredImage.url}
            title={title}
            excerpt={excerpt}
            author={author?.name || null}
            createdAt={createdAt}
          />
        )
      )}
    </div>
  );
}
