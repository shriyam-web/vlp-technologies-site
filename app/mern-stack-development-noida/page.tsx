import { Metadata } from 'next';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'MERN Stack Development in Noida | VijayLaxmi Technologies | VLP Tech',
  description: 'Professional MERN Stack development services in Noida by VLP Technologies. Full-stack JavaScript development, scalable applications, API development. Expert MERN developers.',
  keywords: [
    'MERN Stack development Noida',
    'MERN Stack developer Noida',
    'MERN development company',
    'MongoDB Express React Node development',
    'full stack development Noida',
    'JavaScript web development',
    'React Node development',
    'scalable web applications',
  ].join(', '),
  openGraph: {
    title: 'MERN Stack Development in Noida | VijayLaxmi Technologies',
    description: 'Expert MERN Stack development by VLP Technologies in Noida for high-performance web applications.',
    url: `${seoConfig.baseUrl}/mern-stack-development-noida`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/mern-stack-development-noida`,
  },
};

export default function MERNStackDevelopmentNoida() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            MERN Stack Development in Noida
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Build powerful, scalable full-stack web applications with MERN Stack expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">What is MERN Stack?</h2>
            <p className="text-gray-700 mb-4">
              MERN Stack is a modern, full-stack JavaScript development approach combining MongoDB, Express, React, and Node.js—allowing developers to build complete web applications with a single language.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-bold">MongoDB:</span> NoSQL database for flexible data handling</li>
              <li><span className="font-bold">Express:</span> Lightweight backend framework</li>
              <li><span className="font-bold">React:</span> Powerful frontend library</li>
              <li><span className="font-bold">Node.js:</span> JavaScript runtime for server-side</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose MERN Stack?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Single language (JavaScript) across frontend & backend</li>
              <li>✓ Faster development & deployment</li>
              <li>✓ Highly scalable architecture</li>
              <li>✓ Large developer community</li>
              <li>✓ Easy to maintain and update</li>
              <li>✓ Perfect for startups to enterprises</li>
              <li>✓ Cost-effective development</li>
              <li>✓ Real-time capabilities</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">MERN Stack Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Frontend Development</h3>
              <p className="text-sm text-gray-600">Interactive React interfaces with component reusability and state management</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Backend Development</h3>
              <p className="text-sm text-gray-600">Robust Node.js APIs with Express, authentication, and database operations</p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg mb-2">Database Design</h3>
              <p className="text-sm text-gray-600">MongoDB schema design, indexing, and optimization for performance</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our MERN Stack Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Frontend Technologies</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• React & React Hooks</li>
                <li>• Redux State Management</li>
                <li>• React Router</li>
                <li>• Tailwind CSS</li>
                <li>• Material-UI Components</li>
                <li>• Responsive Design</li>
              </ul>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 mb-3">Backend Technologies</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                <li>• Node.js & Express</li>
                <li>• REST APIs & GraphQL</li>
                <li>• JWT Authentication</li>
                <li>• Error Handling</li>
                <li>• Middleware Implementation</li>
                <li>• API Documentation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold mb-4">MERN Stack Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-bold mb-2">1. Planning</h3>
              <p className="text-sm">Architecture design & tech stack selection</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">2. Backend Development</h3>
              <p className="text-sm">API development with Node & Express</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">3. Frontend Development</h3>
              <p className="text-sm">React UI with state management</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">4. Testing & Deployment</h3>
              <p className="text-sm">QA testing and production deployment</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">MERN Stack Project Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Startups & MVPs</h3>
              <p className="text-gray-700 text-sm">Build your product quickly with MERN Stack</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Enterprise Apps</h3>
              <p className="text-gray-700 text-sm">Scalable solutions for large organizations</p>
            </div>
            <div className="border border-gray-200 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Real-time Apps</h3>
              <p className="text-gray-700 text-sm">Chat, notifications, live updates with MERN</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ready for MERN Stack Development?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let VLP Technologies build your scalable MERN Stack application in Noida
          </p>
          <a
            href="/get-quote"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get a Quote
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-center text-sm">
            VijayLaxmi Technologies | MERN Stack Development Company in Noida |
            <span className="font-semibold"> Phone: {seoConfig.company.phone}</span> |
            <span className="font-semibold"> Email: {seoConfig.company.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
