import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Next.js Development in Noida | VijayLaxmi Technologies | VLP Tech',
  description: 'Expert Next.js development services in Noida by VLP Technologies. SSR, SSG, API routes, SEO-optimized. Fast, scalable Next.js applications. Expert Next.js developers.',
  keywords: [
    'Next.js development Noida',
    'Next.js developer Noida',
    'Next.js development company',
    'SSR development',
    'static site generation',
    'Next.js SEO',
    'fast website Next.js',
    'Next.js API routes',
  ].join(', '),
  openGraph: {
    title: 'Next.js Development in Noida | VijayLaxmi Technologies',
    description: 'Professional Next.js development by VLP Technologies in Noida for fast, SEO-optimized web applications.',
    url: `${seoConfig.baseUrl}/nextjs-development-noida`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/nextjs-development-noida`,
  },
};

export default function NextjsDevelopmentNoida() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Next.js Development in Noida
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ultra-fast, SEO-optimized web applications built with Next.js framework
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Why Next.js?</h2>
            <p className="text-gray-700 mb-4">
              Next.js is the modern React framework that enables production-ready applications with superior performance, SEO capabilities, and developer experience. Perfect for building fast, ranking websites.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Server-Side Rendering (SSR) for perfect SEO</li>
              <li>✓ Static Site Generation (SSG) for lightning speed</li>
              <li>✓ Incremental Static Regeneration (ISR)</li>
              <li>✓ Built-in Image Optimization</li>
              <li>✓ API Routes for backend logic</li>
              <li>✓ Automatic Code Splitting</li>
              <li>✓ Zero-Config Deployment</li>
              <li>✓ Best Core Web Vitals Scores</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Next.js Features We Use</h3>
            <div className="space-y-3 text-gray-700">
              <div>
                <h4 className="font-bold mb-1">SSR - Server-Side Rendering</h4>
                <p className="text-sm">Every request generates fresh HTML for perfect SEO and dynamic content</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">SSG - Static Site Generation</h4>
                <p className="text-sm">Pre-render pages at build time for maximum speed</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">ISR - Incremental Static Regeneration</h4>
                <p className="text-sm">Keep static pages fresh without rebuilding the entire site</p>
              </div>
              <div>
                <h4 className="font-bold mb-1">API Routes</h4>
                <p className="text-sm">Backend endpoints built into your Next.js app</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next.js Development Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Performance</h3>
              <p className="text-sm text-gray-600">Sub-second load times with automatic optimizations</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">SEO Excellence</h3>
              <p className="text-sm text-gray-600">Built-in SEO features for high search rankings</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Developer Experience</h3>
              <p className="text-sm text-gray-600">Fast refresh, excellent tooling, zero-config setup</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next.js Tech Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Frontend & Framework</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Next.js 13+ App Router</li>
                <li>• React 18+ with latest hooks</li>
                <li>• TypeScript support</li>
                <li>• Tailwind CSS styling</li>
                <li>• Component libraries</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Backend & Database</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Next.js API Routes</li>
                <li>• Node.js backend integration</li>
                <li>• MongoDB / PostgreSQL</li>
                <li>• Authentication & security</li>
                <li>• Third-party API integration</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">Next.js vs Traditional React</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold mb-3">Traditional React</h3>
              <ul className="text-sm space-y-1">
                <li>✗ Client-side rendering only</li>
                <li>✗ SEO challenges</li>
                <li>✗ Slower initial page loads</li>
                <li>✗ More configuration needed</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Next.js</h3>
              <ul className="text-sm space-y-1">
                <li>✓ SSR/SSG/ISR options</li>
                <li>✓ Built-in SEO optimization</li>
                <li>✓ Lightning fast pages</li>
                <li>✓ Zero-config deployment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Next.js Project Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Marketing Websites</h3>
              <p className="text-gray-700 text-sm">High-ranking, fast-loading marketing sites</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">E-Commerce</h3>
              <p className="text-gray-700 text-sm">Fast product catalogs with dynamic pricing</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Web Applications</h3>
              <p className="text-gray-700 text-sm">Full-featured apps with API routes</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Build with Next.js in Noida</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get a lightning-fast, SEO-optimized Next.js application from VLP Technologies
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Request Next.js Development
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | Next.js Development Company in Noida |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
