import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/projectsData';
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const projectIndex = PROJECTS_DATA.findIndex((p) => p.id === id);
  const project = PROJECTS_DATA[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-40 pb-24 min-h-screen bg-[#090909] text-center text-[#F2F0EA]">
        <h2 className="font-display text-4xl mb-4">PROJECT NOT FOUND</h2>
        <Link to="/portfolio" className="font-mono text-xs text-[#B79CFF] underline">
          Return to Portfolio Gallery
        </Link>
      </div>
    );
  }

  const nextProject = PROJECTS_DATA[(projectIndex + 1) % PROJECTS_DATA.length];

  const projectSchema = [
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
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': project.title,
          'item': `https://www.orchidsolution.online/portfolio/${project.id}`
        }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': project.title,
      'headline': `${project.title} — Digital Case Study`,
      'description': project.summary,
      'image': `https://www.orchidsolution.online${project.image}`,
      'url': `https://www.orchidsolution.online/portfolio/${project.id}`,
      'dateCreated': project.year,
      'genre': project.category,
      'creator': {
        '@type': 'Organization',
        'name': 'Orchid Solution',
        'url': 'https://www.orchidsolution.online/'
      },
      'provider': {
        '@type': 'Organization',
        'name': 'Orchid Solution',
        'url': 'https://www.orchidsolution.online/'
      },
      'keywords': project.techStack.join(', ')
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#090909] text-[#F2F0EA] min-h-screen">
      <SeoHead
        title={`${project.title} — Case Study | Orchid Solution`}
        description={project.summary}
        ogImage={`https://www.orchidsolution.online${project.image}`}
        ogType="article"
        schema={projectSchema}
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 font-mono text-xs text-[#9A9892] hover:text-[#B79CFF] tracking-widest uppercase mb-8 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>BACK TO GALLERY</span>
        </button>

        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 pb-12 border-b border-[#F2F0EA]/12">
          <div className="lg:col-span-8 space-y-4">
            <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block">
              {project.category} · {project.year}
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-xl text-[#9A9892] font-light max-w-2xl">
              {project.summary}
            </p>
          </div>

          <div className="lg:col-span-4 space-y-3 font-mono text-xs text-[#9A9892] border-l border-[#F2F0EA]/12 pl-6">
            <div>
              <span className="text-[#F2F0EA] block">CLIENT</span>
              <span>{project.client}</span>
            </div>
            <div>
              <span className="text-[#F2F0EA] block">LOCATION</span>
              <span>{project.location}</span>
            </div>
            <div>
              <span className="text-[#F2F0EA] block">YEAR</span>
              <span>{project.year}</span>
            </div>
            {project.liveUrl && (
              <div>
                <span className="text-[#F2F0EA] block">LIVE WEBSITE</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B79CFF] hover:underline inline-flex items-center gap-1 font-mono text-xs mt-0.5"
                >
                  <span>{project.liveUrl.replace(/^https?:\/\//, '')}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-lg overflow-hidden border border-[#F2F0EA]/12 mb-20 bg-[#111111]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-[700px] object-cover filter brightness-95"
          />
        </motion.div>

        {/* Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          <div className="lg:col-span-8 space-y-16 divide-y divide-[#F2F0EA]/12">
            
            {/* 01 Challenge */}
            <div className="pt-8 space-y-4">
              <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase">
                01 / THE CHALLENGE
              </span>
              <p className="text-lg text-[#F2F0EA]/90 font-light leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* 02 Approach */}
            <div className="pt-12 space-y-4">
              <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase">
                02 / THE APPROACH
              </span>
              <p className="text-lg text-[#F2F0EA]/90 font-light leading-relaxed">
                {project.approach}
              </p>
            </div>

            {/* 03 Design */}
            <div className="pt-12 space-y-4">
              <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase">
                03 / DESIGN & ART DIRECTION
              </span>
              <p className="text-base text-[#9A9892] font-light leading-relaxed">
                {project.designDetails}
              </p>
            </div>

            {/* 04 Development */}
            <div className="pt-12 space-y-4">
              <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase">
                04 / DEVELOPMENT & INTEGRATION
              </span>
              <p className="text-base text-[#9A9892] font-light leading-relaxed">
                {project.developmentDetails}
              </p>
            </div>

            {/* 05 Outcome */}
            <div className="pt-12 space-y-4">
              <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase">
                05 / RESULT & IMPACT
              </span>
              <div className="p-6 border border-[#B79CFF]/30 bg-[#B79CFF]/05 rounded-sm">
                <p className="font-display text-2xl text-[#F2F0EA] font-normal">
                  {project.outcome}
                </p>
              </div>
            </div>

          </div>

          {/* Sidebar Tech Stack */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 border border-[#F2F0EA]/12 rounded-lg bg-[#111111]/40 space-y-6">
              <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block">
                06 / TECHNOLOGIES USED
              </span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs py-1.5 px-3 bg-[#090909] border border-[#F2F0EA]/12 text-[#F2F0EA] rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-4 border-t border-[#F2F0EA]/12 flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#B79CFF] text-[#090909] font-mono text-xs font-bold rounded-sm hover:bg-[#a382ff] transition-colors"
                  >
                    <span>VISIT LIVE WEBSITE</span>
                    <Globe className="w-4 h-4" />
                  </a>
                )}
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#F2F0EA] text-[#090909] font-mono text-xs font-bold rounded-sm hover:bg-[#B79CFF] transition-colors"
                >
                  <span>BUILD A SIMILAR SYSTEM</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Next Project Footer */}
        <div className="border-t border-[#F2F0EA]/12 pt-12 flex items-center justify-between">
          <span className="font-mono text-xs text-[#9A9892] uppercase">NEXT CASE STUDY</span>
          <Link
            to={`/portfolio/${nextProject.id}`}
            className="group flex items-center gap-4 font-display text-2xl sm:text-4xl text-[#F2F0EA] hover:text-[#B79CFF] transition-colors"
          >
            <span>{nextProject.title}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform text-[#B79CFF]" />
          </Link>
        </div>

      </div>
    </div>
  );
};
