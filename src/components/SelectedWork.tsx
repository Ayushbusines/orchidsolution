import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projectsData';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const featuredProjects = PROJECTS_DATA.slice(0, 5);

  return (
    <section className="py-24 lg:py-36 bg-[#050505] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 pb-8 border-b border-[#F2F0EA]/12 gap-6">
          <div>
            <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-3">
              03 / SELECTED WORK
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F2F0EA]">
              WORK THAT <br />
              DOES THE TALKING.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group flex items-center gap-2 font-mono text-xs text-[#F2F0EA] hover:text-[#B79CFF] tracking-widest py-3 px-5 border border-[#F2F0EA]/12 hover:border-[#B79CFF]/40 rounded-sm bg-[#111111]/40 transition-colors"
          >
            <span>VIEW ALL PROJECTS ({PROJECTS_DATA.length})</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#B79CFF]" />
          </Link>
        </div>

        {/* Asymmetric Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Project 1: Large Featured (12 cols) */}
          {featuredProjects[0] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-12"
            >
              <Link
                to={`/portfolio/${featuredProjects[0].id}`}
                data-cursor="project"
                className="group block relative rounded-[12px] overflow-hidden border border-[#F2F0EA]/12 bg-[#090909]"
              >
                <div className="aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden">
                  <img
                    src={featuredProjects[0].image}
                    alt={featuredProjects[0].title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-2">
                      {featuredProjects[0].category} · {featuredProjects[0].year}
                    </span>
                    <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F2F0EA] group-hover:text-white transition-colors">
                      {featuredProjects[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9A9892] max-w-xl mt-2 font-light hidden sm:block">
                      {featuredProjects[0].summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#9A9892] group-hover:text-[#F2F0EA]">EXPLORE CASE STUDY</span>
                    <div className="w-10 h-10 rounded-full border border-[#F2F0EA]/20 group-hover:border-[#B79CFF] flex items-center justify-center text-[#F2F0EA] group-hover:text-[#090909] group-hover:bg-[#B79CFF] transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Project 2 & 3: Two 6-col cards */}
          {featuredProjects.slice(1, 3).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="md:col-span-6"
            >
              <Link
                to={`/portfolio/${project.id}`}
                data-cursor="project"
                className="group block relative rounded-[12px] overflow-hidden border border-[#F2F0EA]/12 bg-[#090909] h-full"
              >
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs text-[#9A9892] group-hover:text-[#B79CFF] tracking-widest uppercase block mb-1 transition-colors">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-normal tracking-tight text-[#F2F0EA] group-hover:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-[#F2F0EA]/20 group-hover:border-[#B79CFF] flex items-center justify-center text-[#F2F0EA] group-hover:text-[#090909] group-hover:bg-[#B79CFF] transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* Project 4 & 5: Asymmetric 8-col & 4-col cards */}
          {featuredProjects[3] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8"
            >
              <Link
                to={`/portfolio/${featuredProjects[3].id}`}
                data-cursor="project"
                className="group block relative rounded-[12px] overflow-hidden border border-[#F2F0EA]/12 bg-[#090909]"
              >
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={featuredProjects[3].image}
                    alt={featuredProjects[3].title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#9A9892] group-hover:text-[#B79CFF] tracking-widest uppercase block mb-1 transition-colors">
                      {featuredProjects[3].category}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-normal tracking-tight text-[#F2F0EA]">
                      {featuredProjects[3].title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-[#F2F0EA]/20 group-hover:border-[#B79CFF] flex items-center justify-center text-[#F2F0EA] group-hover:text-[#090909] group-hover:bg-[#B79CFF] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {featuredProjects[4] && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-4"
            >
              <Link
                to={`/portfolio/${featuredProjects[4].id}`}
                data-cursor="project"
                className="group block relative rounded-[12px] overflow-hidden border border-[#F2F0EA]/12 bg-[#090909] h-full"
              >
                <div className="aspect-[16/9] md:aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={featuredProjects[4].image}
                    alt={featuredProjects[4].title}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/30 to-transparent opacity-80" />

                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <span className="font-mono text-xs text-[#9A9892] group-hover:text-[#B79CFF] tracking-widest uppercase block mb-1 transition-colors">
                      {featuredProjects[4].category}
                    </span>
                    <h3 className="font-display text-xl font-normal tracking-tight text-[#F2F0EA]">
                      {featuredProjects[4].title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full border border-[#F2F0EA]/20 group-hover:border-[#B79CFF] flex items-center justify-center text-[#F2F0EA] group-hover:text-[#090909] group-hover:bg-[#B79CFF] transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};
