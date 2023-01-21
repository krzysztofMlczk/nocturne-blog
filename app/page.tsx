import { AboutSection } from '#/app/AboutSection';
import FeaturedPostsSection from '#/app/FeaturedPostsSection';
import { HeroSection } from '#/app/HeroSection';
import { SponsorSection } from '#/app/SponsorSection';

export default async function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturedPostsSection />
      <SponsorSection />
    </>
  );
}
