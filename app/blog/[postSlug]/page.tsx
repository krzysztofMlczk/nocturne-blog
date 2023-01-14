import { notFound } from 'next/navigation';

import { ArticlePage } from '#/components/blog/ArticlePage';
import { GetPostBySlug, gqlClient } from '#/gql';
import { sanitizeHtmlContentAndGenerateTOC } from '#/utils/HtmlSanitizerAndTocGenerator';

interface PageProps {
  params: {
    postSlug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { post } = await gqlClient.request(GetPostBySlug, {
    slug: params.postSlug,
  });

  if (!post) {
    notFound();
  }

  const { sanitizedHtmlContent, tocArray } = sanitizeHtmlContentAndGenerateTOC(
    post.content.html
  );

  return (
    <ArticlePage
      sanitizedHtmlContent={sanitizedHtmlContent}
      tocArray={tocArray}
    />
  );
}
