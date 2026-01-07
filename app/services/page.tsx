import { Metadata } from 'next';
import { ServicesHero } from '@/components/services/ServicesHero';
import { WebDevelopment } from '@/components/services/WebDevelopment';
import { MobileDevelopment } from '@/components/services/MobileDevelopment';
import { TechnologyHighlights } from '@/components/services/TechnologyHighlights';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Web Development & Mobile App Services | VijayLaxmi Technologies Noida',
  description: 'Custom web development, mobile app development, React.js, React Native, e-commerce solutions, UI/UX design, and API development by VLP Technologies in Noida & Delhi NCR.',
  keywords: [
    'web development services',
    'mobile app development services',
    'React.js development',
    'React Native development',
    'web development Noida',
    'app development Delhi NCR',
    'e-commerce development',
    'custom software development',
    'UI UX design services',
    'API development services',
  ].join(', '),
  openGraph: {
    title: 'Web Development & Mobile App Services | VijayLaxmi Technologies',
    description: 'Custom web and mobile app development services by VLP Technologies in Noida & Delhi NCR. Expert in React, Node.js, React Native.',
    url: `${seoConfig.baseUrl}/services`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/services`,
  },
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