import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'SEO-Optimized Web Development in Noida | VijayLaxmi Technologies',
  description: 'Expert SEO-friendly web development services in Noida by VLP Technologies. High-ranking websites using MERN Stack, Next.js. Organic traffic expertise.',
  keywords: [
    'SEO web development Noida',
    'SEO optimized website Noida',
    'SEO friendly web design Noida',
    'organic ranking web development',
    'SEO website development',
    'search engine optimized websites',
    'ranking web developer Noida',
    'high ranking website Noida',
  ].join(', '),
  openGraph: {
    title: 'SEO-Optimized Web Development in Noida | VijayLaxmi Technologies',
    description: 'Get high-ranking, SEO-optimized websites built by VLP Technologies in Noida.',
    url: `${seoConfig.baseUrl}/seo-web-development-noida`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/seo-web-development-noida`,
  },
};

export default function SEOWebDevelopmentNoida() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SEO-Optimized Web Development in Noida
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Get high-ranking, search engine optimized websites that drive organic traffic
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">SEO is Our Core USP</h2>
            <p className="text-gray-700 mb-4">
              At VijayLaxmi Technologies, we don't just build websites—we build websites that rank. Every project is designed with SEO at its core, ensuring maximum organic visibility from day one.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Technical SEO optimized from ground up</li>
              <li>✓ Core Web Vitals perfection</li>
              <li>✓ Structured data & schema markup</li>
              <li>✓ Mobile-first indexing ready</li>
              <li>✓ Site speed optimization (100/100 Lighthouse scores)</li>
              <li>✓ On-page SEO best practices</li>
              <li>✓ High-quality internal linking strategy</li>
              <li>✓ Conversion-focused optimization</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why SEO Websites Matter</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-bold mb-1">Organic Traffic</h4>
                <p className="text-sm">Get free, sustainable traffic from search engines without paid ads</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">Credibility</h4>
                <p className="text-sm">Rank high in Google = instant authority in your industry</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">ROI</h4>
                <p className="text-sm">Long-term benefits that keep paying back months and years later</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">Cost Effective</h4>
                <p className="text-sm">One-time investment in a website that continuously attracts customers</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our SEO Web Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="font-bold text-lg mb-2">1. Keyword Research</div>
              <p className="text-sm text-gray-600">Target high-intent, profitable keywords</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">2. Technical SEO</div>
              <p className="text-sm text-gray-600">Perfect site structure, speed, & indexing</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">3. Content Optimization</div>
              <p className="text-sm text-gray-600">SEO-friendly, user-focused content</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">4. Ongoing Monitoring</div>
              <p className="text-sm text-gray-600">Track rankings & optimize continuously</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">SEO Web Development Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">MERN Stack</h3>
              <p className="text-gray-700 text-sm">
                Full-stack SEO-optimized development with React, Node.js, MongoDB, and Express for maximum flexibility and performance.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Next.js</h3>
              <p className="text-gray-700 text-sm">
                SSR/SSG for perfect SEO. Lightning-fast pages, automatic sitemap generation, and built-in optimization.
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Performance Tools</h3>
              <p className="text-gray-700 text-sm">
                Image optimization, lazy loading, compression, and CDN integration for sub-second page loads.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Our SEO Guarantee</h2>
          <ul className="space-y-2">
            <li>✓ 90+ Lighthouse Performance Score Minimum</li>
            <li>✓ Fully SEO-Optimized from Day 1</li>
            <li>✓ Mobile-Perfect Responsive Design</li>
            <li>✓ Structured Data Implementation</li>
            <li>✓ Comprehensive SEO Documentation</li>
            <li>✓ Post-Launch SEO Monitoring</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready for a High-Ranking Website?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let VLP Technologies build your SEO-optimized website in Noida
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Free SEO Consultation
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | SEO Web Development Company in Noida |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
