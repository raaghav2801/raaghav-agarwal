import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, FileText, Rocket } from 'lucide-react';

const pillars = [
  {
    icon: Search,
    title: 'Discover the Signal',
    description: 'I ground decisions in user pain, market context, and data—so we solve the right problem before we build.',
    metrics: ['Customer interviews', 'Market mapping', 'Data analysis', 'Problem framing'],
  },
  {
    icon: FileText,
    title: 'Define the Strategy',
    description: 'I translate insight into a clear plan: crisp PRDs, success metrics, and trade-offs that teams can execute against.',
    metrics: ['PRD authorship', 'Success metrics', 'MoSCoW prioritization', 'Stakeholder alignment'],
  },
  {
    icon: Rocket,
    title: 'Ship and Scale Outcomes',
    description: 'I ship iteratively, validate with experiments, and scale what works—optimizing for adoption, reliability, and measurable impact.',
    metrics: ['A/B testing', 'Usability testing', 'Enterprise PoV', 'Cross-team roadmap'],
  },
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
            How I <span className="gradient-text">Build Products</span>
          </h2>
          <p className="section-subheading mx-auto">
            A concise view of the playbook I use to move metrics—across discovery, delivery, and scale.
          </p>
        </motion.div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
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
              <h3 className="text-xl font-semibold mb-3 gradient-text">{pillar.title}</h3>
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

      </div>
    </section>
  );
};
