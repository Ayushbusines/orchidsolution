import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'WORK', href: '/portfolio' },
    { name: 'SERVICES', href: '/services' },
    { name: 'AI & AUTOMATION', href: '/#ai-section' },
    { name: 'PROCESS', href: '/#process' },
    { name: 'ABOUT', href: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-[76px] flex items-center ${
          scrolled
            ? 'bg-[#090909]/80 backdrop-blur-md border-b border-[#F2F0EA]/12 shadow-2xl'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center gap-1 font-display text-2xl font-bold tracking-tight text-[#F2F0EA] hover:text-white transition-colors"
          >
            <span>ORCHID</span>
            <span className="text-[#B79CFF] group-hover:scale-125 transition-transform duration-300">.</span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xs font-mono tracking-widest transition-colors duration-300 relative py-1 ${
                    isActive ? 'text-[#B79CFF]' : 'text-[#9A9892] hover:text-[#F2F0EA]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#B79CFF]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA Right */}
          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="group flex items-center gap-2 text-xs font-mono tracking-widest text-[#F2F0EA] hover:text-[#B79CFF] transition-colors py-2 px-4 border border-[#F2F0EA]/12 hover:border-[#B79CFF]/40 rounded-sm bg-[#111111]/40"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 text-[#B79CFF]" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-xs font-mono tracking-widest text-[#F2F0EA] hover:text-[#B79CFF] flex items-center gap-2 py-2 px-3 border border-[#F2F0EA]/12 bg-[#111111]/60"
            aria-label="Open Menu"
          >
            <span>MENU</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B79CFF]" />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#090909] text-[#F2F0EA] flex flex-col justify-between p-6 md:p-12 overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#F2F0EA]/12 pb-6">
              <Link to="/" className="font-display text-2xl font-bold tracking-tight">
                ORCHID<span className="text-[#B79CFF]">.</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-mono text-[#9A9892] hover:text-[#F2F0EA]"
              >
                <span>CLOSE</span>
                <X className="w-5 h-5 text-[#B79CFF]" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="my-auto py-12 flex flex-col gap-6">
              {[
                { number: '01', name: 'WORK', href: '/portfolio' },
                { number: '02', name: 'SERVICES', href: '/services' },
                { number: '03', name: 'PROCESS', href: '/#process' },
                { number: '04', name: 'ABOUT', href: '/about' },
                { number: '05', name: 'CONTACT', href: '/contact' },
              ].map((item) => (
                <Link
                  key={item.number}
                  to={item.href}
                  className="group flex items-baseline gap-6 border-b border-[#F2F0EA]/08 pb-4 hover:border-[#B79CFF]/40 transition-colors"
                >
                  <span className="font-mono text-xs text-[#B79CFF]">{item.number}</span>
                  <span className="font-display text-3xl sm:text-5xl font-light tracking-tight text-[#F2F0EA] group-hover:text-[#B79CFF] transition-colors">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Footer Info */}
            <div className="border-t border-[#F2F0EA]/12 pt-6 flex flex-col sm:flex-row justify-between gap-4 text-xs font-mono text-[#9A9892]">
              <div>
                <p className="text-[#F2F0EA]">ORCHID SOLUTION</p>
                <p>DIGITAL STUDIO · INDIA</p>
              </div>
              <div>
                <a href="tel:7840874899" className="hover:text-[#B79CFF] block">+91 7840874899</a>
                <a href="mailto:ayushskumar212@gmail.com" className="hover:text-[#B79CFF] block">ayushskumar212@gmail.com</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
