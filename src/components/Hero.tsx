import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax subtle effect
  const yText = useTransform(scrollY, [0, 500], [0, -35]);
  const yImage = useTransform(scrollY, [0, 500], [0, -15]);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#090909]">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-[#B79CFF]/04 blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Typography */}
        <motion.div
          style={{ y: yText }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#B79CFF] animate-pulse" />
            <span className="font-mono text-xs text-[#9A9892] tracking-widest uppercase">
              ORCHID SOLUTION · DIGITAL STUDIO · INDIA
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-display text-4xl sm:text-6xl lg:text-[76px] xl:text-[88px] font-medium leading-[0.96] tracking-tight text-[#F2F0EA]"
            >
              WE BUILD <br />
              DIGITAL EXPERIENCES <br />
              <span className="text-[#F2F0EA]">THAT MOVE </span>
              <span className="text-[#B79CFF] font-serif-editorial italic font-normal">BUSINESSES </span>
              FORWARD.
            </motion.h1>
          </div>

          {/* Subtitle Capabilities */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="font-mono text-xs sm:text-sm text-[#9A9892] tracking-wider pt-2 flex flex-wrap gap-x-4 gap-y-2 border-t border-[#F2F0EA]/12 pt-6 max-w-xl"
          >
            <span>WEBSITES</span>
            <span className="text-[#B79CFF]">/</span>
            <span>AI SOLUTIONS</span>
            <span className="text-[#B79CFF]">/</span>
            <span>WORKFLOW AUTOMATION</span>
            <span className="text-[#B79CFF]">/</span>
            <span>UI/UX</span>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap items-center gap-6 pt-4"
          >
            <Link
              to="/contact"
              className="group flex items-center gap-3 text-xs font-mono tracking-widest text-[#090909] bg-[#F2F0EA] hover:bg-[#B79CFF] transition-all duration-300 py-3.5 px-6 rounded-sm font-semibold shadow-lg shadow-[#F2F0EA]/05"
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>

            <Link
              to="/portfolio"
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#F2F0EA] hover:text-[#B79CFF] transition-colors py-3.5 px-4"
            >
              <span>VIEW WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#B79CFF]" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual with Vertical Mask Reveal */}
        <motion.div
          style={{ y: yImage }}
          className="lg:col-span-5 relative mt-8 lg:mt-0"
        >
          <motion.div
            initial={{ clipPath: 'inset(100% 0% 0% 0%)', scale: 1.05 }}
            animate={{ clipPath: 'inset(0% 0% 0% 0%)', scale: 1 }}
            transition={{ duration: 1.4, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-lg overflow-hidden border border-[#F2F0EA]/12 bg-[#111111] shadow-2xl group"
          >
            <img
              src="/assets/orchid_hero_sculpture_1790414553346.jpg"
              alt="Orchid Solution Abstract Digital Sculpture"
              className="w-full h-[420px] sm:h-[500px] lg:h-[580px] object-cover object-center filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            {/* Ambient Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-transparent to-transparent opacity-60 pointer-events-none" />

            {/* Subtle Overlay Label */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[11px] text-[#F2F0EA]/70 bg-[#090909]/80 backdrop-blur-md px-4 py-2.5 border border-[#F2F0EA]/12 rounded">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B79CFF]" />
                ORCHID VISO-01
              </span>
              <span>INDIA-WIDE</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
