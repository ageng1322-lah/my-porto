
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Ageng Lahsa Adiguna. All Rights Reserved.
        </div>
        <div className="flex items-center gap-8 text-xs font-mono text-slate-500 uppercase tracking-widest">
          <a href="/my-porto/photo/Ageng_Lahsa_Adiguna_Professional_CV_EN.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Resume</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
        </div>
        <div className="text-xs text-slate-600">
          Built with React & Tailwind
        </div>
      </div>
    </footer>
  );
};

export default Footer;
