import { Code, Smartphone, Zap, Globe } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'React.js - The Power of Components',
    description: 'React\'s component-based architecture makes applications more maintainable and scalable. With features like virtual DOM, hooks, and extensive ecosystem, React enables us to build interactive user interfaces efficiently.',
    benefits: [
      'Reusable components reduce development time',
      'Virtual DOM for optimal performance',
      'Large community and ecosystem',
      'SEO-friendly with server-side rendering'
    ],
    color: 'blue'
  },
  {
    icon: Smartphone,
    title: 'React Native - Native Mobile Excellence',
    description: 'React Native brings React\'s principles to mobile development, allowing us to create apps that feel native while sharing code across platforms. This results in faster development and consistent user experiences.',
    benefits: [
      'Single codebase for iOS and Android',
      'Native performance and feel',
      'Hot reloading for faster development',
      'Access to device-specific features'
    ],
    color: 'purple'
  }
];

export function TechnologyHighlights() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why These Technologies?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We choose React and React Native because they're powerful, efficient, and backed by Facebook.
            These technologies enable us to deliver exceptional results for our clients.
          </p>
        </div>

        <div className="space-y-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  !isEven ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className={`inline-flex p-4 rounded-2xl mb-6 ${
                    highlight.color === 'blue' 
                      ? 'bg-blue-100' 
                      : 'bg-purple-100'
                  }`}>
                    <IconComponent className={`h-8 w-8 ${
                      highlight.color === 'blue' 
                        ? 'text-blue-600' 
                        : 'text-purple-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {highlight.description}
                  </p>
                  
                  <div className="space-y-3">
                    {highlight.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          highlight.color === 'blue' 
                            ? 'bg-blue-100' 
                            : 'bg-purple-100'
                        }`}>
                          <div className={`w-2 h-2 rounded-full ${
                            highlight.color === 'blue' 
                              ? 'bg-blue-600' 
                              : 'bg-purple-600'
                          }`}></div>
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className={`bg-gradient-to-br ${
                    highlight.color === 'blue' 
                      ? 'from-blue-50 to-purple-50' 
                      : 'from-purple-50 to-pink-50'
                  } rounded-2xl p-8`}>
                    <div className="relative">
                      <div className="bg-white rounded-xl shadow-lg p-6 mb-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                            highlight.color === 'blue' 
                              ? 'bg-blue-100' 
                              : 'bg-purple-100'
                          }`}>
                            <IconComponent className={`h-5 w-5 ${
                              highlight.color === 'blue' 
                                ? 'text-blue-600' 
                                : 'text-purple-600'
                            }`} />
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              {highlight.color === 'blue' ? 'React.js' : 'React Native'}
                            </div>
                            <div className="text-sm text-gray-500">
                              {highlight.color === 'blue' ? 'Web Framework' : 'Mobile Framework'}
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Performance</span>
                            <div className={`w-20 h-2 ${
                              highlight.color === 'blue' 
                                ? 'bg-blue-100' 
                                : 'bg-purple-100'
                            } rounded-full overflow-hidden`}>
                              <div className={`h-full ${
                                highlight.color === 'blue' 
                                  ? 'bg-blue-600' 
                                  : 'bg-purple-600'
                              } rounded-full`} style={{ width: '95%' }}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Development Speed</span>
                            <div className={`w-20 h-2 ${
                              highlight.color === 'blue' 
                                ? 'bg-blue-100' 
                                : 'bg-purple-100'
                            } rounded-full overflow-hidden`}>
                              <div className={`h-full ${
                                highlight.color === 'blue' 
                                  ? 'bg-blue-600' 
                                  : 'bg-purple-600'
                              } rounded-full`} style={{ width: '90%' }}></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Community Support</span>
                            <div className={`w-20 h-2 ${
                              highlight.color === 'blue' 
                                ? 'bg-blue-100' 
                                : 'bg-purple-100'
                            } rounded-full overflow-hidden`}>
                              <div className={`h-full ${
                                highlight.color === 'blue' 
                                  ? 'bg-blue-600' 
                                  : 'bg-purple-600'
                              } rounded-full`} style={{ width: '98%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-16 h-16 ${
                        highlight.color === 'blue' 
                          ? 'bg-blue-200' 
                          : 'bg-purple-200'
                      } rounded-full opacity-50`}></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}