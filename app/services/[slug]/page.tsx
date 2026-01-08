import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { seoConfig } from '@/lib/seoConfig';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return seoConfig.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = seoConfig.services.find((s) => s.slug === params.slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.name} | VijayLaxmi Technologies`,
    description: service.description,
    keywords: service.keywords.join(', '),
    openGraph: {
      title: `${service.name} | VijayLaxmi Technologies`,
      description: service.description,
      url: `${seoConfig.baseUrl}/services/${service.slug}`,
      type: 'website',
      locale: 'en_IN',
    },
    alternates: {
      canonical: `${seoConfig.baseUrl}/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = seoConfig.services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {service.name}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Expert {service.name} Solutions</h2>
            <p className="text-gray-700 leading-relaxed">
              At VijayLaxmi Technologies (VLP Tech), we specialize in delivering high-quality {service.name.toLowerCase()} 
              tailored to your business needs. Our expert team uses the latest technologies and best practices 
              to ensure your project is successful, scalable, and SEO-optimized.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>✓ Custom-built solutions</li>
              <li>✓ Performance optimized</li>
              <li>✓ SEO-friendly architecture</li>
              <li>✓ Mobile-first approach</li>
              <li>✓ Expert development team</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
            <div className="grid grid-cols-1 gap-4">
              {service.keywords.map((keyword, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700 capitalize">{keyword}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-blue-600 text-3xl mb-4 font-bold">100%</div>
              <h4 className="font-bold text-lg mb-2">Quality Assurance</h4>
              <p className="text-gray-600">Rigorous testing for bug-free performance</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-3xl mb-4 font-bold">24/7</div>
              <h4 className="font-bold text-lg mb-2">Support</h4>
              <p className="text-gray-600">Dedicated assistance throughout the project</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 text-3xl mb-4 font-bold">Fast</div>
              <h4 className="font-bold text-lg mb-2">Delivery</h4>
              <p className="text-gray-600">Timely project completion and deployment</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Your {service.name} Project Today</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help you achieve your business goals with our expert development services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
