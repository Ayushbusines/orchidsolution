import React from 'react';
import { motion } from 'framer-motion';

export const AboutStudio: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-[#050505] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block">
              07 / ABOUT
            </span>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#F2F0EA]">
              WE ARE ORCHID<span className="text-[#B79CFF]">.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#F2F0EA]/90 font-light leading-relaxed max-w-2xl">
              Orchid Solution is an independent digital studio building websites, digital experiences, AI solutions and automation systems for businesses across India.
            </p>

            <p className="text-sm text-[#9A9892] font-light leading-relaxed max-w-xl">
              We bridge the gap between high-end aesthetic visual design and technical backend execution. Whether you are a growing startup in Bengaluru, a healthcare clinic in Mumbai, a real estate group in Goa, or a service business in Delhi NCR — we craft digital infrastructure that performs.
            </p>

            <div className="pt-6 border-t border-[#F2F0EA]/12 flex flex-wrap gap-8 font-mono text-xs text-[#9A9892]">
              <div>
                <span className="text-[#F2F0EA] block font-bold">BASED IN</span>
                <span>INDIA</span>
              </div>
              <div className="w-[1px] h-8 bg-[#F2F0EA]/12 hidden sm:block" />
              <div>
                <span className="text-[#F2F0EA] block font-bold">COVERAGE</span>
                <span>WORKING ACROSS INDIA</span>
              </div>
              <div className="w-[1px] h-8 bg-[#F2F0EA]/12 hidden sm:block" />
              <div>
                <span className="text-[#F2F0EA] block font-bold">CAPABILITIES</span>
                <span>DESIGN + DEV + AI + AUTOMATION</span>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Monochrome Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-lg overflow-hidden border border-[#F2F0EA]/12 bg-[#090909]">
              <img
                src="/assets/orchid_hero_sculpture_1790414553346.jpg"
                alt="Orchid Studio Interior Aesthetics"
                className="w-full h-[400px] lg:h-[520px] object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 font-mono text-xs text-[#9A9892] bg-[#090909]/90 backdrop-blur-md p-4 border border-[#F2F0EA]/12 rounded">
                <p className="text-[#F2F0EA] font-medium mb-1">"WE DON'T JUST BUILD WEBSITES.</p>
                <p className="text-[#B79CFF]">WE BUILD DIGITAL SYSTEMS."</p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
