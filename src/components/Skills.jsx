import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "Python", "Java", "JavaScript", "React", 
  "Node.js", "Express.js", "Spring Boot", "Socket.io",
  "WebRTC", "Docker", "Wireshark", "Burp Suite",
  "Nmap", "PostgreSQL", "Tailwind CSS", "Git", "Jira", "Multiplayer Synchronization Testing"
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Tech Stack & Tools
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-surface border border-white/5 rounded-xl text-gray-300 font-medium hover:border-primary/50 hover:text-primary transition-colors cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;