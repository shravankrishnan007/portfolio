import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

// 1. Import your images here
// Make sure these files exist in src/assets/
import p2pImg from '../assets/p2p.png';
import canvasImg from '../assets/canvas.png';


const projects = [
  {
    title: "Secure P2P File Share",
    description: "Decentralized, privacy-first desktop app. Bypasses browser RAM limits for multi-GB transfers using File System Access API.",
    tags: ["Electron", "WebRTC", "Node.js", "Privacy"],
    link: "https://p2p-file-share-one.vercel.app/", 
    github: "https://github.com/shravankrishnan007/p2p-file-share",
    image: p2pImg // 2. Assign the imported image variable
  },
  {
    title: "Real-Time Collab Canvas",
    description: "Multi-user drawing platform with sub-100ms latency. Implemented hybrid event-sourcing for 100% data consistency.",
    tags: ["Node.js", "Socket.io", "HTML5 Canvas"],
    link: "https://collaborative-canvas-2ndk.onrender.com/",
    github: "https://github.com/shravankrishnan007/collaborative-canvas",
    image: canvasImg
  },
  {
    title: "Tariff Quoting App",
    description: "Full-stack application for Tech Mahindra with Clerk auth, Stripe payments, and Prometheus monitoring.",
    tags: ["React", "Express.js", "Docker", "Stripe"],
    link: "#",
    github: "https://github.com/shravankrishnan007",

  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* 3. Image Container */}
              <div className="h-48 overflow-hidden relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  // Fallback if image is missing
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 font-mono text-sm">No Image</span>
                  </div>
                )}
                
                {/* Overlay that appears on hover (optional aesthetic touch) */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                    <Github size={16} /> Code
                  </a>
                  {project.link !== "#" && (
                    <a href={project.link} className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;