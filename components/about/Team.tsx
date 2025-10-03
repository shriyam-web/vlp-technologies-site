import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Shriyam Parashar',
    role: 'CEO & Full-Stack Developer',
    bio: 'With 8+ years of experience in web development, Shriyam leads our technical vision and client relationships.',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    skills: ['React.js', 'Node.js', 'AWS', 'Team Leadership'],
    social: {
      linkedin: 'https://www.linkedin.com/in/shriyamparashar',
      instagram: 'https://www.instagram.com/shriyam_05/',
      email: 'shriyamparashar5@gmail.com'
    }
  },
  {
    name: 'Shanvika',
    role: 'Co-owner',
    bio: 'Shanvika specializes in React Native development and has built 20+ cross-platform mobile applications.',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    skills: ['React Native', 'iOS', 'Android', 'Mobile UI/UX'],
    social: {
      linkedin: '#',
      twitter: '#',
      // email: 'sarah@vlptechnologies.com'
    }
  },
  {
    name: 'Kirti Rajani',
    role: 'Senior Frontend Developer',
    bio: 'Kirti creates beautiful, responsive user interfaces and has expertise in modern CSS and JavaScript frameworks.',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    social: {
      linkedin: '#',
      twitter: '#',
      // email: 'michael@vlptechnologies.com'
    }
  },
  {
    name: 'Pranjal Gupta',
    role: 'UI/UX Designer & Developer',
    bio: 'Pranjal combines design thinking with development skills to create user-centered digital experiences.',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    skills: ['UI/UX Design', 'Figma', 'React.js', 'User Research'],
    social: {
      linkedin: '#',
      twitter: '#',
      // email: 'emily@vlptechnologies.com'
    },
    {
    name: 'Priya Chaudhary',
    role: 'UI/UX Designer & Developer',
    bio: 'Pranjal combines design thinking with development skills to create user-centered digital experiences.',
    avatar: 'https://cdn-icons-png.flaticon.com/512/1946/1946429.png',
    skills: ['UI/UX Design', 'Figma', 'React.js', 'User Research'],
    social: {
      linkedin: '#',
      twitter: '#',
      // email: 'emily@vlptechnologies.com'
    }
  }
];

export function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our talented team of developers and designers are passionate about creating 
            exceptional digital experiences and driving innovation in every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
