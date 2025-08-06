import { Metadata } from 'next';
import { ProjectsHero } from '@/components/projects/ProjectsHero';
import { ProjectsGallery } from '@/components/projects/ProjectsGallery';

export const metadata: Metadata = {
  title: 'Our Projects - VLP Technologies',
  description: 'Explore our portfolio of web and mobile applications built with cutting-edge technologies.',
};

export default function Projects() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
    </>
  );
}