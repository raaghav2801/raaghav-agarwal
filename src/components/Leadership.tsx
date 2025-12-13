import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Lightbulb, Rocket, BarChart3, Users, MessageSquare, FileCheck, GitBranch } from 'lucide-react';

const operatingRhythm = [
  {
    phase: 'Discover',
    icon: Search,
    description: 'User research, competitive analysis, and opportunity identification',
    activities: ['Customer interviews', 'Market research', 'Data analysis', 'Problem definition'],
  },
  {
    phase: 'Define',
    icon: Lightbulb,
    description: 'Strategy formulation, PRD creation, and prioritization',
    activities: ['PRD authorship', 'Success metrics', 'MoSCoW prioritization', 'Stakeholder alignment'],
  },
  {
    phase: 'Deliver',
    icon: Rocket,
    description: 'Agile execution, cross-functional collaboration, and shipping',
    activities: ['Sprint planning', 'Design reviews', 'QA coordination', 'Launch management'],
  },
  {
    phase: 'Measure',
    icon: BarChart3,
    description: 'Analytics review, iteration, and continuous improvement',
    activities: ['A/B testing', 'Metrics review', 'User feedback', 'Iteration cycles'],
  },
];

const stakeholderApproach = [
  {
    icon: MessageSquare,
    title: 'Alignment',
    description: 'Regular syncs with engineering, design, and business stakeholders to ensure shared understanding and priorities.',
  },
  {
    icon: GitBranch,
    title: 'Trade-offs',
    description: 'Data-driven decision making with clear documentation of trade-offs and rationale for stakeholder visibility.',
  },
  {
    icon: FileCheck,
    title: 'Decision Logs',
    description: 'Maintaining transparent decision logs that capture context, options considered, and final choices.',
  },
];

const teamHighlights = [
  { metric: '4', label: 'Team members led' },
  { metric: '10+', label: 'Bootcamp sessions' },
  { metric: '3', label: 'Hiring loops owned' },
];

export const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="leadership" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Leadership & <span className="gradient-text">Operating Rhythm</span>
          </h2>
          <p className="section-subheading mx-auto">
            How I run product—from discovery to delivery and beyond.
          </p>
        </motion.div>

        {/* Operating Rhythm */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-center mb-8">How I Run Product</h3>
          
          <div className="grid md:grid-cols-4 gap-4 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-primary to-primary/50" />
            
            {operatingRhythm.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="relative"
              >
                {/* Phase number */}
                <div className="flex justify-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm relative z-10">
                    {index + 1}
                  </div>
                </div>

                <div className="glass-card p-6 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <phase.icon className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold">{phase.phase}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{phase.description}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stakeholder Management */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Stakeholder Management
            </h3>

            <div className="space-y-4">
              {stakeholderApproach.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Team Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-6">Team Leadership</h3>

            <div className="glass-card-elevated p-8 rounded-2xl">
              <div className="grid grid-cols-3 gap-6 mb-8">
                {teamHighlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold gradient-text mb-1">{item.metric}</div>
                    <div className="text-xs text-muted-foreground">{item.label}</div>
                  </motion.div>
                ))}
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Led cross-functional team of 4 engineers on AutoDev product
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Conducted bootcamp training sessions for new team members
                </li>
                <li className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Owned hiring loop for product and engineering roles
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
