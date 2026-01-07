import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'React.js Development in Noida | VijayLaxmi Technologies | VLP Tech',
  description: 'Expert React.js development services in Noida by VLP Technologies. Custom React applications, React components, Next.js development. Expert React developers in Noida.',
  keywords: [
    'React development Noida',
    'React.js developer Noida',
    'React development company Noida',
    'React.js development services Noida',
    'Next.js development Noida',
    'React web development Noida',
    'React component development',
    'React application development Noida',
    'hire React developer Noida',
  ].join(', '),
  openGraph: {
    title: 'React.js Development in Noida | VijayLaxmi Technologies',
    description: 'Expert React.js development services in Noida using latest technologies and best practices by VLP Technologies.',
    url: `${seoConfig.baseUrl}/react-development-noida`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/react-development-noida`,
  },
};

export default function ReactDevelopmentNoida() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            React.js Development in Noida
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            VijayLaxmi Technologies - Expert React developers in Noida building scalable web applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">React Development Expertise</h2>
            <p className="text-gray-700 mb-4">
              VLP Technologies specializes in modern React.js development, creating fast, interactive, and user-friendly web applications.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ React.js Applications</li>
              <li>✓ Next.js Full-Stack Development</li>
              <li>✓ React Hooks & Context API</li>
              <li>✓ Redux State Management</li>
              <li>✓ Component Libraries</li>
              <li>✓ Performance Optimization</li>
              <li>✓ SEO-Friendly React Apps</li>
              <li>✓ Progressive Web Apps (PWA)</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our React Services</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• React Application Development</li>
              <li>• React Native Development</li>
              <li>• Component Development</li>
              <li>• React Performance Tuning</li>
              <li>• State Management</li>
              <li>• API Integration</li>
              <li>• Testing & QA</li>
              <li>• Maintenance & Support</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">React Ecosystem We Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">Core</h4>
              <p className="text-sm text-gray-600">React, Next.js, React Router</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">State</h4>
              <p className="text-sm text-gray-600">Redux, Context API, Zustand</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">Styling</h4>
              <p className="text-sm text-gray-600">Tailwind CSS, Styled Components</p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-2">Testing</h4>
              <p className="text-sm text-gray-600">Jest, React Testing Library</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">React Development Process</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="font-bold text-lg text-gray-900">1. Requirement Analysis</h3>
              <p className="text-gray-600">Understanding your project needs and goals</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="font-bold text-lg text-gray-900">2. Design & Architecture</h3>
              <p className="text-gray-600">Planning component structure and data flow</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="font-bold text-lg text-gray-900">3. Development</h3>
              <p className="text-gray-600">Building with clean, maintainable code</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-6 py-2">
              <h3 className="font-bold text-lg text-gray-900">4. Testing & Deployment</h3>
              <p className="text-gray-600">QA and production deployment</p>
            </div>
          </div>
        </div>

        <div className="mb-16 bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why React for Your Project?</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">✓</span>
              <span>High performance with Virtual DOM</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">✓</span>
              <span>Reusable components for faster development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">✓</span>
              <span>SEO-friendly with Next.js</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">✓</span>
              <span>Large community and ecosystem</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">✓</span>
              <span>Easy to maintain and update</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-blue-600">✓</span>
              <span>Cross-platform development capability</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your React Project in Noida</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let VLP Technologies build your next React.js application
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get Consultation
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | React.js Development Company in Noida |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
