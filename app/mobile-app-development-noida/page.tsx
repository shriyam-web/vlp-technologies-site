import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Mobile App Development in Noida | React Native | VijayLaxmi Technologies',
  description: 'Professional mobile app development services in Noida by VLP Technologies. React Native, iOS, Android development. Expert developers in Noida.',
  keywords: [
    'mobile app development Noida',
    'React Native development Noida',
    'app developer Noida',
    'iOS development Noida',
    'Android development Noida',
    'mobile application development Noida',
    'app development company Noida',
    'cross-platform app development Noida',
    'native app development Noida',
  ].join(', '),
  openGraph: {
    title: 'Mobile App Development in Noida | VijayLaxmi Technologies',
    description: 'Expert mobile app development services in Noida using React Native and native technologies by VLP Technologies.',
    url: `${seoConfig.baseUrl}/mobile-app-development-noida`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/mobile-app-development-noida`,
  },
};

export default function MobileAppDevelopmentNoida() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mobile App Development in Noida
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            VijayLaxmi Technologies - Expert mobile app developers in Noida creating innovative iOS and Android solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Mobile App Development Expertise</h2>
            <p className="text-gray-700 mb-4">
              VLP Technologies specializes in building high-performance mobile applications for iOS and Android platforms.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ React Native Development</li>
              <li>✓ Native iOS & Android Apps</li>
              <li>✓ Cross-platform Solutions</li>
              <li>✓ User-centric Design</li>
              <li>✓ Real-time Features</li>
              <li>✓ Push Notifications</li>
              <li>✓ API Integration</li>
              <li>✓ App Store Optimization</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">App Types We Build</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Startup MVP Apps</li>
              <li>• E-Commerce Apps</li>
              <li>• On-Demand Service Apps</li>
              <li>• Social Networking Apps</li>
              <li>• Business & Productivity Apps</li>
              <li>• Health & Fitness Apps</li>
              <li>• Education Apps</li>
              <li>• Gaming Apps</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="font-bold text-lg mb-2">Planning</div>
              <p className="text-sm text-gray-600">Understanding app requirements and strategy</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">Design</div>
              <p className="text-sm text-gray-600">Creating intuitive user interfaces</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">Development</div>
              <p className="text-sm text-gray-600">Coding with best practices</p>
            </div>
            <div className="text-center">
              <div className="font-bold text-lg mb-2">Testing & Launch</div>
              <p className="text-sm text-gray-600">QA and app store deployment</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">React Native vs Native Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">React Native</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Single codebase for iOS & Android</li>
                <li>✓ Faster development</li>
                <li>✓ Cost effective</li>
                <li>✓ Easy maintenance</li>
                <li>✓ Large community</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-4">Native Development</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✓ Maximum performance</li>
                <li>✓ Full platform features</li>
                <li>✓ Better optimization</li>
                <li>✓ Premium user experience</li>
                <li>✓ High-performance games</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your Mobile App Project Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact VLP Technologies in Noida for expert mobile app development
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | Mobile App Development Company in Noida |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
