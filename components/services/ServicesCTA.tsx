import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function ServicesCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Let's discuss how our web and mobile development expertise can help transform 
          your ideas into powerful digital solutions that drive business growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-quote"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Request a Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Let's Talk
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-100">Support Available</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">Free</div>
            <div className="text-blue-100">Initial Consultation</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-blue-100">Satisfaction Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}