import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useCursor } from '../../context/CursorContext';
import { CONTACT_INFO } from '../../data/contact';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { setCursor, resetCursor } = useCursor();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['hero', 'work', 'services', 'process', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'WORK', href: '#work' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PROCESS', href: '#process' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-paper-light/80 dark:bg-paper-dark/80 backdrop-blur-md border-b border-border-light dark:border-border-dark shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            onMouseEnter={() => setCursor('hover')}
            onMouseLeave={resetCursor}
            className="group flex items-center space-x-2 text-lg md:text-xl font-bold font-display tracking-tight text-ink-light dark:text-ink-dark"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-signature group-hover:scale-150 transition-transform duration-300"></span>
            <span className="tracking-wider">SANKARAN</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setCursor('hover')}
                  onMouseLeave={resetCursor}
                  className={`relative text-xs font-semibold tracking-widest transition-colors duration-200 ${
                    isActive
                      ? 'text-signature font-bold'
                      : 'text-ink-muted-light dark:text-ink-muted-dark hover:text-ink-light dark:hover:text-ink-dark'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-signature rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: Theme Switcher & WhatsApp */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              onMouseEnter={() => setCursor('hover')}
              onMouseLeave={resetCursor}
              className="p-2 rounded-full border border-border-light dark:border-border-dark text-ink-light dark:text-ink-dark hover:border-signature hover:text-signature transition-colors duration-200"
              aria-label="Toggle dark/light theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href={CONTACT_INFO.buildWhatsAppUrl(
                "Hi Sankaran, I found your portfolio and I'd like to discuss a website project."
              )}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCursor('talk')}
              onMouseLeave={resetCursor}
              className="group flex items-center space-x-1.5 px-4 py-2 rounded-full bg-ink-light dark:bg-ink-dark text-paper-light dark:text-paper-dark text-xs font-semibold tracking-wide hover:bg-signature hover:text-white transition-all duration-300 shadow-sm"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border-light dark:border-border-dark text-ink-light dark:text-ink-dark"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-light dark:text-ink-dark focus:outline-none"
              aria-label="Open main menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-paper-light dark:bg-paper-dark px-8 py-28 flex flex-col justify-between md:hidden"
          >
            <div className="flex flex-col space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-ink-muted-light dark:text-ink-muted-dark">
                // Navigation
              </span>
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  className="text-3xl font-display font-extrabold text-ink-light dark:text-ink-dark hover:text-signature transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-border-light dark:border-border-dark">
              <a
                href={CONTACT_INFO.buildWhatsAppUrl(
                  "Hi Sankaran, I found your portfolio and I'd like to discuss a website project."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-4 bg-signature text-white font-bold rounded-xl text-center shadow-lg"
              >
                <span>START WHATSAPP CHAT</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
