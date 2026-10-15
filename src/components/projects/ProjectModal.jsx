import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowUpRight, MessageSquare, Code2, ShieldAlert, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../../data/contact';
import { useCursor } from '../../context/CursorContext';

export const ProjectModal = ({ project, onClose }) => {
  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const whatsappMessage = `Hi Sankaran, I reviewed your project case study "${project.title}" and I'd like to build something similar for my business.`;

  return (
    <AnimatePresence>
      <div
        data-lenis-prevent
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overscroll-contain"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-md"
        />

        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          data-lenis-prevent
          className="relative w-full max-w-4xl max-h-[90vh] bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark rounded-3xl shadow-2xl overflow-y-auto z-10 p-6 md:p-12 overscroll-contain"
        >
          <button
            onClick={onClose}
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className="absolute top-6 right-6 p-2 rounded-full border border-border-light dark:border-border-dark text-ink-light dark:text-ink-dark hover:border-signature hover:text-signature transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-4 pr-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-signature/10 text-signature">
                {project.number} / {project.category}
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-card-light dark:bg-card-dark text-ink-muted-light dark:text-ink-muted-dark">
                {project.typeLabel}
              </span>
            </div>

            <h2 id="project-modal-title" className="text-3xl md:text-5xl font-display font-extrabold text-ink-light dark:text-ink-dark tracking-tight">
              {project.title}
            </h2>

            <p className="text-lg font-medium text-signature">
              {project.tagline}
            </p>
          </div>

          <div
            className="my-8 p-8 md:p-12 rounded-2xl border border-border-light dark:border-border-dark shadow-inner flex flex-col md:flex-row md:items-center justify-between gap-6"
            style={{ backgroundColor: project.mockupTheme.bgColor }}
          >
            <h4
              className="text-xl md:text-2xl font-display font-bold max-w-xl"
              style={{ color: project.mockupTheme.textColor }}
            >
              {project.shortDescription}
            </h4>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white dark:bg-black text-black dark:text-white font-mono font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform shrink-0"
              >
                <span>VISIT LIVE SITE</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <div className="space-y-8 text-ink-light dark:text-ink-dark">
            <div className="space-y-3">
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-ink-muted-light dark:text-ink-muted-dark border-b border-border-light dark:border-border-dark pb-2">
                01 / Overview
              </h3>
              <p className="text-base leading-relaxed text-ink-muted-light dark:text-ink-muted-dark">
                {project.fullOverview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 p-6 rounded-2xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                <h4 className="text-sm font-bold font-mono text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  The Clinical & Technical Challenge
                </h4>
                <p className="text-sm leading-relaxed text-ink-muted-light dark:text-ink-muted-dark">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-3 p-6 rounded-2xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark">
                <h4 className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Strategic Approach
                </h4>
                <p className="text-sm leading-relaxed text-ink-muted-light dark:text-ink-muted-dark">
                  {project.approach}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-ink-muted-light dark:text-ink-muted-dark border-b border-border-light dark:border-border-dark pb-2">
                02 / Implemented Solution
              </h3>
              <p className="text-base leading-relaxed text-ink-muted-light dark:text-ink-muted-dark">
                {project.solution}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="text-sm font-bold font-mono text-ink-light dark:text-ink-dark uppercase tracking-wider flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-signature" />
                  <span>Key Features & Milestones</span>
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feat, i) => (
                    <li key={i} className="text-xs md:text-sm text-ink-muted-light dark:text-ink-muted-dark flex items-start space-x-2">
                      <span className="text-signature font-mono">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-sm font-bold font-mono text-ink-light dark:text-ink-dark uppercase tracking-wider flex items-center space-x-2">
                  <Code2 className="w-4 h-4 text-signature" />
                  <span>Technologies & Architecture</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark text-ink-light dark:text-ink-dark"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider">
                <ShieldAlert className="w-4 h-4 text-amber-500" />
                <span>Project Status Note</span>
              </div>
              <p className="text-xs md:text-sm leading-relaxed">
                {project.honestOutcome}
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={CONTACT_INFO.buildWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('talk')}
                onMouseLeave={resetCursor}
                className="px-6 py-3.5 rounded-full bg-signature text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg hover:bg-signature-hover transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>DISCUSS SIMILAR PROJECT ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-border-light dark:border-border-dark font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:border-signature hover:text-signature transition-colors"
                >
                  <span>VISIT SITE</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-ink-muted-light hover:text-ink-light dark:text-ink-muted-dark dark:hover:text-ink-dark underline"
            >
              Close case study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
