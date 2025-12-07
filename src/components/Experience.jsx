import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: "May 2025 - July 2025",
    role: "Software Developer Intern",
    company: "Tech Mahindra",
    description: "Developed a full-stack tariff quoting web app using React, Express.js, and Docker. Implemented monitoring via Prometheus and learned CI/CD workflows."
  },
  {
    year: "Jun 2024 - Sept 2024",
    role: "Security Engineer Intern",
    company: "Hackup Technology Pvt Ltd",
    description: "Utilized Wireshark and Nmap for vulnerability scanning. Applied OWASP principles and penetration testing methodologies to secure network traffic."
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-surface/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 text-center"
        >
          Professional Experience
        </motion.h2>

        <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm text-primary font-mono">{exp.year}</span>
              </div>
              <p className="text-gray-400 font-medium mb-2">{exp.company}</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;