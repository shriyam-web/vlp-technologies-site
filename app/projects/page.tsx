import { Metadata } from 'next';
import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsGallery } from '@/components/projects/ProjectsGallery';
import { seoConfig } from '@/lib/seoConfig';

export const metadata: Metadata = {
  title: 'Portfolio - Web & App Development Projects | VijayLaxmi Technologies',
  description: 'Explore our portfolio of successful web development and mobile app projects. Real case studies of React.js, Node.js, and React Native applications built by VLP Technologies in Noida & Delhi NCR.',
  keywords: [
    'web development portfolio',
    'app development portfolio',
    'project portfolio',
    'case studies',
    'development projects',
    'React projects',
    'web application portfolio',
    'software development portfolio',
  ].join(', '),
  openGraph: {
    title: 'Portfolio - Web & App Development Projects | VijayLaxmi Technologies',
    description: 'View our portfolio of successful web development and mobile app projects.',
    url: `${seoConfig.baseUrl}/projects`,
    type: 'website',
    locale: 'en_IN',
  },
  alternates: {
    canonical: `${seoConfig.baseUrl}/projects`,
  },
};

export default function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
    </>
  );
}