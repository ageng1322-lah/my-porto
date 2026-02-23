
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.section
      id="about"
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="aspect-square relative overflow-hidden rounded-3xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
            <img
              src="/my-porto/photo/WhatsApp Image 2026-02-15 at 14.28.46.jpeg"
              alt="Ageng Lahsa Adiguna"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 border-[10px] border-tech-black opacity-50"></div>
          </div>
          {/* Experience Badge */}
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-white/10 animate-bounce">
            <div className="text-3xl font-bold text-white">4+</div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Projects Built</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="flex items-center gap-4 text-cyan-400 mb-2">
            <div className="h-[1px] w-12 bg-cyan-400"></div>
            <span className="text-xs font-mono uppercase tracking-[0.3em]">The Perspective</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Building Intelligence from the Ground Up</h2>

          <div className="space-y-4 text-slate-400 text-lg leading-relaxed">
            <p>
              I design and build intelligent digital systems powered by AI, automation, and decentralized technologies.
              My focus is not just writing code — but engineering scalable solutions that integrate machine learning, LLM workflows, API ecosystems, and blockchain infrastructure.
            </p>
            <p>
              I focus on building systems where AI, automation, and decentralized infrastructure converge — creating intelligent digital ecosystems rather than isolated applications.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 glass rounded-xl border-white/5">
              <h4 className="text-white font-bold mb-1">Product-Oriented</h4>
              <p className="text-sm text-slate-500">Focused on shipping features that provide measurable user value.</p>
            </div>
            <div className="p-4 glass rounded-xl border-white/5">
              <h4 className="text-white font-bold mb-1">Scalable Thinking</h4>
              <p className="text-sm text-slate-500">Designing architectures that grow alongside the product's demand.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
