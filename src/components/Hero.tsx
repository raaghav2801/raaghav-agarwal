import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, Github } from 'lucide-react';
import { CountUp } from './CountUp';

const kpiData = [
  { value: 100, suffix: '+', label: 'Users at PMF', highlight: true },
  { value: 8, suffix: '%', label: 'Revenue Growth' },
  { value: 3, suffix: ' mo', label: 'MVP to Launch' },
  { value: 84, suffix: '%', label: 'NPS Score' },
  { value: 40, suffix: '%', label: 'Fewer Failures' },
  { value: 15, suffix: 'K+', label: 'Hours Saved' },
];

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute inset-0 opacity-60"
          style={{ background: 'var(--gradient-mesh)' }}
        />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'hsl(199 89% 48% / 0.08)' }}
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'hsl(45 93% 58% / 0.05)' }}
          animate={{ 
            x: [0, -40, 0], 
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
              <span className="kpi-chip">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
              I turn ambiguity into{' '}
              <span className="gradient-text">shipped products</span>{' '}
              and measurable impact.
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ex-SWE turned product builder with experience launching low-code automation products, driving adoption, improving customer effort scores, and delivering operational savings at scale.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <a href="#case-studies" className="btn-primary">
                View Case Studies
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#resume" className="btn-secondary">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <a 
                href="[LINKEDIN_URL]" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-ghost p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:[EMAIL]" 
                className="btn-ghost p-2"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="[GITHUB_OR_WEBSITE_URL]" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-ghost p-2"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: KPI Card Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card-elevated p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Product Impact Snapshot
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {kpiData.map((kpi, index) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className={`metric-card ${kpi.highlight ? 'ring-1 ring-primary/30' : ''}`}
                  >
                    <span className="metric-value">
                      <CountUp end={kpi.value} suffix={kpi.suffix} duration={2000} />
                    </span>
                    <span className="metric-label">{kpi.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
