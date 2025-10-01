'use client';

import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import FloatingElements from '../components/FloatingElements';
import AnimatedCursor from '../components/AnimatedCursor';
import AutoCarousel from '../components/AutoCarousel';
import { 
  Section, 
  Card, 
  ExperienceItem, 
  ProjectCard, 
  AwardItem, 
  ContactForm 
} from '../components/Sections';

// Import data
import { INFO } from '../data/profile';
import { EXPERIENCE_SIMPLE, WORK_DETAILED } from '../data/experience';
import { PROJECTS } from '../data/projects';
import { AWARDS } from '../data/awards';

export default function Home() {
  return (
    <>
      {/* Custom Animated Cursor */}
      <AnimatedCursor />
      
      {/* Animated Background - Fixed */}
      <div className="fixed inset-0">
        <AnimatedBackground />
        <FloatingElements />
      </div>
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent"
              >
                {INFO.name}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl mx-auto"
              >
                {INFO.tagline} • {INFO.currentRole}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-gray-400 mb-8 max-w-3xl mx-auto"
              >
                {INFO.focus}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex gap-4 justify-center flex-wrap mb-8"
              >
                <motion.a
                  href="#experience"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary px-8 py-3 text-lg font-medium"
                >
                  View My Work
                </motion.a>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-ghost px-8 py-3 text-lg font-medium"
                >
                  Contact Me
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="flex gap-6 justify-center"
              >
                {INFO.socials.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors cursor-hover"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {social.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator */}
          <motion.a
            href="#experience"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-hover"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.a>
        </section>

        {/* Experience Section */}
        <Section id="experience" className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Work History</h3>
              {EXPERIENCE_SIMPLE.map((exp, index) => (
                <ExperienceItem
                  key={index}
                  title={exp.title}
                  org={exp.org}
                  year={exp.year}
                  bullets={exp.bullets}
                  stack={exp.stack}
                  delay={index * 0.1}
                />
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Career Highlights</h3>
              <Card className="h-64">
                <AutoCarousel items={WORK_DETAILED} />
              </Card>
            </div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                tags={project.tags}
                github={project.github}
                demo={project.demo}
                blurb={project.blurb}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Section>

        {/* Awards Section */}
        <Section id="awards" className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Awards & Recognition
          </motion.h2>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {AWARDS.map((award, index) => (
              <AwardItem
                key={index}
                year={award.year}
                name={award.name}
                note={award.note}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="container">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
                <p className="text-gray-300 mb-6">
                  I'm always interested in discussing data analytics opportunities, 
                  collaborative projects, or sharing insights about business intelligence.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">📧</span>
                  <a href={`mailto:${INFO.email}`} className="text-gray-300 hover:text-white cursor-hover">
                    {INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">📱</span>
                  <a href={`tel:${INFO.phone}`} className="text-gray-300 hover:text-white cursor-hover">
                    {INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-blue-400">📍</span>
                  <span className="text-gray-300">{INFO.location}</span>
                </div>
              </div>
              
              <motion.a
                href={INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📄 Download Resume
              </motion.a>
            </motion.div>
            
            <ContactForm />
          </div>
        </Section>

        {/* Footer */}
        <footer className="container py-12 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © 2024 {INFO.name}. Built with Next.js, Tailwind CSS, and Framer Motion.
          </motion.p>
        </footer>
      </main>
    </>
  );
}
