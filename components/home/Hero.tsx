import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Zap className="h-4 w-4" />
                <span>Innovative Tech Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building the Future with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}Modern Tech
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                VLP Technologies specializes in creating cutting-edge web applications and mobile apps
                that drive business growth. From concept to deployment, we deliver exceptional digital experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">5+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
                    <Code2 className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Web Development</h3>
                    <p className="text-sm text-gray-600">React.js, Next.js, Modern CSS</p>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-200">
                    <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-gray-900 mb-2">Mobile Apps</h3>
                    <p className="text-sm text-gray-600">React Native, Cross-platform</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Live Project Status</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">3 projects in development</p>
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}