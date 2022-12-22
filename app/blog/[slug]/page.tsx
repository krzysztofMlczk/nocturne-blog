interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>{params.slug}</h1>
    </div>
  );
}
