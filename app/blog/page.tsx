import { PostCard } from "../../components";
import { GetPostsOverview, gqlClient } from "../../gql";

export default async function Page() {
  const { posts } = await gqlClient.request(GetPostsOverview);

  return (
    <>
      {posts.map(({ id, title, excerpt, featuredImage, slug }) => (
        <PostCard
          key={id}
          title={title}
          description={excerpt}
          imageUrl={featuredImage.url}
          readMoreHref={`/blog/${slug}`} // TODO: is it possible to automatically infer this href (based on folders structure)?
        />
      ))}
    </>
  );
}
