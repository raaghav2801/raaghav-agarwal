import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ExternalLink, Target, Users, Zap, TrendingUp, Layers, Brain, FileText, Rocket, Clock, CheckCircle2 } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  type: 'flagship' | 'mini';
  tags: string[];
  preview: string;
  problem: string;
  users: string;
  constraints: string;
  whatIDid: string[];
  artifacts: string[];
  outcomes: { label: string; value: string }[];
  nextSteps: string[];
  toolkit: string[];
  metrics?: { label: string; value: string; icon: React.ElementType }[];
  externalLink?: string | null; // null = internal/confidential, undefined = no link shown
  links?: { label: string; url: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'isl-portals',
    title: 'Auctions Portal & Scorecard Portal – ISB Super League',
    subtitle: 'E2E auctions and live scorecard portals for ISL',
    type: 'flagship',
    tags: ['0→1', 'Platform', 'Consumer'],
    preview: 'Built an E2E auctions and scorecard portal defining use cases for both admin and spectator side ensuring seamlessness for all views for ISL.',
    problem: 'ISL needed a seamless digital experience for both admins running the auction and spectators following teams, players, and live scores across the tournament.',
    users: 'ISL admins managing auctions and match scoring, plus students and spectators tracking teams, bids, and live scorecards.',
    constraints: 'Tight tournament timeline, real-time data needs across auctions and live matches, and a single product had to serve both admin workflows and spectator views.',
    whatIDid: [
      'Defined end-to-end use cases for both admin and spectator sides of the auctions and scorecard portals',
      'Designed seamless flows ensuring all views worked consistently across roles and devices for ISL',
      'Shipped the auctions portal used live on auction day, reaching 1.1K unique visitors',
      'Shipped the scorecard portal used through the tournament, reaching 9.6K unique visitors and 46.1K page views',
      'Coordinated with the live YouTube broadcast of the auctions to keep on-screen data in sync with the portal',
    ],
    artifacts: [],
    outcomes: [
      { label: 'Auctions Unique Visitors', value: '1.1K' },
      { label: 'Scorecard Unique Visitors', value: '9.6K' },
      { label: 'Scorecard Page Views', value: '46.1K' },
    ],
    nextSteps: [],
    toolkit: ['Product Definition', 'Use Case Mapping', 'Admin + Consumer UX', 'Live Ops', 'Analytics'],
    metrics: [
      { label: 'Auction Visitors', value: '1.1K', icon: Users },
      { label: 'Scorecard Visitors', value: '9.6K', icon: TrendingUp },
      { label: 'Page Views', value: '46.1K', icon: Zap },
    ],
    externalLink: 'https://auctions.islisb.org',
    links: [
      { label: 'Auctions Portal', url: 'https://auctions.islisb.org' },
      { label: 'Scorecard Portal', url: 'https://scorecard.islisb.org' },
      { label: 'Live Auctions (YouTube)', url: 'https://www.youtube.com/watch?v=rxVYU7UHPeI&list=PLfMKrLoWREzrQBijHu6MSgwx__gRvyUzg' },
    ],
  },
  {
    id: 'autodev',
    title: 'AutoDev',
    subtitle: 'Low-code automation builder for non-technical users',
    type: 'flagship',
    tags: ['0→1', 'PMF', 'Enterprise'],
    preview: 'Built and launched a visual low-code tool enabling non-technical users to build automations—achieved PMF with 100+ active users.',
    problem: 'Enterprise clients needed automation capabilities but lacked technical resources. Manual processes were causing delays and errors.',
    users: 'Operations teams, business analysts, and process owners at enterprise clients who needed to automate workflows without writing code.',
    constraints: 'Limited engineering bandwidth, tight 3-month deadline, need to integrate with existing enterprise systems.',
    whatIDid: [
      'Conducted market research and competitive analysis to identify gaps',
      'Defined MVP scope using MoSCoW prioritization framework',
      'Created PRD and collaborated with design on user flows',
      'Built drag-and-drop improvements based on usability testing feedback',
      'Ran A/B tests to optimize onboarding and reduce time-to-first-automation',
      'Led phased rollout and monitored adoption metrics',
    ],
    artifacts: ['PRD Document', 'Competitive Analysis', 'User Flow Wireframes', 'A/B Test Results', 'Roadmap'],
    outcomes: [
      { label: 'Users at PMF', value: '100+' },
      { label: 'MVP Timeline', value: '3 months' },
      { label: 'Revenue Growth', value: '+8%' },
      { label: 'Client Savings', value: '15%' },
      { label: 'CES Improvement', value: '4 → 7/10' },
      { label: 'Build Time', value: '4 → 2 weeks' },
    ],
    nextSteps: [
      'Expand template library with industry-specific workflows',
      'Add AI-powered suggestions for automation optimization',
      'Build marketplace for community-created automation blocks',
    ],
    toolkit: ['User Research', 'PRD', 'MoSCoW', 'A/B Testing', 'Usability Testing', 'Analytics'],
    metrics: [
      { label: 'Users', value: '100+', icon: Users },
      { label: 'Revenue', value: '+8%', icon: TrendingUp },
      { label: 'CES', value: '7/10', icon: Target },
    ],
    externalLink: null, // Internal/confidential
  },
  {
    id: 'campuseats',
    title: 'CampusEats',
    subtitle: 'ISB cafeteria ordering platform',
    type: 'flagship',
    tags: ['0→1', 'Consumer', 'Mobile'],
    preview: 'Built a digital ordering system for campus cafeteria, projected to serve 100+ DAU and process 180+ daily orders.',
    problem: 'Long queues, order errors, and lack of visibility into menu availability were degrading the cafeteria experience for students and staff.',
    users: 'ISB students, faculty, and staff who eat at campus cafeterias daily.',
    constraints: 'Tight academic calendar, needed buy-in from cafeteria vendors, limited development resources.',
    whatIDid: [
      'Conducted primary interviews with 30+ users to understand pain points',
      'Defined requirements and success metrics (DAU, orders/day, GMV)',
      'Designed user journey from menu browsing to order pickup',
      'Built MVP with real-time order status and menu management',
      'Established metrics dashboard for ongoing optimization',
    ],
    artifacts: ['User Interview Synthesis', 'Requirements Doc', 'User Journey Map', 'Metrics Dashboard'],
    outcomes: [
      { label: 'Projected DAU', value: '100+' },
      { label: 'Daily Orders', value: '180+' },
      { label: 'Time to Order', value: '-60%' },
    ],
    nextSteps: [
      'Add dietary preference filters and allergen warnings',
      'Implement loyalty program and meal bundles',
      'Expand to multiple campus locations',
    ],
    toolkit: ['User Research', 'Requirements', 'Journey Mapping', 'Metrics Definition', 'MVP'],
    metrics: [
      { label: 'DAU', value: '100+', icon: Users },
      { label: 'Orders/Day', value: '180+', icon: Zap },
      { label: 'Efficiency', value: '+60%', icon: Clock },
    ],
    externalLink: 'https://isbeats.lovable.app/',
  },
  {
    id: 'ai-negotiator',
    title: 'AI Negotiator',
    subtitle: 'AI copilot for contract negotiations',
    type: 'flagship',
    tags: ['AI/ML', 'Enterprise', 'Concept'],
    preview: 'Designed an end-to-end AI negotiation workspace with clause explanations, suggested counters, and scenario simulation.',
    problem: 'Legal and procurement teams spend excessive time on routine contract negotiations, lacking contextual guidance and historical insights.',
    users: 'Legal counsel, procurement managers, and deal desk teams handling high-volume contract negotiations.',
    constraints: 'Data privacy requirements, need for explainable AI, integration with existing contract management systems.',
    whatIDid: [
      'Designed end-to-end negotiation workspace with AI-powered features',
      'Created clause explanation engine for complex legal language',
      'Built suggested counter-offer system based on precedent analysis',
      'Developed scenario simulator for what-if analysis',
      'Designed Negotiation Memory feature to reuse prior context and decisions',
    ],
    artifacts: ['Product Concept Doc', 'Feature Specifications', 'UI/UX Mockups', 'AI System Design'],
    outcomes: [
      { label: 'Concept Status', value: 'Ready for Dev' },
      { label: 'Features Designed', value: '8 modules' },
      { label: 'Target Efficiency', value: '+40%' },
    ],
    nextSteps: [
      'Validate with pilot customers and refine based on feedback',
      'Build foundational AI models with legal domain expertise',
      'Develop integration APIs for CRM and CLM systems',
    ],
    toolkit: ['Product Strategy', 'AI/ML', 'System Design', 'UX Design', 'Requirements'],
    metrics: [
      { label: 'Modules', value: '8', icon: Layers },
      { label: 'AI Features', value: '5', icon: Brain },
      { label: 'Status', value: 'Ready', icon: CheckCircle2 },
    ],
    externalLink: 'https://ai-negotiatior-rvd.lovable.app',
  },
];

const CaseStudyCard = ({ study, onClick }: { study: CaseStudy; onClick: () => void }) => {
  const isFlashship = study.type === 'flagship';

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 0 20px rgba(212, 175, 55, 0.15)' }}
      className={`glass-card cursor-pointer group overflow-hidden relative ${
        isFlashship ? 'p-6 md:p-8' : 'p-5'
      } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={`Open case study: ${study.title}`}
    >
      {/* Tags and Arrow */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1 text-muted-foreground group-hover:text-primary transition-all">
          <span className="text-xs hidden md:inline opacity-0 group-hover:opacity-100 transition-opacity">Open</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      <h3 className={`font-bold mb-2 ${isFlashship ? 'text-2xl' : 'text-xl'}`}>{study.title}</h3>
      <p className="text-sm text-muted-foreground mb-2">{study.subtitle}</p>

      {/* External Link Row */}
      {study.externalLink !== undefined && (
        <div className="flex items-center gap-2 mb-4">
          <ExternalLink className="w-3.5 h-3.5 text-primary/70" />
          {study.externalLink === null ? (
            <span className="text-xs text-muted-foreground italic">Internal (confidential)</span>
          ) : (
            <a
              href={study.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="text-xs text-primary/80 hover:text-primary underline underline-offset-2 transition-colors"
            >
              View Live Project
            </a>
          )}
        </div>
      )}

      <p className="text-muted-foreground leading-relaxed mb-6">{study.preview}</p>

      {isFlashship && study.metrics && (
        <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <metric.icon className="w-4 h-4 text-primary mx-auto mb-1" />
              <div className="text-lg font-bold gradient-text">{metric.value}</div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Click to open indicator */}
      <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-center gap-2 text-xs text-muted-foreground md:opacity-0 md:group-hover:opacity-100 transition-opacity">
        <span className="hidden md:inline">Click to open case study</span>
        <span className="md:hidden">Tap to open</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
};

const CaseStudyModal = ({ study, onClose }: { study: CaseStudy; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto bg-background/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl my-8 glass-card-elevated rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 glass-card-elevated border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              {study.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <button onClick={onClose} className="btn-ghost p-2" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{study.title}</h2>
            <p className="text-xl text-muted-foreground">{study.subtitle}</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {study.outcomes.map((outcome) => (
              <div key={outcome.label} className="metric-card">
                <span className="metric-value">{outcome.value}</span>
                <span className="metric-label">{outcome.label}</span>
              </div>
            ))}
          </div>

          {/* Problem, Users, Constraints */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Target className="w-4 h-4" />
                Problem
              </div>
              <p className="text-muted-foreground">{study.problem}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Users className="w-4 h-4" />
                Users
              </div>
              <p className="text-muted-foreground">{study.users}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                <Zap className="w-4 h-4" />
                Constraints
              </div>
              <p className="text-muted-foreground">{study.constraints}</p>
            </div>
          </div>

          {/* What I Did */}
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-primary" />
              What I Did
            </h3>
            <ul className="space-y-3">
              {study.whatIDid.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>


          {/* PM Toolkit */}
          <div>
            <h3 className="text-xl font-semibold mb-4">PM Toolkit Used</h3>
            <div className="flex flex-wrap gap-2">
              {study.toolkit.map((tool) => (
                <span key={tool} className="kpi-chip">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const filters = ['All', '0→1', 'Enterprise', 'AI/ML', 'Platform', 'GTM'];
  const flagshipStudies = caseStudies.filter((s) => s.type === 'flagship');
  const miniStudies = caseStudies.filter((s) => s.type === 'mini');

  const filteredFlagship = filter && filter !== 'All'
    ? flagshipStudies.filter((s) => s.tags.includes(filter))
    : flagshipStudies;

  const filteredMini = filter && filter !== 'All'
    ? miniStudies.filter((s) => s.tags.includes(filter))
    : miniStudies;

  return (
    <section id="case-studies" className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-4">
            Product <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="section-subheading mx-auto">
            Deep dives into products I've shipped—from discovery to measurable outcomes.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f === 'All' ? null : f)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                (filter === null && f === 'All') || filter === f
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-muted-foreground hover:text-foreground'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Flagship Case Studies */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {filteredFlagship.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <CaseStudyCard study={study} onClick={() => setSelectedStudy(study)} />
            </motion.div>
          ))}
        </div>

        {/* Mini Case Studies - displayed inline without header */}
        {filteredMini.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
            {filteredMini.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <CaseStudyCard study={study} onClick={() => setSelectedStudy(study)} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedStudy && (
          <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};
