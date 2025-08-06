import { Award, Shield, Zap, Users, Clock, Heart } from 'lucide-react';

const advantages = [
  {
    icon: Award,
    title: 'Proven Expertise',
    description: 'Over 50+ successful projects with 100% client satisfaction rate and industry recognition.',
    stats: '50+ Projects'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing processes, code reviews, and quality checkpoints ensure robust solutions.',
    stats: '99.9% Uptime'
  },
  {
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Agile development methodology and efficient workflows ensure timely project completion.',
    stats: '2x Faster'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled developers with deep expertise in React, React Native, and modern web technologies.',
    stats: '5+ Years Exp'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Ongoing support and maintenance to ensure your applications run smoothly around the clock.',
    stats: '24/7 Available'
  },
  {
    icon: Heart,
    title: 'Client-First',
    description: 'Your success is our priority. We build long-term partnerships based on trust and results.',
    stats: '100% Satisfaction'
  }
];

export function WhyVLP() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VLP Technologies?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical excellence with a client-first approach to deliver exceptional results.
            Here's what makes us different from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{advantage.stats}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work With Us?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our expertise can help transform your ideas into successful digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}