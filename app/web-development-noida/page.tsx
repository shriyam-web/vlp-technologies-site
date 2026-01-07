import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Web Development Services in Noida | VijayLaxmi Technologies | VLP Tech',
  description: 'Professional web development services in Noida by VLP Technologies. Custom React.js development, responsive design, SEO-friendly websites. Expert developers in Sector 63 Noida.',
  keywords: [
    'web development Noida',
    'website development services Noida',
    'React.js development Noida',
    'custom web development Noida',
    'web developer Noida',
    'web design Noida',
    'Sector 63 Noida',
    'IT Park Noida',
    'web development company Noida',
    'hire web developer Noida',
  ].join(', '),
  openGraph: {
    title: 'Web Development Services in Noida | VijayLaxmi Technologies',
    description: 'Expert web development services in Noida using React.js, Node.js, and modern technologies by VLP Technologies.',
    url: `${seoConfig.baseUrl}/web-development-noida`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/web-development-noida`,
  },
};

export default function WebDevelopmentNoida() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Web Development Services in Noida
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            VijayLaxmi Technologies (VLP Tech) - Expert web developers in Noida delivering cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Why Choose VLP Technologies in Noida?</h2>
            <ul className="space-y-3 text-gray-700">
              <li>✓ 5+ years of web development experience</li>
              <li>✓ Expert team in React.js and Node.js</li>
              <li>✓ Fully responsive and mobile-first designs</li>
              <li>✓ SEO-optimized web applications</li>
              <li>✓ Fast project delivery</li>
              <li>✓ Competitive pricing</li>
              <li>✓ Ongoing support and maintenance</li>
              <li>✓ Located in Noida for easy collaboration</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Web Development Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Custom Website Development</li>
              <li>• E-Commerce Platforms</li>
              <li>• Progressive Web Apps (PWA)</li>
              <li>• Content Management Systems</li>
              <li>• Web Application Development</li>
              <li>• Performance Optimization</li>
              <li>• API Development</li>
              <li>• Web Security Solutions</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Web Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="font-bold text-lg mb-2">1. Discovery</div>
              <p className="text-sm text-gray-600">Understanding your requirements</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">2. Design</div>
              <p className="text-sm text-gray-600">Creating wireframes and mockups</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">3. Development</div>
              <p className="text-sm text-gray-600">Building with latest technologies</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">4. Launch</div>
              <p className="text-sm text-gray-600">Testing and deployment</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Start Your Web Project?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact VLP Technologies in Noida for a free consultation and project quote
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Free Consultation
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | Web Development Company in Noida, Uttar Pradesh | 
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> | 
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
