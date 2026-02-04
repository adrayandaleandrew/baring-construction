import { Hero } from '@/components/sections/Hero';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { Testimonials } from '@/components/sections/Testimonials';
import { CallToAction } from '@/components/sections/CallToAction';

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
