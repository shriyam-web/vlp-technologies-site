'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A comprehensive e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
    category: 'Web Application',
    features: ['Payment Gateway Integration', 'Real-time Inventory', 'Admin Dashboard', 'Mobile Responsive'],
    client: 'ShopEasy Inc.',
    duration: '4 months',
    featured: true
  },
  {
    id: 2,
    title: 'Food Delivery Mobile App',
    description: 'Cross-platform mobile application for food delivery with real-time order tracking, GPS integration, and seamless payment experience.',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Google Maps API', 'PayPal', 'Push Notifications'],
    category: 'Mobile Application',
    features: ['Real-time Tracking', 'Push Notifications', 'Payment Integration', 'GPS Navigation'],
    client: 'FoodieApp',
    duration: '6 months',
    featured: true
  },
  {
    id: 3,
    title: 'Healthcare Management System',
    description: 'Comprehensive healthcare platform with patient records management, appointment scheduling, and telemedicine capabilities.',
    image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'PostgreSQL', 'WebRTC', 'AWS', 'Socket.io'],
    category: 'Web Application',
    features: ['Patient Records', 'Video Consultations', 'Appointment Booking', 'Medical Reports'],
    client: 'HealthcarePlus',
    duration: '8 months',
    featured: true
  },
  {
    id: 4,
    title: 'Real Estate Portal',
    description: 'Modern real estate platform with property listings, virtual tours, and mortgage calculator integration.',
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React.js', 'Express.js', 'MongoDB', 'Mapbox', 'Cloudinary'],
    category: 'Web Application',
    features: ['Property Search', 'Virtual Tours', 'Mortgage Calculator', 'Agent Profiles'],
    client: 'PropertyHub',
    duration: '5 months',
    featured: false
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'Mobile fitness application with workout tracking, progress monitoring, and social features for fitness enthusiasts.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'HealthKit', 'Chart.js', 'Social Auth'],
    category: 'Mobile Application',
    features: ['Workout Tracking', 'Progress Charts', 'Social Sharing', 'Health Integration'],
    client: 'FitTracker Pro',
    duration: '4 months',
    featured: false
  },
  {
    id: 6,
    title: 'Corporate Website',
    description: 'Professional corporate website with content management system, blog, and contact management features.',
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel', 'EmailJS'],
    category: 'Web Application',
    features: ['CMS Integration', 'SEO Optimized', 'Blog System', 'Contact Forms'],
    client: 'TechStart Inc.',
    duration: '3 months',
    featured: false
  }
];

const categories = ['All', 'Web Application', 'Mobile Application'];

export function ProjectsGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Filter className="h-5 w-5 text-gray-400 mt-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                      project.category === 'Web Application' ? 'bg-blue-600' : 'bg-purple-600'
                    }`}>
                      {project.category}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.client}</span>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-700 transition-colors duration-200">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium text-white ${
                  selectedProject.category === 'Web Application' ? 'bg-blue-600' : 'bg-purple-600'
                }`}>
                  {selectedProject.category}
                </span>
                {selectedProject.featured && (
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured Project
                  </span>
                )}
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="font-medium text-gray-700">Client:</span>
                      <span className="ml-2 text-gray-600">{selectedProject.client}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Duration:</span>
                      <span className="ml-2 text-gray-600">{selectedProject.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Category:</span>
                      <span className="ml-2 text-gray-600">{selectedProject.category}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  <ExternalLink className="h-5 w-5" />
                  <span>View Live Project</span>
                </button>
                <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                  <Github className="h-5 w-5" />
                  <span>View Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}