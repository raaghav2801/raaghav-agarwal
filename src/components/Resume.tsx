import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Eye, FileText, MessageCircle } from 'lucide-react';

export const Resume = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="resume" className="py-24 md:py-32 bg-secondary/20" ref={ref}>
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-heading mb-4">
            Get My <span className="gradient-text">Resume</span>
          </h2>
          <p className="section-subheading mx-auto mb-12">
            A comprehensive overview of my product experience and achievements.
          </p>

          {/* Resume Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="glass-card-elevated p-8 md:p-12 rounded-2xl"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl font-bold mb-2">Raaghav Agarwal</h3>
            <p className="text-muted-foreground mb-8">Product Manager • Ex-Software Engineer</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="[RESUME_PDF_URL]"
                download="Raaghav_Agarwal_Resume.pdf"
                className="btn-primary"
              >
                <Download className="w-4 h-4" />
                Download Resume (PDF)
              </a>
              <button
                onClick={() => {
                  // Placeholder for inline view functionality
                  alert('Resume viewer will be available here. Please download the PDF for now.');
                }}
                className="btn-secondary"
              >
                <Eye className="w-4 h-4" />
                View Resume Inline
              </button>
            </div>

            {/* Resume Preview Placeholder */}
            <div className="aspect-[8.5/11] max-w-md mx-auto bg-secondary/50 rounded-lg border border-border flex items-center justify-center">
              <div className="text-center p-6">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground text-sm">
                  Resume preview will appear here once the PDF is uploaded.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MessageCircle className="w-4 h-4" />
                Want the one-page version? Just ask!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
