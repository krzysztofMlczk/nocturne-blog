import { AboutSection } from '#/app/AboutSection';
import { FeaturedPostsSection } from '#/app/FeaturedPostsSection';
import { HeroSection } from '#/app/HeroSection';
import { SponsorSection } from '#/app/SponsorSection';
import { GetFeaturedPostsForLanding, gqlClient } from '#/gql';

export default async function HomePage() {
  const { posts } = await gqlClient.request(GetFeaturedPostsForLanding);
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedPostsSection
        featuredPosts={posts.map(({ tags, excerpt, slug, title }) => ({
          primaryTag: tags[0].name,
          title,
          excerpt,
          slug,
        }))}
      />
      <SponsorSection />
    </>
  );
}
