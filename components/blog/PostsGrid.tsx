import { PostCard } from '#/components/blog/PostCard';
import { PostPreviewData } from '#/types/blog';

interface PostsGridProps {
  postsPreviewData: Array<PostPreviewData>;
}

export function PostsGrid({ postsPreviewData }: PostsGridProps) {
  return (
    <div className='flex flex-wrap justify-center gap-x-7 gap-y-10'>
      {postsPreviewData.map(
        ({ slug, featuredImageUrl, title, excerpt, author, createdAt }) => (
          <PostCard
            key={slug} // TODO: consider using IDs from DB for indexing mapped data
            slug={slug}
            featuredImageUrl={featuredImageUrl}
            title={title}
            excerpt={excerpt}
            author={author}
            createdAt={createdAt}
          />
        )
      )}
    </div>
  );
}
