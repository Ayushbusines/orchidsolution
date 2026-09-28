import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA, type Project } from '../data/projectsData';
import { ArrowUpRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(PROJECTS_DATA);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (activeFilter === 'ALL') {
      setFilteredProjects(PROJECTS_DATA);
    } else {
      setFilteredProjects(PROJECTS_DATA.filter((p) => p.category === activeFilter));
    }
  }, [activeFilter]);

  const categories = ['ALL', 'WEBSITES', 'UI/UX', 'AI', 'AUTOMATION', 'LANDING PAGES'];

  const portfolioSchema = [
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
          'name': 'Selected Work & Portfolio',
          'item': 'https://www.orchidsolution.online/portfolio'
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      'name': 'Selected Work & Digital Case Studies',
      'description': 'Digital experiences and systems built for ambitious Indian businesses.',
      'url': 'https://www.orchidsolution.online/portfolio',
      'mainEntity': {
        '@type': 'ItemList',
        'itemListElement': PROJECTS_DATA.map((project, index) => ({
          '@type': 'ListItem',
          'position': index + 1,
          'item': {
            '@type': 'CreativeWork',
            'name': project.title,
            'description': project.summary,
            'url': `https://www.orchidsolution.online/portfolio/${project.id}`,
            'image': `https://www.orchidsolution.online${project.image}`,
            'creator': {
              '@type': 'Organization',
              'name': 'Orchid Solution',
              'url': 'https://www.orchidsolution.online/'
            }
          }
        }))
      }
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#050505] min-h-screen text-[#F2F0EA]">
      <SeoHead
        title="Selected Work & Portfolio — Orchid Solution"
        description="Explore case studies in website design, AI triage systems, and business workflow automation built by Orchid Solution for clients across India."
        schema={portfolioSchema}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="space-y-4 mb-16 pb-8 border-b border-[#F2F0EA]/12">
          <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block">
            PORTFOLIO GALLERY
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-normal tracking-tight">
            SELECTED WORK<span className="text-[#B79CFF]">.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#9A9892] font-light max-w-xl">
            Digital experiences built for ambitious Indian businesses, products and ideas.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar mb-16 pb-4 border-b border-[#F2F0EA]/08 font-mono text-xs">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`py-2 px-4 rounded-sm tracking-wider uppercase transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#B79CFF] text-[#090909] font-bold shadow-md shadow-[#B79CFF]/10'
                    : 'text-[#9A9892] hover:text-[#F2F0EA] border border-[#F2F0EA]/08 hover:border-[#F2F0EA]/20'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Asymmetric Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project, index) => {
            const isWide = index % 5 === 0;
            const colSpanClass = isWide ? 'md:col-span-12' : index % 3 === 0 ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={colSpanClass}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  data-cursor="project"
                  className="group block relative rounded-[12px] overflow-hidden border border-[#F2F0EA]/12 bg-[#090909] h-full"
                >
                  <div className={`${isWide ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[16/10]'} w-full overflow-hidden`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover filter brightness-90 group-hover:scale-103 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex items-end justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-1">
                        {project.category} · {project.year}
                      </span>
                      <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#F2F0EA] group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#9A9892] max-w-lg mt-1 font-light hidden sm:block">
                        {project.client} ({project.location})
                      </p>
                    </div>

                    <div className="w-10 h-10 rounded-full border border-[#F2F0EA]/20 group-hover:border-[#B79CFF] flex items-center justify-center text-[#F2F0EA] group-hover:text-[#090909] group-hover:bg-[#B79CFF] transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
