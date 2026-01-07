import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Speed Optimized Websites in Noida | VijayLaxmi Technologies | VLP Tech',
  description: 'Ultra-fast, Core Web Vitals optimized websites in Noida by VLP Technologies. Lightning-speed pages, better Google rankings, improved user experience.',
  keywords: [
    'speed optimized websites Noida',
    'fast website development Noida',
    'Core Web Vitals optimization',
    'website speed optimization',
    'Lighthouse score optimization',
    'page speed improvement',
    'performance optimization Noida',
    'fast loading websites',
  ].join(', '),
  openGraph: {
    title: 'Speed Optimized Websites in Noida | VijayLaxmi Technologies',
    description: 'Get lightning-fast websites that rank higher and convert better. Core Web Vitals optimization by VLP Technologies.',
    url: `${seoConfig.baseUrl}/speed-optimized-websites-noida`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/speed-optimized-websites-noida`,
  },
};

export default function SpeedOptimizedWebsitesNoida() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lightning-Fast Websites in Noida
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sub-second load times, perfect Core Web Vitals, and better Google rankings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Speed is SEO Gold</h2>
            <p className="text-gray-700 mb-4">
              Google's latest algorithm updates heavily reward fast websites. Every second matters. Our speed-optimized websites load in under 1 second, improving both SEO rankings and user experience.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Sub-1 second page load times</li>
              <li>✓ 95+ Lighthouse Performance Score</li>
              <li>✓ Perfect Core Web Vitals (LCP, FID, CLS)</li>
              <li>✓ Image optimization & compression</li>
              <li>✓ Code splitting & minification</li>
              <li>✓ CDN integration for global speed</li>
              <li>✓ Browser caching optimization</li>
              <li>✓ Database query optimization</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-lg border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Speed Benefits</h3>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-bold mb-1">🚀 Better Rankings</h4>
                <p className="text-sm">Google prioritizes fast sites in search results</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">💰 Higher Conversions</h4>
                <p className="text-sm">Fast sites convert 50% more visitors to customers</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">😊 Better User Experience</h4>
                <p className="text-sm">Users love fast, responsive websites</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">📱 Mobile Friendly</h4>
                <p className="text-sm">Fast loading on slow 4G connections</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Web Vitals Optimization</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-bold text-lg mb-2">LCP - Largest Contentful Paint</h3>
              <p className="text-gray-700 text-sm mb-3">Time to load main content</p>
              <p className="text-blue-600 font-bold">Target: Under 2.5 seconds</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="font-bold text-lg mb-2">FID - First Input Delay</h3>
              <p className="text-gray-700 text-sm mb-3">Time to respond to user input</p>
              <p className="text-green-600 font-bold">Target: Under 100 ms</p>
            </div>
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-600">
              <h3 className="font-bold text-lg mb-2">CLS - Cumulative Layout Shift</h3>
              <p className="text-gray-700 text-sm mb-3">Visual stability during load</p>
              <p className="text-orange-600 font-bold">Target: Below 0.1</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Speed Optimization Techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Frontend Optimization</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Image compression & WebP format</li>
                <li>• Lazy loading for images & iframes</li>
                <li>• CSS minification & optimization</li>
                <li>• JavaScript code splitting</li>
                <li>• Critical CSS extraction</li>
                <li>• Font optimization</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Backend & Infrastructure</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Server-side caching</li>
                <li>• CDN integration globally</li>
                <li>• Database query optimization</li>
                <li>• API response optimization</li>
                <li>• GZIP compression</li>
                <li>• HTTP/2 implementation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Speed Optimization Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">95+</h3>
              <p className="text-sm">Lighthouse Score</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">&lt;1s</h3>
              <p className="text-sm">Page Load Time</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">100%</h3>
              <p className="text-sm">Core Web Vitals Pass</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold mb-2">50%+</h3>
              <p className="text-sm">Conversion Increase</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Speed Testing & Monitoring</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Lighthouse</h3>
              <p className="text-gray-700 text-sm">Chrome's built-in performance testing tool</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">PageSpeed Insights</h3>
              <p className="text-gray-700 text-sm">Google's official speed measurement</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Continuous Monitoring</h3>
              <p className="text-gray-700 text-sm">Track performance over time</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Make Your Website Lightning Fast</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a free speed audit from VLP Technologies in Noida
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Free Speed Audit
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | Speed Optimization Company in Noida |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
