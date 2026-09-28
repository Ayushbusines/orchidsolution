import React, { useEffect } from 'react';
import { ContactSection } from '../components/ContactSection';
import { SeoHead } from '../components/SeoHead';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://www.orchidsolution.online/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Contact & Start a Project',
          'item': 'https://www.orchidsolution.online/contact'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      'name': 'Contact & Start a Project — Orchid Solution',
      'url': 'https://www.orchidsolution.online/contact',
      'description': 'Contact Orchid Solution to discuss your website design, web development, AI integration, or workflow automation project.',
      'mainEntity': {
        '@type': 'Organization',
        'name': 'Orchid Solution',
        'url': 'https://www.orchidsolution.online/',
        'telephone': '+917840874899',
        'email': 'ayushskumar212@gmail.com'
      }
    }
  ];

  return (
    <div className="pt-20 bg-[#090909] text-[#F2F0EA] min-h-screen">
      <SeoHead
        title="Contact & Start a Project — Orchid Solution"
        description="Contact Orchid Solution to discuss your website design, web development, AI integration, or workflow automation project. Direct response within 24 hours."
        schema={contactSchema}
      />
      <ContactSection />
    </div>
  );
};
