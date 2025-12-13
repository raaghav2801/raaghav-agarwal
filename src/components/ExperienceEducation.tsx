import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { GraduationCap, Building2, Code2, Briefcase } from 'lucide-react';

type ViewMode = 'timeline' | 'list';

interface Milestone {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  icon: typeof GraduationCap;
  bullets: string[];
  tags: string[];
  type: 'education' | 'work';
}

const milestones: Milestone[] = [
  {
    id: 'manipal',
    organization: 'Manipal Institute of Technology',
    role: 'B.Tech, Information Technology',
    period: '2018 – 2022',
    location: 'Manipal, India',
    icon: GraduationCap,
    bullets: [
      'Strong foundation in software engineering and system design',
      'Built multiple technical projects and led engineering teams',
      'Active in hackathons and technical competitions',
    ],
    tags: ['System Design', 'Engineering', 'Leadership'],
    type: 'education',
  },
  {
    id: 'microsoft',
    organization: 'Microsoft',
    role: 'Software Engineer',
    period: '2022 – 2023',
    location: 'Hyderabad, India',
    icon: Building2,
    bullets: [
      'Architected and shipped AutoDev low-code automation platform',
      'Achieved 100+ users and PMF in 3 months',
      'Improved CES from 4/10 to 7/10 through UX iterations',
      'Reduced build time from 4 weeks to 2 weeks',
    ],
    tags: ['0→1', 'Platform', 'Automation', 'Low-Code'],
    type: 'work',
  },
  {
    id: 'amazon',
    organization: 'Amazon',
    role: 'Software Engineer',
    period: '2023 – 2025',
    location: 'Hyderabad, India',
    icon: Code2,
    bullets: [
      'Led microservices migration reducing release failures by 40%',
      'Delivered $50K ARR contracts through structured PoV framework',
      'Drove 8% revenue growth and 15% client savings',
    ],
    tags: ['Microservices', 'PoV Framework', 'Stakeholder Mgmt'],
    type: 'work',
  },
  {
    id: 'isb',
    organization: 'Indian School of Business',
    role: 'Post Graduate Programme (PGP)',
    period: '2025 – 2026',
    location: 'Hyderabad, India',
    icon: Briefcase,
    bullets: [
      'Intended majors: Product Management, Technology',
      'Product case competition: projected +15% retention with voice-to-order',
      'Built CampusEats: campus cafeteria ordering platform',
      'Leading sports league roadmap and community engagement',
    ],
    tags: ['Product Management', 'Strategy', 'Experimentation'],
    type: 'education',
  },
];

const TimelineNode = ({ 
  milestone, 
  index, 
  isActive, 
  onHover, 
  onLeave,
  onClick,
  isMobileExpanded 
}: { 
  milestone: Milestone; 
  index: number; 
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  isMobileExpanded: boolean;
}) => {
  const Icon = milestone.icon;
  
  return (
    <div className="relative flex flex-col items-center">
      {/* Node */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: index * 0.1, duration: 0.3 }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        onClick={onClick}
        className={`
          relative z-10 w-14 h-14 rounded-full flex items-center justify-center
          transition-all duration-200 cursor-pointer
          ${isActive 
            ? 'bg-gold/20 border-2 border-gold shadow-[0_0_0_6px_rgba(212,175,55,0.12)]' 
            : 'bg-background border border-gold/30 hover:border-gold/50'
          }
        `}
      >
        <Icon className={`w-6 h-6 ${isActive ? 'text-gold' : 'text-gold/70'}`} />
      </motion.button>

      {/* Label below node */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.15, duration: 0.3 }}
        className="mt-4 text-center max-w-[140px]"
      >
        <p className="text-xs font-medium text-gold/80">{milestone.period}</p>
        <p className="text-sm font-semibold text-foreground mt-1 leading-tight">
          {milestone.organization}
        </p>
      </motion.div>

      {/* Desktop Hover Panel */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-full mt-24 left-1/2 -translate-x-1/2 w-80 z-50"
          >
            <div className="bg-[#0F0F12]/95 backdrop-blur-md border border-gold/20 rounded-xl p-5 shadow-2xl">
              <h4 className="text-gold font-heading font-semibold text-lg">
                {milestone.organization}
              </h4>
              <p className="text-foreground font-medium mt-1">{milestone.role}</p>
              <p className="text-muted-foreground text-sm mt-0.5">
                {milestone.period} • {milestone.location}
              </p>
              
              <ul className="mt-4 space-y-2">
                {milestone.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {milestone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-gold border border-gold/30 rounded-full bg-gold/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Accordion */}
      <AnimatePresence>
        {isMobileExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden w-full mt-4 overflow-hidden"
          >
            <div className="bg-[#0F0F12]/95 border border-gold/20 rounded-xl p-4">
              <p className="text-foreground font-medium">{milestone.role}</p>
              <p className="text-muted-foreground text-sm mt-0.5">
                {milestone.location}
              </p>
              
              <ul className="mt-3 space-y-2">
                {milestone.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {milestone.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs font-medium text-gold border border-gold/30 rounded-full bg-gold/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ListView = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {milestones.map((milestone, index) => {
        const Icon = milestone.icon;
        const isExpanded = expandedId === milestone.id;
        
        return (
          <motion.div
            key={milestone.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <button
              onClick={() => setExpandedId(isExpanded ? null : milestone.id)}
              className="w-full text-left"
            >
              <div className={`
                glass-card p-5 transition-all duration-200
                ${isExpanded ? 'border-gold/30' : 'hover:border-gold/20'}
              `}>
                <div className="flex items-start gap-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                    ${isExpanded ? 'bg-gold/20' : 'bg-gold/10'}
                  `}>
                    <Icon className={`w-6 h-6 ${isExpanded ? 'text-gold' : 'text-gold/70'}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-gold font-heading font-semibold">
                          {milestone.organization}
                        </h4>
                        <p className="text-foreground font-medium mt-0.5">{milestone.role}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-sm text-gold/80 font-medium">{milestone.period}</p>
                        <p className="text-xs text-muted-foreground">{milestone.location}</p>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <ul className="mt-4 space-y-2">
                            {milestone.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                                {bullet}
                              </li>
                            ))}
                          </ul>
                          
                          <div className="flex flex-wrap gap-2 mt-4">
                            {milestone.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2.5 py-1 text-xs font-medium text-gold border border-gold/30 rounded-full bg-gold/5"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

export const ExperienceEducation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [viewMode, setViewMode] = useState<ViewMode>('timeline');
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [mobileExpandedNode, setMobileExpandedNode] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            A timeline of the products I shipped, the systems I scaled, and the foundations I built.
          </p>
        </motion.div>

        {/* View Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-1 p-1 bg-background/50 border border-gold/20 rounded-lg">
            <button
              onClick={() => setViewMode('timeline')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                viewMode === 'timeline'
                  ? 'bg-gold/20 text-gold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Timeline
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                viewMode === 'list'
                  ? 'bg-gold/20 text-gold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              List
            </button>
          </div>
        </motion.div>

        {viewMode === 'timeline' ? (
          <>
            {/* Desktop Horizontal Timeline */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute top-7 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
              
              <div className="flex justify-between items-start max-w-5xl mx-auto">
                {milestones.map((milestone, index) => (
                  <TimelineNode
                    key={milestone.id}
                    milestone={milestone}
                    index={index}
                    isActive={activeNode === milestone.id}
                    onHover={() => setActiveNode(milestone.id)}
                    onLeave={() => setActiveNode(null)}
                    onClick={() => {}}
                    isMobileExpanded={false}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="md:hidden relative">
              {/* Timeline Line */}
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold/25 via-gold/25 to-transparent" />
              
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.id} className="flex gap-6">
                    <TimelineNode
                      milestone={milestone}
                      index={index}
                      isActive={false}
                      onHover={() => {}}
                      onLeave={() => {}}
                      onClick={() => setMobileExpandedNode(
                        mobileExpandedNode === milestone.id ? null : milestone.id
                      )}
                      isMobileExpanded={mobileExpandedNode === milestone.id}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <ListView />
        )}
      </div>
    </section>
  );
};
