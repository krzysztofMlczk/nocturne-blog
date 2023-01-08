import { PostsGrid } from '#/app/blog/(postsExplorer)/PostsGrid';

export default async function BlogPage() {
  return await PostsGrid({ tagSlug: null });
}
