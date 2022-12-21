interface PageProps {
  params: {
    categoryId: string;
    postId: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>{params.categoryId}</h1>
      <h2>{params.postId}</h2>
    </div>
  );
}
