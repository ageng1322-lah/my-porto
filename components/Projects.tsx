
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <motion.section 
      id="projects" 
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-slate-400 max-w-xl">
            A collection of production-grade interfaces and system designs demonstrating AI-integration and role-based architectural thinking.
          </p>
        </div>
        <div className="h-[1px] flex-grow mx-8 bg-white/10 hidden md:block"></div>
        <a href="https://github.com/ageng1322-lah" target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-mono text-sm hover:underline">View Github Archive &rarr;</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group relative flex flex-col glass rounded-[2rem] overflow-hidden border border-white/5 hover:border-cyan-500/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)] transition-all duration-500"
          >
            {/* Image Wrapper */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-tech-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.liveLink} className="p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-cyan-500 transition-all" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-6 h-6 text-white" />
                </a>
                <a href={project.githubLink} className="p-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white hover:text-black transition-all" target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                <span className="text-xs font-mono text-slate-500">PROJ_ID: 0{project.id}</span>
                <a href={project.liveLink} className="text-sm font-bold flex items-center gap-2 group/btn">
                  Full Case Study
                  <div className="w-6 h-[1px] bg-cyan-400 group-hover/btn:w-10 transition-all"></div>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
