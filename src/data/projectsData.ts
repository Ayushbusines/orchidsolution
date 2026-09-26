export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'WEBSITES' | 'UI/UX' | 'AI' | 'AUTOMATION' | 'LANDING PAGES';
  year: string;
  location: string;
  summary: string;
  image: string;
  featured: boolean;
  gridSpan: 'large' | 'small' | 'wide';
  challenge: string;
  approach: string;
  designDetails: string;
  developmentDetails: string;
  outcome: string;
  techStack: string[];
  liveUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'lumina-estate',
    title: 'Lumina Living Architecture',
    client: 'Lumina Luxury Residences',
    category: 'WEBSITES',
    year: '2026',
    location: 'Mumbai & Goa',
    summary: 'Cinematic digital experience for ultra-luxury residential properties and architectural masterpieces across India.',
    image: '/assets/project_lumina_estate_1790414583940.jpg',
    featured: true,
    gridSpan: 'large',
    challenge: 'Lumina needed a digital platform that matched the tactile physical luxury of their multi-crore beachfront villas without feeling like a generic real estate listing catalog.',
    approach: 'We crafted an editorial, typography-driven website with full-screen architectural photography, micro-interactions, and instant WhatsApp inquiry routing for high-net-worth buyers.',
    designDetails: 'Obsidian black surfaces paired with warm white serif headings and ultra-thin grid lines create a sense of rare exclusivity and architectural poise.',
    developmentDetails: 'Built using React and Framer Motion with custom WebGL image reveals, optimized webp image loading, and zero layout shift on mobile screens.',
    outcome: '3.4x increase in direct WhatsApp consultation requests within 45 days of launch.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WhatsApp Business API'],
  },
  {
    id: 'aura-health-ai',
    title: 'Aura Care Diagnostics',
    client: 'Aura Health & Oncology Clinics',
    category: 'AI',
    year: '2026',
    location: 'Bengaluru, India',
    summary: 'AI-assisted patient triage, automated diagnostic reporting, and smart appointment scheduling system for multispecialty clinics.',
    image: '/assets/project_aura_health_1790414608886.jpg',
    featured: true,
    gridSpan: 'small',
    challenge: 'Clinic front-desk staff were overwhelmed by 400+ phone inquiries daily, leading to missed appointments and long patient response delays.',
    approach: 'We engineered an integrated AI conversational agent linked directly to their clinic management calendar, taking appointments and answering patient FAQs 24/7.',
    designDetails: 'High-contrast dark mode dashboard for clinical staff with subtle Orchid Violet indicators for urgent triage cases.',
    developmentDetails: 'Custom NLP pipeline integrated with WhatsApp Cloud API and Google Calendar API for instant booking confirmation.',
    outcome: '70% reduction in phone call handling time and 99.4% booking accuracy.',
    techStack: ['Python AI', 'React', 'WhatsApp Webhooks', 'Node.js', 'PostgreSQL'],
  },
  {
    id: 'zenith-automation-hub',
    title: 'Zenith Enterprise Flow',
    client: 'Zenith Global Logistics',
    category: 'AUTOMATION',
    year: '2025',
    location: 'Delhi NCR',
    summary: 'Automated lead qualification pipeline connecting incoming phone inquiries, AI call agents, WhatsApp, and CRM updates.',
    image: '/assets/project_zenith_ai_1790414637353.jpg',
    featured: true,
    gridSpan: 'small',
    challenge: 'Inbound sales leads from digital campaigns were taking up to 6 hours for sales reps to call back, dropping lead conversion rates significantly.',
    approach: 'We built a zero-delay automation pipeline: as soon as a lead submits a inquiry, an AI voice agent calls within 30 seconds to qualify requirements and update CRM.',
    designDetails: 'Minimalist visual workflow canvas displaying live data node transitions with violet pulse status indicators.',
    developmentDetails: 'Retell AI voice integration coupled with Make.com webhook workflows and HubSpot CRM API synchronization.',
    outcome: 'Average response time reduced from 360 minutes to 28 seconds.',
    techStack: ['Voice AI', 'Webhooks', 'Make.com', 'HubSpot API', 'Node.js'],
  },
  {
    id: 'velox-commerce',
    title: 'Velox Atelier & Goods',
    client: 'Velox Design Studio',
    category: 'WEBSITES',
    year: '2025',
    location: 'Jaipur & Delhi',
    summary: 'Ultra-fast headless ecommerce experience showcasing handcrafted artisanal goods and bespoke furniture.',
    image: '/assets/project_lumina_estate_1790414583940.jpg',
    featured: false,
    gridSpan: 'wide',
    challenge: 'Traditional Shopify theme was sluggish and failed to convey the premium craftsmanship of the Jaipur studio.',
    approach: 'Designed a high-speed custom React storefront featuring smooth page transitions and minimalist aesthetic.',
    designDetails: 'Monochrome spatial layouts with oversized typography scale and subtle orchid violet accent hover states.',
    developmentDetails: 'Vite React frontend communicating with Shopify GraphQL Storefront API for sub-second page loads.',
    outcome: '98/100 Lighthouse performance score and 42% increase in average order value.',
    techStack: ['React', 'Shopify Storefront API', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 'kavya-interiors',
    title: 'Kavya Spatial Design',
    client: 'Kavya Interior Architecture',
    category: 'UI/UX',
    year: '2025',
    location: 'Hyderabad',
    summary: 'Interactive digital portfolio and design estimation tool for high-end residential interiors.',
    image: '/assets/orchid_hero_sculpture_1790414553346.jpg',
    featured: false,
    gridSpan: 'large',
    challenge: 'Clients struggled to visualize budget estimations prior to physical consultations.',
    approach: 'Created an intuitive online spatial budget calculator paired with editorial project showcases.',
    designDetails: 'Clean architectural grid layout with crisp typography and subtle image zoom interactions.',
    developmentDetails: 'Dynamic formula engine with PDF proposal generation directly inside the browser.',
    outcome: 'Generated over 180 qualified project estimates in the first month.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'nexus-capital',
    title: 'Nexus Venture Partners',
    client: 'Nexus Capital',
    category: 'LANDING PAGES',
    year: '2025',
    location: 'Mumbai',
    summary: 'High-converting strategic landing page and founder application portal for seed-stage venture fund.',
    image: '/assets/project_aura_health_1790414608886.jpg',
    featured: false,
    gridSpan: 'small',
    challenge: 'Required a commanding, trustworthy web presence for an upcoming \$25M fund announcement.',
    approach: 'Engineered an impactful single-page narrative with clean pitch deck upload automation.',
    designDetails: 'Architectural monochrome backdrop with ultra-crisp typography hierarchy.',
    developmentDetails: 'Airtable integration for instant pitch submission logging and automated founder email notifications.',
    outcome: 'Received 320+ founder submissions within two weeks of launch.',
    techStack: ['React', 'Airtable API', 'Tailwind CSS'],
  }
];
