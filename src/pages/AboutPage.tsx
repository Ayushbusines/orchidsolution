import React, { useEffect } from 'react';
import { AboutStudio } from '../components/AboutStudio';
import { WhyOrchid } from '../components/WhyOrchid';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-[#050505] text-[#F2F0EA] min-h-screen">
      <SeoHead
        title="Studio Philosophy & About — Orchid Solution"
        description="Learn about Orchid Solution, an independent digital technology studio founded by Ayush Sharma serving ambitious businesses across India."
      />
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 mb-16">
        
        <div className="space-y-4 mb-16 pb-8 border-b border-[#F2F0EA]/12">
          <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block">
            STUDIO PHILOSOPHY
          </span>
          <h1 className="font-display text-4xl sm:text-7xl font-normal tracking-tight">
            QUIET CONFIDENCE<span className="text-[#B79CFF]">.</span>
          </h1>
          <p className="text-base sm:text-xl text-[#9A9892] font-light max-w-2xl">
            We don't scream technical jargon. We let spatial design, precise engineering, and practical business automation demonstrate capability.
          </p>
        </div>

        {/* Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-12 border-b border-[#F2F0EA]/12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl font-normal text-[#F2F0EA]">
              AN INDEPENDENT DIGITAL STUDIO FOR AMBITIOUS INDIAN BRANDS.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#9A9892] font-light text-base leading-relaxed">
            <p>
              Orchid Solution was established to break away from the template-driven, bloated digital agency model. Most businesses are handed fragile websites that break on mobile or generic dashboards cluttered with useless metrics.
            </p>
            <p>
              We view a company’s web presence as a connected system: the frontend must communicate quiet luxury and clarity, while the backend silently handles customer intake, AI triage, and workflow routing.
            </p>
            <p className="text-[#F2F0EA]">
              From Bengaluru to Delhi NCR, Mumbai, Goa, and Jaipur — we partner directly with founders and business leaders across India.
            </p>
          </div>
        </div>

        {/* Leadership Block */}
        <div className="py-12 border-b border-[#F2F0EA]/12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-1">
            <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-2">STUDIO LEADERSHIP</span>
            <h3 className="font-display text-3xl font-normal text-[#F2F0EA]">AYUSH SHARMA</h3>
            <p className="font-mono text-xs text-[#9A9892] tracking-wider uppercase">FOUNDER & SENIOR DEVELOPER</p>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[#9A9892] font-light text-base leading-relaxed">
              Founded by <span className="text-[#F2F0EA]">Ayush Sharma</span>, Orchid Solution is built on a hands-on engineering methodology. As Founder and Senior Developer, Ayush leads the studio's architectural design, full-stack web development, and AI workflow integration for clients across India.
            </p>
          </div>
        </div>

      </div>

      <AboutStudio />
      <WhyOrchid />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-20 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-[#090909] bg-[#F2F0EA] hover:bg-[#B79CFF] transition-all py-4 px-8 rounded-sm font-bold"
        >
          <span>WORK WITH ORCHID SOLUTION</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
