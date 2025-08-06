import { Metadata } from 'next';
import { QuoteHero } from '@/components/quote/QuoteHero';
import { QuoteForm } from '@/components/quote/QuoteForm';

export const metadata: Metadata = {
  title: 'Get Quote - VLP Technologies',
  description: 'Request a custom quote for your web or mobile development project. Tell us about your requirements.',
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