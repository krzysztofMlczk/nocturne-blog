import Link from 'next/link';

import { PostCategoryTag } from '#/components/blog/PostCategoryTag';
import { GetAllTags, gqlClient } from '#/gql';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { tags } = await gqlClient.request(GetAllTags);
  return (
    <div className='mx-auto max-w-6xl px-6 py-10 md:py-20'>
      <h1 className='text-white font-bold text-4xl font-caption text-center tracking-wide'>
        Nocturne{' '}
        <Link
          href='/blog'
          className="text-supernova relative transition-all before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:transition-all before:duration-200 before:bg-supernova hover:before:w-full"
        >
          Blog
        </Link>
      </h1>
      <div className='flex flex-wrap justify-center gap-2.5 mt-10 mb-10 md:mb-20'>
        {tags.map(({ name, slug }) => (
          <PostCategoryTag key={slug} name={name} slug={slug} />
        ))}
      </div>
      {children}
    </div>
  );
}
