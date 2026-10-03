import React from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProjectCard = ({ project, onSelect, index }) => {
  const { setCursor, resetCursor } = useCursor();
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(project)}
      onMouseEnter={() => setCursor('view', 'EXPLORE')}
      onMouseLeave={resetCursor}
      className={`group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 md:py-16 border-b border-border-light dark:border-border-dark ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Project Visual Composition Frame */}
      <div
        className={`lg:col-span-7 overflow-hidden rounded-2xl border border-border-light dark:border-border-dark transition-all duration-500 group-hover:border-signature ${
          isEven ? 'lg:order-1' : 'lg:order-2'
        }`}
        style={{ backgroundColor: project.mockupTheme.bgColor }}
      >
        <div className="relative p-6 md:p-10 min-h-[320px] md:min-h-[420px] flex flex-col justify-between overflow-hidden">
          {/* Top Browser Bar UI Mockup Header */}
          <div className="flex items-center justify-between pb-4 border-b border-black/10 dark:border-white/10">
            <div className="flex space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
              <span className="w-3 h-3 rounded-full bg-green-400 opacity-80" />
            </div>
            <span className="text-[11px] font-mono tracking-wider opacity-60 text-black dark:text-white uppercase">
              {project.category}
            </span>
          </div>

          {/* Central Mockup Visual Content */}
          <div className="my-8 space-y-4 transform transition-transform duration-700 group-hover:scale-[1.02]">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/80 dark:bg-black/80 text-black dark:text-white shadow-sm">
              {project.typeLabel}
            </div>

            <h3
              className="text-2xl md:text-4xl font-display font-extrabold tracking-tight leading-tight"
              style={{ color: project.mockupTheme.textColor }}
            >
              {project.title}
            </h3>

            <p className="text-sm md:text-base opacity-80 font-sans max-w-lg" style={{ color: project.mockupTheme.textColor }}>
              {project.tagline}
            </p>
          </div>

          {/* Bottom Card Footer Features */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-black/10 dark:border-white/10">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2.5 py-1 rounded bg-black/5 dark:bg-white/10 text-black dark:text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Project Metadata & Business Copy */}
      <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
        <div className="flex items-center space-x-3">
          <span className="text-sm font-mono font-bold text-signature">{project.number}</span>
          <span className="text-xs font-mono uppercase tracking-widest text-ink-muted-light dark:text-ink-muted-dark">
            // {project.category}
          </span>
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-extrabold text-ink-light dark:text-ink-dark group-hover:text-signature transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-sm md:text-base text-ink-muted-light dark:text-ink-muted-dark leading-relaxed">
          {project.shortDescription}
        </p>

        {/* Feature Highlights */}
        <ul className="space-y-2">
          {project.features.slice(0, 3).map((feat, i) => (
            <li key={i} className="flex items-start space-x-2 text-xs md:text-sm text-ink-light dark:text-ink-dark">
              <CheckCircle2 className="w-4 h-4 text-signature shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* CTA Trigger */}
        <div className="pt-2">
          <span className="inline-flex items-center space-x-2 text-xs font-bold font-mono tracking-wider text-ink-light dark:text-ink-dark group-hover:text-signature transition-colors">
            <span>READ CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};
