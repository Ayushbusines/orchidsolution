import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      quote: "Orchid Solution redesigned our architecture studio website from the ground up. The design is quiet, modern, and expensive-looking. Our WhatsApp inquiry rate tripled within a month.",
      author: "Vikramaditya S.",
      role: "Managing Principal",
      company: "Lumina Living Architecture",
    },
    {
      quote: "The AI voice agent and WhatsApp workflow built by Orchid eliminated over 70% of phone inquiry overhead for our medical clinics. Truly remarkable execution.",
      author: "Dr. Ananya Rao",
      role: "Operations Director",
      company: "Aura Care Clinics",
    },
    {
      quote: "Fast, responsive, and insanely detailed. They didn't just build a website — they automated our entire sales intake flow into HubSpot.",
      author: "Rajesh K. Verma",
      role: "Founder",
      company: "Zenith Global Logistics",
    },
  ];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 lg:py-36 bg-[#050505] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Minimalist Data Strip First */}
        <div className="mb-24 pb-12 border-b border-[#F2F0EA]/12">
          <span className="font-mono text-xs text-[#9A9892] tracking-widest uppercase block mb-8 text-center sm:text-left">
            VERIFIED METRICS & REPUTATION
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div className="space-y-2">
              <p className="font-display text-5xl lg:text-7xl font-light text-[#F2F0EA]">
                31<span className="text-[#B79CFF]">+</span>
              </p>
              <p className="font-mono text-xs text-[#9A9892] tracking-widest uppercase">
                COMPLETED PROJECTS
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-display text-5xl lg:text-7xl font-light text-[#F2F0EA]">
                25<span className="text-[#B79CFF]">+</span>
              </p>
              <p className="font-mono text-xs text-[#9A9892] tracking-widest uppercase">
                SATISFIED CLIENTS
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-display text-5xl lg:text-7xl font-light text-[#F2F0EA]">
                06<span className="text-[#B79CFF]">+</span>
              </p>
              <p className="font-mono text-xs text-[#9A9892] tracking-widest uppercase">
                INTERNATIONAL ENGAGEMENTS
              </p>
            </div>
          </div>
        </div>

        {/* Client Quotes Section */}
        <div className="max-w-4xl">
          <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-6">
            09 / CLIENT WORDS
          </span>

          <div className="relative min-h-[220px]">
            <Quote className="w-10 h-10 text-[#B79CFF]/20 mb-4" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <p className="font-serif-editorial text-2xl sm:text-4xl lg:text-5xl font-light text-[#F2F0EA] leading-snug italic">
                  "{testimonials[currentIdx].quote}"
                </p>

                <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                  <div>
                    <p className="text-[#F2F0EA] font-semibold">{testimonials[currentIdx].author}</p>
                    <p className="text-[#9A9892]">{testimonials[currentIdx].role} · {testimonials[currentIdx].company}</p>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrev}
                      className="w-10 h-10 rounded-full border border-[#F2F0EA]/12 hover:border-[#B79CFF] flex items-center justify-center text-[#F2F0EA] hover:text-[#B79CFF] transition-colors"
                      aria-label="Previous Testimonial"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[#9A9892] px-2">
                      0{currentIdx + 1} / 0{testimonials.length}
                    </span>
                    <button
                      onClick={handleNext}
                      className="w-10 h-10 rounded-full border border-[#F2F0EA]/12 hover:border-[#B79CFF] flex items-center justify-center text-[#F2F0EA] hover:text-[#B79CFF] transition-colors"
                      aria-label="Next Testimonial"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};
