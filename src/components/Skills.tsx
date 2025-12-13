import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, FileText, BarChart3, FlaskConical, GitBranch, Database, Cloud, Code2, Figma, Wrench, Cpu, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Product',
    icon: Search,
    color: 'primary',
    skills: [
      { name: 'Discovery & Research', icon: Search },
      { name: 'PRD & Specs', icon: FileText },
      { name: 'Roadmapping', icon: GitBranch },
      { name: 'Prioritization', icon: BarChart3 },
      { name: 'A/B Testing', icon: FlaskConical },
      { name: 'Metrics & Analytics', icon: BarChart3 },
    ],
  },
  {
    title: 'Data & Tech',
    icon: Database,
    color: 'accent',
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'AWS', icon: Cloud },
      { name: 'APIs & Integrations', icon: Code2 },
      { name: 'System Design', icon: Cpu },
      { name: 'Automation', icon: Wrench },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'primary',
    skills: [
      { name: 'Figma', icon: Figma },
      { name: 'Postman', icon: Terminal },
      { name: 'Asana', icon: Wrench },
      { name: 'Notion', icon: FileText },
      { name: 'Lovable', icon: Code2 },
    ],
  },
];

const techCredentials = [
  { label: 'C#', icon: Code2 },
  { label: '.NET', icon: Code2 },
  { label: 'C++', icon: Code2 },
  { label: 'Python', icon: Terminal },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            PM <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subheading mx-auto">
            The capabilities and tools I bring to every product challenge.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  category.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                }`}>
                  <category.icon className={`w-5 h-5 ${
                    category.color === 'accent' ? 'text-accent' : 'text-primary'
                  }`} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <skill.icon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Credentials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass-card p-6 max-w-2xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-muted-foreground">
              <Terminal className="w-4 h-4" />
              Engineering Background
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {techCredentials.map((cred) => (
                <span key={cred.label} className="tool-badge">
                  <cred.icon className="w-3 h-3" />
                  {cred.label}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
