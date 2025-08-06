import { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { WebDevelopment } from '@/components/services/WebDevelopment';
import { MobileDevelopment } from '@/components/services/MobileDevelopment';
import { TechnologyHighlights } from '@/components/services/TechnologyHighlights';
import { ServicesCTA } from '@/components/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Our Services - VLP Technologies',
  description: 'Professional web development with React.js and mobile app development with React Native. SEO-friendly, scalable solutions.',
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <WebDevelopment />
      <MobileDevelopment />
      <TechnologyHighlights />
      <ServicesCTA />
    </>
  );
}