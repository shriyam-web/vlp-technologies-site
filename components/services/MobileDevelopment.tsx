import { Smartphone, Layers, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Cross-Platform',
    description: 'Single codebase for both iOS and Android applications'
  },
  {
    icon: Layers,
    title: 'Native Performance',
    description: 'Smooth, fast performance that feels truly native'
  },
  {
    icon: Rocket,
    title: 'Fast Development',
    description: 'Rapid development cycle with hot reloading and debugging'
  },
  {
    icon: Users,
    title: 'Shared Codebase',
    description: 'Maintain one codebase while reaching all platforms'
  }
];

const advantages = [
  'Cost-effective development',
  'Faster time to market',
  'Consistent user experience',
  'Easy maintenance and updates',
  'Access to native device features',
  'Strong community support'
];

export function MobileDevelopment() {
  return (
    <section id="mobile" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">React Native Development</h3>
              <p className="text-gray-600">Build once, deploy everywhere</p>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 mb-4">Key Advantages:</h4>
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Mobile App Development</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our React Native expertise allows us to build high-performance mobile applications
              that work seamlessly on both iOS and Android platforms. We leverage native components
              and APIs to deliver apps that feel truly native while maintaining development efficiency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-purple-600" />
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
        </div>
      </div>
    </section>
  );
}