import Image from 'next/image';

import { LinkButton } from '#/components/buttons/LinkButton';
import { RouteNavItemMap } from '#/utils/constants';

interface FeaturedPostsSectionProps {
  featuredPosts: Array<{
    primaryTag: string;
    title: string;
    excerpt: string;
    slug: string;
  }>;
}

export function FeaturedPostsSection({
  featuredPosts,
}: FeaturedPostsSectionProps) {
  return (
    <section id='featured-posts' className='bg-cod-gray'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8 py-5 md:py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20'>
          <div>
            <h1 className='text-white text-4xl mb-7'>
              {"Take a peek on how it's goin'!"}
            </h1>
            <p className='text-base text-dusty-gray mb-5'>
              On our blog we periodically post our progress and how we managed
              to achieve some of our milestones. The Nocturne Blog is also a
              place where we share knowledge not only about Game Engines but
              from any Development-related area. Take a look for yourself!
            </p>
            <LinkButton href={RouteNavItemMap.blog.slug}>
              Check all posts
            </LinkButton>
            <div className='h-[310px] w-full relative mt-9'>
              <Image
                src='/triangle-pattern.png'
                fill
                alt='Blog image'
                className='object-cover object-top'
              />
            </div>
          </div>
          <div className='flex flex-col'>
            {featuredPosts.slice(0, 2).map(({ primaryTag, title, excerpt, slug }) => (
              <div key={slug} className='py-5 border-t border-dusty-gray-900'>
                <h3 className='text-sm text-dusty-gray capitalize mb-3'>
                  {primaryTag}
                </h3>
                <h2 className='text-white text-3xl mb-6'>{title}</h2>
                <p
                  title={excerpt}
                  className='mb-10 text-dusty-gray text-base  line-clamp-2 overflow-hidden text-ellipsis capitalize'
                >
                  {excerpt}
                </p>
                <LinkButton href={`/blog/${slug}`}>Read more</LinkButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
