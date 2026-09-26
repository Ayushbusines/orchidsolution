import React from 'react';
import { motion } from 'framer-motion';

export const WhyOrchid: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'DESIGN WITH PURPOSE',
      desc: 'Visual distinction that reinforces your market positioning rather than serving as empty decoration.',
    },
    {
      number: '02',
      title: 'TECHNOLOGY THAT SERVES THE BUSINESS',
      desc: 'Clean, reliable tech stacks built for speed, security, and measurable business outcomes.',
    },
    {
      number: '03',
      title: 'AI WITHOUT THE HYPE',
      desc: 'No vague promises or gimmicks. Just practical voice & workflow automation that saves time.',
    },
    {
      number: '04',
      title: 'BUILT TO EVOLVE',
      desc: 'Scalable architecture and structured code systems designed to grow as your business expands across India.',
    },
  ];

  return (
    <section className="py-24 lg:py-36 bg-[#090909] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#F2F0EA]/12 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-3">
              06 / WHY ORCHID
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F2F0EA]">
              CORE PRINCIPLES.
            </h2>
          </div>
          <p className="font-mono text-xs text-[#9A9892] tracking-wider uppercase">
            RESTRICTION · RESTRAINT · EXECUTION
          </p>
        </div>

        {/* Principles Rows */}
        <div className="divide-y divide-[#F2F0EA]/12">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center group hover:bg-[#111111]/40 px-4 rounded transition-colors"
            >
              <div className="md:col-span-1 font-mono text-xs text-[#B79CFF] font-bold">
                {item.number}
              </div>
              <div className="md:col-span-5 font-display text-xl sm:text-3xl font-normal text-[#F2F0EA] group-hover:text-white transition-colors">
                {item.title}
              </div>
              <div className="md:col-span-6 text-xs sm:text-sm text-[#9A9892] font-light leading-relaxed">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
