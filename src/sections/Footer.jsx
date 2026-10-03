import React from 'react';
import { SOCIAL_LINKS } from '../data/social';
import { CONTACT_INFO } from '../data/contact';
import { useCursor } from '../context/CursorContext';

export const Footer = () => {
  const { setCursor, resetCursor } = useCursor();

  return (
    <footer className="py-16 border-t border-border-light dark:border-border-dark bg-paper-light dark:bg-paper-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-ink-light dark:text-ink-dark tracking-tight uppercase">
              SANKARANARAYANAN K V
            </h3>
            <p className="text-xs font-mono text-signature">
              Frontend Developer / Freelancer // Kerala, India
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setCursor('hover')}
                onMouseLeave={resetCursor}
                className="text-xs font-mono text-ink-muted-light dark:text-ink-muted-dark hover:text-signature transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className="text-xs font-mono text-ink-muted-light dark:text-ink-muted-dark hover:text-signature transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-border-light/60 dark:border-border-dark/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-ink-muted-light dark:text-ink-muted-dark">
          <div>
            © 2026 Sankaranarayanan K V. All rights reserved.
          </div>

          <div>
            <span>Designed & built by Sankaran.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
