import React from 'react';
import { motion } from 'framer-motion';

export const SignatureStatement: React.FC = () => {
  return (
    <section className="py-24 lg:py-40 bg-[#090909] border-t border-[#F2F0EA]/12 overflow-hidden relative">
      {/* Background radial violet glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B79CFF]/06 blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-10"
        >
          {/* Main Massive Editorial Stack */}
          <div className="font-display font-medium text-4xl sm:text-7xl lg:text-[100px] xl:text-[120px] leading-[0.92] tracking-tighter text-[#F2F0EA]">
            <p className="hover:text-white transition-colors duration-300">DESIGN.</p>
            <p className="text-[#9A9892] hover:text-[#F2F0EA] transition-colors duration-300">DEVELOPMENT.</p>
            <p className="hover:text-white transition-colors duration-300">AI.</p>
            <p className="text-[#B79CFF] font-serif-editorial italic font-normal hover:scale-[1.01] transition-transform origin-left">
              AUTOMATION.
            </p>
          </div>

          {/* Sub line */}
          <div className="pt-8 border-t border-[#F2F0EA]/12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="font-mono text-xs text-[#9A9892] tracking-widest uppercase">
              CONNECTED DIGITAL CAPABILITIES
            </p>
            <p className="font-display text-2xl sm:text-4xl font-light text-[#F2F0EA] tracking-tight">
              ONE DIGITAL PARTNER<span className="text-[#B79CFF]">.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
