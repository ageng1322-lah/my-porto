
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Focus from './components/Focus';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NetworkBackground from './components/NetworkBackground';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-cyan-500/30">
      <NetworkBackground />
      {/* Custom Cursor Effect */}

      <Navbar />
      
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-32 py-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Focus />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
