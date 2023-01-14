import Image from 'next/image';
import Link from 'next/link';

import { PostCategoryTag } from '#/components/blog/PostCategoryTag';
import { formatStringDate } from '#/utils/stringDateFormatter';

interface ArticleHeroProps {
  title: string;
  author: {
    name: string;
    photo: string;
    socialMediaLinks: Array<string>;
  } | null;
  createdAt: string;
  tags: Array<{ name: string; slug: string }>;
  featuredImage: string;
}

export function ArticleHero({
  title,
  author,
  createdAt,
  tags,
  featuredImage,
}: ArticleHeroProps) {
  return (
    <div className='flex flex-col gap-7 items-center mb-14'>
      <h1 className='text-white text-center text-4xl md:text-5xl xl:text-6xl'>
        {title}
      </h1>
      <div className='flex items-center gap-2'>
        {author && (
          <Link
            href={author.socialMediaLinks[0]}
            className='w-12 h-12 relative'
          >
            <Image
              src={author.photo}
              fill
              alt='article author'
              className='object-cover rounded-full object-top'
            />
          </Link>
        )}
        <div>
          {author && (
            <Link
              href={author.socialMediaLinks[0]}
              title={author.name}
              className='text-lg text-[#00C9F0] hover:text-[#5E94E6] transition-colors'
            >
              {author.name}
            </Link>
          )}
          <p className='text-sm text-dusty-gray-700'>
            {formatStringDate(createdAt, true)}
          </p>
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-2.5'>
        {tags.map(({ name, slug }) => (
          <PostCategoryTag key={slug} name={name} slug={slug} />
        ))}
      </div>
      <div className='w-full h-96 relative'>
        <Image
          src={featuredImage}
          alt='featured image'
          fill
          className='object-cover'
        />
      </div>
    </div>
  );
}
