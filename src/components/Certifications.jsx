import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Server } from 'lucide-react';

const certs = [
  {
    title: "Security Operations Fundamentals",
    issuer: "Palo Alto Networks",
    icon: <ShieldCheck size={24} />,
    color: "text-red-400",
    bg: "bg-red-400/10"
  },
  {
    title: "Cloud Security Fundamentals",
    issuer: "Palo Alto Networks",
    icon: <ShieldCheck size={24} />,
    color: "text-red-400",
    bg: "bg-red-400/10"
  },
  {
    title: "Spring Boot Framework",
    issuer: "Udemy",
    icon: <Server size={24} />,
    color: "text-green-400",
    bg: "bg-green-400/10"
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    icon: <Award size={24} />,
    color: "text-blue-400",
    bg: "bg-blue-400/10"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-surface border border-white/5 p-6 rounded-xl flex flex-col items-center text-center hover:border-primary/30 transition-colors"
            >
              <div className={`p-4 rounded-full mb-4 ${cert.bg} ${cert.color}`}>
                {cert.icon}
              </div>
              <h3 className="font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;