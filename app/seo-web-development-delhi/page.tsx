import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'SEO-Optimized Web Development in Delhi | VijayLaxmi Technologies',
  description: 'Expert SEO web development services in Delhi & NCR by VLP Technologies. High-ranking, conversion-focused websites. MERN Stack & Next.js specialists.',
  keywords: [
    'SEO web development Delhi',
    'SEO optimized website Delhi',
    'high ranking website Delhi NCR',
    'organic traffic web development',
    'SEO friendly web design Delhi',
    'search engine optimized websites Delhi',
    'ranking web developer Delhi',
  ].join(', '),
  openGraph: {
    title: 'SEO-Optimized Web Development in Delhi | VijayLaxmi Technologies',
    description: 'Premium SEO web development services in Delhi & NCR by VLP Technologies.',
    url: `${seoConfig.baseUrl}/seo-web-development-delhi`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/seo-web-development-delhi`,
  },
};

export default function SEOWebDevelopmentDelhi() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SEO-Optimized Web Development in Delhi & NCR
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Rank higher on Google with SEO-first web development by VijayLaxmi Technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">SEO-First Web Development</h2>
            <p className="text-gray-700 mb-4">
              Unlike traditional web developers, VLP Technologies builds websites that are SEO-optimized from the foundation. We focus on organic visibility, user experience, and conversions.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Technical SEO Excellence</li>
              <li>✓ Fastest Page Speeds in Industry</li>
              <li>✓ Mobile-First Responsive Design</li>
              <li>✓ Semantic HTML & Schema Markup</li>
              <li>✓ Sitemap & Robots.txt Optimization</li>
              <li>✓ Internal Linking Strategy</li>
              <li>✓ Conversion Rate Optimization</li>
              <li>✓ SEO-Friendly CMS Setup</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Delhi Businesses</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-bold mb-1">Local & National Reach</h4>
                <p className="text-sm">Rank in Delhi and across India with location-specific SEO</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">Competitive Edge</h4>
                <p className="text-sm">Beat competitors by ranking higher than their websites</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">Growth-Focused</h4>
                <p className="text-sm">Websites designed to attract qualified business leads</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">Proven Results</h4>
                <p className="text-sm">Clients see organic traffic growth within months</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO Implementation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2">Page Speed</h3>
              <p className="text-sm text-gray-600">Sub-1 second load times with image optimization, caching, CDN</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2">Core Web Vitals</h3>
              <p className="text-sm text-gray-600">Perfect scores in LCP, FID, CLS metrics for Google ranking boost</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-bold text-lg mb-2">Indexability</h3>
              <p className="text-sm text-gray-600">Perfect crawlability, XML sitemaps, structured data markup</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Tech Stack for SEO Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-blue-200 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Next.js for Perfect SEO</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Server-Side Rendering (SSR) for indexability</li>
                <li>• Static Site Generation (SSG) for speed</li>
                <li>• Automatic sitemap generation</li>
                <li>• Image optimization built-in</li>
                <li>• Better Core Web Vitals</li>
              </ul>
            </div>
            <div className="border border-blue-200 bg-blue-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">MERN Stack for Scalability</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Full-stack JavaScript development</li>
                <li>• Scalable backend architecture</li>
                <li>• Fast API responses</li>
                <li>• Real-time capabilities</li>
                <li>• Easy to maintain & update</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">SEO Results You Can Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-bold text-2xl mb-2">90+</h3>
              <p className="text-sm">Lighthouse Performance Score</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-2">3-6 Months</h3>
              <p className="text-sm">Typical timeframe to see top rankings</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-2">100%</h3>
              <p className="text-sm">SEO Best Practices Implementation</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your SEO Web Development Journey</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a free SEO audit and consultation from VLP Technologies in Delhi
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Schedule Free Consultation
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | SEO Web Development Company in Delhi & NCR |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
