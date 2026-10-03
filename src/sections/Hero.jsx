import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, MessageSquare, ArrowDown } from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { useCursor } from '../context/CursorContext';
import { CONTACT_INFO } from '../data/contact';

export const Hero = () => {
  const { setCursor, resetCursor } = useCursor();

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-wrap items-center justify-between gap-4 border-b border-border-light dark:border-border-dark pb-6"
      >
        <div className="flex items-center space-x-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-semibold tracking-wider text-ink-muted-light dark:text-ink-muted-dark uppercase">
            AVAILABLE FOR FREELANCE PROJECTS 
          </span>
        </div>

        <span className="text-xs font-mono text-ink-muted-light dark:text-ink-muted-dark">
          BASED IN KERALA, INDIA // GLOBAL REMOTE
        </span>
      </motion.div>

      <div className="my-auto py-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-2"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-extrabold tracking-tighter leading-[0.9] text-ink-light dark:text-ink-dark uppercase select-none">
            WEBSITES <br />
            <span className="text-signature italic font-normal">THAT HAVE</span> <br />
            A JOB TO DO.
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end pt-4"
        >
          <p className="md:col-span-7 text-lg md:text-2xl font-sans font-medium text-ink-muted-light dark:text-ink-muted-dark leading-relaxed">
            I build fast, conversion-focused websites for small businesses, freelancers, and ambitious professionals. Built for performance, trust, and business results.
          </p>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <MagneticButton>
              <a
                href={CONTACT_INFO.buildWhatsAppUrl(
                  "Hi Sankaran, I found your portfolio and I'd like to discuss starting a website project."
                )}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('talk')}
                onMouseLeave={resetCursor}
                className="group flex items-center space-x-3 px-8 py-4 rounded-full bg-signature text-white font-display font-bold text-sm tracking-wider uppercase shadow-xl hover:bg-signature-hover transition-colors"
              >
                <span>START A PROJECT</span>
                <MessageSquare className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#work"
                onClick={handleScrollToWork}
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="group flex items-center space-x-2 px-6 py-4 rounded-full border border-border-light dark:border-border-dark text-ink-light dark:text-ink-dark font-display font-bold text-sm tracking-wider uppercase hover:border-signature hover:text-signature transition-colors"
              >
                <span>EXPLORE WORK</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex items-center justify-between pt-6 border-t border-border-light dark:border-border-dark text-xs font-mono text-ink-muted-light dark:text-ink-muted-dark"
      >
        <div className="flex items-center space-x-2 animate-bounce">
          <ArrowDown className="w-4 h-4 text-signature" />
          <span>SCROLL TO DISCOVER PHILOSOPHY</span>
        </div>

        <div className="hidden sm:flex items-center space-x-4">
          <span>01 // ATTENTION</span>
          <span>•</span>
          <span>02 // TRUST</span>
          <span>•</span>
          <span>03 // ACTION</span>
        </div>
      </motion.div>
    </section>
  );
};
