// import parse from "html-react-parser";
import { GetPostBySlug, gqlClient } from "../../../gql";

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

  // TODO: how can we utilize html-react-parser without:
  // TypeError: Invalid value used as weak map key?
  return (
    <article
      className="prose"
      dangerouslySetInnerHTML={{ __html: post.content.html }}
    >
      {/* {parse(post.content.html)} */}
    </article>
  );
}
