import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { LocationMap } from '@/components/contact/LocationMap';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Contact VijayLaxmi Technologies | Web Development Noida Delhi NCR',
  description: 'Get in touch with VijayLaxmi Technologies (VLP Tech) for web and mobile app development. Located in Noida & Delhi NCR. Free consultation & quick response.',
  keywords: [
    'contact web developer Noida',
    'hire developers Delhi',
    'web development services contact',
    'app development company contact',
    'software development Noida',
    'tech company Noida contact',
    'VLP Technologies contact',
  ].join(', '),
  openGraph: {
    title: 'Contact VijayLaxmi Technologies | Web Development Company',
    description: 'Reach out to VLP Technologies in Noida & Delhi NCR for your web development and app development needs.',
    url: `${seoConfig.baseUrl}/contact`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/contact`,
  },
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <div className="space-y-8">
              <ContactInfo />
              <LocationMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}