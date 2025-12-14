import { motion } from 'framer-motion';
import { ArrowRight, Download, Linkedin, Mail, Github } from 'lucide-react';
import raaghavPhoto from '@/assets/raaghav-photo.jpg';
import raaghavHero from '@/assets/raaghav-hero.png';

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
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6" />

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
                View Product Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/Raaghav_Agarwal_Resume.pdf" download className="btn-secondary">
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <img 
                src={raaghavPhoto} 
                alt="Raaghav Agarwal" 
                className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
              />
              <a 
                href="https://www.linkedin.com/in/raaghavagarwal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-ghost p-2"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:itraaghav@gmail.com" 
                className="btn-ghost p-2"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/raaghavagarwal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-ghost p-2"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <img 
              src={raaghavHero} 
              alt="Raaghav Agarwal" 
              className="max-h-[600px] w-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
