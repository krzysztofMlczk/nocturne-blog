import parse from 'html-react-parser';

import { GetPostBySlug, gqlClient } from '#/gql';

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
    return <div>Oops something went wrong...</div>; // TODO: handle this more nicely :D
  }

  return (
    <article className='prose md:prose-lg lg:prose-xl prose-nocturne mx-auto'>
      {parse(post.content.html)}
    </article>
  );
}
