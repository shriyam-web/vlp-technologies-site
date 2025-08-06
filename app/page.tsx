import { Hero } from '@/components/home/Hero';
import { ServicesOverview } from '@/components/home/ServicesOverview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { Testimonials } from '@/components/home/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <FeaturedProjects />
      <Testimonials />
    </>
  );
}