import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
          Shravan.dev
        </a>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
          {['About', 'Skills', 'Certifications', 'Education', 'Projects', 'Experience'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 bg-primary rounded-full text-white hover:bg-primary/90 transition-all">
            Contact Me
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;