import React from 'react';
import { motion } from 'framer-motion';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'DISCOVER',
      description: 'Understand the business, users, competitive landscape, and specific conversion objectives.',
    },
    {
      number: '02',
      title: 'DESIGN',
      description: 'Create the art direction, typography scale, spatial composition, and interactive visual prototypes.',
    },
    {
      number: '03',
      title: 'BUILD',
      description: 'Develop the high-performance React frontend, backend integrations, AI agents, and workflow automations.',
    },
    {
      number: '04',
      title: 'LAUNCH',
      description: 'Deploy on scalable cloud infrastructure, optimize technical SEO, monitor vitals, and continue refining.',
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-36 bg-[#0B0B0B] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#F2F0EA]/12">
          <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-3">
            05 / HOW WE WORK
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F2F0EA]">
            FROM IDEA <br />
            TO LIVE SYSTEM.
          </h2>
        </div>

        {/* Process Steps (Editorial Rows, No Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="border-t border-[#F2F0EA]/12 pt-6 space-y-4"
            >
              <span className="font-mono text-xs text-[#B79CFF] tracking-widest block font-bold">
                {step.number}
              </span>
              <h3 className="font-display text-2xl font-normal tracking-tight text-[#F2F0EA]">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9A9892] font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
