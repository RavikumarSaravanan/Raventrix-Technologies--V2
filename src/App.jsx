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
    preview: 'preview-photo',
    status: 'Completed client project',
    category: 'Wedding and portrait photography',
    objective: 'Create a polished portfolio and make it easy for clients to enquire from mobile devices.',
    work: 'Responsive website redesign, visual storytelling improvements, and a cleaner enquiry flow for mobile visitors.',
    link: 'https://amframes.com/',
  },
  {
    title: 'Sharmi Aari Designer',
    preview: 'preview-fashion',
    status: 'Completed client project',
    category: 'Fashion and tailoring design studio',
    objective: 'Present the brand with a more premium, functional, and mobile-friendly portfolio experience.',
    work: 'Brand presentation refinement, portfolio layout design, and a more engaging customer-facing online experience.',
    link: 'https://sharmi-aari-v2.netlify.app/',
  },
  {
    title: 'Rytham Fashions',
    preview: 'preview-boutique',
    status: 'Completed client project',
    category: 'Fashion boutique',
    objective: 'Create a cleaner, easier-to-browse website that makes the boutique more approachable online.',
    work: 'Brand presentation improvements, responsive layout work, and clearer product and service storytelling.',
    link: 'https://rythamfashions.netlify.app/',
  },
  {
    title: 'Star Boat Works',
    preview: 'preview-boat',
    status: 'Completed client project',
    category: 'Boat manufacturing and marine services',
    objective: 'Present the company’s fiberglass boat manufacturing, repair, and marine finishing services to coastal customers.',
    work: 'Website design and development to showcase boat models, services, workshop experience, and customer enquiry options.',
    link: 'https://starboatworks.netlify.app/',
  },
  {
    title: 'IoT Data Center Monitoring Dashboard',
    preview: 'preview-dashboard',
    status: 'Concept / product demo',
    category: 'Operational technology dashboard',
    objective: 'Design a monitoring interface for infrastructure visibility, alerting, and quick decision-making.',
    work: 'Dashboard concept design, data visualisation planning, and interface prototyping for operational monitoring workflows.',
    link: '#',
  },
  {
    title: 'Micro Business Digital Analytics System',
    preview: 'preview-analytics',
    status: 'Concept / internal prototype',
    category: 'Business analytics',
    objective: 'Explore a practical reporting tool for micro businesses that need simple insights without enterprise complexity.',
    work: 'User research, dashboard structures, KPI alignment, and prototype design for lightweight business reporting.',
    link: '#',
  },
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
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="brand-lockup" aria-label="Raventrix Technologies home">
          <img
            className="brand-logo"
            src="/raventrix-logo-192.webp"
            srcSet="/raventrix-logo-192.webp 192w, /raventrix-logo-384.webp 384w"
            sizes="(max-width: 640px) 88px, 102px"
            width="384"
            height="273"
            alt="Raventrix Technologies"
            fetchPriority="high"
            decoding="async"
          />
        </a>

        <div className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={link.label === 'Home' ? 'active' : ''}>
              {link.label}
            </a>
          ))}
          <a href="#lead-form" className="button button-primary nav-cta">
            Discuss Your Project <span aria-hidden="true">→</span>
          </a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Icon name={open ? 'close' : 'menu'} />
        </button>
      </nav>

      {open && (
        <div id="mobile-navigation" className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-nav-link"
              >
                {link.label}
              </a>
            ))}
            <a href="#lead-form" onClick={() => setOpen(false)} className="button button-primary">
              Discuss Your Project
            </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-glow" aria-hidden="true" />
      <div className="section-inner hero-layout">
        <div className="hero-copy">
          <p className="eyebrow"><span>Ideas</span><i>→</i><span>Websites</span><i>→</i><span>Growth</span></p>
          <h1>Turn Your Business Into a Stronger <span>Digital Brand.</span></h1>
          <p className="hero-description">
            Raventrix Technologies helps businesses build professional websites, improve their local online presence, create better digital experiences, and streamline everyday work with practical technology.
          </p>
          <div className="hero-actions">
            <a href="#lead-form" className="button button-primary">Discuss Your Project <span aria-hidden="true">→</span></a>
            <a href="#portfolio" className="button button-outline">Explore Our Work</a>
          </div>
          <p className="hero-location"><span aria-hidden="true">⌖</span> Based in Tharangambadi, Tamil Nadu <b>·</b> Working with businesses across India.</p>
        </div>

        <div className="hero-art" aria-label="Website design shown on a laptop and phone">
          <div className="hero-sunburst" />
          <div className="laptop">
            <div className="laptop-screen">
              <div className="browser-bar"><span /><span /><span /><i>raventrix.in</i><b>✦</b></div>
              <div className="mock-website">
                <div className="mock-nav"><strong>RAVENTRIX</strong><span>WORK&nbsp;&nbsp;&nbsp; ABOUT&nbsp;&nbsp;&nbsp; CONTACT</span><b>→</b></div>
                <div className="mock-hero-copy"><small>DESIGN FOR WHAT'S NEXT</small><strong>Your Vision.<br /><em>Our Code.</em></strong><span>Digital experiences built around your business.</span><b>LET'S TALK&nbsp; →</b></div>
                <div className="mock-horizon" />
              </div>
            </div>
            <div className="laptop-base" />
          </div>
          <div className="phone-mockup">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <small>RAVENTRIX®</small>
              <strong>Your Vision<br /><em>Our Code</em></strong>
              <span>Beautiful websites.<br />Built to grow.</span>
              <b>GET STARTED</b>
              <i className="phone-screen-image" />
            </div>
          </div>
          <div className="hero-art-caption"><span /> Thoughtful design. Practical technology.</div>
        </div>
      </div>
    </section>
  );
}

function CapabilityStrip() {
  const capabilities = [
    ['design', 'Modern Design', '& Development'],
    ['search', 'SEO & Local', 'Visibility'],
    ['spark', 'AI & Automation', 'Solutions'],
    ['strategy', 'Ongoing Support', '& Guidance'],
  ];

  return (
    <div className="capability-strip">
      <div className="section-inner capability-grid">
        {capabilities.map(([icon, title, subtitle]) => (
          <div className="capability-item" key={title}>
            <span className="icon-tile"><Icon name={icon} className="h-5 w-5" /></span>
            <p><strong>{title}</strong><span>{subtitle}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="content-section services-section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>What we offer</span></p>
            <h2>Our Services</h2>
            <p>We provide complete digital solutions to help your business look professional, reach more customers and work smarter.</p>
          </div>
          <a className="text-link" href="#lead-form">View all services <span aria-hidden="true">→</span></a>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="icon-tile"><Icon name={service.icon} className="h-5 w-5" /></span>
              <h3>{service.title}</h3>
              <p>{service.deliverables}</p>
              <a href="#lead-form">Learn More <span aria-hidden="true">→</span></a>
            </article>
          ))}
        </div>
        <div className="location-banner">
          <div className="location-copy">
            <p className="eyebrow"><span>Local roots</span><i>·</i><span>Digital solutions</span></p>
            <h2>Proudly Based in Tharangambadi</h2>
            <p>We work with businesses across Tamil Nadu and India, helping them grow with the right digital solutions.</p>
            <a href="#contact" className="button button-outline">Get in Touch <span aria-hidden="true">→</span></a>
          </div>
          <div className="coast-art" aria-hidden="true">
            <span className="coast-sun" />
            <svg viewBox="0 0 460 150" fill="none">
              <path d="M0 96c61-17 91-14 148-1 46 11 80 8 121-4 50-15 102-10 191 9v50H0V96Z" fill="#080a09" />
              <path d="M0 115c80-19 131 1 196 4 82 4 133-28 264-5" stroke="#e67514" strokeOpacity=".55" />
              <path d="m94 99 35-36 17 3 33 33m-57-32 28-4 14 8-12 2m-31-8-9 32m38-28 2 27m-16-22 11-2" stroke="#f7a247" strokeWidth="2" />
              <path d="m248 102 31-29 18 2 31 26m-53-26 25-5 14 7-10 3m-28-4-7 26m34-23 2 21" stroke="#f7a247" strokeWidth="2" />
              <path d="M0 126h460" stroke="#f7a247" strokeOpacity=".3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const trustFeatures = [
    ['map', 'Local Understanding', 'We understand the needs of businesses in Tamil Nadu.'],
    ['strategy', 'Clear Process', 'Define scope, deliverables, timeline and price upfront.'],
    ['design', 'Responsive Design', 'Works perfectly on all devices and screen sizes.'],
    ['code', 'Direct Communication', 'Work directly with the developer.'],
    ['spark', 'Transparent & Honest', 'No hidden costs or false promises.'],
    ['brand', 'Support & Guidance', 'Help even after the launch.'],
  ];

  return (
    <section id="about" className="content-section about-section">
      <div className="section-inner about-layout">
        <div className="about-intro">
          <p className="eyebrow"><span>Your digital partner</span></p>
          <h2>Why Choose Raventrix?</h2>
          <p>We focus on practical solutions, clear communication and real value for your business.</p>
        </div>
        <div className="trust-grid">
          {trustFeatures.map(([icon, title, description]) => (
            <article className="trust-card" key={title}>
              <span className="icon-tile"><Icon name={icon} className="h-4 w-4" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    ['01', 'Understand', 'Discuss your goals, needs and budget.'],
    ['02', 'Plan', 'Define scope, features, timeline and quote.'],
    ['03', 'Design', 'Create wireframes and visual designs.'],
    ['04', 'Develop', 'Build, test and refine the solution.'],
    ['05', 'Launch', 'Go live with confidence.'],
    ['06', 'Support', 'Ongoing support and improvements.'],
  ];

  return (
    <section className="process-section">
      <div className="section-inner">
        <div className="section-heading process-heading">
          <div>
            <p className="eyebrow"><span>How it works</span></p>
            <h2>Our Simple Process</h2>
            <p>A clear and collaborative process to turn your ideas into a working solution.</p>
          </div>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description], index) => (
            <article className="process-step" key={number}>
              <div className="process-step-top">
                <span className="process-icon"><Icon name={['search', 'strategy', 'design', 'code', 'spark', 'brand'][index]} className="h-5 w-5" /></span>
                <i aria-hidden="true" />
              </div>
              <h3>{number}. {title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPreview({ project }) {
  const previewTitles = {
    'AM Frames Photography': 'AM FRAMES',
    'Sharmi Aari Designer': 'SHARMI AARI',
    'Rytham Fashions': 'RYTHAM',
    'Star Boat Works': 'STAR BOAT',
    'IoT Data Center Monitoring Dashboard': 'IOT MONITOR',
    'Micro Business Digital Analytics System': 'BUSINESS INSIGHTS',
  };
  return (
    <div className={`project-preview ${project.preview}`} aria-hidden="true">
      <div className="preview-browser"><span /><span /><span /><i /></div>
      <div className="preview-screen">
        <strong>{previewTitles[project.title]}</strong>
        <span />
        <i />
        <b />
      </div>
      <div className="preview-device"><span /></div>
    </div>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="content-section portfolio-section">
      <div className="section-inner">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span>Featured projects</span></p>
            <h2>Our Work</h2>
            <p>Real websites, real businesses. Explore some of our recent projects and see how we help brands build their digital presence.</p>
          </div>
          <a className="text-link" href="#lead-form">View all projects <span aria-hidden="true">→</span></a>
        </div>
        <div className="project-grid">
          {caseStudies.map((project) => {
            const isDemo = project.link === '#';
            return (
              <article key={project.title} className="project-card">
                <ProjectPreview project={project} />
                <div className="project-card-copy">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.objective}</p>
                {isDemo ? (
                  <div className="project-link project-link-muted">
                    Concept project <span aria-hidden="true">→</span>
                  </div>
                ) : (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Project <span aria-hidden="true">→</span>
                  </a>
                )}
                </div>
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
    <section aria-labelledby="faq-title" className="faq-section">
      <div className="section-inner faq-inner">
        <p className="eyebrow"><span>Good to know</span></p>
        <h2 id="faq-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details key={question}>
              <summary>
                {question}
              </summary>
              <p>{answer}</p>
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

    if (!trimmedMobile) {
      setError('Please enter your mobile number so we can follow up.');
      return;
    }

    if (!validateMobile(trimmedMobile)) {
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
    <section id="contact" className="contact-section">
      <div className="section-inner contact-panel">
        <div className="contact-copy">
          <p className="eyebrow"><span>Let's talk</span></p>
          <h2>Get Started Today</h2>
          <p className="contact-lead">Tell us about your business and what you need. We’ll get back to you with a suitable solution.</p>
          <div className="contact-details">
            <a href={`tel:${PHONE_DISPLAY.replace(/[^+\d]/g, '')}`} className="contact-detail">
              <span className="icon-tile"><Icon name="strategy" className="h-4 w-4" /></span>
              <span><strong>Phone / WhatsApp</strong><small>{PHONE_DISPLAY}</small></span>
            </a>
            <a href={`mailto:${EMAIL}`} className="contact-detail">
              <span className="icon-tile"><Icon name="design" className="h-4 w-4" /></span>
              <span><strong>Email</strong><small>{EMAIL}</small></span>
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="contact-detail">
              <span className="icon-tile"><Icon name="map" className="h-4 w-4" /></span>
              <span><strong>Location</strong><small>Tharangambadi, Mayiladuthurai dt,<br />Tamil Nadu 609313</small></span>
            </a>
          </div>
          <div className="contact-social-links">
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer">Google Business Profile <span aria-hidden="true">↗</span></a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <form id="lead-form" onSubmit={submit} className="contact-form">
          <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
          <input type="hidden" name="subject" value="New business enquiry from Raventrix Technologies website" />
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="lead-name">Full Name*</label>
              <input id="lead-name" name="name" value={form.name} onChange={updateField('name')} required placeholder="Your name" autoComplete="name" />
            </div>

            <div className="form-field">
              <label htmlFor="lead-business">Business Name*</label>
              <input id="lead-business" name="business" value={form.business} onChange={updateField('business')} required placeholder="Business name" autoComplete="organization" />
            </div>

            <div className="form-field">
              <label htmlFor="lead-mobile">Phone / WhatsApp*</label>
              <input id="lead-mobile" name="mobile" value={form.mobile} onChange={updateField('mobile')} inputMode="numeric" required placeholder="10-digit mobile number" autoComplete="tel" />
            </div>

            <div className="form-field">
              <label htmlFor="lead-email">Email (Optional)</label>
              <input id="lead-email" name="email" type="email" value={form.email} onChange={updateField('email')} placeholder="you@example.com" autoComplete="email" />
            </div>

            <div className="form-field">
              <label htmlFor="lead-service">Service Required*</label>
              <select id="lead-service" name="service" value={form.service} onChange={updateField('service')} required>
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="lead-budget">Budget Range (Optional)</label>
              <select id="lead-budget" name="budget" value={form.budget} onChange={updateField('budget')}>
                <option value="">Select budget range</option>
                <option value="Under ₹20,000">Under ₹20,000</option>
                <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                <option value="₹1,00,000+">₹1,00,000+</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>

            <div className="form-field form-field-wide">
              <label htmlFor="lead-description">Project Brief / Description*</label>
              <textarea id="lead-description" name="message" value={form.description} onChange={updateField('description')} required rows="4" placeholder="Tell us about your business and requirements." />
            </div>
          </div>

          <p className="form-note">
              We respect your privacy. Your information is safe with us.
            </p>

          {error && <p role="alert" className="form-message form-error">{error}</p>}
          {status && <p role="status" aria-live="polite" className="form-message form-success">{status}</p>}

          <button type="submit" disabled={isSubmitting} className="button button-primary form-submit">
            {isSubmitting ? 'Submitting...' : 'Send Message'} <span aria-hidden="true">→</span>
          </button>
        </form>
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
    <footer className="site-footer">
      <div className="section-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand-lockup" aria-label="Raventrix Technologies home">
              <img
                className="brand-logo"
                src="/raventrix-logo-192.webp"
                srcSet="/raventrix-logo-192.webp 192w, /raventrix-logo-384.webp 384w"
                sizes="112px"
                width="384"
                height="273"
                alt="Raventrix Technologies"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p>
              Website development, UI/UX design, local SEO, Google Business Profile support, AI automation, and practical business technology solutions for Tamil Nadu businesses.
            </p>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul>
              {serviceOptions.map((service) => (
                <li key={service}>
                  <a href="#services" className="transition hover:text-primary">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="footer-contact">
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

          <div className="footer-column footer-social">
            <h3>Follow Us</h3>
            <p>Creating digital solutions for better businesses.</p>
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer">Google Business Profile <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Raventrix Technologies. All rights reserved.</span>
          <span>Designed with purpose <b>·</b> Built for growth</span>
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
      <CapabilityStrip />
      <ServicesSection />
      <PortfolioSection />
      <TrustSection />
      <ProcessSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
