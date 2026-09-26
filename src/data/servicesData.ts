export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  deliverables: string[];
  previewVisual?: string;
  slug: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    number: '01',
    title: 'WEBSITE DESIGN',
    shortDesc: 'Interfaces that make businesses look as good as the work they do.',
    fullDesc: 'We craft bespoke visual systems and editorial website designs that give ambitious Indian brands an immediate competitive edge. Every layout is built around clarity, motion, and conversion.',
    benefits: [
      'Art-directed visual identity tuned to your exact target market',
      'Architectural typography and spatial composition',
      'Mobile-first responsive design with zero visual compromise',
      'Design systems built to scale with your business'
    ],
    deliverables: [
      'Figma Visual Systems & Wireframes',
      'Interactive Design Prototypes',
      'Custom Iconography & Graphic Assets',
      'Design System Style Guide'
    ],
    previewVisual: '/assets/project_triveni_dental.jpg',
    slug: 'web-design'
  },
  {
    id: 'web-development',
    number: '02',
    title: 'WEB DEVELOPMENT',
    shortDesc: 'Fast, responsive and scalable websites built for real businesses.',
    fullDesc: 'We engineer production-ready web applications using modern stacks like React, TypeScript, and Vite. Clean architecture, sub-second load speeds, and strict code quality standards guaranteed.',
    benefits: [
      'Sub-second initial page load speed for maximum user retention',
      '100% clean semantic HTML structure & WCAG accessibility',
      'Rock-solid security & effortless hosting integration',
      'Zero reliance on bloated page-builder plugins'
    ],
    deliverables: [
      'Production React / TypeScript Codebase',
      'Custom Animation & Motion Code',
      'CMS Integration (Headless / Sanity / Shopify)',
      'Automated CI/CD Deployment Setup'
    ],
    previewVisual: '/assets/project_triveni_dental.jpg',
    slug: 'web-development'
  },
  {
    id: 'ai-solutions',
    number: '03',
    title: 'AI SOLUTIONS',
    shortDesc: 'Practical AI integrations that solve actual business problems.',
    fullDesc: 'We integrate practical artificial intelligence directly into your core business operations. From intelligent customer support bots to automated document processing and predictive lead routing.',
    benefits: [
      'Instant response to inbound customer queries 24 hours a day',
      'Automated triage of customer requests before escalation',
      'Custom knowledge base training on your exact business data',
      'Seamless connection with your existing CRM and database'
    ],
    deliverables: [
      'Custom RAG / LLM Chatbot Integration',
      'Data Ingestion & Knowledge Base Pipeline',
      'Staff Training & AI Usage Guidelines',
      'Performance Analytics Dashboard'
    ],
    previewVisual: '/assets/project_aura_health_1790414608886.jpg',
    slug: 'ai-solutions'
  },
  {
    id: 'automation',
    number: '04',
    title: 'AUTOMATION',
    shortDesc: 'Connect repetitive workflows and let systems handle the routine.',
    fullDesc: 'We remove repetitive manual tasks from your team’s daily workload. Connect WhatsApp, Email, CRM, Payment Gateways, and Google Sheets into one self-sustaining background workflow.',
    benefits: [
      'Eliminate 80%+ of repetitive manual data entry tasks',
      'Ensure zero dropped leads across advertising channels',
      'Instant SMS/WhatsApp alerts for high-value sales triggers',
      'Clear visibility into operational bottlenecks'
    ],
    deliverables: [
      'Make.com / n8n / Zapier Automated Workflows',
      'WhatsApp Cloud API Webhook Integration',
      'Automated PDF Invoice & Receipt Generation',
      'CRM Contact Synchronization'
    ],
    previewVisual: '/assets/project_zenith_ai_1790414637353.jpg',
    slug: 'automation'
  },
  {
    id: 'ui-ux-systems',
    number: '05',
    title: 'UI / UX SYSTEMS',
    shortDesc: 'Design systems that keep digital experiences consistent.',
    fullDesc: 'A cohesive user interface framework ensures your product experience stays frictionless across desktop, web apps, and mobile surfaces. We define strict tokenized design rules.',
    benefits: [
      'Faster development velocity for future feature rollouts',
      'Uncompromising visual consistency across all customer touchpoints',
      'Reduced user drop-off through intuitive interaction UX',
      'Comprehensive design token repository'
    ],
    deliverables: [
      'Design Token Library (Colors, Type, Spacing)',
      'Reusable UI Component Kits',
      'User Journey Flow Diagrams',
      'Interactive Design Guidelines'
    ],
    previewVisual: '/assets/project_aura_health_1790414608886.jpg',
    slug: 'ui-ux-systems'
  },
  {
    id: 'landing-pages',
    number: '06',
    title: 'LANDING PAGES',
    shortDesc: 'High-quality pages built around a clear business objective.',
    fullDesc: 'High-stakes product launches, ad campaigns, and seasonal offers demand precision landing pages. We craft single-objective pages engineered to turn traffic into qualified inquiries.',
    benefits: [
      'Laser-focused copy hierarchy designed for high conversion',
      'Ultra-fast mobile loading for performance ad campaigns',
      'Direct WhatsApp and Form capture integrations',
      'A/B testing-ready layout structure'
    ],
    deliverables: [
      'High-converting Landing Page Web App',
      'Mobile-optimized Lead Forms',
      'Meta Pixel & Google Analytics Tracking Setup',
      'Speed & Performance Optimization'
    ],
    previewVisual: '/assets/project_triveni_dental.jpg',
    slug: 'landing-pages'
  },
  {
    id: 'seo-presence',
    number: '07',
    title: 'SEO & DIGITAL PRESENCE',
    shortDesc: 'Technical foundations and local search optimization.',
    fullDesc: 'Ensure your business dominates local search in your city and across India. We implement bulletproof technical SEO, structured Schema.org markup, and lightning-fast web vitals.',
    benefits: [
      'Higher organic ranking on Google search across target keywords',
      'Complete Schema.org local business structured data',
      'Google Maps & Google Business Profile synergy',
      'Clean canonical tags, OpenGraph tags, and sitemaps'
    ],
    deliverables: [
      'Comprehensive Technical SEO Audit',
      'Schema.org Structured Data Implementation',
      'Google Search Console & Analytics Integration',
      'XML Sitemap & Robots.txt Setup'
    ],
    previewVisual: '/assets/project_aura_health_1790414608886.jpg',
    slug: 'seo-presence'
  },
  {
    id: 'ai-call-agents',
    number: '08',
    title: 'AI CALL AGENTS',
    shortDesc: 'AI-powered communication and workflow automation.',
    fullDesc: 'Deploy human-like conversational voice agents that handle outbound phone callbacks, schedule client appointments, qualify sales leads, and instantly log notes into your CRM.',
    benefits: [
      'Respond to new lead inquiries within 30 seconds 24/7',
      'Natural, human-sounding voice conversations in English and Hindi',
      'Automated appointment booking directly to your calendar',
      'Automatic call summary logging into CRM & WhatsApp'
    ],
    deliverables: [
      'Custom Voice AI Agent Prompt & Logic Engine',
      'Telephony Integration (Twilio / Exotel)',
      'Calendar Booking Engine Integration',
      'Post-call Automation & WhatsApp Follow-up Workflow'
    ],
    previewVisual: '/assets/project_zenith_ai_1790414637353.jpg',
    slug: 'ai-call-agents'
  }
];
