import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Rocket, TrendingUp, Users, Zap, Target } from 'lucide-react';
import { CountUp } from './CountUp';

const pillars = [
  {
    icon: Search,
    title: 'Product Strategy & Discovery',
    description: 'From market research and competitor analysis to MVP definition and prioritization frameworks like MoSCoW.',
    metrics: ['Competitive analysis', 'User research', 'PRD authorship', 'Prioritization'],
  },
  {
    icon: Rocket,
    title: 'Execution & Delivery',
    description: 'Building roadmaps, running A/B tests, conducting usability studies, and shipping on aggressive timelines.',
    metrics: ['Roadmap ownership', 'A/B testing', 'Usability testing', 'Agile delivery'],
  },
  {
    icon: TrendingUp,
    title: 'Scaling & Stakeholders',
    description: 'Driving enterprise pilots, aligning multi-team roadmaps, and delivering measurable NPS outcomes.',
    metrics: ['Enterprise PoV', 'Cross-team alignment', 'NPS improvement', 'Adoption'],
  },
];

const proofMetrics = [
  { icon: Users, value: 100, suffix: '+', label: 'AutoDev users / PMF' },
  { icon: Zap, value: 3, suffix: ' mo', label: 'MVP to launch' },
  { icon: TrendingUp, value: 8, suffix: '%', label: 'Revenue growth' },
  { icon: Target, value: 15, suffix: '%', label: 'Client savings' },
  { icon: Rocket, value: 7, suffix: '/10', label: 'CES (from 4/10)' },
  { icon: Zap, value: 40, suffix: '%', label: 'Fewer release failures' },
];

export const WhyHireMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="why-hire-me" className="py-24 md:py-32 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Why Hire <span className="gradient-text">Raaghav</span>?
          </h2>
          <p className="section-subheading mx-auto">
            A rare blend of engineering depth and product instincts, with a track record of shipping products that move metrics.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{pillar.description}</p>
              <div className="flex flex-wrap gap-2">
                {pillar.metrics.map((metric) => (
                  <span key={metric} className="tool-badge">
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card-elevated p-6 md:p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              Quantified Impact
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {proofMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="text-center p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
              >
                <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">
                  <CountUp end={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
