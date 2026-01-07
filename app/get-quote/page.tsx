import { Metadata } from 'next';
import { QuoteHero } from '@/components/quote/QuoteHero';
import { QuoteForm } from '@/components/quote/QuoteForm';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Get Quote for Web & App Development | VijayLaxmi Technologies',
  description: 'Request a custom quote for your web development or mobile app project from VLP Technologies in Noida & Delhi NCR. Free consultation, detailed proposal, competitive pricing.',
  keywords: [
    'web development quote',
    'app development quote',
    'software development quote',
    'development pricing',
    'project estimate',
    'cost calculation',
    'free consultation',
    'custom development pricing',
  ].join(', '),
  openGraph: {
    title: 'Get Quote for Web & App Development | VijayLaxmi Technologies',
    description: 'Request a free quote for your web or app development project from VLP Technologies.',
    url: `${seoConfig.baseUrl}/get-quote`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/get-quote`,
  },
};

export default function GetQuote() {
  return (
    <>
      <QuoteHero />
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </div>
    </>
  );
}