import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ShieldCheck, Zap } from 'lucide-react';

export const Philosophy = () => {
  const concepts = [
    {
      number: '01',
      title: 'ATTENTION',
      icon: <Eye className="w-6 h-6 text-signature" />,
      tagline: 'Make the first 5 seconds count.',
      description: 'Visitors leave confusing websites immediately. Clean editorial typography, clear positioning, and fast page loads command instant focus before attention strays.',
    },
    {
      number: '02',
      title: 'TRUST',
      icon: <ShieldCheck className="w-6 h-6 text-signature" />,
      tagline: 'Make the business look established and credible.',
      description: 'Design creates perceived business value. High craftsmanship, modern visual execution, and transparent copy make small businesses look like market leaders.',
    },
    {
      number: '03',
      title: 'ACTION',
      icon: <Zap className="w-6 h-6 text-signature" />,
      tagline: 'Give visitors a compelling reason to reach out.',
      description: 'A beautiful site without conversion paths is just an ornament. Every layout guides visitors seamlessly towards WhatsApp inquiries, phone calls, or form submissions.',
    },
  ];

  return (
    <section id="philosophy" className="py-24 md:py-36 bg-card-light/40 dark:bg-card-dark/40 border-y border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-signature uppercase">
            <span>// BRAND PHILOSOPHY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-ink-light dark:text-ink-dark leading-tight">
            A website isn't decoration. <br />
            <span className="text-signature italic font-normal">It has a job to do.</span>
          </h2>

          <p className="text-base md:text-lg text-ink-muted-light dark:text-ink-muted-dark">
            Most developer portfolios showcase code syntax. My work focuses on business outcomes: converting unfamiliar visitors into paying clients through structured UX principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concepts.map((concept, idx) => (
            <motion.div
              key={concept.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group p-8 rounded-2xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark hover:border-signature transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-mono font-bold text-signature">
                    {concept.number}
                  </span>
                  <div className="p-3 rounded-xl bg-card-light dark:bg-card-dark group-hover:scale-110 transition-transform">
                    {concept.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-display font-extrabold text-ink-light dark:text-ink-dark tracking-wide uppercase">
                    {concept.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-signature">
                    {concept.tagline}
                  </p>
                </div>

                <p className="text-sm text-ink-muted-light dark:text-ink-muted-dark leading-relaxed">
                  {concept.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-border-light/60 dark:border-border-dark/60 text-[11px] font-mono text-ink-muted-light dark:text-ink-muted-dark uppercase tracking-wider">
                CORE PRINCIPLE {concept.number}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
