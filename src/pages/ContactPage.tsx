import React, { useEffect } from 'react';
import { ContactSection } from '../components/ContactSection';
import { SeoHead } from '../components/SeoHead';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-[#090909] text-[#F2F0EA] min-h-screen">
      <SeoHead
        title="Contact & Start a Project — Orchid Solution"
        description="Get in touch with Orchid Solution to discuss your website design, AI integration, or workflow automation project."
      />
      <ContactSection />
    </div>
  );
};
