import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { Mission } from '@/components/about/Mission';
import { Team } from '@/components/about/Team';
import { Timeline } from '@/components/about/Timeline';
import { WhyVLP } from '@/components/about/WhyVLP';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'About VijayLaxmi Technologies | Web Development Company Noida Delhi NCR',
  description: 'Learn about VijayLaxmi Technologies (VLP Technologies) - A web development and mobile app development company in Noida & Delhi NCR. Expert team, proven track record, innovative solutions.',
  keywords: [
    'about VLP Technologies',
    'web development company Noida',
    'app development company Delhi',
    'software development company',
    'tech company NCR',
    'VijayLaxmi Technologies',
    'development team',
    'experienced developers',
  ].join(', '),
  openGraph: {
    title: 'About VijayLaxmi Technologies | Web Development Company',
    description: 'Discover VLP Technologies - expert web development and app development company in Noida & Delhi NCR.',
    url: `${seoConfig.baseUrl}/about`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/about`,
  },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Team />
      <Timeline />
      <WhyVLP />
    </>
  );
}