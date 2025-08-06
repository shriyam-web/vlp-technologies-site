import Link from 'next/link';
import { Code2, Smartphone, Search, Zap, Shield, Rocket } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Modern, responsive websites built with React.js, Next.js, and cutting-edge technologies.',
    features: ['React.js & Next.js', 'SEO Optimized', 'Fast Loading', 'Mobile Responsive'],
    color: 'blue'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps with native performance using React Native.',
    features: ['React Native', 'iOS & Android', 'Native Performance', 'Fast Development'],
    color: 'purple'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with our comprehensive SEO strategies and technical optimization.',
    features: ['Technical SEO', 'Content Strategy', 'Performance Optimization', 'Analytics Setup'],
    color: 'green'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Lightning-fast applications with optimized code, caching, and modern best practices.',
    features: ['Code Splitting', 'Lazy Loading', 'CDN Integration', 'Performance Monitoring'],
    color: 'yellow'
  },
  {
    icon: Shield,
    title: 'Security & Maintenance',
    description: 'Keep your applications secure and up-to-date with ongoing maintenance and support.',
    features: ['Security Audits', 'Regular Updates', '24/7 Monitoring', 'Backup Solutions'],
    color: 'red'
  },
  {
    icon: Rocket,
    title: 'Deployment & Scaling',
    description: 'Seamless deployment and scaling solutions for growing businesses and high-traffic applications.',
    features: ['Cloud Deployment', 'Auto Scaling', 'Load Balancing', 'DevOps Integration'],
    color: 'indigo'
  }
];

const colorClasses = {
  blue: 'bg-blue-50 text-blue-600 hover:bg-blue-100 border-blue-200',
  purple: 'bg-purple-50 text-purple-600 hover:bg-purple-100 border-purple-200',
  green: 'bg-green-50 text-green-600 hover:bg-green-100 border-green-200',
  yellow: 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100 border-yellow-200',
  red: 'bg-red-50 text-red-600 hover:bg-red-100 border-red-200',
  indigo: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border-indigo-200'
};

export function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital landscape.
            Our expert team delivers high-quality, scalable solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const colorClass = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className={`inline-flex p-4 rounded-lg ${colorClass} transition-all duration-200 mb-6`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}