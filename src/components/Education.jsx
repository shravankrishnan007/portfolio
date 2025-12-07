import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-surface/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden group"
        >
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-colors" />

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="flex gap-4">
              <div className="p-3 bg-primary/10 rounded-xl h-fit text-primary">
                <GraduationCap size={32} />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  B.Tech in Computer Science & Engineering
                </h3>
                <p className="text-lg text-primary font-medium mb-1">
                  Amrita Vishwa Vidyapeetham
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Specialization in <span className="text-white font-semibold">Cybersecurity</span>
                </p>

                {/* Optional: Add relevant coursework */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Cryptography', 'Network Security', 'Distributed Systems', 'OS'].map((course) => (
                    <span key={course} className="text-xs px-2 py-1 bg-white/5 border border-white/5 rounded text-gray-400 flex items-center gap-1">
                      <BookOpen size={12} /> {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-row md:flex-col gap-4 md:items-end text-gray-400 min-w-fit">
              <div className="flex items-center gap-2 bg-surface px-3 py-1 rounded-full border border-white/5">
                <Calendar size={14} />
                <span className="text-sm">2022 - 2026</span>
              </div>
              <div className="text-right">
                <span className="block text-xs text-gray-500 uppercase tracking-wider">Status</span>
                <span className="text-sm font-medium text-green-400">Final Year Student</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;