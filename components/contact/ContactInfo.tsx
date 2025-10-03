import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'shriyamparashar5@gmail.com',
    link: 'mailto:info@vlptechnologies.com',
    description: 'Send us an email anytime'
  },
  {
    icon: Phone,
    title: 'Call Us',
    content: '+91 9648974867',
    link: 'tel:+919648974867',
    description: 'Mon-Sat from 9am to 6pm'
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    content: 'Noida, India',
    link: 'https://maps.google.com',
    description: 'Come visit our office'
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: 'Mon-Fri: 9:00 AM - 6:00 PM',
    description: 'Ready to help you'
  }
];

export function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h2>
      <p className="text-gray-600 mb-8">
        We're here to help and answer any question you might have. 
        We look forward to hearing from you.
      </p>
      
      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const IconComponent = detail.icon;
          
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <IconComponent className="h-6 w-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{detail.title}</h3>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="text-blue-600 hover:text-blue-700 font-medium block mb-1"
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p className="text-gray-800 font-medium mb-1">{detail.content}</p>
                )}
                <p className="text-sm text-gray-600">{detail.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
