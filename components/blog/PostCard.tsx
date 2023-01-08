import Image from 'next/image';
import Link from 'next/link';

import { formatStringDate } from '#/utils/string-date-formatter';

interface PostCardProps {
  slug: string;
  featuredImageUrl: string;
  title: string;
  excerpt: string;
  author: string | null;
  createdAt: string;
}

export function PostCard({
  slug,
  featuredImageUrl,
  title,
  excerpt,
  author,
  createdAt,
}: PostCardProps) {
  return (
    <Link
      href={`blog/${slug}`}
      className='group flex flex-col overflow-hidden rounded-[20px] w-[278px] bg-chaos-black drop-shadow-md border border-solid border-transparent hover:border-supernova transition-colors'
    >
      <div className='h-[164px] w-full relative'>
        <Image
          src={featuredImageUrl}
          fill
          alt='article image'
          className='object-cover'
        />
      </div>
      <div className='flex grow flex-col p-5'>
        <h2
          className='group-hover:text-supernova transition-colors mb-2 text-lg font-bold leading-7 text-white capitalize line-clamp-3'
          title={title}
        >
          {title}
        </h2>
        {/* TODO: add automatic hyphens via CSS? */}
        <p
          className='mb-6 group-hover:text-dusty-gray text-dusty-gray-600 transition-colors text-xs leading-4 line-clamp-3 overflow-hidden text-ellipsis capitalize'
          title={excerpt}
        >
          {excerpt}
        </p>
        <div className='text-xs space-x-1 mt-auto'>
          {author && (
            <>
              <span className='group-hover:text-white transition-colors font-bold text-dusty-gray-300 capitalize'>
                {author}
              </span>
              <span className='group-hover:text-dusty-gray text-dusty-gray-600 transition-colors select-none'>
                •
              </span>
            </>
          )}
          <span className='group-hover:text-dusty-gray text-dusty-gray-600 transition-colors '>
            {formatStringDate(createdAt)}
          </span>
        </div>
      </div>
    </Link>
  );
}
