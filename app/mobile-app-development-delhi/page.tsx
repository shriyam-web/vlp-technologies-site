import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Mobile App Development in Delhi | React Native iOS Android | VLP Tech',
  description: 'Professional mobile app development services in Delhi & NCR by VLP Technologies. React Native, iOS, Android. Expert app developers in Delhi.',
  keywords: [
    'mobile app development Delhi',
    'React Native development Delhi',
    'app developer Delhi',
    'iOS development Delhi NCR',
    'Android development Delhi',
    'mobile application development Delhi',
    'app development company Delhi',
    'cross-platform app development Delhi',
    'app development Delhi NCR',
  ].join(', '),
  openGraph: {
    title: 'Mobile App Development in Delhi | VijayLaxmi Technologies',
    description: 'Expert mobile app development services in Delhi & NCR using React Native and native technologies by VLP Technologies.',
    url: `${seoConfig.baseUrl}/mobile-app-development-delhi`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/mobile-app-development-delhi`,
  },
};

export default function MobileAppDevelopmentDelhi() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mobile App Development in Delhi & NCR
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            VijayLaxmi Technologies - Leading mobile app development company in Delhi serving startups and enterprises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Mobile App Development in Delhi</h2>
            <p className="text-gray-700 mb-4">
              VLP Technologies is a trusted mobile app development company in Delhi & NCR, delivering innovative and user-friendly applications.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Experienced React Native developers</li>
              <li>✓ Native iOS & Android expertise</li>
              <li>✓ Agile development methodology</li>
              <li>✓ On-time project delivery</li>
              <li>✓ Post-launch support</li>
              <li>✓ Regular updates & maintenance</li>
              <li>✓ Performance optimization</li>
              <li>✓ App store submission support</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mobile Solutions for Delhi Businesses</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Startup MVP Development</li>
              <li>• Enterprise Mobility Solutions</li>
              <li>• Fintech Applications</li>
              <li>• Logistics & Delivery Apps</li>
              <li>• Healthcare Apps</li>
              <li>• Educational Applications</li>
              <li>• Custom Enterprise Apps</li>
              <li>• App Modernization</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <h4 className="font-bold text-gray-900">Frontend</h4>
              <p className="text-sm text-gray-600">React Native, Swift, Kotlin</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900">Backend</h4>
              <p className="text-sm text-gray-600">Node.js, Firebase, AWS</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900">Database</h4>
              <p className="text-sm text-gray-600">MongoDB, PostgreSQL, Realm</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900">Tools</h4>
              <p className="text-sm text-gray-600">Xcode, Android Studio, VS Code</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose VLP Technologies for App Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Proven Expertise</h3>
              <p className="text-gray-600">Years of experience delivering successful mobile applications</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing ensures bug-free, smooth-running apps</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Support & Maintenance</h3>
              <p className="text-gray-600">Continuous support even after app launch</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready to Launch Your Mobile App?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Get in touch with VLP Technologies in Delhi for professional app development
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Request Quote
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | Mobile App Development Company in Delhi & NCR |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
