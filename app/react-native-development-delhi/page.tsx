import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'React Native Development in Delhi | VijayLaxmi Technologies | VLP Tech',
  description: 'Professional React Native development services in Delhi & NCR by VLP Technologies. Cross-platform mobile apps, iOS Android development. Expert React Native developers.',
  keywords: [
    'React Native development Delhi',
    'React Native developer Delhi',
    'cross-platform app development Delhi',
    'React Native development company Delhi',
    'React Native Delhi NCR',
    'iOS Android development Delhi',
    'mobile app development React Native',
    'hire React Native developer Delhi',
    'React Native development services Delhi',
  ].join(', '),
  openGraph: {
    title: 'React Native Development in Delhi | VijayLaxmi Technologies',
    description: 'Expert React Native development services in Delhi & NCR for iOS and Android applications by VLP Technologies.',
    url: `${seoConfig.baseUrl}/react-native-development-delhi`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/react-native-development-delhi`,
  },
};

export default function ReactNativeDevelopmentDelhi() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React Native Development in Delhi & NCR
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            VijayLaxmi Technologies - Expert React Native developers building cross-platform mobile apps in Delhi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">React Native Development in Delhi</h2>
            <p className="text-gray-700 mb-4">
              VLP Technologies is a leading React Native development company in Delhi, delivering high-quality cross-platform mobile applications.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ iOS & Android Apps from Single Codebase</li>
              <li>✓ Faster Time to Market</li>
              <li>✓ Cost-Effective Development</li>
              <li>✓ Native Performance</li>
              <li>✓ Easy Maintenance</li>
              <li>✓ Rapid Iteration</li>
              <li>✓ Large Developer Community</li>
              <li>✓ Future-Proof Technology</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">React Native Capabilities</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• MVP Development</li>
              <li>• Feature-Rich Applications</li>
              <li>• Native Module Integration</li>
              <li>• Third-Party API Integration</li>
              <li>• Push Notifications</li>
              <li>• Offline Functionality</li>
              <li>• App Store Optimization</li>
              <li>• Post-Launch Support</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">React Native vs Native Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-300 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">React Native Benefits</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ One codebase for iOS & Android</li>
                <li>✓ 40-50% faster development</li>
                <li>✓ Lower development costs</li>
                <li>✓ Easier code maintenance</li>
                <li>✓ Faster deployment</li>
                <li>✓ Easier testing</li>
              </ul>
            </div>
            <div className="border border-gray-300 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-4">When to Choose React Native</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Startup MVPs</li>
                <li>• Budget-Conscious Projects</li>
                <li>• Quick Market Launch</li>
                <li>• Standard Apps</li>
                <li>• Cross-Platform Needs</li>
                <li>• Regular Updates</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">React Native Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Core</h4>
              <p className="text-sm text-gray-600">React Native, Expo</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Navigation</h4>
              <p className="text-sm text-gray-600">React Navigation</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">State</h4>
              <p className="text-sm text-gray-600">Redux, Context API</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Backend</h4>
              <p className="text-sm text-gray-600">Node.js, Firebase</p>
            </div>
            <div className="border border-gray-200 p-4 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Testing</h4>
              <p className="text-sm text-gray-600">Jest, Detox</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">App Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">1</div>
              <h3 className="font-bold mb-2">Planning</h3>
              <p className="text-sm">Requirements & strategy</p>
            </div>
            <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">2</div>
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm">UI/UX mockups</p>
            </div>
            <div className="bg-blue-400 text-white p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">3</div>
              <h3 className="font-bold mb-2">Development</h3>
              <p className="text-sm">Building features</p>
            </div>
            <div className="bg-blue-300 text-gray-900 p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">4</div>
              <h3 className="font-bold mb-2">Launch</h3>
              <p className="text-sm">Testing & deployment</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready for Your React Native App?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Partner with VLP Technologies in Delhi for professional React Native development
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Request a Quote Today
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | React Native Development Company in Delhi & NCR |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
