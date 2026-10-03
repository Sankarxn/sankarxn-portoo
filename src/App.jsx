import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { ThemeProvider } from './context/ThemeContext';
import { CursorProvider } from './context/CursorContext';
import { useReducedMotion } from './hooks/useReducedMotion';
import { CustomCursor } from './components/cursor/CustomCursor';
import { Navbar } from './components/navigation/Navbar';
import { EasterEgg } from './components/EasterEgg';
import { Hero } from './sections/Hero';
import { Philosophy } from './sections/Philosophy';
import { Work } from './sections/Work';
import { Services } from './sections/Services';
import { Process } from './sections/Process';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

const MainLayout = () => {
  const [isEasterEggOpen, setIsEasterEggOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative min-h-screen bg-paper-light dark:bg-paper-dark text-ink-light dark:text-ink-dark transition-colors duration-300">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Philosophy />
        <Work />
        <Services />
        <Process />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <EasterEgg
        isOpen={isEasterEggOpen}
        onClose={() => setIsEasterEggOpen(false)}
      />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <CursorProvider>
        <MainLayout />
      </CursorProvider>
    </ThemeProvider>
  );
}

export default App;
