import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-[#F2F0EA] border-t border-[#F2F0EA]/12 pt-20 pb-12 relative overflow-hidden">
      {/* Background Subtle Violet Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#B79CFF]/05 blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#F2F0EA]/08">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="font-display text-3xl font-bold tracking-tight block">
              ORCHID<span className="text-[#B79CFF]">.</span>
            </Link>
            <p className="text-[#9A9892] max-w-sm text-sm leading-relaxed">
              Independent digital technology studio building websites, digital experiences, AI solutions, and automated workflows across India.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/917840874899?text=Hi%20Orchid%20Solution,%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#B79CFF] hover:text-[#F2F0EA] transition-colors py-2 px-4 border border-[#B79CFF]/30 rounded-sm bg-[#B79CFF]/05"
              >
                <span>CHAT ON WHATSAPP</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-xs text-[#9A9892] tracking-widest uppercase">NAVIGATION</h4>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <Link to="/portfolio" className="text-[#F2F0EA]/80 hover:text-[#B79CFF] transition-colors">
                  SELECTED WORK
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#F2F0EA]/80 hover:text-[#B79CFF] transition-colors">
                  SERVICES & CAPABILITIES
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#F2F0EA]/80 hover:text-[#B79CFF] transition-colors">
                  STUDIO PHILOSOPHY
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F2F0EA]/80 hover:text-[#B79CFF] transition-colors">
                  START A PROJECT
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-[#9A9892] tracking-widest uppercase">DIRECT CONTACT</h4>
            <div className="space-y-2 font-mono text-xs">
              <p className="text-[#9A9892]">PHONE / WHATSAPP:</p>
              <a href="tel:7840874899" className="text-[#F2F0EA] hover:text-[#B79CFF] block transition-colors">
                +91 7840874899
              </a>
              <p className="text-[#9A9892] pt-2">EMAIL:</p>
              <a href="mailto:ayushskumar212@gmail.com" className="text-[#F2F0EA] hover:text-[#B79CFF] block transition-colors">
                ayushskumar212@gmail.com
              </a>
              <p className="text-[#9A9892] pt-2">LOCATION:</p>
              <p className="text-[#F2F0EA]">INDIA · SERVING NATIONWIDE</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9A9892]">
          <p>© 2026 ORCHID SOLUTION. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#F2F0EA]/40">QUIET CONFIDENCE</span>
            <span className="w-1 h-1 rounded-full bg-[#B79CFF]" />
            <span>INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
