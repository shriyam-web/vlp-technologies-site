import { Award, Users, Clock, Shield, Lightbulb, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Over 50+ successful projects delivered with 100% client satisfaction rate.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled developers with years of experience in modern web and mobile technologies.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We respect deadlines and deliver projects on schedule without compromising quality.'
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality checks ensure robust, secure applications.'
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'We stay ahead of technology trends to provide cutting-edge solutions.'
  },
  {
    icon: HeartHandshake,
    title: 'Client-First Approach',
    description: 'Your success is our priority. We provide ongoing support and maintenance.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose VLP Technologies?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine technical expertise with a client-first approach to deliver exceptional results.
            Here's what sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-lg inline-flex mb-6 group-hover:scale-110 transition-transform duration-200">
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your ideas into powerful digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/get-quote"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Get Free Consultation
            </a>
            <a
              href="/projects"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}