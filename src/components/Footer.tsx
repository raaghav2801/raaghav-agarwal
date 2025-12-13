import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Raaghav Agarwal.</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-destructive" /> using Lovable
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Last updated: December 2024
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-ghost p-2 rounded-full"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
