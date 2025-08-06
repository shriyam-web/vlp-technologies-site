'use client';

import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'VLP Technologies transformed our outdated website into a modern, fast-loading platform. The React.js solution they delivered exceeded our expectations and significantly improved our user engagement.',
    rating: 5,
    project: 'Corporate Website Redesign'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder, FoodieApp',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The mobile app they built with React Native works flawlessly across both iOS and Android. Their attention to detail and commitment to quality is outstanding. Highly recommended!',
    rating: 5,
    project: 'Mobile App Development'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'CTO, HealthcarePlus',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Working with VLP Technologies was a game-changer for our healthcare platform. Their expertise in modern web technologies and security best practices gave us confidence in our solution.',
    rating: 5,
    project: 'Healthcare Management System'
  },
  {
    id: 4,
    name: 'David Thompson',
    position: 'Marketing Director, ShopEasy',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Our e-commerce platform built by VLP Technologies has been performing exceptionally well. The SEO optimization and performance improvements have increased our sales by 40%.',
    rating: 5,
    project: 'E-commerce Platform'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with VLP Technologies.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100" />
            
            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
              <div className="flex-shrink-0">
                <div className="relative w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed font-medium">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentIndex].position}
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    Project: {testimonials[currentIndex].project}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">Trusted by Amazing Companies</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechStart', 'FoodieApp', 'HealthcarePlus', 'ShopEasy', 'InnovateCorp'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}