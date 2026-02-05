import React, { useState, useEffect } from 'react';
import { IntroChapter } from '../components/IntroChapter';
import { ProblemChapter } from '../components/ProblemChapter';
import { SolutionChapter } from '../components/SolutionChapter';
import { ProofChapter } from '../components/ProofChapter';
import { LegalityChapter } from '../components/LegalityChapter';
import { DiagnosticCTAChapter } from '../components/DiagnosticCTAChapter';
import { BonusChapter } from '../components/BonusChapter';

export const Longread: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFD] selection:bg-blue-100 font-inter">
      {/* Навигационная полоса прогресса (iOS Style) */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'bg-white/80 ios-blur border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-screen-lg mx-auto px-6 flex justify-between items-center w-full">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="w-1.5 h-1.5 bg-apple-blue rounded-full animate-pulse"></div>
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-gray-400">Путь к $5,000</span>
          </div>
          <div className="hidden md:block text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">AI Model Business Strategy</div>
        </div>
      </header>

      <main>
        <IntroChapter />
        <ProblemChapter />
        <SolutionChapter />
        <ProofChapter />
        <LegalityChapter />
        <DiagnosticCTAChapter />
        <BonusChapter />
      </main>

      <footer className="py-12 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-[760px] mx-auto px-6 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-300">
            AI MODEL BUSINESS • 2025
          </div>
        </div>
      </footer>
    </div>
  );
};