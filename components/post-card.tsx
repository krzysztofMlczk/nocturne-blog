import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  imageUrl: string;
  description: string;
  readMoreHref: string;
}

export const PostCard = ({
  title,
  imageUrl,
  description,
  readMoreHref,
}: PostCardProps) => (
  <figure className="rounded-xl bg-slate-800 max-w-md overflow-hidden text-white">
    <Image src={imageUrl} alt="" width={100} height={100} />
    <div className="flex flex-col gap-2 p-3">
      <h1 className="font-semibold text-white">{title}</h1>
      <blockquote className="text text-neutral-500">{description}</blockquote>
      <Link href={readMoreHref} className="inline hover:underline">
        Read more
      </Link>
    </div>
  </figure>
);
