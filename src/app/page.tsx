import dynamic from 'next/dynamic';
import { Hero } from '@/components/sections/Hero';

const ServicesGrid = dynamic(
  () =>
    import('@/components/sections/ServicesGrid').then(
      (mod) => mod.ServicesGrid
    ),
  { ssr: true }
);

const FeaturedProjects = dynamic(
  () =>
    import('@/components/sections/FeaturedProjects').then(
      (mod) => mod.FeaturedProjects
    ),
  { ssr: true }
);

const WhyChooseUs = dynamic(
  () =>
    import('@/components/sections/WhyChooseUs').then(
      (mod) => mod.WhyChooseUs
    ),
  { ssr: true }
);

const ProcessSteps = dynamic(
  () =>
    import('@/components/sections/ProcessSteps').then(
      (mod) => mod.ProcessSteps
    ),
  { ssr: true }
);

const Testimonials = dynamic(
  () =>
    import('@/components/sections/Testimonials').then(
      (mod) => mod.Testimonials
    ),
  { ssr: true }
);

const CallToAction = dynamic(
  () =>
    import('@/components/sections/CallToAction').then(
      (mod) => mod.CallToAction
    ),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedProjects />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <CallToAction />
    </>
  );
}
