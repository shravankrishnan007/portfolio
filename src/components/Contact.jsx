import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        'service_8x1c3t4',    
        'template_9chkmvf',   
        form.current,
        'ln-xDUH8tf9nVyQ1k'     
      )
      .then(
        () => {
          setIsSuccess(true);
          setIsSubmitting(false);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setIsSubmitting(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  if (isSuccess) {
    return (
      <section id="contact" className="py-20 border-t border-white/5 min-h-[500px] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-10 bg-surface/50 rounded-2xl border border-primary/20"
        >
          <div className="inline-flex p-4 bg-green-500/10 rounded-full text-green-400 mb-4">
            <CheckCircle size={48} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Message Sent!</h2>
          <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
          <button 
            onClick={() => setIsSuccess(false)}
            className="mt-6 text-sm text-primary hover:underline"
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">Let's work together.</h2>
          <p className="text-gray-400 mb-8 text-lg">
            I'm currently looking for full-time roles in <span className="text-white font-medium">Software Development</span>, <span className="text-white font-medium">Security Engineering</span>, or <span className="text-white font-medium">Technical Game QA</span>.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-surface rounded-lg text-primary"><Mail size={20} /></div>
              <span>shravankrishnan77@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-300">
              <div className="p-3 bg-surface rounded-lg text-primary"><MapPin size={20} /></div>
              <span>Neyveli, Tamil Nadu</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form 
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4 bg-surface/50 p-8 rounded-2xl border border-white/5"
        >
          <div className="grid grid-cols-2 gap-4">
            <input 
              type="text" 
              name="from_name" // Make sure this matches {{from_name}} in your EmailJS template
              placeholder="Name" 
              required
              className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
            />
            <input 
              type="email" 
              name="from_email" // Make sure this matches {{from_email}} in your EmailJS template
              placeholder="Email" 
              required
              className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
            />
          </div>
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
          />
          <textarea 
            name="message" // Make sure this matches {{message}} in your EmailJS template
            rows="4" 
            placeholder="Message" 
            required
            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          ></textarea>
          
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-primary text-white rounded-lg font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>Sending... <Loader2 className="animate-spin" size={18} /></>
            ) : (
              <>Send Message <Send size={18} /></>
            )}
          </motion.button>
        </motion.form>

      </div>
      
      <div className="text-center text-gray-600 text-sm mt-20">
        © 2025 Shravan Krishnan G. All rights reserved.
      </div>
    </section>
  );
};

export default Contact;