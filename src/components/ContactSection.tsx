import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: 'WEBSITE DESIGN',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-36 bg-[#090909] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Heading & Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-3">
                10 / GET IN TOUCH
              </span>
              <h2 className="font-display text-4xl sm:text-6xl font-normal tracking-tight text-[#F2F0EA] leading-[0.98]">
                LET'S CREATE <br />
                SOMETHING <br />
                <span className="text-[#B79CFF] font-serif-editorial italic">WORTH SEEING.</span>
              </h2>
            </div>

            <p className="text-base text-[#9A9892] font-light max-w-md leading-relaxed">
              Tell us what you're building, improving or automating. We respond within 24 hours with an actionable roadmap.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4 font-mono text-xs">
              <div className="p-4 border border-[#F2F0EA]/12 rounded bg-[#111111]/40 space-y-1">
                <span className="text-[#9A9892] uppercase block">WHATSAPP / PHONE</span>
                <a href="tel:7840874899" className="text-[#F2F0EA] hover:text-[#B79CFF] text-sm block font-bold transition-colors">
                  +91 7840874899
                </a>
              </div>

              <div className="p-4 border border-[#F2F0EA]/12 rounded bg-[#111111]/40 space-y-1">
                <span className="text-[#9A9892] uppercase block">EMAIL</span>
                <a href="mailto:ayushskumar212@gmail.com" className="text-[#F2F0EA] hover:text-[#B79CFF] text-sm block font-bold transition-colors">
                  ayushskumar212@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917840874899?text=Hi%20Orchid%20Solution,%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 border border-[#B79CFF]/40 text-[#B79CFF] hover:bg-[#B79CFF] hover:text-[#090909] transition-all duration-300 font-mono text-xs rounded-sm font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>CHAT INSTANTLY ON WHATSAPP ↗</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Underline Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            {formSubmitted ? (
              <div className="p-12 border border-[#B79CFF]/40 bg-[#B79CFF]/05 rounded-lg text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#B79CFF] mx-auto" />
                <h3 className="font-display text-3xl text-[#F2F0EA]">ENQUIRY RECEIVED</h3>
                <p className="text-sm text-[#9A9892] max-w-md mx-auto">
                  Thank you for reaching out. A senior partner from Orchid Solution will review your requirements and reply within 24 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-mono text-[#B79CFF] underline pt-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#9A9892] tracking-widest uppercase block">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-underline text-sm font-light placeholder:text-[#9A9892]/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#9A9892] tracking-widest uppercase block">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. vikram@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-underline text-sm font-light placeholder:text-[#9A9892]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#9A9892] tracking-widest uppercase block">
                      COMPANY / BUSINESS
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Triveni Clinic"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="input-underline text-sm font-light placeholder:text-[#9A9892]/40"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-[#9A9892] tracking-widest uppercase block">
                      PRIMARY REQUIREMENT
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="input-underline text-sm font-light bg-[#090909] text-[#F2F0EA]"
                    >
                      <option value="WEBSITE DESIGN">WEBSITE DESIGN</option>
                      <option value="WEB DEVELOPMENT">WEB DEVELOPMENT</option>
                      <option value="AI SOLUTIONS">AI SOLUTIONS</option>
                      <option value="WORKFLOW AUTOMATION">WORKFLOW AUTOMATION</option>
                      <option value="AI CALL AGENT">AI CALL AGENT</option>
                      <option value="COMPLETE DIGITAL SYSTEM">COMPLETE DIGITAL SYSTEM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs text-[#9A9892] tracking-widest uppercase block">
                    PROJECT DETAILS & OBJECTIVES
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us briefly about your business, target timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-underline text-sm font-light placeholder:text-[#9A9892]/40 resize-none"
                  />
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    type="submit"
                    className="group flex items-center gap-3 text-xs font-mono tracking-widest text-[#090909] bg-[#F2F0EA] hover:bg-[#B79CFF] transition-all duration-300 py-4 px-8 rounded-sm font-bold shadow-lg shadow-[#F2F0EA]/05"
                  >
                    <span>SEND ENQUIRY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                  <span className="font-mono text-[11px] text-[#9A9892]">
                    CONFIDENTIAL · 24H RESPONSE
                  </span>
                </div>
              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
