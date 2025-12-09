import { motion } from 'framer-motion';
import { Link } from 'react-router';
import {
  Code, Mail,
  Database, Server, Coffee
} from 'lucide-react';
import TypewriterEffect from '@/react-app/components/TypewriterEffect';
import Footer from '@/react-app/components/Footer';

const HomePage = () => {
  // Note: useEffect for scroll tracking removed - not currently needed for render

  const stats = [
    { label: 'Projects Built', value: '7+', icon: Code },
    { label: 'Tech Stack', value: '10+', icon: Database },
    { label: 'Internship Experience', value: '6 Months', icon: Server },
    { label: 'Java Learning', value: '3 Yr', icon: Coffee },
  ];

  const techHighlights = [
    { name: 'Java ☕', desc: 'Core language expertise', color: 'from-orange-500 to-orange-600' },
    { name: 'Spring Boot 🍃', desc: 'Microservices & REST APIs', color: 'from-green-500 to-green-600' },
    { name: 'MySQL 🗄️', desc: 'Database design & optimization', color: 'from-blue-500 to-blue-600' },
    { name: 'React ⚛️', desc: 'Modern UI development', color: 'from-cyan-500 to-cyan-600' },
    { name: 'Full-Stack 🚀', desc: 'End-to-end solutions', color: 'from-purple-500 to-purple-600' },
  ];

  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-mono">
                $ welcome.to(MyPortfolio);
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              <span className="block mb-3">Hello, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 font-mono">
                Venkata Saikumar.java
              </span>
            </motion.h1>

            {/* Subtitle with typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-300 h-10 mb-8"
            >
              <TypewriterEffect
                text="Java Developer | Full-Stack Engineer | Problem Solver"
                speed={50}
                delay={800}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-sm text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Passionate developer with 3 years of Java learning and 6 months of professional 
              experience at Proloto Technologies. Specialized in building scalable microservices, 
              REST APIs, and full-stack solutions using Spring Boot, React, and modern technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link
                to="/projects"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group text-sm"
              >
                <Code className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                View My Projects
              </Link>
              <a
                href="/cv/Venkata_Saikumar_CV.pdf"
                download
                className="px-6 py-3 border-2 border-orange-500 text-orange-400 font-semibold rounded-lg hover:bg-orange-500/10 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group text-sm"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator removed per request */}
      </section>

      {/* ===== STATS SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white text-center mb-16"
          >
            My <span className="text-orange-500">Journey</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="glass p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/50 group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <Icon className="w-10 h-10 text-orange-500 group-hover:text-orange-400" />
                  </div>
                  <div className="text-xl font-bold text-orange-500 font-mono mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Developer.java removed from this page */}
        </div>
      </motion.section>

      {/* ===== TECH STACK SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 px-4 sm:px-6 lg:px-8 relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white text-center mb-4"
          >
            My Tech <span className="text-orange-500">Arsenal</span>
          </motion.h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Proficient in modern technologies with Java as my core expertise
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
          >
            {techHighlights.map((tech) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className={`glass p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 group hover:scale-110 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="relative z-10">
                  <h3 className="font-bold text-sm text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-gray-400 text-[12px]">{tech.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ===== WHY JAVA SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-white text-center mb-16"
          >
            Why I <span className="text-orange-500">Love Java</span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            {[
              {
                title: '🏗️ Enterprise-Grade Reliability',
                desc: 'Java powers mission-critical systems worldwide. Its maturity, stability, and backward compatibility make it the gold standard for enterprise applications.'
              },
              {
                title: '⚡ High Performance & Scalability',
                desc: 'JVM optimization, JIT compilation, and garbage collection deliver blazing-fast performance. Java scales effortlessly from monoliths to microservices.'
              },
              {
                title: '🎯 True OOP Mastery',
                desc: 'Java enforces pure object-oriented principles. Clean architecture, SOLID principles, and design patterns create maintainable, professional code.'
              },
              {
                title: '🍃 Spring Boot Ecosystem',
                desc: 'Spring simplifies enterprise development. Spring Boot, Spring Cloud, and the ecosystem make building modern APIs, microservices, and distributed systems elegant.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-3 rounded-md bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="text-2xl mb-1">{item.title.split(' ')[0]}</div>
                <h3 className="text-xs font-bold text-orange-400 mb-1">
                  {item.title.replace(/^[^\s]+\s?/, '')}
                </h3>
                <p className="text-[10px] text-gray-300 leading-snug">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ===== CTA SECTION ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-8 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-xl border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-300 text-center"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Ready to Build Something <span className="text-orange-500">Amazing?</span>
            </h2>
            <p className="text-[13px] text-gray-300 mb-6">
              Let's collaborate on your next project. Whether you need a backend solution,
              microservices architecture, or full-stack development, I'm ready to deliver excellence.
            </p>
            <Link
              to="/Contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 text-sm"
            >
              Let's Connect 🚀
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default HomePage;
