import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SupportWidget } from '@/components/SupportWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VLP Technologies - Web & Mobile App Development',
  description: 'VLP Technologies specializes in modern web development using React.js and mobile app development using React Native. Get your project built by experts.',
  keywords: 'web development, mobile app development, React.js, React Native, JavaScript, HTML, CSS',
  authors: [{ name: 'VLP Technologies' }],
  openGraph: {
    title: 'VLP Technologies - Web & Mobile App Development',
    description: 'VLP Technologies specializes in modern web development using React.js and mobile app development using React Native.',
    url: 'https://vlptechnologies.com',
    siteName: 'VLP Technologies',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VLP Technologies - Web & Mobile App Development',
    description: 'VLP Technologies specializes in modern web development using React.js and mobile app development using React Native.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "VLP Technologies",
              "description": "Web and Mobile App Development Company",
              "url": "https://vlptechnologies.com",
              "logo": "https://vlptechnologies.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/vlptechnologies",
                "https://twitter.com/vlptech"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <SupportWidget />
      </body>
    </html>
  );
}