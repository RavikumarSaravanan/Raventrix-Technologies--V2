import { useMemo, useState } from 'react';
import './App.css';

const PHONE_DISPLAY = '+91-96290 71640';
const WHATSAPP_NUMBER = '919629071640';
const EMAIL = 'raventrixtechnologies@gmail.com';
const WEB3FORMS_ACCESS_KEY = '98fb889b-1040-4625-b8ad-0f7a782a29ae';
const MAPS_URL = 'https://maps.app.goo.gl/3zmBRxVTLu2P95U96/';
const GBP_URL = 'https://share.google/nSeinVBaIR2vEuEhy';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const services = [
  {
    icon: 'strategy',
    title: 'Website Development',
    problem: 'A weak digital presence makes it harder for local customers to trust your business or contact you with confidence.',
    deliverables: 'Business websites, portfolio websites, product and service catalogues, enquiry-focused landing pages, and custom website features designed around your real business goals.',
    audience: 'Small businesses, local shops, service providers, clinics, tailoring businesses, boutiques, and professionals that need a clearer online presence.',
    cta: 'Discuss your website goals',
  },
  {
    icon: 'design',
    title: 'UI/UX Design',
    problem: 'Confusing layouts and weak user journeys reduce conversions before a customer ever reaches out.',
    deliverables: 'User flows, wireframes, prototypes, responsive interface design, and practical usability improvements for websites and applications.',
    audience: 'Businesses that want cleaner journeys, stronger conversion paths, and a more intuitive customer experience on mobile and desktop.',
    cta: 'Plan a better customer journey',
  },
  {
    icon: 'search',
    title: 'Local SEO',
    problem: 'If your website and business information do not clearly explain your services, nearby customers may choose a competitor instead.',
    deliverables: 'On-page SEO, local keyword guidance, search-friendly website structure, local business information consistency, and technical SEO improvements.',
    audience: 'Local businesses and service providers aiming to improve visibility in local search and better explain their service areas.',
    cta: 'Improve your local visibility',
  },
  {
    icon: 'map',
    title: 'Google Business Profile Management',
    problem: 'Incomplete or inconsistent business profiles lead to missed enquiries and weaker trust in local search.',
    deliverables: 'Profile audits, category and service updates, location and contact accuracy checks, photo guidance, and a realistic review process for local businesses.',
    audience: 'Businesses that want a clearer and more useful Google Business Profile without relying on misleading promises.',
    cta: 'Strengthen your profile',
  },
  {
    icon: 'code',
    title: 'IT Consulting and Automation',
    problem: 'Manual follow-ups, repetitive processes, and disconnected tools slow down response times and reduce efficiency.',
    deliverables: 'Workflow analysis, technology planning, API integration, business process automation, and practical custom software recommendations based on real needs.',
    audience: 'Growing businesses and teams that need streamlined operations without unnecessary complexity or overspending.',
    cta: 'Review your workflow needs',
  },
  {
    icon: 'spark',
    title: 'Graphic Design and Branding',
    problem: 'Weak branding and inconsistent materials make a business harder to remember, trust, and recognise online.',
    deliverables: 'Brand identity support, social media creatives, promotional graphics, brochure layouts, and digital marketing materials that work across channels.',
    audience: 'Retail brands, service businesses, and growing companies that want a clearer visual identity and stronger sales materials.',
    cta: 'Refresh your brand presence',
  },
];

const caseStudies = [
  {
    title: 'AM Frames Photography',
    status: 'Completed client project',
    category: 'Wedding and portrait photography',
    objective: 'Create a polished portfolio and make it easy for clients to enquire from mobile devices.',
    work: 'Responsive website redesign, visual storytelling improvements, and a cleaner enquiry flow for mobile visitors.',
    link: 'https://amframes.com/',
  },
  {
    title: 'Sharmi Aari Designer',
    status: 'Completed client project',
    category: 'Fashion and tailoring design studio',
    objective: 'Present the brand with a more premium, functional, and mobile-friendly portfolio experience.',
    work: 'Brand presentation refinement, portfolio layout design, and a more engaging customer-facing online experience.',
    link: 'https://sharmi-aari-v2.netlify.app/',
  },
  {
    title: 'Rytham Fashions',
    status: 'Completed client project',
    category: 'Fashion boutique',
    objective: 'Create a cleaner, easier-to-browse website that makes the boutique more approachable online.',
    work: 'Brand presentation improvements, responsive layout work, and clearer product and service storytelling.',
    link: 'https://rythamfashions.netlify.app/',
  },
  {
    title: 'Star Boat Works',
    status: 'Completed client project',
    category: 'Boat manufacturing and marine services',
    objective: 'Present the company’s fiberglass boat manufacturing, repair, and marine finishing services to coastal customers.',
    work: 'Website design and development to showcase boat models, services, workshop experience, and customer enquiry options.',
    link: 'https://starboatworks.netlify.app/',
  },
  {
    title: 'IoT Data Center Monitoring Dashboard',
    status: 'Concept / product demo',
    category: 'Operational technology dashboard',
    objective: 'Design a monitoring interface for infrastructure visibility, alerting, and quick decision-making.',
    work: 'Dashboard concept design, data visualisation planning, and interface prototyping for operational monitoring workflows.',
    link: '#',
  },
  {
    title: 'Micro Business Digital Analytics System',
    status: 'Concept / internal prototype',
    category: 'Business analytics',
    objective: 'Explore a practical reporting tool for micro businesses that need simple insights without enterprise complexity.',
    work: 'User research, dashboard structures, KPI alignment, and prototype design for lightweight business reporting.',
    link: '#',
  },
];

const trustPoints = [
  'Local understanding of Tamil Nadu businesses and customer behaviour.',
  'Clear project scope, deliverables, and communication from the start.',
  'Responsive, mobile-friendly design for real customer journeys.',
  'Direct communication with a practical and transparent process.',
  'Honest pricing and timelines based on project scope and complexity.',
  'Support and handover arrangements to make the final website usable after launch.',
];

const processSteps = [
  { step: '01', title: 'Discovery', description: 'Understand your business, goals, customers, current challenges, and project expectations.' },
  { step: '02', title: 'Proposal', description: 'Agree on scope, deliverables, timeline, and pricing before development begins.' },
  { step: '03', title: 'Development', description: 'Design, build, review, and refine the agreed solution with clear client feedback loops.' },
  { step: '04', title: 'Launch & Handover', description: 'Test the site, deploy it, and explain how to manage and update it after launch.' },
];

const faqs = [
  {
    question: 'What services does Raventrix Technologies provide?',
    answer: 'Raventrix provides website development, UI/UX design, local SEO, Google Business Profile management, AI and automation support, backend/API development, and graphic design.',
  },
  {
    question: 'Which locations do you serve?',
    answer: 'The company is based in Tharangambadi and works with businesses across Mayiladuthurai, Kumbakonam, and wider Tamil Nadu. Projects can also be discussed with businesses beyond the region when the scope is suitable.',
  },
  {
    question: 'How does the project process work?',
    answer: 'We begin with discovery, then align on scope and pricing, proceed with design and development, and finish with launch and handover. Timelines depend on project complexity, content readiness, and feedback cycles.',
  },
  {
    question: 'How much does a website cost?',
    answer: 'Costs depend on the project size, features, content needs, and timeline. We prefer discussing the right scope first so the quote reflects the actual work required.',
  },
  {
    question: 'How long does development take?',
    answer: 'Simple brochure sites can be faster, while more involved websites, custom features, or SEO support may take more time. The final schedule depends on the agreed scope and how quickly content and feedback are provided.',
  },
  {
    question: 'Can you improve an existing website?',
    answer: 'Yes. We can review an existing website, identify issues, and improve structure, design, messaging, performance, or contact flow depending on your goals.',
  },
  {
    question: 'Do you provide maintenance?',
    answer: 'Maintenance can be discussed depending on the project and future support needed. We can support ongoing updates, content changes, and launch improvements based on the agreed arrangement.',
  },
  {
    question: 'How can I start a project?',
    answer: 'Use the contact form or WhatsApp button on this page to share your business details, the service you need, and a brief project description. We will review the request and respond with the next steps.',
  },
];

const serviceOptions = services.map((service) => service.title);

function Icon({ name, className = 'h-6 w-6' }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  };
  const strokeProps = {
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  };

  const icons = {
    strategy: (
      <svg {...common}>
        <path {...strokeProps} d="M4 18V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11" />
        <path {...strokeProps} d="M8 9h8M8 13h5M3 18h18" />
        <path {...strokeProps} d="M15 13l2 2 3-4" />
      </svg>
    ),
    design: (
      <svg {...common}>
        <path {...strokeProps} d="M4 15.5V6a2 2 0 0 1 2-2h9.5" />
        <path {...strokeProps} d="M8 20h10a2 2 0 0 0 2-2V8" />
        <path {...strokeProps} d="M14 4h6v6" />
        <path {...strokeProps} d="M9 14l3-3 2 2 5-5" />
      </svg>
    ),
    code: (
      <svg {...common}>
        <path {...strokeProps} d="M8 9l-4 3 4 3" />
        <path {...strokeProps} d="M16 9l4 3-4 3" />
        <path {...strokeProps} d="M14 5l-4 14" />
      </svg>
    ),
    map: (
      <svg {...common}>
        <path {...strokeProps} d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" />
        <circle {...strokeProps} cx="12" cy="10" r="2.5" />
      </svg>
    ),
    search: (
      <svg {...common}>
        <circle {...strokeProps} cx="11" cy="11" r="6" />
        <path {...strokeProps} d="M16 16l4 4" />
        <path {...strokeProps} d="M8.5 11.5l1.8 1.8 3.5-4" />
      </svg>
    ),
    brand: (
      <svg {...common}>
        <path {...strokeProps} d="M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20Z" />
        <path {...strokeProps} d="M13.5 7.5l3 3" />
        <path {...strokeProps} d="M4 4h6" />
        <path {...strokeProps} d="M4 8h3" />
      </svg>
    ),
    spark: (
      <svg {...common}>
        <path {...strokeProps} d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" />
      </svg>
    ),
    menu: (
      <svg {...common}>
        <path {...strokeProps} d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    ),
    close: (
      <svg {...common}>
        <path {...strokeProps} d="M6 6l12 12M18 6L6 18" />
      </svg>
    ),
    whatsapp: (
      <svg {...common} fill="currentColor" viewBox="0 0 32 32">
        <path d="M16.03 4C9.42 4 4.05 9.34 4.05 15.9c0 2.1.55 4.15 1.6 5.96L4 28l6.3-1.64a12.07 12.07 0 0 0 5.73 1.45C22.64 27.81 28 22.47 28 15.9S22.64 4 16.03 4Zm0 21.8c-1.78 0-3.52-.48-5.04-1.38l-.36-.21-3.74.97 1-3.63-.24-.38a9.83 9.83 0 0 1-1.5-5.27c0-5.46 4.43-9.9 9.88-9.9 5.44 0 9.87 4.44 9.87 9.9 0 5.45-4.43 9.9-9.87 9.9Zm5.42-7.42c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47a9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.87 1.21 3.07c.15.2 2.1 3.18 5.07 4.46.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.11.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    ),
  };

  return icons[name] || icons.strategy;
}

function buildWhatsAppUrl(lines) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`;
}

function validateMobile(value) {
  return /^\d{10}$/.test(value.replace(/\D/g, ''));
}

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#home" className="group relative font-display text-3xl font-extrabold tracking-[-0.04em] text-foreground transition hover:scale-[1.02] md:text-4xl" aria-label="Raventrix home">
          <span className="shimmer-text">RAVENTRIX®</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="relative text-sm font-medium text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              {link.label}
            </a>
          ))}
          <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
            Discuss Your Project
          </a>
        </div>

        <button
          type="button"
          className="rounded-full border border-border p-2.5 text-foreground transition hover:border-primary hover:text-primary md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="border-t border-border bg-card/95 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-center text-sm text-muted-foreground transition hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a href="#lead-form" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground">
              Discuss Your Project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(230,117,20,0.18),transparent_32%),radial-gradient(circle_at_80%_15%,rgba(255,128,0,0.1),transparent_26%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center lg:text-left">
            <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">
              Based in Tharangambadi
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl leading-[1.06] tracking-[-0.04em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              Build a Stronger Digital Presence for Your Business.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Raventrix Technologies helps businesses in Tharangambadi, Mayiladuthurai, and across Tamil Nadu showcase their services, improve local visibility, and simplify customer enquiries through practical websites and digital solutions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <a href="#lead-form" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground shadow-[0_18px_40px_rgba(230,117,20,0.2)] transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                Discuss Your Project
              </a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-border bg-transparent px-6 py-3.5 text-base font-semibold text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                Explore Our Work
              </a>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              {['Responsive websites', 'Practical local SEO', 'Clear enquiry flow'].map((label) => (
                <span key={label} className="rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  {label}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.26em] text-muted-foreground">Based in Tharangambadi, Tamil Nadu · Working with businesses across India.</p>
          </div>

          <div className="relative">
            <div className="absolute inset-4 rounded-[2.2rem] bg-primary/10 blur-3xl" />
            <div className="relative rounded-[2rem] border border-border bg-card/80 p-4 backdrop-blur sm:p-5">
              <div className="rounded-[1.5rem] border border-border bg-background p-4 sm:p-6">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">Digital growth</p>
                    <h2 className="mt-2 font-display text-2xl text-foreground md:text-3xl">Business-first website support</h2>
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary">
                    <Icon name="code" className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    ['Website Design', 'Clear user journeys'],
                    ['SEO', 'Local visibility'],
                    ['GBP', 'Profile clarity'],
                    ['Automation', 'Faster workflows'],
                  ].map(([title, subtitle]) => (
                    <div key={title} className="rounded-2xl border border-border bg-secondary/40 p-4">
                      <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-primary/15 text-primary">
                        <Icon name={title === 'Website Design' ? 'design' : title === 'SEO' ? 'search' : title === 'GBP' ? 'map' : 'spark'} className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{title}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-primary/20 bg-primary/10 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Service area</p>
                  <p className="mt-2 font-display text-xl text-foreground">Tharangambadi · Mayiladuthurai · Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Services</p>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-6xl">Practical digital support for growing businesses.</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            From website development in Tharangambadi to local SEO services in Tamil Nadu, Raventrix Technologies helps small businesses improve their digital presence with services that match real customer needs, business workflows, and local search behaviour.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="group rounded-[2rem] border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_80px_rgba(230,117,20,0.12)]">
              <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={service.icon} className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.problem}</p>
              <div className="mt-5 rounded-2xl border border-border bg-background p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">What is included</p>
                <p className="mt-2 text-sm leading-7 text-foreground">{service.deliverables}</p>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">Best for:</span> {service.audience}
              </p>
              <a href="#lead-form" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-accent">
                {service.cta} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="about" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-border bg-card p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Why choose Raventrix</p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">A practical partner for small business growth.</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Businesses choose Raventrix when they need a credible digital presence without vague promises or confusing processes. The focus is on clarity, direct communication, and solutions that fit a real business need.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Local understanding', 'Clear scope', 'Responsive design', 'Transparent process'].map((item) => (
                <span key={item} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-2xl border border-border bg-background p-4">
                <span className="mt-1.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">✓</span>
                <p className="text-sm leading-7 text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Our process</p>
          <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">A simple, transparent working process.</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((item) => (
            <div key={item.step} className="rounded-[2rem] border border-border bg-card p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.step}</p>
              <h3 className="mt-4 font-display text-2xl text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Portfolio</p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-6xl">Selected project work.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-muted-foreground">
            These examples highlight project objectives and work completed. No unverified performance outcomes are claimed.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((project) => {
            const isDemo = project.link === '#';
            return (
              <article key={project.title} className="group rounded-[2rem] border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/60">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{project.status}</span>
                  </div>
                  <h3 className="mt-4 font-display text-3xl text-foreground">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.objective}</p>
                </div>
                <div className="mt-5 space-y-3 text-sm leading-7 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">What was designed or developed:</span> {project.work}
                  </p>
                </div>
                {isDemo ? (
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground">
                    Concept project <span aria-hidden="true">→</span>
                  </div>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Open project <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section aria-labelledby="faq-title" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">FAQs</p>
        <h2 id="faq-title" className="mt-4 font-display text-4xl text-foreground md:text-5xl">Frequently asked questions.</h2>
        <div className="mt-8 divide-y divide-border rounded-3xl border border-border bg-card px-5 md:px-6">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="cursor-pointer list-none font-semibold text-foreground marker:hidden">
                {question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const initialForm = {
    name: '',
    business: '',
    mobile: '',
    email: '',
    service: '',
    description: '',
    budget: '',
    timeline: '',
  };

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field) => (event) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
    setError('');
    setStatus('');
  };

  const submit = async (event) => {
    event.preventDefault();

    const trimmedName = form.name.trim();
    const trimmedBusiness = form.business.trim();
    const trimmedMobile = form.mobile.trim();
    const trimmedEmail = form.email.trim();
    const trimmedDesc = form.description.trim();

    if (!trimmedName || !trimmedBusiness || !form.service || !trimmedDesc) {
      setError('Please complete the required fields: full name, business name, service needed, and project description.');
      return;
    }

    if (!trimmedEmail) {
      setError('Please enter your email address so we can follow up.');
      return;
    }

    if (trimmedMobile && !validateMobile(trimmedMobile)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (trimmedEmail && !validateEmail(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      const formData = new FormData(event.currentTarget);
      formData.set('name', trimmedName);
      formData.set('email', trimmedEmail);
      formData.set('business', trimmedBusiness);
      formData.set('mobile', trimmedMobile);
      formData.set('service', form.service);
      formData.set('budget', form.budget || 'Not provided');
      formData.set('timeline', form.timeline || 'Not provided');
      formData.set('message', trimmedDesc);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Your enquiry could not be submitted. Please try again.');
      }

      setStatus('Thank you! Your enquiry has been submitted successfully. We’ll get back to you soon.');
      setForm(initialForm);
    } catch (submissionError) {
      setError(submissionError instanceof Error
        ? submissionError.message
        : 'Your enquiry could not be submitted. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-border bg-card p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Contact</p>
            <h2 className="mt-4 font-display text-4xl text-foreground md:text-5xl">Let’s talk about your next project.</h2>
            <div className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Address:</span> Tharangambadi, Tamil Nadu 609313, India
              </p>
              <p>
                <span className="font-semibold text-foreground">Phone and WhatsApp:</span>{' '}
                <a href={`tel:${PHONE_DISPLAY.replace(/[^+\d]/g, '')}`} className="text-primary hover:text-accent">{PHONE_DISPLAY}</a>
              </p>
              <p>
                <span className="font-semibold text-foreground">Email:</span>{' '}
                <a href={`mailto:${EMAIL}`} className="text-primary hover:text-accent">{EMAIL}</a>
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                View on Google Maps
              </a>
              <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-center font-semibold text-foreground transition hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                Google Business Profile
              </a>
            </div>

            <div className="mt-8 rounded-[2rem] border border-border bg-background p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Office hours</p>
              <div className="mt-4 space-y-4">
                {[
                  ['Monday - Friday', '9:00 AM - 6:00 PM'],
                  ['Saturday', '10:00 AM - 2:00 PM'],
                  ['Sunday', 'Closed'],
                ].map(([day, time]) => (
                  <div key={day} className="flex items-center justify-between gap-4 border-b border-border pb-3 text-sm">
                    <span className="text-muted-foreground">{day}</span>
                    <span className="font-semibold text-foreground">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <form id="lead-form" onSubmit={submit} className="rounded-[2rem] border border-border bg-background p-5 md:p-7">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New business enquiry from Raventrix Technologies website" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="lead-name" className="mb-2 block text-sm font-medium text-foreground">Full name*</label>
                <input id="lead-name" name="name" value={form.name} onChange={updateField('name')} required className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="Your name" autoComplete="name" />
              </div>

              <div>
                <label htmlFor="lead-business" className="mb-2 block text-sm font-medium text-foreground">Business name*</label>
                <input id="lead-business" name="business" value={form.business} onChange={updateField('business')} required className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="Business name" autoComplete="organization" />
              </div>

              <div>
                <label htmlFor="lead-mobile" className="mb-2 block text-sm font-medium text-foreground">Mobile number</label>
                <input id="lead-mobile" name="mobile" value={form.mobile} onChange={updateField('mobile')} inputMode="numeric" className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="10-digit mobile number" autoComplete="tel" />
              </div>

              <div>
                <label htmlFor="lead-email" className="mb-2 block text-sm font-medium text-foreground">Email address*</label>
                <input id="lead-email" name="email" type="email" value={form.email} onChange={updateField('email')} required className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="you@example.com" autoComplete="email" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="lead-service" className="mb-2 block text-sm font-medium text-foreground">Service required*</label>
              <select id="lead-service" name="service" value={form.service} onChange={updateField('service')} required className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground outline-none transition focus:border-primary">
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="lead-budget" className="mb-2 block text-sm font-medium text-foreground">Budget range</label>
                <select id="lead-budget" name="budget" value={form.budget} onChange={updateField('budget')} className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground outline-none transition focus:border-primary">
                  <option value="">Select budget</option>
                  <option value="Under ₹20,000">Under ₹20,000</option>
                  <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000+">₹1,00,000+</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label htmlFor="lead-timeline" className="mb-2 block text-sm font-medium text-foreground">Preferred timeline</label>
                <select id="lead-timeline" name="timeline" value={form.timeline} onChange={updateField('timeline')} className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground outline-none transition focus:border-primary">
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="lead-description" className="mb-2 block text-sm font-medium text-foreground">Project description*</label>
              <textarea id="lead-description" name="message" value={form.description} onChange={updateField('description')} required rows="5" className="w-full rounded-2xl border border-input bg-card px-4 py-3 text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary" placeholder="Tell us about your business, goals, and what you need help with." />
            </div>

            <p className="mt-4 text-xs leading-6 text-muted-foreground">
              Your details will be used only to understand your enquiry and respond to your request. No unnecessary personal data is collected.
            </p>

            {error && <p role="alert" className="mt-4 rounded-2xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>}
            {status && <p role="status" aria-live="polite" className="mt-4 rounded-2xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary">{status}</p>}

            <button type="submit" disabled={isSubmitting} className="mt-5 w-full rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  const whatsappUrl = buildWhatsAppUrl([
    'Hi Raventrix Technologies,',
    '',
    'I would like to discuss a digital solution for my business.',
  ]);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.4)] transition hover:scale-110 hover:shadow-[0_20px_50px_rgba(37,211,102,0.5)] md:h-16 md:w-16 whatsapp-pulse"
      aria-label="Chat on WhatsApp with Raventrix Technologies"
    >
      <Icon name="whatsapp" className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="border-t border-border bg-background px-5 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 text-center md:grid-cols-[1.2fr_0.8fr_0.8fr] md:text-left">
          <div>
            <div className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
              MSME registered company
            </div>
            <h2 className="mt-5 font-display text-2xl text-foreground md:text-3xl">Raventrix Technologies</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground md:max-w-md">
              Website development, UI/UX design, local SEO, Google Business Profile support, AI automation, and practical business technology solutions for Tamil Nadu businesses.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {serviceOptions.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition hover:text-primary">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="mt-4 space-y-3 text-sm">
              <p>
                <span className="text-muted-foreground">Phone:</span>{' '}
                <a href={`tel:${PHONE_DISPLAY.replace(/[^+\d]/g, '')}`} className="font-medium text-primary hover:text-accent">{PHONE_DISPLAY}</a>
              </p>
              <p>
                <span className="text-muted-foreground">WhatsApp:</span>{' '}
                <a href={buildWhatsAppUrl(['Hi Raventrix Technologies, I would like to discuss a digital solution for my business.'])} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-accent">
                  +91-9629071640
                </a>
              </p>
              <p>
                <span className="text-muted-foreground">Email:</span>{' '}
                <a href={`mailto:${EMAIL}`} className="font-medium text-primary hover:text-accent">{EMAIL}</a>
              </p>
              <p className="text-muted-foreground">Tharangambadi, Tamil Nadu 609313</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          © {year} Raventrix Technologies. All rights reserved.
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
      <ServicesSection />
      <TrustSection />
      <ProcessSection />
      <PortfolioSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
