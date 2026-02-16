
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Rocket, Workflow, Layers } from 'lucide-react';
import { FOCUS_AREAS } from '../constants';

const icons: Record<string, any> = { Brain, Rocket, Workflow, Layers };

const Focus: React.FC = () => {
  return (
    <motion.section 
      className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-cyan-500/5 to-purple-500/5 border border-white/5 p-12 md:p-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Core Focus & Values</h2>
          <p className="text-xl text-slate-400">
            Positioning at the intersection of product engineering and machine learning to build the next generation of intelligent tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FOCUS_AREAS.map((area, idx) => {
            const IconComponent = icons[area.icon];
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                className="group"
              >
                <div className="mb-6 w-14 h-14 glass rounded-2xl flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white group-hover:bg-cyan-500 transition-all duration-500">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{area.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Aesthetic Background Element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-10 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-cyan-500 animate-pulse" />
          <circle cx="50" cy="50" r="30" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-purple-500 animate-pulse-slow" />
        </svg>
      </div>
    </motion.section>
  );
};

export default Focus;
