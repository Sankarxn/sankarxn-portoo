import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe, 
  Layout, 
  Briefcase 
} from 'lucide-react';
import { MagneticButton } from '../components/ui/MagneticButton';
import { useCursor } from '../context/CursorContext';
import { CONTACT_INFO } from '../data/contact';
import { SOCIAL_LINKS } from '../data/social';
import profileImg from '../assets/profile.jpg';

export const About = () => {
  const { setCursor, resetCursor } = useCursor();

  const handleScrollToWork = (e) => {
    e.preventDefault();
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const keySkills = [
    { name: 'HTML5', category: 'Markup' },
    { name: 'CSS3', category: 'Styling' },
    { name: 'Bootstrap', category: 'UI Framework' },
    { name: 'React', category: 'Frontend Library' },
    { name: 'JavaScript', category: 'Core Language' },
    { name: 'Tailwind CSS', category: 'Utility CSS' },
  ];

  return (
    <section 
      id="about" 
      className="py-24 md:py-36 bg-card-light/30 dark:bg-card-dark/30 border-y border-border-light dark:border-border-dark relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Label */}
        <div className="mb-12">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold tracking-widest text-signature uppercase">
            <span className="w-2 h-2 rounded-full bg-signature inline-block"></span>
            <span>// ABOUT ME</span>
          </div>
        </div>

        {/* Two Column Layout: Desktop (Left: Photo, Right: Content) | Mobile (Stacked: Photo Top, Text Bottom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Portrait Photo Focal Point */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative group">
              {/* Subtle minimal geometric offset border background */}
              <div className="absolute inset-0 rounded-3xl border border-signature/30 translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 ease-out pointer-events-none" />

              {/* Main Photo Card Container */}
              <div className="relative overflow-hidden rounded-3xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark p-3 shadow-xl">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] bg-card-light dark:bg-card-dark">
                  <img
                    src={profileImg}
                    alt="Sankaranarayanan K V - Frontend Developer"
                    className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Vignette Overlay at bottom for readable badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

                  {/* Photo Overlay Status Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-paper-dark/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between shadow-lg">
                    <div>
                      <h4 className="text-sm font-display font-bold tracking-wide">
                        Sankaranarayanan K V
                      </h4>
                      <p className="text-[11px] font-mono text-signature">
                        Frontend Developer & Freelancer
                      </p>
                    </div>
                    <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>AVAILABLE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Meta Cards underneath Photo */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-signature mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono text-ink-muted-light dark:text-ink-muted-dark uppercase tracking-wider">
                    LOCATION
                  </span>
                  <span className="text-xs font-semibold text-ink-light dark:text-ink-dark font-sans">
                    Kerala, India
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark flex items-start space-x-3">
                <GraduationCap className="w-4 h-4 text-signature mt-0.5 shrink-0" />
                <div>
                  <span className="block text-[10px] font-mono text-ink-muted-light dark:text-ink-muted-dark uppercase tracking-wider">
                    EDUCATION
                  </span>
                  <span className="text-xs font-semibold text-ink-light dark:text-ink-dark font-sans">
                    B.Com Finance
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Content & Personal Brand details */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Strong Headline */}
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight text-ink-light dark:text-ink-dark uppercase leading-[1.1]">
              CRAFTING MODERN WEBSITES THAT CONVERT & BUILD TRUST.
            </h2>

            {/* Short Personal Introduction */}
            <div className="space-y-4 text-base md:text-lg text-ink-muted-light dark:text-ink-muted-dark leading-relaxed font-sans">
              <p>
                I’m <strong className="text-ink-light dark:text-ink-dark font-semibold">Sankaranarayanan K V</strong>, a frontend developer and independent freelancer based in Kerala, India. I specialize in building sleek, high-performing websites for small businesses, ambitious freelancers, and creators who need their online presence to drive real results.
              </p>
              <p>
                Combining modern React engineering with a commerce background (FYUGP B.Com Finance under Kannur University), I approach web development through the lens of business value, credibility, and visitor engagement—not just code.
              </p>
            </div>

            {/* Key Skills Section */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-wider text-ink-muted-light dark:text-ink-muted-dark uppercase">
                  KEY SKILLS & STACK
                </span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {keySkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group px-3.5 py-2 rounded-xl bg-paper-light dark:bg-paper-dark border border-border-light dark:border-border-dark flex items-center space-x-2 text-xs font-mono text-ink-light dark:text-ink-dark hover:border-signature hover:text-signature transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-signature/70 group-hover:bg-signature transition-colors"></span>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>


            {/* Clear CTA Section */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <MagneticButton>
                <a
                  href={CONTACT_INFO.buildWhatsAppUrl(
                    "Hi Sankaran, I reviewed your About section and I'd like to discuss starting a project with you."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursor('talk')}
                  onMouseLeave={resetCursor}
                  className="group flex items-center space-x-3 px-7 py-4 rounded-full bg-signature text-white font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:bg-signature-hover transition-colors"
                >
                  <span>LET'S WORK TOGETHER</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#work"
                  onClick={handleScrollToWork}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className="group flex items-center space-x-2 px-6 py-4 rounded-full border border-border-light dark:border-border-dark text-ink-light dark:text-ink-dark font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-signature hover:text-signature transition-colors"
                >
                  <span>VIEW MY WORK</span>
                </a>
              </MagneticButton>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
