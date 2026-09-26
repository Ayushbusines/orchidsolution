import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, PhoneCall, Workflow, Cpu, MessageSquare, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AISection: React.FC = () => {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);

  const workflowSteps = [
    { step: '01', title: 'INBOUND LEAD', desc: 'Customer submits form or calls website.' },
    { step: '02', title: 'AI TRIAGE', desc: 'NLP agent analyzes intent & qualifies requirements.' },
    { step: '03', title: 'WHATSAPP DISPATCH', desc: 'Instant WhatsApp message sent to prospect & team.' },
    { step: '04', title: 'CRM SYNC', desc: 'Lead logged in CRM with tags & summary notes.' },
    { step: '05', title: 'AUTO FOLLOW-UP', desc: 'Automated appointment reminders & callback scheduled.' },
  ];

  const aiCapabilities = [
    { number: '01', title: 'AI CHATBOTS', desc: 'Intelligent 24/7 web agents trained on your business data to convert visitors.', icon: Bot },
    { number: '02', title: 'AI CALL AGENTS', desc: 'Human-sounding voice agents that handle inbound callbacks and book calendar slots.', icon: PhoneCall },
    { number: '03', title: 'LEAD QUALIFICATION', desc: 'Instant lead scoring and requirements breakdown before rep handoff.', icon: Workflow },
    { number: '04', title: 'WORKFLOW AUTOMATION', desc: 'Connect WhatsApp, Email, Sheets, Payment Gateways & CRM seamlessly.', icon: Cpu },
    { number: '05', title: 'AI CONTENT SYSTEMS', desc: 'Automate localized search articles, product descriptions, and client updates.', icon: MessageSquare },
    { number: '06', title: 'CUSTOM AI INTEGRATIONS', desc: 'Bespoke LLM pipelines and database vector embeddings tailored to your business.', icon: Database },
  ];

  return (
    <section id="ai-section" className="py-24 lg:py-36 bg-[#090909] border-t border-[#F2F0EA]/12 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-[#F2F0EA]/12">
          <div className="lg:col-span-8">
            <span className="font-mono text-xs text-[#B79CFF] tracking-widest uppercase block mb-3">
              04 / INTELLIGENT SYSTEMS
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#F2F0EA]">
              INTELLIGENCE, <br />
              BUILT INTO THE WORKFLOW.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-[#9A9892] font-light leading-relaxed">
              Websites are only the beginning. We build AI-assisted workflows that help businesses automate repetitive tasks, respond faster and connect the tools they already use.
            </p>
          </div>
        </div>

        {/* Visual Workflow Diagram (Art-Directed Canvas) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 p-8 lg:p-12 rounded-lg border border-[#F2F0EA]/12 bg-[#0B0B0B] relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F2F0EA]/08 font-mono text-xs text-[#9A9892]">
            <span>SYSTEM FLOW ARCHITECTURE</span>
            <span className="flex items-center gap-2 text-[#B79CFF]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B79CFF] animate-pulse" />
              LIVE AUTOMATION PIPELINE
            </span>
          </div>

          {/* Workflow Steps Horizontal Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {workflowSteps.map((node, index) => {
              const isActive = activeWorkflowStep === index + 1;
              return (
                <div
                  key={node.step}
                  onClick={() => setActiveWorkflowStep(index + 1)}
                  className={`cursor-pointer p-5 rounded border transition-all duration-300 relative ${
                    isActive
                      ? 'border-[#B79CFF] bg-[#B79CFF]/08 shadow-lg shadow-[#B79CFF]/10'
                      : 'border-[#F2F0EA]/12 bg-[#111111]/40 hover:border-[#F2F0EA]/30'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className={isActive ? 'text-[#B79CFF] font-bold' : 'text-[#9A9892]'}>
                      {node.step}
                    </span>
                    {index < workflowSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#F2F0EA]/30 hidden md:block" />
                    )}
                  </div>
                  <h4 className="font-display text-sm font-medium text-[#F2F0EA] mb-1">
                    {node.title}
                  </h4>
                  <p className="text-xs text-[#9A9892] font-light leading-normal">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-4 border-t border-[#F2F0EA]/08 flex items-center justify-between font-mono text-xs text-[#9A9892]">
            <span>ZERO HUMAN DELAY</span>
            <span>RESULT: 30-SECOND FIRST RESPONSE TIME</span>
          </div>
        </motion.div>

        {/* AI Capabilities List (Editorial Row Format) */}
        <div className="space-y-6">
          <h3 className="font-mono text-xs text-[#9A9892] tracking-widest uppercase mb-6">
            PRACTICAL BUSINESS CAPABILITIES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.number}
                  className="group p-6 rounded-md border border-[#F2F0EA]/12 bg-[#111111]/50 hover:border-[#B79CFF]/40 transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#B79CFF]">{item.number}</span>
                    <IconComponent className="w-4 h-4 text-[#9A9892] group-hover:text-[#B79CFF] transition-colors" />
                  </div>
                  <h4 className="font-display text-xl font-normal text-[#F2F0EA] group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#9A9892] font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-xs font-mono tracking-widest text-[#F2F0EA] hover:text-[#B79CFF] py-3 px-6 border border-[#F2F0EA]/12 hover:border-[#B79CFF]/40 rounded-sm bg-[#111111]/60 transition-colors"
          >
            <span>DISCUSS AN AI AUTOMATION PROJECT</span>
            <ArrowRight className="w-4 h-4 text-[#B79CFF]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
