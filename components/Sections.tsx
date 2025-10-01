'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Section wrapper with animation
interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className = '' }: SectionProps) => (
  <motion.section
    id={id}
    className={`section ${className}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, margin: "-100px" }}
  >
    {children}
  </motion.section>
);

// Card component with hover animations
interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => (
  <motion.div
    className={`card ${className}`}
    whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
    transition={{ duration: 0.2, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

// Experience item component
interface ExperienceItemProps {
  title: string;
  org: string;
  year: string;
  bullets: string[];
  stack: string[];
  delay?: number;
}

export const ExperienceItem = ({ 
  title, 
  org, 
  year, 
  bullets, 
  stack, 
  delay = 0 
}: ExperienceItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    className="card mb-6"
  >
    <div className="flex items-start justify-between mb-3">
      <div>
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-gray-400">{org}</p>
      </div>
      <span className="text-sm text-gray-500 ml-4">{year}</span>
    </div>
    
    <ul className="space-y-2 mb-4">
      {bullets.map((bullet, index) => (
        <li key={index} className="text-gray-300 text-sm flex items-start">
          <span className="text-blue-400 mr-2 mt-1">•</span>
          {bullet}
        </li>
      ))}
    </ul>
    
    <div className="flex flex-wrap gap-2">
      {stack.map((tech, index) => (
        <span key={index} className="badge">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

// Project card component
interface ProjectCardProps {
  title: string;
  tags: string[];
  github?: string;
  demo?: string;
  blurb: string;
  delay?: number;
}

export const ProjectCard = ({ 
  title, 
  tags, 
  github, 
  demo, 
  blurb, 
  delay = 0 
}: ProjectCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    className="card h-full flex flex-col"
  >
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 leading-relaxed">{blurb}</p>
    </div>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="badge text-xs">
          {tag}
        </span>
      ))}
    </div>
    
    <div className="flex gap-3">
      {github && (
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost text-xs px-3 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          GitHub
        </motion.a>
      )}
      {demo && (
        <motion.a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary text-xs px-3 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Live Demo
        </motion.a>
      )}
    </div>
  </motion.div>
);

// Award item component
interface AwardItemProps {
  year: string;
  name: string;
  note: string;
  delay?: number;
}

export const AwardItem = ({ year, name, note, delay = 0 }: AwardItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    viewport={{ once: true }}
    className="card"
  >
    <div className="flex items-start gap-4">
      <div className="text-2xl font-bold text-blue-400 min-w-[60px]">
        {year}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
        <p className="text-gray-300 text-sm">{note}</p>
      </div>
    </div>
  </motion.div>
);

// Contact form component
export const ContactForm = () => (
  <motion.form
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="card max-w-md mx-auto"
  >
    <div className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors cursor-hover"
          placeholder="Your Name"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors cursor-hover"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors cursor-hover resize-none"
          placeholder="Your message..."
        />
      </div>
      
      <motion.button
        type="submit"
        className="btn btn-primary w-full py-3"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </div>
  </motion.form>
);


