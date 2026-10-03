import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/process';

export const Process = () => {
  return (
    <section id="process" className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
      <div className="space-y-4 max-w-2xl">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-signature uppercase">
          <span>// WORKING METHODOLOGY</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-ink-light dark:text-ink-dark uppercase">
          HOW WE WORK TOGETHER
        </h2>

        <p className="text-base md:text-lg text-ink-muted-light dark:text-ink-muted-dark">
          A predictable 4-step process that eliminates technical headaches and delivers a production-ready website on schedule.
        </p>
      </div>

      <div className="relative">
        <div className="hidden lg:block absolute top-12 left-12 right-12 h-0.5 bg-border-light dark:bg-border-dark -z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark hover:border-signature transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-full bg-signature text-white font-mono font-extrabold flex items-center justify-center text-lg shadow-md">
                    {step.number}
                  </div>
                  <span className="text-xs font-mono font-semibold text-ink-muted-light dark:text-ink-muted-dark">
                    PHASE 0{idx + 1}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-display font-extrabold text-ink-light dark:text-ink-dark tracking-wide uppercase">
                    {step.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-signature">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-sm text-ink-muted-light dark:text-ink-muted-dark leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-light/60 dark:border-border-dark/60 space-y-2">
                <span className="text-[11px] font-mono text-ink-muted-light dark:text-ink-muted-dark uppercase tracking-wider block">
                  DELIVERABLES:
                </span>
                <ul className="space-y-1">
                  {step.deliverables.map((item, i) => (
                    <li key={i} className="text-xs text-ink-light dark:text-ink-dark flex items-center space-x-2">
                      <span className="text-signature font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
