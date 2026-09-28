import React, { useEffect } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const ServicesPage: React.FC = () => {
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

  const servicesSchema = [
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
          'name': 'Services & Capabilities',
          'item': 'https://www.orchidsolution.online/services'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'name': 'Orchid Solution Services & Capabilities',
      'url': 'https://www.orchidsolution.online/services',
      'itemListElement': SERVICES_DATA.map((service, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Service',
          'name': service.title,
          'description': service.fullDesc,
          'url': `https://www.orchidsolution.online/services#${service.slug}`,
          'provider': {
            '@type': 'Organization',
            'name': 'Orchid Solution',
            'url': 'https://www.orchidsolution.online/'
          }
        }
      }))
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#090909] text-[#F2F0EA] min-h-screen">
      <SeoHead
        title="Website Design, AI & Automation Services — Orchid Solution"
        description="Comprehensive website design, web development, AI solutions, call agents, and workflow automation services across India."
        schema={servicesSchema}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="space-y-4 mb-20 pb-8 border-b border-[#F2F0EA]/12">
          <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block">
            CAPABILITIES & SERVICES
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-normal tracking-tight">
            WHAT WE BUILD<span className="text-[#B79CFF]">.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#9A9892] font-light max-w-2xl">
            Connected capabilities spanning art-directed website design, engineering, practical AI integrations, and background workflow automation.
          </p>
        </div>

        {/* Detailed Services Stack */}
        <div className="space-y-24">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              id={service.slug}
              className="scroll-mt-32 p-8 lg:p-12 border border-[#F2F0EA]/12 bg-[#0B0B0B] rounded-lg relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left col */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#B79CFF] font-bold py-1 px-3 border border-[#B79CFF]/40 rounded-sm bg-[#B79CFF]/10">
                      {service.number}
                    </span>
                    <span className="font-mono text-xs text-[#9A9892] uppercase tracking-wider">
                      ORCHID SERVICE
                    </span>
                  </div>

                  <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight text-[#F2F0EA]">
                    {service.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#F2F0EA]/90 font-light leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-[#090909] bg-[#F2F0EA] hover:bg-[#B79CFF] transition-all py-3.5 px-6 rounded-sm font-bold"
                    >
                      <span>DISCUSS THIS SERVICE</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right col: Benefits & Deliverables */}
                <div className="lg:col-span-6 space-y-8 border-t lg:border-t-0 lg:border-l border-[#F2F0EA]/12 pt-8 lg:pt-0 lg:pl-12">
                  
                  {/* Benefits */}
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase">
                      KEY BUSINESS BENEFITS
                    </h4>
                    <ul className="space-y-3">
                      {service.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[#9A9892] font-light">
                          <CheckCircle2 className="w-4 h-4 text-[#B79CFF] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-4 pt-4 border-t border-[#F2F0EA]/08">
                    <h4 className="font-mono text-xs text-[#9A9892] tracking-widest uppercase">
                      WHAT WE DELIVER
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((deliv, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-xs py-1.5 px-3 bg-[#111111] border border-[#F2F0EA]/12 text-[#F2F0EA] rounded-sm"
                        >
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
