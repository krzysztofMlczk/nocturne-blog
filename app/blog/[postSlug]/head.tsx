import DefaultHeadTags from '#/components/utils/DefaultHeadTags';
import { GetPostHeadInfoBySlug, gqlClient } from '#/gql';
import { generateHeadTitle } from '#/utils/generateHeadTitle';

export default async function Head({
  params,
}: {
  params: { postSlug: string };
}) {
  const { post } = await gqlClient.request(GetPostHeadInfoBySlug, {
    postSlug: params.postSlug,
  });
  return (
    <>
      <title>
        {post
          ? generateHeadTitle(
              post.title,
              post.author?.name || null,
              post.createdAt
            )
          : 'Nocturne Blog Article'}
      </title>
      <DefaultHeadTags />
    </>
  );
}
