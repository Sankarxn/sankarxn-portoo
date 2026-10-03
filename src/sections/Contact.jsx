import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, ArrowUpRight, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { WHATSAPP_TOPICS, CONTACT_INFO } from '../data/contact';
import { useCursor } from '../context/CursorContext';

export const Contact = () => {
  const { setCursor, resetCursor } = useCursor();
  const [selectedTopic, setSelectedTopic] = useState(WHATSAPP_TOPICS[0]);
  const [customMessage, setCustomMessage] = useState('');

  const activeWhatsAppUrl = CONTACT_INFO.buildWhatsAppUrl(
    customMessage || selectedTopic.defaultText
  );

  return (
    <section id="contact" className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
      {/* Header */}
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-signature uppercase">
          <span>// START A CONVERSATION</span>
        </div>

        <h2 className="text-5xl sm:text-7xl md:text-8xl font-display font-extrabold tracking-tighter text-ink-light dark:text-ink-dark uppercase leading-[0.95]">
          HAVE A WEBSITE <br />
          <span className="text-signature italic font-normal">IN MIND?</span>
        </h2>

        <p className="text-lg md:text-2xl text-ink-muted-light dark:text-ink-muted-dark font-sans">
          Tell me what you're building. Let's figure out what the website needs to do.
        </p>
      </div>

      {/* Unified High-Conversion Contact Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        {/* Left: Interactive WhatsApp Generator */}
        <div className="lg:col-span-7 space-y-8 p-8 md:p-12 rounded-3xl bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-xl flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border-light dark:border-border-dark pb-4">
              <div className="flex items-center space-x-2 text-xs font-mono font-bold text-signature uppercase">
                <MessageSquare className="w-4 h-4" />
                <span>DIRECT WHATSAPP CONVERSATION</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>FAST RESPONSE</span>
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-ink-light dark:text-ink-dark">
                Send a Direct Project Enquiry
              </h3>
              <p className="text-xs md:text-sm text-ink-muted-light dark:text-ink-muted-dark">
                Select your project category below to generate a tailored starter message for our WhatsApp discussion.
              </p>
            </div>

            {/* Topic Selectors */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-ink-light dark:text-ink-dark uppercase block">
                01. Select Project Category:
              </span>
              <div className="flex flex-wrap gap-2">
                {WHATSAPP_TOPICS.map((topic) => {
                  const isSelected = selectedTopic.id === topic.id;
                  return (
                    <button
                      key={topic.id}
                      onClick={() => {
                        setSelectedTopic(topic);
                        setCustomMessage('');
                      }}
                      onMouseEnter={() => setCursor('hover')}
                      onMouseLeave={resetCursor}
                      className={`px-4 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all ${
                        isSelected
                          ? 'bg-signature text-white shadow-md'
                          : 'bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark text-ink-light dark:text-ink-dark hover:border-signature'
                      }`}
                    >
                      {topic.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message Preview */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-ink-light dark:text-ink-dark uppercase block">
                02. Customize Your Message:
              </span>
              <textarea
                rows={3}
                value={customMessage || selectedTopic.defaultText}
                onChange={(e) => setCustomMessage(e.target.value)}
                className="w-full p-4 rounded-2xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark text-xs md:text-sm text-ink-light dark:text-ink-dark focus:outline-none focus:border-signature resize-none"
              />
            </div>
          </div>

          {/* Launch WhatsApp Button */}
          <div className="pt-4">
            <a
              href={activeWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursor('talk')}
              onMouseLeave={resetCursor}
              className="w-full py-4 px-8 rounded-2xl bg-signature text-white font-display font-bold text-sm md:text-base uppercase tracking-wider flex items-center justify-center space-x-3 shadow-xl hover:bg-signature-hover transition-colors group"
            >
              <span>START WHATSAPP CONVERSATION</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right: Direct Contact Details & Information Cards */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          {/* Email Direct Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark shadow-sm space-y-4 hover:border-signature transition-colors"
          >
            <div className="flex items-center space-x-3 text-signature">
              <div className="p-3 rounded-xl bg-signature/10">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted-light dark:text-ink-muted-dark">
                EMAIL DIRECTLY
              </span>
            </div>

            <div>
              <h4 className="text-lg font-display font-bold text-ink-light dark:text-ink-dark">
                Prefer Traditional Email?
              </h4>
              <p className="text-xs text-ink-muted-light dark:text-ink-muted-dark mt-1">
                Send project details, RFPs, or questions straight to my inbox.
              </p>
            </div>

            <a
              href={`mailto:${CONTACT_INFO.email}`}
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className="inline-flex items-center space-x-2 text-sm font-mono font-bold text-signature hover:underline"
            >
              <span>{CONTACT_INFO.email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Direct Phone / Call Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-3xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark shadow-sm space-y-4 hover:border-signature transition-colors"
          >
            <div className="flex items-center space-x-3 text-signature">
              <div className="p-3 rounded-xl bg-signature/10">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ink-muted-light dark:text-ink-muted-dark">
                PHONE & MOBILE
              </span>
            </div>

            <div>
              <h4 className="text-lg font-display font-bold text-ink-light dark:text-ink-dark">
                Direct Line
              </h4>
              <p className="text-xs text-ink-muted-light dark:text-ink-muted-dark mt-1">
                Available for scheduled project calls and client consultations.
              </p>
            </div>

            <a
              href={`tel:${CONTACT_INFO.whatsappNumber}`}
              className="inline-flex items-center space-x-2 text-sm font-mono font-bold text-ink-light dark:text-ink-dark hover:text-signature transition-colors"
            >
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
          </motion.div>

          {/* Location & Response Guarantee Banner */}
          <div className="p-6 rounded-3xl bg-card-light/60 dark:bg-card-dark/60 border border-border-light dark:border-border-dark space-y-3 text-xs font-mono">
            <div className="flex items-center space-x-2 text-ink-light dark:text-ink-dark font-bold">
              <MapPin className="w-4 h-4 text-signature" />
              <span>{CONTACT_INFO.location} // Global Remote</span>
            </div>

            <div className="flex items-center space-x-2 text-ink-muted-light dark:text-ink-muted-dark">
              <Clock className="w-4 h-4 text-signature" />
              <span>Guaranteed response within 24 hours</span>
            </div>

            <div className="flex items-center space-x-2 text-ink-muted-light dark:text-ink-muted-dark">
              <ShieldCheck className="w-4 h-4 text-signature" />
              <span>Clear scope, direct communication & no fluff</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
