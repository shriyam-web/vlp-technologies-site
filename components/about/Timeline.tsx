import { Calendar, Users, Trophy, Rocket } from 'lucide-react';

const milestones = [
  {
    year: '2019',
    title: 'Company Founded',
    description: 'VLP Technologies was established with a mission to create innovative digital solutions.',
    icon: Rocket,
    color: 'blue'
  },
  {
    year: '2020',
    title: 'Team Expansion',
    description: 'Grew our team to 5+ skilled developers and designers to serve more clients effectively.',
    icon: Users,
    color: 'green'
  },
  {
    year: '2021',
    title: 'Major Milestones',
    description: 'Delivered 25+ successful projects and established partnerships with key technology providers.',
    icon: Trophy,
    color: 'yellow'
  },
  {
    year: '2023',
    title: 'Innovation Focus',
    description: 'Expanded expertise to include AI integration, advanced mobile solutions, and cloud technologies.',
    icon: Calendar,
    color: 'purple'
  }
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600 border-blue-200',
  green: 'bg-green-100 text-green-600 border-green-200',
  yellow: 'bg-yellow-100 text-yellow-600 border-yellow-200',
  purple: 'bg-purple-100 text-purple-600 border-purple-200'
};

export function Timeline() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From a small startup to a trusted technology partner, here are the key milestones 
            that have shaped VLP Technologies into the company we are today.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              const colorClass = colorClasses[milestone.color as keyof typeof colorClasses];
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center z-10">
                    <IconComponent className="h-5 w-5 text-blue-600" />
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200">
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 ${colorClass}`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for opposite side */}
                  <div className="w-full lg:w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}