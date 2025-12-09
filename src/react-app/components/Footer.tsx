import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Heart, Code2, Sparkles, Zap, Star } from 'lucide-react';

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
      color: 'from-gray-600 to-gray-700',
      hoverColor: 'hover:from-gray-500 hover:to-gray-600',
      textColor: 'text-white',
      glowColor: 'shadow-gray-600/50'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/venkatasaikumar-chinnam-ba741a201/',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-400 hover:to-blue-500',
      textColor: 'text-white',
      glowColor: 'shadow-blue-500/50'
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:venkatasaikumarchinnam2@gmail.com',
      color: 'from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-400 hover:to-orange-500',
      textColor: 'text-white',
      glowColor: 'shadow-orange-500/50'
    }
  ];

  const quickLinks = [
    { label: 'Home', href: '/#/' },
    { label: 'About', href: '/#/about' },
    { label: 'Experience', href: '/#/experience' },
    { label: 'Projects', href: '/#/projects' },
    { label: 'Contact', href: '/#/contact' }
  ];

  const techStack = ['Java', 'Spring Boot', 'React', 'MySQL', 'Docker', 'Microservices'];

  return (
    <footer className="relative border-t border-white/5 bg-black overflow-hidden">
      {/* Premium animated background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-600/20 to-transparent rounded-full blur-3xl opacity-30"
        ></motion.div>
        
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl opacity-30"
        ></motion.div>

        {/* Floating particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8
            }}
            className="absolute w-1 h-1 bg-orange-500 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: '50%'
            }}
          ></motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 mb-12">
          {/* Brand Section - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 group"
          >
            {/* Premium brand card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/50 to-black border border-white/10 rounded-lg p-4 backdrop-blur-xl">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/50"
                  >
                    <Code2 className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <motion.p
                      animate={{ textShadow: ['0 0 10px rgba(249, 115, 22, 0)', '0 0 20px rgba(249, 115, 22, 0.5)', '0 0 10px rgba(249, 115, 22, 0)'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="font-mono font-bold text-white text-sm"
                    >
                      Sai
                    </motion.p>
                    <p className="text-[10px] text-orange-400 font-mono font-semibold">Kumar.java</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  🚀 Enterprise Java Developer crafting scalable solutions with precision and passion.
                </p>
                <div className="flex items-center space-x-2 text-orange-400 text-xs font-semibold">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>Powered by Innovation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center space-x-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
              <span>Navigation</span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 text-xs transition-all duration-300 flex items-center group/link relative overflow-hidden"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <ArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover/link:opacity-100 transform -translate-x-2 group-hover/link:translate-x-0 transition-all duration-300" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-transparent group-hover/link:w-full transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center space-x-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
              <span>Tech Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative group/tech"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg opacity-0 group-hover/tech:opacity-20 blur transition-all duration-300"></div>
                  <span className="relative px-2 py-1 text-[10px] bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 text-orange-300 rounded-md hover:border-orange-500 transition-all duration-300 font-semibold cursor-default inline-block">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links - Premium */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-white font-bold text-xs uppercase tracking-widest mb-6 flex items-center space-x-2">
              <span className="w-6 h-0.5 bg-gradient-to-r from-orange-500 to-transparent"></span>
              <span>Connect</span>
            </h3>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    whileHover={{ scale: 1.05, x: 8 }}
                    className="group/social"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover/social:opacity-100 blur-lg transition-all duration-300"></div>
                    <div className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg bg-gradient-to-r ${social.color} border border-white/10 group-hover/social:border-white/30 transition-all duration-300 shadow-lg hover:shadow-2xl ${social.glowColor}`}>
                      <Icon className={`w-3 h-3 ${social.textColor}`} />
                      <span className={`text-xs font-semibold ${social.textColor}`}>{social.label}</span>
                      <Zap className="w-2 h-2 ml-auto opacity-0 group-hover/social:opacity-100 transition-all duration-300" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Premium Divider with animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent mb-8 origin-center"
        ></motion.div>

        {/* Bottom Section - Premium */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-center gap-6"
        >
          {/* Left: Copyright & Tagline */}
          <div className="text-center sm:text-left">
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-gray-400 text-[10px] sm:text-xs font-semibold"
            >
              © {currentYear} <span className="text-orange-400">Sai Chinnam</span>
              <span className="text-gray-600"> • </span>
              <span className="text-gray-500">All Rights Reserved</span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-gray-500 text-[10px] mt-1 flex items-center justify-center sm:justify-start space-x-1"
            >
              <span>Crafted with</span>
              <Heart className="w-2 h-2 text-orange-500 animate-pulse" />
              <span>by a passionate Java developer</span>
            </motion.p>
          </div>

          {/* Right: CTA with premium styling */}
          {showCV && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-3 group"
            >
              <div className="text-center sm:text-right">
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-gray-500 text-[10px] font-mono mb-1 uppercase tracking-widest"
                >
                  ✨ Always open to
                </motion.p>
                <p className="text-white font-bold text-xs bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                  New Opportunities
                </p>
              </div>
              <motion.a
                href={cvLink}
                download
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(249, 115, 22, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="relative px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white text-xs font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-orange-500/50 overflow-hidden group/btn"
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <Star className="w-3 h-3" />
                  <span>Download CV</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover/btn:opacity-100 transition-all duration-300"></div>
              </motion.a>
            </motion.div>
          )}
        </motion.div>

        {/* Decorative animated line at bottom */}
        <motion.div
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent w-full"
        ></motion.div>
      </div>

      {/* Top animated border */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
      ></motion.div>
    </footer>
  );
};

export default Footer;
