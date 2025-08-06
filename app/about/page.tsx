import { Metadata } from 'next';
import { AboutHero } from '@/components/about/AboutHero';
import { Mission } from '@/components/about/Mission';
import { Team } from '@/components/about/Team';
import { Timeline } from '@/components/about/Timeline';
import { WhyVLP } from '@/components/about/WhyVLP';

export const metadata: Metadata = {
  title: 'About Us - VLP Technologies',
  description: 'Learn about VLP Technologies mission, team, and commitment to delivering innovative tech solutions.',
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