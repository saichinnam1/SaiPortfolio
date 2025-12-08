import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import {
  Github, Linkedin, Mail, Phone, MapPin, ChevronDown,
  Code, Database, Server, Smartphone, Download
} from 'lucide-react';
import TypewriterEffect from '@/react-app/components/TypewriterEffect';

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showStats, setShowStats] = useState(false);

  const stats = [
    { label: 'Projects Completed', value: 4, suffix: '+' },
    { label: 'Technologies Mastered', value: 10, suffix: '+' },
    { label: 'Years of Learning', value: 1, suffix: '+' },
    { label: 'Years of Experience', value: '6 months' },
  ];

  const techStack = [
    { name: 'Java', icon: Code, color: 'text-orange-500' },
    { name: 'Spring Boot', icon: Server, color: 'text-green-500' },
    { name: 'SQL', icon: Database, color: 'text-blue-500' },
    { name: 'Javascript', icon: Code, color: 'text-cyan-500' },
    { name: 'MySQL', icon: Smartphone, color: 'text-yellow-500' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % techStack.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* ===== Hero Section with Background Image ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6">
  {/* Video Background */}
  {/* <video
    className="absolute inset-0 w-full h-full object-cover"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="src/react-app/assets/images/stock-footage-code-creation-and-algorithm-design-coding-expertise-web-development-animation-rendering.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video> */}

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/60"></div>

        <div className="max-w-9xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-orange-500 font-mono text-lg"
              >
                {/* System.out.println("Hello, World!"); */}
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Sai</span>
                <span className="block text-orange-500 font-mono">Kumar</span>
              </h1>

              <div className="text-xl lg:text-2xl text-gray-300 h-8">
                <TypewriterEffect
                  text="Passionate Java Developer"
                  speed={100}
                  delay={1000}
                />
              </div>

              <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                Self-driven developer specializing in enterprise Java solutions,
                Spring Boot microservices, and full-stack development with 1+ years of practical experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/projects"
                className="btn-primary flex items-center space-x-2 pulse-glow-animation"
              >
                <Code className="w-5 h-5" />
                <span>View My Work</span>
              </Link>

              <Link
                to="/Contact"
                className="px-6 py-3 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center space-x-2 group"
              >
                <Code className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Let's Connect</span>
              </Link>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="flex flex-wrap gap-6 pt-6 border-t border-gray-800"
            >
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="w-4 h-4 text-orange-500" />
                <span>+91 9157575559</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Tech Stack (optional floating icons) */}
          {/* To re-enable the floating stack, uncomment and adjust */}
        </div>
      </section>

      {/* ===== Stats Section ===== */}
      {showStats && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-6"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 4 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center p-6 glass rounded-xl hover:glow-orange transition-all duration-300"
                >
                  <div className="text-3xl lg:text-4xl font-bold text-orange-500 font-mono">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      {stat.value}{stat.suffix}
                    </motion.span>
                  </div>
                  <div className="text-gray-300 mt-2 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* ===== Why I Love Java Section ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="py-20 px-6 mb-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass p-12 rounded-2xl border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-300 bg-gradient-to-br from-gray-900/50 via-orange-500/5 to-gray-900/50"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
              Why I <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Love Java</span>
            </h2>
            <p className="text-gray-300 text-center text-xl mb-16 max-w-3xl mx-auto">
              Java is more than just a programming language—it's a philosophy of elegant, reliable, and scalable software engineering.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass p-8 rounded-xl border border-orange-500/30 hover:border-orange-500 hover:glow-orange transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🏗️</div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">Enterprise Power</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Build production-grade systems trusted by Fortune 500 companies worldwide. Java's maturity and stability are unmatched.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass p-8 rounded-xl border border-orange-500/30 hover:border-orange-500 hover:glow-orange transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">High Performance</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  JVM optimization, JIT compilation, and garbage collection enable lightning-fast, efficient applications at scale.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass p-8 rounded-xl border border-orange-500/30 hover:border-orange-500 hover:glow-orange transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">True OOP Mastery</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Pure object-oriented design enables clean architecture, SOLID principles, and maintainable code that scales gracefully.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass p-8 rounded-xl border border-orange-500/30 hover:border-orange-500 hover:glow-orange transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h3 className="text-xl font-bold text-orange-400 mb-3">Spring Ecosystem</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Spring Boot, Spring Cloud, and the ecosystem make building microservices, APIs, and distributed systems elegant and fast.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 rounded-xl p-8 border border-orange-500/20"
            >
              <p className="text-gray-200 text-center text-lg leading-relaxed">
                <span className="font-bold text-orange-400">Every line of Java code</span> I write is a commitment to quality, 
                reliability, and excellence. I'm constantly learning, pushing boundaries, and mastering the craft of 
                <span className="font-bold text-orange-400"> enterprise software engineering</span>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ===== Footer Section ===== */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 mt-20 border-t border-gray-800"
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* Download CV Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-xl text-center space-y-6 hover:glow-orange transition-all duration-300"
          >
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto">
              <Download className="w-8 h-8 text-orange-500" />
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-white">Download My CV</h3>
              <p className="text-gray-400 text-lg">Get my complete resume and qualifications</p>
            </div>
            <a
              href="/cv/Venkata_Saikumar_CV.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-8 rounded-xl space-y-8"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-2">
                Let's <span className="text-orange-500">Connect</span>
              </h3>
              <p className="text-gray-400 text-lg">Reach out and let's collaborate</p>
            </div>

            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/saichinnam1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-gray-800 rounded-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 group hover:shadow-lg hover:shadow-gray-600/50"
                title="GitHub"
              >
                <Github className="w-7 h-7 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/venkatasaikumar-chinnam-ba741a201/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 group hover:shadow-lg hover:shadow-blue-600/50"
                title="LinkedIn"
              >
                <Linkedin className="w-7 h-7 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="mailto:venkatasaikumarchinnam2@gmail.com"
                className="p-5 bg-gray-800 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 group hover:shadow-lg hover:shadow-orange-600/50"
                title="Email"
              >
                <Mail className="w-7 h-7 text-gray-300 group-hover:text-white" />
              </a>
            </div>

            <p className="text-gray-400 text-center text-lg">
              Feel free to reach out through any of these channels
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
