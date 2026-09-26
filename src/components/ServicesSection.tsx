import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/servicesData';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 lg:py-36 bg-[#090909] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 pb-8 border-b border-[#F2F0EA]/12 gap-6">
          <div>
            <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-3">
              02 / WHAT WE DO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F2F0EA]">
              FROM FIRST CLICK <br />
              TO FULL SYSTEM.
            </h2>
          </div>
          <Link
            to="/services"
            className="font-mono text-xs text-[#9A9892] hover:text-[#B79CFF] tracking-widest flex items-center gap-2 transition-colors py-2"
          >
            <span>VIEW ALL SERVICES</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#B79CFF]" />
          </Link>
        </div>

        {/* Editorial Rows Container */}
        <div className="relative">
          {SERVICES_DATA.map((service) => {
            const isHovered = hoveredServiceId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredServiceId(service.id)}
                onMouseLeave={() => setHoveredServiceId(null)}
                className="group relative border-b border-[#F2F0EA]/12 py-8 lg:py-10 transition-colors duration-300 hover:bg-[#111111]/60 px-4 md:px-6 rounded-sm"
              >
                <div className="grid grid-cols-12 items-center gap-4">
                  {/* Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span
                      className={`font-mono text-xs transition-colors duration-300 ${
                        isHovered ? 'text-[#B79CFF] font-bold' : 'text-[#9A9892]'
                      }`}
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-10 md:col-span-5">
                    <Link
                      to={`/services#${service.slug}`}
                      className="font-display text-xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#F2F0EA] group-hover:text-white group-hover:translate-x-2 transition-all duration-300 block"
                    >
                      {service.title}
                    </Link>
                  </div>

                  {/* Short Description */}
                  <div className="col-span-12 md:col-span-5 mt-2 md:mt-0">
                    <p className="text-xs sm:text-sm text-[#9A9892] font-light leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 md:col-span-1 flex justify-end mt-2 md:mt-0">
                    <Link
                      to={`/services#${service.slug}`}
                      className="w-10 h-10 rounded-full border border-[#F2F0EA]/12 group-hover:border-[#B79CFF]/60 flex items-center justify-center text-[#F2F0EA] group-hover:text-[#B79CFF] group-hover:bg-[#B79CFF]/10 transition-all duration-300"
                    >
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Floating Preview Image on Desktop */}
                <AnimatePresence>
                  {isHovered && service.previewVisual && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-20 pointer-events-none w-[240px] h-[150px] rounded-md overflow-hidden border border-[#F2F0EA]/20 shadow-2xl bg-[#090909]"
                    >
                      <img
                        src={service.previewVisual}
                        alt={service.title}
                        className="w-full h-full object-cover filter brightness-90 contrast-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-40" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
