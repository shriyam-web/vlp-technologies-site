'use client';

import { useState } from 'react';
import { Send, CheckCircle, Upload } from 'lucide-react';

const projectTypes = [
  'Web Application',
  'Mobile Application',
  'E-commerce Platform',
  'Corporate Website',
  'Custom Software',
  'API Development',
  'Other'
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 - $15,000',
  '$15,000 - $30,000',
  '$30,000 - $50,000',
  '$50,000+',
  'I need help determining budget'
];

const timelines = [
  'Less than 1 month',
  '1-3 months',
  '3-6 months',
  '6+ months',
  'Flexible timeline'
];

export function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    features: '',
    file: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-200 text-center">
        <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Submitted!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your interest in working with VLP Technologies. 
          We'll review your requirements and send you a detailed proposal within 24-48 hours.
        </p>
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li>• Our team will review your project requirements</li>
            <li>• We'll prepare a detailed proposal with timeline and pricing</li>
            <li>• Schedule a consultation call to discuss your project</li>
            <li>• Finalize project scope and begin development</li>
          </ul>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 hover:text-blue-700 font-medium"
        >
          Submit Another Quote Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Quote Request</h2>
      <p className="text-gray-600 mb-8">
        Fill out this form with as much detail as possible to help us provide an accurate quote.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
              placeholder="Your company name"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
              Project Type *
            </label>
            <select
              id="projectType"
              name="projectType"
              required
              value={formData.projectType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range) => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
              Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200"
            >
              <option value="">Select timeline</option>
              {timelines.map((time) => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Project Description *
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={6}
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 resize-none"
            placeholder="Please describe your project in detail. What are your goals? Who is your target audience? What problems are you trying to solve?"
          />
        </div>

        <div>
          <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-2">
            Key Features & Requirements
          </label>
          <textarea
            id="features"
            name="features"
            rows={4}
            value={formData.features}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors duration-200 resize-none"
            placeholder="List the key features and functionality you need (e.g., user authentication, payment processing, admin dashboard, etc.)"
          />
        </div>

        {/* File Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Files (Optional)
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
            <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 mb-2">
              Upload wireframes, designs, documents, or any files that help explain your project
            </p>
            <button
              type="button"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Choose Files
            </button>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="font-semibold text-gray-900 mb-2">What you'll receive:</h3>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Detailed project proposal and timeline</li>
            <li>• Technology recommendations</li>
            <li>• Transparent pricing breakdown</li>
            <li>• Free consultation call</li>
          </ul>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-70 shadow-lg"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Request Quote</span>
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to receive communications from VLP Technologies.
          We respect your privacy and will never share your information.
        </p>
      </form>
    </div>
  );
}