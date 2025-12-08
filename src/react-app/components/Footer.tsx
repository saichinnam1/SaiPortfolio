import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Heart, Code2 } from 'lucide-react';

interface FooterProps {
  showCV?: boolean;
  cvLink?: string;
}

const Footer = ({ showCV = true, cvLink = '/cv/Venkata_Saikumar_CV.pdf' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/saichinnam1',
      color: 'hover:text-white hover:bg-gray-700/50',
      hoverShadow: 'hover:shadow-gray-600/50'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/venkatasaikumar-chinnam-ba741a201/',
      color: 'hover:text-blue-400 hover:bg-blue-500/20',
      hoverShadow: 'hover:shadow-blue-600/50'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:venkatasaikumarchinnam2@gmail.com',
      color: 'hover:text-orange-400 hover:bg-orange-500/20',
      hoverShadow: 'hover:shadow-orange-600/50'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/#/' },
    { label: 'About', href: '/#/about' },
    { label: 'Experience', href: '/#/experience' },
    { label: 'Projects', href: '/#/projects' },
    { label: 'Contact', href: '/#/contact' }
  ];

  return (
    <footer className="relative border-t border-gray-800/50 bg-gradient-to-b from-transparent via-black/20 to-black">
      {/* Decorative blur effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-mono font-bold text-white">Sai</p>
                <p className="text-xs text-gray-400 font-mono">Kumar.java</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Passionate Java developer building scalable enterprise solutions with clean code and innovative thinking.
            </p>
            <div className="mt-6 flex items-center space-x-2 text-orange-400 text-sm">
              <Heart className="w-4 h-4" />
              <span>Built with Java & Spring Boot</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'Microservices'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs bg-orange-500/10 border border-orange-500/30 text-orange-400 rounded-full hover:border-orange-500 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Connect</h3>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-800/30 border border-gray-700/50 text-gray-300 hover:scale-105 transition-all duration-300 group ${social.color} ${social.hoverShadow} hover:shadow-lg`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{social.label}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              © {currentYear} <span className="text-orange-400 font-semibold">Sai Chinnam</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Crafted with <span className="text-orange-500">❤️</span> by a passionate Java developer
            </p>
          </div>

          {/* CTA or Additional Info */}
          {showCV && (
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="text-center sm:text-right">
                <p className="text-gray-400 text-xs font-mono mb-2">ALWAYS OPEN TO</p>
                <p className="text-white font-semibold text-sm">New Opportunities</p>
              </div>
              <a
                href={cvLink}
                download
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Download CV
              </a>
            </div>
          )}
        </motion.div>
      </div>

      {/* Animated gradient border on top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
    </footer>
  );
};

export default Footer;
