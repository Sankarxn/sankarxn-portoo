import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Sparkles, CheckCircle } from 'lucide-react';

export const EasterEgg = ({ isOpen, onClose }) => {
  const [typedKeys, setTypedKeys] = useState('');

  useEffect(() => {
    const secretCode = 'sankar';
    const handleKeyDown = (e) => {
      const target = e.target;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') return;

      const newKeys = (typedKeys + e.key.toLowerCase()).slice(-secretCode.length);
      setTypedKeys(newKeys);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [typedKeys, isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg bg-[#0F172A] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden font-mono text-xs z-10"
        >
          <div className="flex items-center justify-between px-4 py-3 bg-[#1E293B] border-b border-emerald-500/20">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-slate-400 text-[11px]">sankaran@dev-terminal:~</span>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-6 space-y-4 text-emerald-400">
            <div className="flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="text-slate-200">./read_developer_manifesto.sh</span>
            </div>

            <div className="p-4 rounded-xl bg-[#020617] border border-emerald-500/20 text-slate-300 space-y-3">
              <div className="flex items-center space-x-2 text-amber-400 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>EASTER EGG DISCOVERED!</span>
              </div>
              <p className="leading-relaxed">
                "Code is the invisible engine, but clarity and user trust drive business results. Every millisecond saved, every clear heading written, and every pixel aligned is done with intention."
              </p>
              <div className="pt-2 text-slate-400 text-[11px] space-y-1">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Developer: Sankaranarayanan K V</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Location: Kerala, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Status: Available for Freelance Client Projects</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-slate-500 text-[10px]">Press ESC or click outside to dismiss</span>
              <button
                onClick={onClose}
                className="px-3 py-1.5 rounded bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors"
              >
                CLOSE TERMINAL
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
