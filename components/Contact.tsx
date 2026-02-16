
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <motion.section 
      id="contact" 
      className="scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="glass rounded-[3rem] p-8 md:p-16 border-white/5 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-cyan-500/10 flex items-center justify-center mb-8 border border-cyan-500/20"
        >
          <Mail className="w-10 h-10 text-cyan-400" />
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Let's build something intelligent.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-slate-400 max-w-2xl text-lg mb-12"
        >
          I am currently open to opportunities in AI Engineering, ML Development, and high-growth tech startups. Let's connect and discuss how I can contribute to your team.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
        >
          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=adilahsa2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center px-8 py-4 bg-white text-tech-black font-bold rounded-full overflow-hidden hover:bg-cyan-500 transition-colors"
          >
            <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            Send an Email
          </a>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/ageng-lahsa-354117367/" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-colors text-slate-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/ageng1322-lah" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 glass rounded-full hover:bg-white/10 transition-colors text-slate-300"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-12 border-t border-white/5 w-full flex flex-wrap justify-center gap-12 text-slate-500 font-mono text-sm"
        >
          <div className="flex flex-col items-center">
            <span className="text-white">EMAIL</span>
            <span>[adilahsa2@gmail.com]</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white">LOCATION</span>
            <span>Remote / Indonesia</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white">STATUS</span>
            <span className="text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Open for hire
            </span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
