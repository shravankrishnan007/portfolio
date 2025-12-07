import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">
            Hi, I'm Shravan Krishnan
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Engineering secure, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              scalable solutions
            </span>.
          </h1>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm a Full Stack Developer & Security Enthusiast graduating in 2026. 
            I bridge the gap between complex backend architecture and privacy-first design.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Primary Button */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-8 py-3 bg-primary text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-primary/25"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>

            {/* Secondary Button - Download Resume */}
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"                // This points to public/resume.pdf
              download="Shravan_Krishnan_Resume.pdf" // The name the file gets when saved
              className="px-8 py-3 border border-white/10 bg-white/5 hover:bg-white/10 rounded-full font-medium flex items-center gap-2 backdrop-blur-sm transition-colors"
            >
              Download CV <Download size={18} />
            </motion.a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.a
              whileHover={{ y: -3, color: "#6366f1" }}
              href="https://github.com/shravankrishnan007"
              target="_blank"
              className="p-3 bg-surface rounded-full text-gray-400 border border-white/5"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#6366f1" }}
              href="mailto:shravankrishnan77@gmail.com"
              className="p-3 bg-surface rounded-full text-gray-400 border border-white/5"
            >
              <Mail size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, color: "#0077b5" }}
              href="#" 
              className="p-3 bg-surface rounded-full text-gray-400 border border-white/5"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;