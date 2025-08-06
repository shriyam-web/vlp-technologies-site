import { Metadata } from 'next';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { LocationMap } from '@/components/contact/LocationMap';

export const metadata: Metadata = {
  title: 'Contact Us - VLP Technologies',
  description: 'Get in touch with VLP Technologies for your web and mobile development needs. We are ready to help.',
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