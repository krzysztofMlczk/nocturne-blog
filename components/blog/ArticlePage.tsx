'use client';

import { TableOfContents } from '#/components/blog/TableOfContents';
import { useHeadersObserver } from '#/utils/hooks/useHeadersObserver';
import { TocItem } from '#/utils/HtmlSanitizerAndTocGenerator';

interface ArticlePageProps {
  sanitizedHtmlContent: string;
  tocArray: Array<TocItem>;
}

export function ArticlePage({
  sanitizedHtmlContent,
  tocArray,
}: ArticlePageProps) {
  const articleContainerId = 'article-container';
  const { activeHeaderId } = useHeadersObserver(articleContainerId);
  return (
    // TODO: create loading animation (SVGator?)
    // TODO: add library for displaying code (pre tags styling)
    <div className='block lg:flex justify-end gap-x-16 items-start'>
      <article // DL: decided to not use html-react-parse -> content is already sanitized no need to parse it to React components; better performance with setInnerHtml
        id={articleContainerId}
        className='prose md:prose-lg xl:prose-xl prose-nocturne mx-auto lg:mr-0'
        dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
      ></article>
      <TableOfContents tocItemsArray={tocArray} activeItemId={activeHeaderId} />
    </div>
  );
}
