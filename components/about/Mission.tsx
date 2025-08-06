import { Target, Eye, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To empower businesses with cutting-edge web and mobile solutions that drive growth, enhance user experiences, and create lasting value in the digital landscape.',
    color: 'blue'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To be the leading technology partner for businesses worldwide, known for innovation, quality, and exceptional client relationships in the digital transformation journey.',
    color: 'purple'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Excellence in every project, transparent communication, continuous learning, client-first approach, and building long-term partnerships based on trust and results.',
    color: 'green'
  }
];

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  green: 'bg-green-100 text-green-600'
};

export function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const colorClass = colorClasses[value.color as keyof typeof colorClasses];
            
            return (
              <div key={index} className="text-center group">
                <div className={`inline-flex p-6 rounded-2xl ${colorClass} mb-6 group-hover:scale-110 transition-transform duration-200`}>
                  <IconComponent className="h-12 w-12" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}