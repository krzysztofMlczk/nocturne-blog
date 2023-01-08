'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';

interface PostCategoryTagProps {
  name: string;
  slug: string;
}

export function PostCategoryTag({ name, slug }: PostCategoryTagProps) {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const isActive = segment === 'tags' && pathname?.split('/').at(-1) === slug;
  return (
    <Link
      href={`blog/tags/${slug}`}
      className={clsx(
        'rounded-md flex py-1.5 px-2.5 text-sm transition-colors tracking-wide transition capitalize',
        isActive
          ? 'bg-supernova text-chaos-black font-bold'
          : 'bg-chaos-black-400 text-dusty-gray-400 hover:bg-cod-gray-400 hover:text-white'
      )}
    >
      {name}
    </Link>
  );
}
