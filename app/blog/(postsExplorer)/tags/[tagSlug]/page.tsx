import { PostsGrid } from '#/app/blog/(postsExplorer)/PostsGrid';

interface PageProps {
  params: {
    tagSlug: string;
  };
}

export default async function Page({ params: { tagSlug } }: PageProps) {
  return await PostsGrid({ tagSlug });
}
