import { Code2, Globe, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Modern Frameworks',
    description: 'React.js, Next.js, and modern JavaScript for scalable applications'
  },
  {
    icon: Globe,
    title: 'SEO-Friendly',
    description: 'Server-side rendering and optimization for better search rankings'
  },
  {
    icon: Zap,
    title: 'Fast Loading',
    description: 'Optimized performance with code splitting and lazy loading'
  },
  {
    icon: Shield,
    title: 'Scalable Architecture',
    description: 'Built for growth with clean, maintainable code structure'
  }
];

const technologies = [
  { name: 'React.js', description: 'Component-based UI library' },
  { name: 'Next.js', description: 'Full-stack React framework' },
  { name: 'TypeScript', description: 'Type-safe JavaScript' },
  { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
  { name: 'Node.js', description: 'JavaScript runtime for backend' },
  { name: 'MongoDB', description: 'NoSQL database solution' }
];

export function WebDevelopment() {
  return (
    <section id="web" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Web Development</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We create modern, responsive web applications using the latest technologies including
              HTML5, CSS3, JavaScript ES6+, and React.js. Our focus is on delivering fast, 
              SEO-friendly, and scalable solutions that provide exceptional user experiences.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technologies We Use</h3>
            <div className="space-y-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                      <p className="text-sm text-gray-600">{tech.description}</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <Code2 className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}