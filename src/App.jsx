import { useMemo, useState } from 'react';
import './App.css';


const PHONE_DISPLAY = '+91-96290 71640';
const WHATSAPP_NUMBER = '919629071640';
const EMAIL = 'raventrixtechnologies@gmail.com';
const MAPS_URL = 'https://maps.app.goo.gl/3zmBRxVTLu2P95U96/';
const GBP_URL = 'https://share.google/nSeinVBaIR2vEuEhy';

const services = [
  { icon: 'strategy', title: 'IT Consulting', description: 'Technology strategy & implementation guidance for Tharangambadi businesses.', features: ['Technology assessment', 'Digital strategy', 'Security audits'] },
  { icon: 'design', title: 'UI/UX Design', description: 'Intuitive interfaces that users love, designed for local businesses.', features: ['User research', 'Wireframing & prototyping', 'Design systems'] },
  { icon: 'code', title: 'Website Development', description: 'Fast, custom websites that bring you leads from Tharangambadi and beyond.', features: ['High-performance architecture', 'Mobile responsive design', 'Custom-tailored solutions'] },
  { icon: 'map', title: 'Google Business Profile Management', description: 'Get found on Google Maps and local search in Tharangambadi and Tamil Nadu.', features: ['Hyper-local visibility', 'Review automation', 'Map pack domination'] },
  { icon: 'search', title: 'Local SEO', description: 'Rank for "near me" searches in Tharangambadi. Get more foot traffic.', features: ['Regional keyword targeting', 'Citation frameworks', 'NAP consistency'] },
  { icon: 'brand', title: 'Graphic Design', description: 'Logos, brochures, social media graphics for Tharangambadi businesses.', features: ['Brand identity', 'Social media graphics', 'Print materials'] },
];

const caseStudies = [
  {
    title: 'AM Frames Photography',
    industry: 'Wedding photographer, Tharangambadi',
    results: ['40% faster loading', 'Online booking added', '40% more inquiries'],
    overview: 'AM Frames Photography is the leading wedding and portrait photographer in Tharangambadi. They needed a faster, more polished digital presence.',
    solution: 'Raventrix rebuilt the website experience around visual storytelling, mobile-first performance, and direct WhatsApp booking prompts.',
    outcome: 'The new experience reduced friction, improved loading speed by 40%, added online booking, and increased enquiry volume by 40%.',
  },
  {
    title: 'Sharmi Aari Designer',
    industry: 'Bridal tailoring, Tharangambadi',
    results: ['#1 rank for 12 keywords', '3x more walk-ins', 'Local search dominance'],
    overview: 'Sharmi Aari Designer wanted to be discovered by brides searching for aari work near Tharangambadi.',
    solution: 'We optimized local SEO foundations, Google Business Profile content, and location-focused visibility signals.',
    outcome: 'The business achieved #1 rankings for 12 local keywords, tripled walk-ins, and built strong local search dominance.',
  },
];

const serviceOptions = services.map((service) => service.title);

function Icon({ name, className = 'h-6 w-6' }) {
  const common = { className, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', 'aria-hidden': true };
  const strokeProps = { stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const icons = {
    strategy: <svg {...common}><path {...strokeProps} d="M4 18V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11" /><path {...strokeProps} d="M8 9h8M8 13h5M3 18h18" /><path {...strokeProps} d="M15 13l2 2 3-4" /></svg>,
    design: <svg {...common}><path {...strokeProps} d="M4 15.5V6a2 2 0 0 1 2-2h9.5" /><path {...strokeProps} d="M8 20h10a2 2 0 0 0 2-2V8" /><path {...strokeProps} d="M14 4h6v6" /><path {...strokeProps} d="M9 14l3-3 2 2 5-5" /></svg>,
    code: <svg {...common}><path {...strokeProps} d="M8 9l-4 3 4 3" /><path {...strokeProps} d="M16 9l4 3-4 3" /><path {...strokeProps} d="M14 5l-4 14" /></svg>,
    map: <svg {...common}><path {...strokeProps} d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" /><circle {...strokeProps} cx="12" cy="10" r="2.5" /></svg>,
    search: <svg {...common}><circle {...strokeProps} cx="11" cy="11" r="6" /><path {...strokeProps} d="M16 16l4 4" /><path {...strokeProps} d="M8.5 11.5l1.8 1.8 3.5-4" /></svg>,
    brand: <svg {...common}><path {...strokeProps} d="M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" /><path {...strokeProps} d="M13.5 7.5l3 3" /><path {...strokeProps} d="M4 4h6" /><path {...strokeProps} d="M4 8h3" /></svg>,
    menu: <svg {...common}><path {...strokeProps} d="M4 7h16M4 12h16M4 17h16" /></svg>,
    close: <svg {...common}><path {...strokeProps} d="M6 6l12 12M18 6L6 18" /></svg>,
    whatsapp: <svg {...common} fill="currentColor" viewBox="0 0 32 32"><path d="M16.03 4C9.42 4 4.05 9.34 4.05 15.9c0 2.1.55 4.15 1.6 5.96L4 28l6.3-1.64a12.07 12.07 0 0 0 5.73 1.45C22.64 27.81 28 22.47 28 15.9S22.64 4 16.03 4Zm0 21.8c-1.78 0-3.52-.48-5.04-1.38l-.36-.21-3.74.97 1-3.63-.24-.38a9.83 9.83 0 0 1-1.5-5.27c0-5.46 4.43-9.9 9.88-9.9 5.44 0 9.87 4.44 9.87 9.9 0 5.45-4.43 9.9-9.87 9.9Zm5.42-7.42c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.1 3.18 5.07 4.46.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35Z" /></svg>,
  };
  return icons[name] || icons.strategy;
}

function buildWhatsAppUrl(lines) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`;
}

function validateMobile(value) {
  return /^\d{10}$/.test(value.replace(/\D/g, ''));
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];
  
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-8">
        {/* Logo with Premium Gradient - Extra Large */}
        <a 
          href="#home" 
          className="group relative font-display text-3xl md:text-4xl font-extrabold tracking-[-0.03em] transition-all duration-500 hover:scale-105"
        >
          <span 
            className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 blur-md opacity-0 transition duration-500 group-hover:opacity-100"
          />
          <span
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #E67514 40%, #FF8000 70%, #FFFFFF 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              backgroundSize: '200% auto',
              animation: 'shimmer 3s linear infinite',
            }}
          >
            RAVENTRIX®
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="relative text-sm font-medium text-muted-foreground transition duration-300 hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          {/* FIXED BUTTON - No black fade */}
          <a 
            href="#lead-form" 
            className="rounded-full px-7 py-3.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #E67514 0%, #FF8000 100%)',
              color: '#FFFFFF',
              border: 'none'
            }}
          >
            Free Strategy Call
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="rounded-full border border-border p-2.5 text-foreground transition hover:border-primary hover:text-primary md:hidden" 
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>
      
      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="border-t border-border bg-card/95 backdrop-blur-lg px-5 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                onClick={() => setOpen(false)} 
                className="rounded-2xl px-5 py-4 text-center text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            
            {/* FIXED MOBILE BUTTON */}
            <a 
              href="#lead-form" 
              style={{
                background: 'linear-gradient(135deg, #E67514 0%, #FF8000 100%)',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '9999px',
                fontSize: '14px',
                fontWeight: '600',
                textAlign: 'center',
                display: 'block',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Free Strategy Call
            </a>
          </div>
        </div>
      )}
      
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </header>
  );
}
function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 py-16 md:px-8 md:py-28">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#E67514/0.16,transparent_34%),radial-gradient(circle_at_82%_18%,#FF8000/0.12,transparent_30%)]" />
      
      <div className="mx-auto max-w-7xl">
        {/* Stack on mobile, side by side on desktop */}
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          
          {/* Left Content - Full width on mobile, half on desktop */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              MSME Registered Partner
            </div>
            
            <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Web development, IT consulting &amp; local SEO in <span className="text-primary">Tharangambadi.</span>
            </h1>
            
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Raventrix Technologies helps businesses in Tharangambadi, Mayiladuthurai, and across Tamil Nadu build
              effective websites, strengthen local search visibility, and choose practical technology solutions.
            </p>
            
            {/* Buttons - Stack on mobile, row on tablet+ */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[0_0_40px_#E67514/0.25] transition hover:bg-accent hover:text-accent-foreground sm:px-7 sm:py-4"
              >
                Free Strategy Call →
              </a>
              <a
                href={`tel:${PHONE_DISPLAY.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3 font-semibold text-foreground transition hover:border-primary hover:text-primary sm:px-7 sm:py-4"
              >
                Call {PHONE_DISPLAY}
              </a>
            </div>
            
            {/* Trust Pills - Wrap on mobile */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {['✓ MSME Registered', '✓ ISO Certified', '✓ Data Security'].map((pill, index) => (
                <span
                  key={pill}
                  className={`rounded-full border px-4 py-2 text-sm ${
                    index === 0
                      ? 'border-primary/60 bg-primary/15 text-primary'
                      : 'border-border bg-card text-muted-foreground'
                  }`}
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right Content - Growth Stack Component */}
          <div className="relative flex-1">
            {/* Glow Effect */}
            <div className="absolute -inset-4 rounded-[3rem] bg-primary/10 blur-3xl lg:-inset-5" />
            
            {/* Main Card */}
            <div className="relative rounded-[2rem] border border-border bg-card/80 p-4 shadow-2xl backdrop-blur sm:p-5 lg:rounded-[2.5rem]">
              <div className="rounded-[1.5rem] border border-border bg-background p-4 sm:p-5 lg:rounded-[2rem]">
                
                {/* Header */}
                <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:mb-5 sm:flex-row sm:items-center sm:gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-xs">
                      Growth Stack
                    </p>
                    <h2 className="mt-1 font-display text-xl text-foreground sm:mt-2 sm:text-2xl lg:text-3xl">
                      Local-first digital engine
                    </h2>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-primary/15 text-primary sm:h-12 sm:w-12">
                    <Icon name="code" />
                  </div>
                </div>
                
                {/* Service Tiles - 2x2 Grid, responsive padding */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                  
                  {/* IT Consult */}
                  <div className="rounded-2xl border border-border bg-secondary/40 p-4 transition hover:-translate-y-1 hover:border-primary/50 sm:p-5 lg:rounded-3xl">
                    <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary sm:mb-6 sm:h-10 sm:w-10 lg:mb-8 lg:h-11 lg:w-11 lg:rounded-2xl">
                      <Icon name="strategy" />
                    </div>
                    <p className="text-sm font-semibold text-foreground sm:text-base">
                      IT Consult
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                      Serving Tharangambadi since 2025.
                    </p>
                  </div>
                  
                  {/* UI/UX Design */}
                  <div className="rounded-2xl border border-border bg-secondary/40 p-4 transition hover:-translate-y-1 hover:border-primary/50 sm:p-5 lg:rounded-3xl">
                    <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary sm:mb-6 sm:h-10 sm:w-10 lg:mb-8 lg:h-11 lg:w-11 lg:rounded-2xl">
                      <Icon name="design" />
                    </div>
                    <p className="text-sm font-semibold text-foreground sm:text-base">
                      UI/UX
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                      Local design, global standards.
                    </p>
                  </div>
                  
                  {/* SEO/GBP */}
                  <div className="rounded-2xl border border-border bg-secondary/40 p-4 transition hover:-translate-y-1 hover:border-primary/50 sm:p-5 lg:rounded-3xl">
                    <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary sm:mb-6 sm:h-10 sm:w-10 lg:mb-8 lg:h-11 lg:w-11 lg:rounded-2xl">
                      <Icon name="search" />
                    </div>
                    <p className="text-sm font-semibold text-foreground sm:text-base">
                      SEO/GBP
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                      Local SEO for Tharangambadi businesses.
                    </p>
                  </div>
                  
                  {/* Graphic Design */}
                  <div className="rounded-2xl border border-border bg-secondary/40 p-4 transition hover:-translate-y-1 hover:border-primary/50 sm:p-5 lg:rounded-3xl">
                    <div className="mb-4 grid h-9 w-9 place-items-center rounded-xl bg-primary/15 text-primary sm:mb-6 sm:h-10 sm:w-10 lg:mb-8 lg:h-11 lg:w-11 lg:rounded-2xl">
                      <Icon name="brand" />
                    </div>
                    <p className="text-sm font-semibold text-foreground sm:text-base">
                      Design
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground sm:mt-2 sm:text-sm">
                      Branding for Tharangambadi's best.
                    </p>
                  </div>
                </div>
                
                {/* Location Banner */}
                <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/10 p-4 sm:mt-5 sm:p-5 lg:rounded-3xl">
                  <p className="text-xs text-muted-foreground sm:text-sm">Serving</p>
                  <p className="mt-1 font-display text-base text-foreground sm:text-lg lg:text-2xl">
                    Tharangambadi · Mayiladuthurai · Tamil Nadu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Services() {
  return (
    <section id="services" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Services</p><h2 className="mt-4 font-display text-4xl text-foreground md:text-6xl">Practical technology services for local growth.</h2><p className="mt-5 text-lg text-muted-foreground">From digital strategy to Google visibility, every service is crafted for SMEs that need dependable execution and measurable outcomes.</p></div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => <article key={service.title} className="group rounded-[2rem] border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_80px_#E67514/0.12]"><div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><Icon name={service.icon} className="h-7 w-7" /></div><h3 className="font-display text-2xl text-foreground">{service.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{service.description}</p><ul className="mt-6 space-y-3">{service.features.map((feature) => <li key={feature} className="flex items-center gap-3 text-sm text-foreground"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{feature}</li>)}</ul></article>)}
        </div>
      </div>
    </section>
  );
}
// Import images at the top of your App.jsx file


function Portfolio() {
  const [selected, setSelected] = useState(null);
  
  return (
    <section id="portfolio" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Portfolio</p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-6xl">Our client work in Tharangambadi</h2>
          </div>
          <p className="max-w-md text-muted-foreground">Clickable case studies with clear business outcomes for local companies.</p>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <button 
              key={study.title} 
              onClick={() => setSelected(study)} 
              className="group rounded-[2.2rem] border border-border bg-card p-7 text-left transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_24px_90px_#E67514/0.14]"
            >
              {/* Icon Container */}
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-secondary/15">
                <Icon name={study.title.includes('Frames') ? 'design' : 'search'} className="h-10 w-10 text-primary" />
              </div>
              
              <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground">{study.industry}</p>
              <h3 className="mt-4 font-display text-3xl text-foreground">{study.title}</h3>
              
              <div className="mt-6 flex flex-wrap gap-3">
                {study.results.map((result) => (
                  <span key={result} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                    {result}
                  </span>
                ))}
              </div>
              
              <p className="mt-7 font-semibold text-foreground transition group-hover:text-primary">
                View full case study →
              </p>
            </button>
          ))}
        </div>
      </div>
      {selected && <CaseStudyModal study={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

function FAQ() {
  const questions = [
    {
      question: 'What services does Raventrix Technologies provide?',
      answer: 'Raventrix provides IT consulting, website development, UI/UX design, local SEO, Google Business Profile management, and graphic design.',
    },
    {
      question: 'Which locations do you serve?',
      answer: 'Raventrix is based in Tharangambadi and serves businesses in Mayiladuthurai, Kumbakonam, and other areas of Tamil Nadu.',
    },
    {
      question: 'How can I request a project consultation?',
      answer: 'Use the enquiry form on this page to share your business details and the service you need. The form opens WhatsApp with your enquiry so you can send it directly.',
    },
    {
      question: 'How much does a website or SEO project cost?',
      answer: 'Project costs depend on the work involved. Contact Raventrix with your goals and requirements to discuss a suitable scope and quote.',
    },
  ];

  return (
    <section aria-labelledby="faq-title" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">FAQs</p>
        <h2 id="faq-title" className="mt-4 font-display text-4xl text-foreground md:text-5xl">
          Common questions about our services
        </h2>
        <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card px-6">
          {questions.map(({ question, answer }) => (
            <details key={question} className="py-5">
              <summary className="cursor-pointer font-semibold text-foreground marker:text-primary">
                {question}
              </summary>
              <p className="mt-3 leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyModal({ study, onClose }) {
  // Define links for each case study
  const caseStudyLinks = {
    'AM Frames Photography': {
      url: 'https://amframes.com',
      label: 'Visit Website',
    },
    'Sharmi Aari Designer': {
      url: 'https://drive.google.com/file/d/1X8jKqR4sMpL9nBvC7xYzW3tU5iA6dF2g/view', // Replace with your actual drive link
      label: 'View Report',
    }
  };
  
  const linkData = caseStudyLinks[study.title] || {
    url: '#',
    label: 'Learn More',
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-5 backdrop-blur-md" onClick={onClose}>
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-2xl border border-border bg-card p-6 shadow-2xl md:p-7" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-center gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-primary">Case Study</p>
              <h3 className="mt-2 font-display text-3xl text-foreground md:text-4xl">{study.title}</h3>
              <p className="mt-1 text-muted-foreground">{study.industry}</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="rounded-full border border-border p-2 text-foreground transition hover:border-primary hover:text-primary"
          >
            ✕
          </button>
        </div>
        
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {study.results.map((result) => (
            <div key={result} className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-center text-sm text-primary md:p-4">
              {result}
            </div>
          ))}
        </div>
        
        <div className="mt-8 space-y-6 text-muted-foreground">
          <div>
            <h4 className="mb-2 font-display text-xl text-foreground md:text-2xl">Project overview</h4>
            <p className="text-sm leading-relaxed md:text-base">{study.overview}</p>
          </div>
          <div>
            <h4 className="mb-2 font-display text-xl text-foreground md:text-2xl">Solution</h4>
            <p className="text-sm leading-relaxed md:text-base">{study.solution}</p>
          </div>
          <div>
            <h4 className="mb-2 font-display text-xl text-foreground md:text-2xl">Results</h4>
            <p className="text-sm leading-relaxed md:text-base">{study.outcome}</p>
          </div>
        </div>
        
        {/* Action Button - Clean, no fade effect */}
        <div className="mt-8 pt-4 border-t border-border">
          <a
            href={linkData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white md:w-auto"
          >
            {linkData.label}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}


function Contact() {
  return (
    <section id="contact" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-border bg-card p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div><p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Contact</p><h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">Start your digital growth from Tharangambadi.</h2><div className="mt-8 space-y-5 text-muted-foreground"><p><span className="text-foreground">Address:</span> Tharangambadi, Tamil Nadu 609313, India</p><p><span className="text-foreground">Phone &amp; WhatsApp:</span> {PHONE_DISPLAY}, WhatsApp: +91-9629071640</p><p><span className="text-foreground">Email:</span> <a className="text-primary" href={`mailto:${EMAIL}`}>{EMAIL}</a></p></div><div className="mt-8 flex flex-col gap-4 sm:flex-row"><a href={MAPS_URL} target="_blank" rel="noreferrer" className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">View on Google Maps</a><a href={GBP_URL} target="_blank" rel="noreferrer" className="rounded-full border border-border px-6 py-3 text-center font-semibold text-foreground transition hover:border-primary hover:text-primary">Google Business Profile</a></div></div>
          <div className="rounded-[2rem] border border-border bg-background p-6"><h3 className="font-display text-3xl text-foreground">Office Hours</h3><div className="mt-6 space-y-4">{[['Monday - Friday', '9:00 AM - 6:00 PM'], ['Saturday', '10:00 AM - 2:00 PM'], ['Sunday', 'Closed']].map(([day, time]) => <div key={day} className="flex justify-between gap-4 border-b border-border pb-4 text-sm"><span className="text-muted-foreground">{day}</span><span className="font-semibold text-foreground">{time}</span></div>)}</div><div className="mt-7 rounded-3xl border border-primary/20 bg-primary/10 p-5"><p className="text-sm text-muted-foreground">Service Area</p><p className="mt-2 text-lg font-semibold text-foreground">Tharangambadi, Mayiladuthurai, Kumbakonam, and all across Tamil Nadu</p></div></div>
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const [form, setForm] = useState({ name: '', company: '', mobile: '', website: '', service: '' });
  const [error, setError] = useState('');
  const submit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.company.trim() || !form.service) return setError('Please fill all required fields.');
    if (!validateMobile(form.mobile)) return setError('Please enter a valid 10 digit mobile number.');
    setError('');
    window.open(buildWhatsAppUrl(['New website enquiry for Raventrix Technologies', `Full Name: ${form.name}`, `Company Name: ${form.company}`, `Mobile Number: ${form.mobile}`, form.website ? `Website: ${form.website}` : 'Website: Not provided', `Service Needed: ${form.service}`]), '_blank');
  };
  return (
    <section id="lead-form" className="px-5 py-20 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.5rem] border border-primary/20 bg-[radial-gradient(circle_at_top_left,#E67514/0.18,#111111_42%)] p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div><p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Work with Raventrix</p><h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">Work with a registered tech company in Tharangambadi</h2><p className="mt-5 text-lg leading-8 text-muted-foreground">Partner with an MSME registered company that understands local businesses, regional search behaviour, and practical technology execution for Tamil Nadu SMEs.</p></div>
        <form onSubmit={submit} className="rounded-[2rem] border border-border bg-background p-5 md:p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="rounded-2xl border border-input bg-card px-4 py-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" />
            <input required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company Name" className="rounded-2xl border border-input bg-card px-4 py-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" />
            <input required value={form.mobile} onChange={(e) => setForm({ ...form, mobile: e.target.value })} placeholder="Mobile Number" inputMode="numeric" className="rounded-2xl border border-input bg-card px-4 py-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" />
            <input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} placeholder="Website (Optional)" className="rounded-2xl border border-input bg-card px-4 py-4 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" />
          </div>
          <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="mt-4 w-full rounded-2xl border border-input bg-card px-4 py-4 text-foreground outline-none transition focus:border-primary"><option value="">Service Needed</option>{serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}</select>
          {error && <p className="mt-4 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}
          <button type="submit" className="mt-5 w-full rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">Send Message →</button>
        </form>
      </div>
    </section>
  );
}
function FloatingWhatsApp() {
  const phoneNumber = '919629071640';
  const message = encodeURIComponent(
    'Hello Raventrix Technologies,\n\n' +
    'I would like to enquire about your digital services.\n\n' +
    'Please share more information about:\n' +
    '- IT Consulting\n' +
    '- Website Development\n' +
    '- Local SEO\n' +
    '- Google Business Profile Management\n\n' +
    'Thank you!'
  );
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl md:h-16 md:w-16 whatsapp-pulse"
      aria-label="WhatsApp Enquiry"
    >
      <svg className="h-7 w-7 md:h-8 md:w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.54 3.64 1.48 5.12L2 22l4.88-.98C8.36 22.46 10.11 23 12 23c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="white"/>
        <path d="M16.75 13.56c-.25-.13-1.47-.73-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.65.81-.8.98-.14.17-.29.19-.54.06s-1.05-.39-2-1.23c-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.12-.12.27-.31.4-.47.13-.16.17-.28.26-.47.09-.19.05-.36-.02-.5-.07-.14-.56-1.36-.77-1.86-.2-.49-.41-.41-.56-.42-.14 0-.31-.02-.47-.02-.16 0-.42.06-.63.31-.22.25-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.22-.16-.47-.29z" fill="#25D366"/>
      </svg>
    </a>
  );
}
function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  
  return (
    <footer className="border-t border-border bg-background px-5 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content - Centered on mobile, grid on desktop */}
        <div className="grid gap-8 text-center md:grid-cols-[1.2fr_0.8fr_0.8fr] md:text-left">
          
          {/* Column 1 - Company Info */}
          <div>
            <div className="inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
              MSME REGISTERED COMPANY
            </div>
            <h2 className="mt-5 font-display text-2xl text-foreground md:text-3xl">
              Raventrix Technologies 
            </h2>
            <p className="mt-4 text-sm text-muted-foreground md:max-w-md">
              Reliable IT consulting, web development, design, and local SEO solutions for SMEs across Tamil Nadu.
            </p>
          </div>
          
          {/* Column 2 - Services Links */}
          <div>
            <h3 className="font-semibold text-foreground">Our Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {serviceOptions.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition hover:text-primary">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Contact Information with Orange Highlights */}
          <div>
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <span className="text-muted-foreground">Phone:</span>{' '}
                <a 
                  href={`tel:${PHONE_DISPLAY.replace(/[^+\d]/g, '')}`} 
                  className="font-medium text-primary transition hover:text-primary/80"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">WhatsApp:</span>{' '}
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary transition hover:text-primary/80"
                >
                  +91-9629071640
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">Email:</span>{' '}
                <a 
                  href={`mailto:${EMAIL}`} 
                  className="font-medium text-primary transition hover:text-primary/80"
                >
                  {EMAIL}
                </a>
              </p>
              <p className="text-muted-foreground">
               Tharangambadi, Tamil Nadu 609313
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright - Centered */}
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {year} Raventrix Technologies Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <FAQ />
      <Contact />
      <LeadForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
