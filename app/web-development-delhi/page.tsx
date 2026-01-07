import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Web Development Services in Delhi | VijayLaxmi Technologies | VLP Tech',
  description: 'Professional web development services in Delhi & NCR by VLP Technologies. Custom React.js development, responsive design, SEO-friendly websites. Expert team in Delhi NCR.',
  keywords: [
    'web development Delhi',
    'website development Delhi NCR',
    'React.js development Delhi',
    'web developer Delhi',
    'web design Delhi',
    'web development services Delhi',
    'custom web development Delhi',
    'web application development Delhi',
    'responsive web design Delhi',
    'SEO friendly web development Delhi',
  ].join(', '),
  openGraph: {
    title: 'Web Development Services in Delhi | VijayLaxmi Technologies',
    description: 'Expert web development services in Delhi & NCR using React.js, Node.js, and modern technologies by VLP Technologies.',
    url: `${seoConfig.baseUrl}/web-development-delhi`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/web-development-delhi`,
  },
};

export default function WebDevelopmentDelhi() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Web Development Services in Delhi & NCR
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            VijayLaxmi Technologies - Premier web development company serving Delhi and National Capital Region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Web Development in Delhi NCR</h2>
            <p className="text-gray-700 mb-4">
              VLP Technologies is a leading web development company in Delhi & NCR region, delivering high-quality web solutions to businesses of all sizes.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Expert React.js and Node.js developers</li>
              <li>✓ Proven track record in Delhi region</li>
              <li>✓ Full-stack web development expertise</li>
              <li>✓ Cloud-ready applications</li>
              <li>✓ Scalable architecture design</li>
              <li>✓ Complete project management</li>
              <li>✓ Post-launch support</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Delhi Web Development Specialties</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Startup Web Applications</li>
              <li>• Enterprise Web Solutions</li>
              <li>• E-Commerce Websites</li>
              <li>• SaaS Platforms</li>
              <li>• Real-time Applications</li>
              <li>• Mobile-Responsive Design</li>
              <li>• Performance Optimization</li>
              <li>• Security Implementation</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <h4 className="font-bold text-gray-900">Frontend</h4>
              <p className="text-sm text-gray-600">React.js, Next.js, TypeScript</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900">Backend</h4>
              <p className="text-sm text-gray-600">Node.js, Express, GraphQL</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900">Database</h4>
              <p className="text-sm text-gray-600">MongoDB, PostgreSQL, Firebase</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900">Cloud</h4>
              <p className="text-sm text-gray-600">AWS, GCP, Vercel, Heroku</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Delhi Businesses Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Local Presence</h3>
              <p className="text-gray-600">Based in Delhi, we understand local business needs</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Cost Effective</h3>
              <p className="text-gray-600">Competitive pricing without compromising quality</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quick Communication</h3>
              <p className="text-gray-600">Easy meetings and quick response times</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Build Your Web Application?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact VLP Technologies in Delhi for web development that delivers results
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Request a Quote
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | Web Development Services in Delhi & NCR |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
