import React from 'react';
import { motion } from 'framer-motion';

export const Intro: React.FC = () => {
  return (
    <section className="py-24 lg:py-36 bg-[#0B0B0B] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-1"
          >
            <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-2">
              01 / ABOUT ORCHID
            </span>
            <p className="font-mono text-xs text-[#F2F0EA] font-semibold tracking-wider uppercase">
              AYUSH SHARMA
            </p>
            <p className="font-mono text-[11px] text-[#9A9892] tracking-wider uppercase">
              FOUNDER & SENIOR DEVELOPER
            </p>
            <p className="font-mono text-[11px] text-[#9A9892]/60 tracking-wider uppercase pt-2">
              INDIA-WIDE DIGITAL STUDIO
            </p>
          </motion.div>

          {/* Statement & Content */}
          <div className="lg:col-span-8 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] tracking-tight text-[#F2F0EA]"
            >
              YOUR DIGITAL PRESENCE <br />
              <span className="text-[#9A9892]">SHOULD DO MORE </span>
              THAN EXIST.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-[#9A9892] font-light max-w-2xl leading-relaxed"
            >
              Founded by <span className="text-[#F2F0EA] font-normal">Ayush Sharma</span>, Orchid Solution creates websites, digital experiences, AI systems and automation workflows designed around how modern businesses actually operate.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
};
