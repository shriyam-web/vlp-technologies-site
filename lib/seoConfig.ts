export const seoConfig = {
  baseUrl: 'https://vlptechnology.in',
  brandName: 'VijayLaxmi Technologies',
  brandAliases: ['VLP Technologies', 'Vijay Laxmi Technologies'],

  company: {
    name: 'VijayLaxmi Technologies',
    shortName: 'VLP Tech',
    description: 'Expert SEO-optimized web development company specializing in MERN Stack, Next.js, and speed-optimized websites in Noida and Delhi NCR',
    phone: '+91-9648974867',
    email: 'shriyamparashar5@gmail.com',
    founded: '2020',
  },

  locations: {
    primary: {
      city: 'Noida',
      state: 'Uttar Pradesh',
      country: 'India',
      zipCode: '201301',
      address: 'Noida, Uttar Pradesh, India',
      latitude: '28.5355',
      longitude: '77.3910',
    },
    secondary: {
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      region: 'NCR',
      address: 'Delhi NCR, India',
      latitude: '28.7041',
      longitude: '77.1025',
    },
  },

  services: [
    {
      name: 'SEO-Optimized Web Development',
      slug: 'seo-optimized-web-development',
      description: 'High-performance, SEO-friendly web applications built with MERN Stack and Next.js for maximum organic visibility',
      keywords: ['SEO web development', 'SEO-friendly websites', 'organic ranking', 'SEO optimization'],
    },
    {
      name: 'MERN Stack Development',
      slug: 'mern-stack-development',
      description: 'Full-stack web application development using MongoDB, Express, React, and Node.js',
      keywords: ['MERN stack', 'MERN development', 'full stack development', 'JavaScript development'],
    },
    {
      name: 'Next.js Development',
      slug: 'nextjs-development',
      description: 'Modern, lightning-fast web applications with Next.js featuring SSR, SSG, and built-in SEO optimization',
      keywords: ['Next.js development', 'Next.js apps', 'SSR development', 'static site generation'],
    },
    {
      name: 'Speed Optimized Websites',
      slug: 'speed-optimized-websites',
      description: 'Ultra-fast, performance-optimized websites with Core Web Vitals optimization for better user experience and rankings',
      keywords: ['website speed optimization', 'Core Web Vitals', 'page speed', 'performance optimization'],
    },
    {
      name: 'E-Commerce Solutions',
      slug: 'ecommerce-development',
      description: 'SEO-optimized e-commerce platforms with conversion-focused design and fast loading times',
      keywords: ['e-commerce development', 'online store', 'SEO ecommerce', 'conversion optimization'],
    },
    {
      name: 'Web Application Development',
      slug: 'web-application-development',
      description: 'Custom enterprise web applications with scalable architecture and SEO best practices',
      keywords: ['web application', 'custom development', 'enterprise apps', 'scalable solutions'],
    },
  ],

  keywords: {
    primary: [
      'VijayLaxmi Technologies',
      'VLP Technologies',
      'Vijay Laxmi Technologies',
      'SEO web development Noida',
      'MERN Stack development',
      'Next.js development Noida',
      'speed optimized websites',
      'SEO optimized web development',
      'fast websites Noida',
    ],
    secondary: [
      'web development company Noida',
      'MERN Stack developer',
      'Next.js expert',
      'SEO friendly web design',
      'Core Web Vitals optimization',
      'website speed optimization',
      'React.js development',
      'Node.js development',
      'web application development',
      'organic ranking expert',
      'SEO web development Delhi',
    ],
    location: [
      'Noida',
      'Delhi NCR',
      'Greater Noida',
      'Ghaziabad',
      'Sector 63 Noida',
      'IT Park Noida',
    ],
  },

  socialMedia: {
    linkedin: 'https://linkedin.com/company/vlp-technologies',
    twitter: 'https://twitter.com/vlptech',
    github: 'https://github.com/vlptech',
    facebook: 'https://facebook.com/vlptechnologies',
  },
};

export const getPageMetadata = (pageName: string) => {
  const pages: Record<string, { title: string; description: string; keywords: string[] }> = {
    home: {
      title: 'VijayLaxmi Technologies | Web & Mobile App Development in Noida & Delhi NCR',
      description: 'VLP Technologies - Specialized web development and mobile app development company in Noida and Delhi NCR. Expert in React.js, React Native, and modern web technologies.',
      keywords: ['web development Noida', 'mobile app development Delhi', 'VLP Technologies', 'VijayLaxmi Technologies'],
    },
    services: {
      title: 'Web Development & Mobile App Services | VijayLaxmi Technologies Noida',
      description: 'Custom web development, mobile app development, e-commerce solutions, UI/UX design, and cloud services by VLP Technologies in Noida and Delhi NCR.',
      keywords: ['web development services', 'app development services', 'web design services Noida', 'mobile development services Delhi'],
    },
    projects: {
      title: 'Web Development & App Development Projects | VLP Technologies Noida',
      description: 'View our portfolio of successful web and mobile app development projects delivered to clients in Noida, Delhi, and pan-India.',
      keywords: ['web development portfolio', 'app development portfolio', 'software projects', 'development case studies'],
    },
    about: {
      title: 'About VijayLaxmi Technologies | Web Development Company Noida',
      description: 'Learn about VLP Technologies - a leading web and mobile app development company in Noida. Our team, experience, and expertise in React, Node.js, and modern technologies.',
      keywords: ['about VLP Technologies', 'web development company Noida', 'software development team', 'tech company Delhi NCR'],
    },
    contact: {
      title: 'Contact VijayLaxmi Technologies | Web Development Company Noida',
      description: 'Get in touch with VLP Technologies in Noida for your web and mobile app development needs. Fast response, expert team, quality solutions.',
      keywords: ['contact web developer Noida', 'hire developer Delhi', 'software development company contact', 'web development services Noida'],
    },
    getQuote: {
      title: 'Get Quote for Web & App Development | VijayLaxmi Technologies',
      description: 'Request a custom quote for your web or mobile app development project from VLP Technologies. Free consultation and detailed proposal.',
      keywords: ['web development quote', 'app development quote', 'software development pricing', 'development cost estimate'],
    },
  };

  return pages[pageName] || pages.home;
};
