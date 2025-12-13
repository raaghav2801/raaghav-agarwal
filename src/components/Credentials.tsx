import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Trophy, Award, Calendar, MapPin, Briefcase } from 'lucide-react';

const education = [
  {
    institution: 'Indian School of Business',
    degree: 'Post Graduate Programme (PGP)',
    period: '2025 – 2026',
    location: 'Hyderabad, India',
    highlights: [
      'Intended majors: Product Management, Technology',
      'Product case competition: projected +15% retention with voice-to-order feature',
      'Built CampusEats: campus cafeteria ordering platform',
      'Leading sports league roadmap and community engagement',
    ],
  },
  {
    institution: 'Manipal Institute of Technology',
    degree: 'B.Tech, Information Technology',
    period: '2017 – 2021',
    location: 'Manipal, India',
    highlights: [
      'Strong foundation in software engineering and system design',
      'Built multiple technical projects and led engineering teams',
      'Active in hackathons and technical competitions',
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: 'Product Case Competition',
    description: 'Projected +15% retention with voice-to-order and reminder features; +9% MoM order volume',
  },
  {
    icon: Award,
    title: 'Hackathon Wins',
    description: 'Multiple hackathon victories and technical competition awards',
  },
  {
    icon: Briefcase,
    title: 'Enterprise Impact',
    description: 'Delivered $50K ARR contracts through structured PoV framework',
  },
];

export const Credentials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="credentials" className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">
            Credentials & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading mx-auto">
            Academic foundation and achievements that shaped my product thinking.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex gap-6"
                  >
                    {/* Timeline dot */}
                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 border-4 border-background items-center justify-center z-10">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 glass-card p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{edu.institution}</h3>
                          <p className="text-muted-foreground">{edu.degree}</p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span className="flex items-center gap-1 text-sm text-primary font-medium">
                            <Calendar className="w-3 h-3" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            {edu.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-4">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg font-semibold mb-6"
            >
              Key Achievements
            </motion.h3>

            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="glass-card p-5 group hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <achievement.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
