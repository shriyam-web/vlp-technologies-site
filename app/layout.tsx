import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SupportWidget } from '@/components/SupportWidget';
import { LeadCapturePopup } from '@/components/LeadCapturePopup';
import { seoConfig } from '@/lib/seoConfig';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.baseUrl),
  title: 'VijayLaxmi Technologies | SEO Web Development | MERN Stack & Next.js | Noida Delhi',
  description: 'VijayLaxmi Technologies (VLP Technologies) - Expert SEO-optimized web development company in Noida & Delhi NCR. MERN Stack, Next.js, speed optimization. Our core USP: SEO expertise. Get high-ranking websites!',
  keywords: [
    'VijayLaxmi Technologies',
    'VLP Technologies',
    'SEO web development',
    'SEO optimized websites',
    'MERN Stack development',
    'Next.js development',
    'web development Noida',
    'web development Delhi',
    'speed optimized websites',
    'high ranking website developers',
    'organic ranking experts',
  ].join(', '),
  authors: [{ name: 'VijayLaxmi Technologies' }],
  creator: 'VijayLaxmi Technologies',
  publisher: 'VijayLaxmi Technologies',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    title: 'VijayLaxmi Technologies | Web & Mobile App Development | Noida & Delhi NCR',
    description: 'VLP Technologies - Leading web development and app development company in Noida and Delhi NCR. Expert in React, Node.js, React Native. Free consultation.',
    url: seoConfig.baseUrl,
    siteName: 'VijayLaxmi Technologies',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'VijayLaxmi Technologies - Web Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VijayLaxmi Technologies | Web & Mobile App Development',
    description: 'Expert web development and mobile app development in Noida & Delhi NCR | VLP Technologies',
    creator: '@vlptech',
    images: ['/logo.png'],
  },
  alternates: {
    canonical: seoConfig.baseUrl,
  },
  verification: {
    google: 'google-site-verification-code',
  },
  category: 'Technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.baseUrl}/#organization`,
    "name": seoConfig.company.name,
    "alternateName": seoConfig.brandAliases,
    "description": seoConfig.company.description,
    "url": seoConfig.baseUrl,
    "logo": `${seoConfig.baseUrl}/logo.png`,
    "image": `${seoConfig.baseUrl}/logo.png`,
    "sameAs": [
      seoConfig.socialMedia.linkedin,
      seoConfig.socialMedia.twitter,
      seoConfig.socialMedia.facebook,
      seoConfig.socialMedia.github,
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": seoConfig.company.phone,
      "contactType": "Customer Service",
      "email": seoConfig.company.email,
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.locations.primary.address,
        "addressLocality": seoConfig.locations.primary.city,
        "addressRegion": seoConfig.locations.primary.state,
        "postalCode": seoConfig.locations.primary.zipCode,
        "addressCountry": seoConfig.locations.primary.country,
      },
      {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.locations.secondary.address,
        "addressLocality": seoConfig.locations.secondary.city,
        "addressRegion": seoConfig.locations.secondary.state,
        "addressCountry": seoConfig.locations.secondary.country,
      },
    ],
    "founded": seoConfig.company.founded,
    "areaServed": [
      {
        "@type": "City",
        "name": seoConfig.locations.primary.city,
        "sameAs": "https://en.wikipedia.org/wiki/Noida"
      },
      {
        "@type": "City",
        "name": seoConfig.locations.secondary.city,
        "sameAs": "https://en.wikipedia.org/wiki/Delhi"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Delhi NCR",
        "sameAs": "https://en.wikipedia.org/wiki/National_Capital_Region_(India)"
      }
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${seoConfig.baseUrl}/#localbusiness`,
    "name": seoConfig.company.name,
    "image": `${seoConfig.baseUrl}/logo.png`,
    "description": seoConfig.company.description,
    "url": seoConfig.baseUrl,
    "telephone": seoConfig.company.phone,
    "email": seoConfig.company.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.locations.primary.address,
      "addressLocality": seoConfig.locations.primary.city,
      "addressRegion": seoConfig.locations.primary.state,
      "postalCode": seoConfig.locations.primary.zipCode,
      "addressCountry": seoConfig.locations.primary.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": seoConfig.locations.primary.latitude,
      "longitude": seoConfig.locations.primary.longitude,
    },
    "priceRange": "$",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${seoConfig.baseUrl}/#service`,
    "name": "Web Development & Mobile App Development Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": seoConfig.company.name,
    },
    "areaServed": [
      "IN-UP",
      "IN-DL"
    ],
    "availableLanguage": "en",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": seoConfig.baseUrl
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema)
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
        <LeadCapturePopup />
      </body>
    </html>
  );
}