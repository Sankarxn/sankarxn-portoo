import React, { useState } from 'react';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectModal } from '../components/projects/ProjectModal';

export const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 md:py-36 max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-border-light dark:border-border-dark">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-signature uppercase">
            <span>// PORTFOLIO & CONCEPTS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-display font-extrabold tracking-tight text-ink-light dark:text-ink-dark uppercase">
            SELECTED WORK
          </h2>

          <p className="text-base md:text-lg text-ink-muted-light dark:text-ink-muted-dark">
            A few targeted website concepts I've designed, built, and experimented with to demonstrate high-conversion frontend architecture for ambitious businesses.
          </p>
        </div>

        {/* <div className="text-xs font-mono px-4 py-2 rounded-full border border-border-light dark:border-border-dark text-ink-muted-light dark:text-ink-muted-dark shrink-0">
          SHOWCASING {PROJECTS.length} DEMO CONCEPTS
        </div> */}
      </div>

      <div className="divide-y divide-border-light dark:divide-border-dark">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
            index={index}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
