import { GetPostBySlug, gqlClient } from '@gql';
import parse from 'html-react-parser';

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { post } = await gqlClient.request(GetPostBySlug, {
    slug: params.slug,
  });

  if (!post) {
    return <div>Oops something went wrong...</div>;
  }

  return <article className='prose'>{parse(post.content.html)}</article>;
}
