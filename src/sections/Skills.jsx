import React, { useState } from 'react';
import { useCursor } from '../context/CursorContext';

export const Skills = () => {
  const { setCursor, resetCursor } = useCursor();
  const [hoveredTech, setHoveredTech] = useState(null);

  const technologies = [
    { name: 'HTML5', category: 'Markup & Structure', description: 'Semantic, accessible, and SEO-friendly document foundation.' },
    { name: 'CSS3', category: 'Styling & Motion', description: 'Custom CSS variables, responsive grid & GPU-accelerated layouts.' },
    { name: 'JAVASCRIPT', category: 'Core Language', description: 'ES6+, DOM optimization, and asynchronous state management.' },
    { name: 'REACT', category: 'UI Framework', description: 'Component-driven frontend architecture and reactive state flows.' },
    { name: 'VITE', category: 'Build Tooling', description: 'Lightning-fast hot module replacement and optimized production builds.' },
    { name: 'GIT & GITHUB', category: 'Version Control', description: 'Clean commit histories, branching strategies, and collaboration.' },
    { name: 'NETLIFY', category: 'Deployment & CDN', description: 'Automated CI/CD deployments, edge routing, and global hosting.' },
    { name: 'VERCEL', category: 'Deployment & Hosting', description: 'Production-grade deployment platform for frontend apps with instant previews and smooth releases.' },
  ];

  const tickerItems = [...technologies, ...technologies];

  return (
    <section id="skills" className="py-20 max-w-7xl mx-auto px-6 md:px-12 overflow-hidden space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold tracking-widest text-signature uppercase block mb-2">
            // TECHNICAL TOOLING
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-ink-light dark:text-ink-dark uppercase">
            TECHNOLOGIES & STACK
          </h2>
        </div>

        <div className="min-h-[44px] flex items-center">
          {hoveredTech ? (
            <div className="text-xs font-mono px-4 py-2 rounded-xl bg-signature/10 border border-signature/30 text-signature transition-all">
              <span className="font-bold uppercase mr-2">{hoveredTech.name} [{hoveredTech.category}]:</span>
              <span className="text-ink-light dark:text-ink-dark">{hoveredTech.description}</span>
            </div>
          ) : (
            <span className="text-xs font-mono text-ink-muted-light dark:text-ink-muted-dark italic">
              Hover any technology to pause ticker & inspect technical context.
            </span>
          )}
        </div>
      </div>

      <div className="relative border-y border-border-light dark:border-border-dark py-6 overflow-hidden group">
        <div className="flex space-x-8 animate-marquee group-hover:[animation-play-state:paused]">
          {tickerItems.map((tech, idx) => (
            <div
              key={`${tech.name}-${idx}`}
              onMouseEnter={() => {
                setHoveredTech(tech);
                setCursor('hover');
              }}
              onMouseLeave={() => {
                setHoveredTech(null);
                resetCursor();
              }}
              className="flex items-center space-x-6 shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105"
            >
              <span className="text-2xl sm:text-4xl font-display font-extrabold tracking-tight text-ink-light dark:text-ink-dark hover:text-signature transition-colors">
                {tech.name}
              </span>
              <span className="text-signature text-xl font-mono">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
