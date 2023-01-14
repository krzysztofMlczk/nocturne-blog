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

  const { title, author, createdAt, tags, featuredImage, content } = post;

  const { sanitizedHtmlContent, tocArray } = sanitizeHtmlContentAndGenerateTOC(
    content.html
  );

  return (
    <ArticlePage
      title={title}
      author={
        author
          ? {
              name: author.name,
              photo: author.photo.url,
              socialMediaLinks: author.socialMediaLinks,
            }
          : null
      }
      createdAt={createdAt}
      tags={tags.map(({ name, slug }) => ({ name, slug }))}
      featuredImage={featuredImage.url}
      sanitizedHtmlContent={sanitizedHtmlContent}
      tocArray={tocArray}
    />
  );
}
