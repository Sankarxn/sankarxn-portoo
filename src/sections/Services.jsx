import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../data/services';
import { CheckCircle2, ArrowUpRight, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/contact';
import { useCursor } from '../context/CursorContext';

export const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const { setCursor, resetCursor } = useCursor();

  return (
    <section id="services" className="py-24 md:py-36 bg-card-light/50 dark:bg-card-dark/50 border-y border-border-light dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-border-light dark:border-border-dark">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-signature uppercase">
              <span>// SERVICES & CAPABILITIES</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-ink-light dark:text-ink-dark uppercase">
              WHAT I CAN BUILD FOR YOU
            </h2>

            <p className="text-base md:text-lg text-ink-muted-light dark:text-ink-muted-dark">
              Every service is structured around business clarity and conversion UX. Hover or select a service to explore specific deliverables.
            </p>
          </div>

          <a
            href={CONTACT_INFO.buildWhatsAppUrl("Hi Sankaran, I'd like to ask about your web development services.")}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursor('talk')}
            onMouseLeave={resetCursor}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-signature text-white font-display font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-signature-hover transition-colors shrink-0"
          >
            <span>INQUIRE ABOUT SERVICES</span>
            <MessageSquare className="w-4 h-4" />
          </a>
        </div>

        <div className="divide-y divide-border-light dark:divide-border-dark">
          {SERVICES.map((service) => {
            const isActive = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onClick={() => setActiveServiceId(service.id)}
                className="group py-8 cursor-pointer transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center space-x-6">
                    <span
                      className={`text-xl md:text-2xl font-mono font-bold transition-colors ${
                        isActive ? 'text-signature' : 'text-ink-muted-light dark:text-ink-muted-dark'
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl font-display font-extrabold transition-all duration-300 ${
                        isActive
                          ? 'text-signature translate-x-2'
                          : 'text-ink-light dark:text-ink-dark group-hover:text-signature'
                      }`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  <div className="text-sm font-sans font-medium text-ink-muted-light dark:text-ink-muted-dark md:text-right max-w-sm">
                    {service.tagline}
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 pb-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-6 space-y-4">
                          <p className="text-base text-ink-light dark:text-ink-dark leading-relaxed">
                            {service.description}
                          </p>
                          <div className="p-4 rounded-xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark text-xs text-ink-muted-light dark:text-ink-muted-dark">
                            <span className="font-bold text-signature font-mono uppercase mr-2">IDEAL FOR:</span>
                            {service.idealFor}
                          </div>
                        </div>

                        <div className="lg:col-span-6 space-y-3">
                          <span className="text-xs font-mono font-bold text-ink-muted-light dark:text-ink-muted-dark uppercase tracking-wider">
                            // WHAT YOU RECEIVE:
                          </span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {service.delivers.map((item, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-xs text-ink-light dark:text-ink-dark">
                                <CheckCircle2 className="w-3.5 h-3.5 text-signature shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-4">
                            <a
                              href={CONTACT_INFO.buildWhatsAppUrl(
                                `Hi Sankaran, I'd like to book your "${service.title}" service.`
                              )}
                              target="_blank"
                              rel="noopener noreferrer"
                              onMouseEnter={() => setCursor('talk')}
                              onMouseLeave={resetCursor}
                              className="inline-flex items-center space-x-2 text-xs font-bold font-mono tracking-wider text-signature hover:underline"
                            >
                              <span>BOOK THIS SERVICE VIA WHATSAPP</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
