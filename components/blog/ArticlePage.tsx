'use client';

import { ArticleHero } from '#/components/blog/ArticleHero';
import { TableOfContents } from '#/components/blog/TableOfContents';
import { useHeadersObserver } from '#/utils/hooks/useHeadersObserver';
import { TocItem } from '#/utils/HtmlSanitizerAndTocGenerator';

interface ArticlePageProps {
  title: string;
  author: {
    name: string;
    photo: string;
    socialMediaLinks: Array<string>;
  } | null;
  createdAt: string;
  tags: Array<{ name: string; slug: string }>;
  featuredImage: string;
  sanitizedHtmlContent: string;
  tocArray: Array<TocItem>;
}

export function ArticlePage({
  title,
  author,
  createdAt,
  tags,
  featuredImage,
  sanitizedHtmlContent,
  tocArray,
}: ArticlePageProps) {
  const htmlContentContainerId = 'article-container';
  const { activeHeaderId } = useHeadersObserver(htmlContentContainerId);
  return (
    <div className='block lg:flex justify-end gap-x-16 items-start'>
      <main>
        <article className='prose md:prose-lg xl:prose-xl prose-nocturne mx-auto lg:mr-0'>
          <section className='not-prose'>
            <ArticleHero
              title={title}
              author={author}
              createdAt={createdAt}
              tags={tags}
              featuredImage={featuredImage}
            />
          </section>
          <section
            id={htmlContentContainerId}
            // DL: decided to not use html-react-parse -> content is already sanitized no need to parse it to React components; better performance with setInnerHtml
            dangerouslySetInnerHTML={{ __html: sanitizedHtmlContent }}
          ></section>
        </article>
      </main>
      <TableOfContents tocItemsArray={tocArray} activeItemId={activeHeaderId} />
    </div>
  );
}
