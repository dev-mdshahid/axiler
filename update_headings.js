const fs = require('fs');
const path = require('path');

const dir = 'C:/dev/axiler/components/sections/home';

const updates = {
  'WhatItDoes.tsx': {
    chipColor: 'wid-accent-purple',
    chip: 'Platform Capabilities',
    title: 'Consolidate Your Application Security Stack',
    subtitle: 'Eliminate the noise of fragmented tools. Axiler provides an autonomous, agent-driven platform that handles everything from detection to remediation in a single automated workflow.'
  },
  'Brands.tsx': {
    chipColor: 'cyan-400',
    chip: 'Trusted Partners',
    title: 'Securing Industry Leaders Globally',
    subtitle: 'Join forward-thinking enterprises that trust Axiler\\'s AI-driven platform to protect their critical applications from emerging cybersecurity threats.'
  },
  'Integrations.tsx': {
    chipColor: 'purple-400',
    chip: 'Seamless Integrations',
    title: 'Connect Your Existing Technology Ecosystem',
    subtitle: 'Deploy Axiler within minutes. Our platform integrates flawlessly with the cloud services, CI/CD pipelines, and communication tools your engineering teams already rely on.'
  },
  'WhyAxiler.tsx': {
    chipColor: 'cyan-400',
    chip: 'Platform Demo',
    title: 'See Autonomous Remediation In Action',
    subtitle: 'Watch how our context-aware AI engine acts decisively in runtime, fixing vulnerabilities and remediating risks before they escalate into security breaches.'
  },
  'TheResult.tsx': {
    chipColor: 'cyan-400',
    chip: 'Measurable Impact',
    title: 'Transforming Application Security Reality',
    subtitle: 'Eliminate alert fatigue and manual tracking. See the dramatic difference between traditional AppSec delays and the immediate, AI-driven remediation delivered by Axiler.'
  },
  'Cade.tsx': {
    chipColor: 'blue-400',
    chip: 'Core AI Engine',
    title: 'CADE: Context Aware Defense Enforcer',
    subtitle: 'Experience self-healing application security powered by live attack intelligence. CADE learns from real-world traffic to automatically strengthen protections in real-time.'
  },
  'Lifecycle.tsx': {
    chipColor: 'cyan-400',
    chip: 'Security Lifecycle',
    title: 'Continuous Intelligence Across The SDLC',
    subtitle: 'From secure architecture design to runtime threat detection, our purpose-built AI agents operate continuously across every layer of your software development lifecycle.'
  },
  'IndustryEvents.tsx': {
    chipColor: 'cyan-400',
    chip: 'Knowledge Sharing',
    title: 'Stay Ahead With Cybersecurity Insights',
    subtitle: 'Join our expert-led sessions to understand how emerging AI security measures are actively protecting different sectors against advanced cyber attacks.'
  },
  'Testimonials.tsx': {
    chipColor: 'cyan-400',
    chip: 'Client Success Stories',
    title: 'What Industry Leaders Say About Us',
    subtitle: 'Discover how organizations are transforming their security postures and driving developer productivity through the experiences of our valued partners.',
    isTestimonials: true
  },
  'Services.tsx': {
    chipColor: 'brand-primary',
    chip: 'Industry Solutions',
    title: 'Tailored Security For Every Sector',
    subtitle: 'Whether you operate in finance, healthcare, or e-commerce, our AI agents understand your unique compliance needs and industry-specific threat landscapes.'
  },
  'Blogs.tsx': {
    chipColor: '[#A855F7]',
    chip: 'Articles & Updates',
    title: 'Latest In Cybersecurity & AI Agents',
    subtitle: 'Explore deep technical insights, industry trends, and strategic intelligence about the future of autonomous vulnerability management.'
  },
  'FAQ.tsx': {
    chipColor: '[#F97316]',
    chip: 'Common Questions',
    title: 'Frequently Asked Questions',
    subtitle: 'Find clear, detailed answers about Axiler\\'s agentic platform capabilities, frictionless integrations, and how we compare to traditional scanners.'
  }
};

for (const [file, data] of Object.entries(updates)) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) {
    console.log(`Not found: ${filePath}`);
    continue;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Generate replacement content
  const isTestimonials = data.isTestimonials ? '<span className="flex h-1.5 w-1.5 rounded-full bg-cyan-400 mr-2 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>\\n            ' : '';
  const colorClasses = `text-${data.chipColor} bg-${data.chipColor}/10 border border-${data.chipColor}/20`;
  
  const innerReplacement = `<div className="mb-5 inline-flex items-center justify-center uppercase tracking-[0.2em] text-[11px] sm:text-xs font-bold ${colorClasses} px-4 py-1.5 rounded-full hover:bg-white/10 transition-colors">
            ${isTestimonials}${data.chip}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight text-white mb-5">
            ${data.title}
          </h2>
          <p className="text-base sm:text-lg font-medium leading-relaxed text-neutral-400 max-w-3xl mx-auto">
            ${data.subtitle}
          </p>`;

  let h2Index = content.indexOf('<h2');
  if (h2Index === -1) {
    console.log(`Could not find <h2 in ${file}`);
    continue;
  }
  
  let chipIndex = content.lastIndexOf('<div className="mb-5 inline-flex', h2Index);
  
  let h2EndIndex = content.indexOf('</h2>', h2Index) + 5;
  let pIndex = content.indexOf('<p className', h2EndIndex);
  let pEndIndex = -1;
  
  // Need to handle p tags that might span multiple lines, e.g. <p className="...">...<br/>...</p>
  if (pIndex !== -1 && pIndex - h2EndIndex < 100) {
    pEndIndex = content.indexOf('</p>', pIndex) + 4;
  }
  
  let startIndex = chipIndex !== -1 && h2Index - chipIndex < 500 ? chipIndex : h2Index;
  let endIndex = pEndIndex !== -1 ? pEndIndex : h2EndIndex;
  
  if (file === 'Brands.tsx' || file === 'Integrations.tsx') {
      startIndex = h2Index;
      endIndex = h2EndIndex;
  }

  content = content.substring(0, startIndex) + innerReplacement + content.substring(endIndex);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
