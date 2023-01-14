import clsx from 'clsx';

import { TocItem } from '#/utils/HtmlSanitizerAndTocGenerator';

interface TocProps {
  tocItemsArray: Array<TocItem>;
  activeItemId: string | null;
}

export function TableOfContents({ tocItemsArray, activeItemId }: TocProps) {
  // TODO: improve automatic highlighting
  return (
    <aside className='w-64 sticky top-20 hidden lg:block overflow-hidden'>
      <p className='capitalize mb-4 font-bold text-white'>On This Page:</p>
      <ul className='max-h-[75vh] overflow-y-auto pr-1'>
        {tocItemsArray.map(({ text, indent, id }) => (
          // TODO: replace this a tag with Link from 'next/navigation'
          // TODO: (in next.js 13.1 Link doesn't work in this case:
          //  https://github.com/vercel/next.js/issues/44625
          <li key={id} style={{ marginLeft: `${indent}rem` }}>
            <a
              href={`#${id}`}
              className={clsx(
                `transition-colors block py-1.5`,
                id === activeItemId
                  ? 'text-supernova'
                  : 'text-dusty-gray-600 hover:text-dusty-gray-100'
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
