
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download } from 'lucide-react';
import TextType from './TextType';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-block px-4 py-1.5 rounded-full glass border-white/10 text-xs font-mono text-cyan-400 mb-6"
      >
        <span className="mr-2 inline-block w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
        Available for AI Roles
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-6"
      >
        <TextType
          text="Ageng Lahsa Adiguna"
          as="h1"
          className="text-5xl md:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500 pb-6"
          typingSpeed={100}
          deletingSpeed={50}
          pauseDuration={5000}
          cursorClassName="text-cyan-500"
          showCursor={true}
          loop={true}
          initialDelay={500}
        />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-xl md:text-3xl font-medium text-cyan-400 mb-6 flex flex-wrap justify-center gap-2"
      >
        <span>AI Engineer</span>
        <span className="text-slate-700">|</span>
        <span>Machine Learning Enthusiast</span>
        <span className="text-slate-700">|</span>
        <span>AI System Builder</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10"
      >
        Designing and building intelligent systems, AI-powered SaaS, and scalable digital products that push the boundaries of automation.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#projects"
          className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-cyan-600 rounded-full hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600"
        >
          View Projects
          <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="/my-porto/photo/Ageng_Lahsa_Adiguna_Professional_CV_EN.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 font-bold text-slate-300 transition-all duration-200 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white"
        >
          <Download className="mr-2 w-5 h-5" />
          Download CV
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
