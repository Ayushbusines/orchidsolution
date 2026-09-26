import React from 'react';
import { motion } from 'framer-motion';

export const IndustriesSection: React.FC = () => {
  const industries = [
    { num: '01', name: 'STARTUPS & TECH FOUNDERS', desc: 'High-conversion product landing pages & scalable web apps.' },
    { num: '02', name: 'HEALTHCARE & CLINICS', desc: 'Automated patient booking & AI diagnostic triage workflows.' },
    { num: '03', name: 'REAL ESTATE & ARCHITECTURE', desc: 'Cinematic luxury property portfolios & lead capture.' },
    { num: '04', name: 'INTERIOR & SPATIAL DESIGNERS', desc: 'Editorial visual galleries & spatial budget tools.' },
    { num: '05', name: 'RETAIL & ECOMMERCE', desc: 'Headless storefronts engineered for fast checkout speeds.' },
    { num: '06', name: 'PROFESSIONAL CONSULTANTS', desc: 'Authority-building websites & automated appointment scheduling.' },
    { num: '07', name: 'RESTAURANTS & HOSPITALITY', desc: 'Direct WhatsApp table booking & digital menu experiences.' },
    { num: '08', name: 'LOCAL & SERVICE BUSINESSES', desc: 'Dominant local search SEO & high-volume lead pipelines.' },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#090909] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#F2F0EA]/12">
          <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-3">
            08 / WHO WE BUILD FOR
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F2F0EA]">
            INDUSTRIES WE SERVE.
          </h2>
        </div>

        {/* Large Editorial Text Rows */}
        <div className="divide-y divide-[#F2F0EA]/12">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.num}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="py-6 md:py-8 grid grid-cols-12 gap-4 items-center group hover:bg-[#111111]/60 px-4 rounded transition-colors"
            >
              <div className="col-span-2 md:col-span-1 font-mono text-xs text-[#9A9892] group-hover:text-[#B79CFF] transition-colors">
                {ind.num}
              </div>
              <div className="col-span-10 md:col-span-6 font-display text-xl sm:text-3xl font-normal text-[#F2F0EA] group-hover:text-white transition-colors">
                {ind.name}
              </div>
              <div className="col-span-12 md:col-span-5 text-xs sm:text-sm text-[#9A9892] font-light mt-1 md:mt-0">
                {ind.desc}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
