import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Intro } from '../components/Intro';
import { SignatureStatement } from '../components/SignatureStatement';
import { ServicesSection } from '../components/ServicesSection';
import { SelectedWork } from '../components/SelectedWork';
import { AISection } from '../components/AISection';
import { ProcessSection } from '../components/ProcessSection';
import { WhyOrchid } from '../components/WhyOrchid';
import { AboutStudio } from '../components/AboutStudio';
import { IndustriesSection } from '../components/IndustriesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';
import { SeoHead } from '../components/SeoHead';
import { useLocation } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main className="w-full">
      <SeoHead
        title="Orchid Solution — Web Design, AI & Automation Studio India"
        description="Orchid Solution creates premium websites, digital experiences, AI solutions and automation systems for businesses across India."
      />
      <Hero />
      <Intro />
      <SignatureStatement />
      <ServicesSection />
      <SelectedWork />
      <AISection />
      <ProcessSection />
      <WhyOrchid />
      <AboutStudio />
      <IndustriesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};
