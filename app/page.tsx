import { GetPostsOverview, gqlClient } from '@gql';
import Link from 'next/link';

export default async function Page() {
  const { posts } = await gqlClient.request(GetPostsOverview);

  return (
    <>
      {posts.map(({ id, title, slug }) => (
        <Link key={id} href={`/${slug}`}>
          {title}
        </Link>
      ))}
    </>
  );
}
