import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Award, Code2 } from 'lucide-react';
import Footer from '@/react-app/components/Footer';

const ExperiencePage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Git log style commits representing key experiences/achievements
  const gitCommits = [
    {
      hash: 'a7f9e2c',
      date: 'Aug 2024',
      author: 'Venkata Saikumar',
      message: 'feat: deploy production microservices with 99.9% uptime using Docker & K8s',
      detail: 'Successfully containerized 10+ Java Spring Boot microservices and deployed to production with automated CI/CD pipelines. Reduced deployment time by 25% and enabled seamless scaling.',
      tech: ['Docker', 'Kubernetes', 'Spring Boot', 'Jenkins', 'Maven'],
      impact: '✅ 99.9% uptime | 25% faster deployments | Scalable architecture'
    },
    {
      hash: 'b4d3f1a',
      date: 'Jul 2024',
      author: 'Venkata Saikumar',
      message: 'perf: optimize database queries achieving 40% performance boost in chatbot API',
      detail: 'Implemented Hibernate query optimization, strategic MySQL indexing, caching layers using Redis, and Java connection pooling. Improved API response time from 800ms to 480ms.',
      tech: ['Hibernate', 'MySQL', 'Redis', 'Spring Data JPA', 'JDBC'],
      impact: '⚡ 40% faster queries | 800ms → 480ms response time | Scalable caching'
    },
    {
      hash: 'c6e2b9f',
      date: 'Jun 2024',
      author: 'Venkata Saikumar',
      message: 'feat: implement JWT authentication & OAuth2 with WebSocket security layer',
      detail: 'Designed and implemented enterprise-grade JWT-based authentication with OAuth2 integration. Added real-time WebSocket security using Spring Security and custom authentication filters.',
      tech: ['Spring Security', 'JWT', 'OAuth2', 'WebSockets', 'Spring Boot'],
      impact: '🔐 Enterprise security | Real-time auth | OAuth2 integration'
    },
    {
      hash: 'd8h4c2e',
      date: 'May 2024',
      author: 'Venkata Saikumar',
      message: 'refactor: redesign chatbot architecture with async processing & message queues',
      detail: 'Restructured chatbot backend using async Java patterns, Spring Boot async methods, and RabbitMQ for message queuing. Improved concurrent user handling from 100 to 5000+ concurrent connections.',
      tech: ['RabbitMQ', 'Spring Async', 'Java Concurrency', 'Spring Boot', 'microservices'],
      impact: '🚀 5000+ concurrent users | Async processing | Real-time messaging'
    },
    {
      hash: 'e9i5d3f',
      date: 'Apr 2024',
      author: 'Venkata Saikumar',
      message: 'feat: develop REST APIs for React frontend integration with comprehensive error handling',
      detail: 'Built 20+ REST APIs with Spring Boot, implemented global exception handling, request validation, and comprehensive API documentation using Swagger. Enabled seamless React frontend integration.',
      tech: ['Spring Boot', 'REST APIs', 'Swagger', 'Spring Validation', 'Jackson'],
      impact: '🔌 20+ APIs | Complete documentation | Error handling'
    },
    {
      hash: 'f1j6e4g',
      date: 'Mar 2024',
      author: 'Venkata Saikumar',
      message: 'init: start internship at Proloto Technologies - initialize Spring Boot project structure',
      detail: 'Joined Proloto Technologies as Java Spring Boot Intern. Set up project structure following enterprise patterns, configured MySQL database, implemented connection pooling, and established best practices for the team.',
      tech: ['Spring Boot', 'MySQL', 'Maven', 'Java 17', 'Enterprise Patterns'],
      impact: '📚 Foundation established | Best practices | Enterprise structure'
    }
  ];

  
  const skills = [
    {
      category: 'Core Java',
      items: ['OOP Concepts', 'Collections Framework', 'Multithreading', 'Exception Handling', 'Streams & Lambda', 'Reflection API'],
      highlight: true
    },
    {
      category: 'Spring Ecosystem',
      items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Spring Cloud', 'Async Processing'],
      highlight: true
    },
    {
      category: 'Backend Architecture',
      items: ['REST APIs', 'WebSockets', 'Message Queues', 'Microservices', 'JWT Auth', 'OAuth2']
    },
    {
      category: 'Database & DevOps',
      items: ['MySQL', 'Hibernate ORM', 'Redis Caching', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      category: 'Frontend & Tools',
      items: ['React.js', 'JavaScript', 'TypeScript', 'Swagger', 'Maven', 'Git']
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Experience <span className="text-orange-500 font-mono">.log</span>
          </h1>
          <p className="text-sm text-orange-400 font-mono mb-4">$ git log --all --career --begins</p>
          <p className="text-sm text-gray-300 max-w-3xl mx-auto">
            My journey at <span className="text-orange-500 font-bold">Proloto Technologies</span> (Mar - Aug 2024). 
            6 months of intensive learning, building scalable Java microservices, and mastering enterprise architecture.
          </p>
        </motion.div>

        {/* Git Commits Timeline */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="space-y-6">
            {gitCommits.map((commit, index) => (
              <motion.div
                key={commit.hash}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="group"
              >
                {/* Git Commit Card */}
                <div className="bg-gray-950 border border-orange-500/30 rounded-xl p-5 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                  
                  {/* Commit Header - Git Style */}
                  <div className="mb-4 pb-4 border-b border-gray-800">
                    <div className="font-mono text-sm text-green-400 mb-2 flex items-center space-x-2">
                      <span className="text-orange-500">$</span>
                      <span>git show {commit.hash}</span>
                    </div>
                    <div className="text-xs text-gray-500 space-y-1">
                      <div><span className="text-gray-400">commit</span> <span className="text-green-400 font-mono">{commit.hash}7f9a8b3c2d1e5f</span></div>
                      <div><span className="text-gray-400">Author:</span> {commit.author} &lt;venkata@proloto.dev&gt;</div>
                      <div><span className="text-gray-400">Date:</span> {commit.date}</div>
                    </div>
                  </div>

                  {/* Commit Message */}
                  <div className="mb-4">
                    <p className="text-gray-300 font-mono text-sm mb-2">
                      <span className="text-orange-500">$</span> {commit.message}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed ml-4">
                      {commit.detail}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {commit.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-900 border border-orange-500/30 text-orange-400 rounded text-xs font-mono hover:bg-orange-500/10 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact Metrics */}
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-green-400 text-sm font-mono flex items-center space-x-2">
                      <Award className="w-4 h-4" />
                      <span>{commit.impact}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Proloto Experience Summary */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 glass p-6 rounded-xl border border-orange-500/30 hover:border-orange-500/60 transition-all"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold text-orange-500 mb-2 flex items-center space-x-2">
                <Code2 className="w-4 h-4" />
                <span>Company</span>
              </h3>
              <p className="text-white text-lg font-bold mb-1">Proloto Technologies</p>
              <p className="text-gray-400 text-xs">Pvt Ltd, Hyderabad, India</p>
              <p className="text-orange-400 font-mono text-xs mt-2">Mar 2024 → Aug 2024</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-orange-500 mb-2 flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Role</span>
              </h3>
              <p className="text-white text-lg font-bold mb-1">Java Spring Boot Intern</p>
              <p className="text-gray-400 text-sm">Full Stack Development | Backend Specialist</p>
              <p className="text-green-400 font-mono text-sm mt-2">6 Months | 6 Major Commits</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-orange-500 mb-2 flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Achievements</span>
              </h3>
              <ul className="text-xs text-gray-300 space-y-1">
                <li>✅ 10+ Production Microservices</li>
                <li>✅ 40% Performance Improvement</li>
                <li>✅ 99.9% Uptime Deployed</li>
                <li>✅ Best Practices Established</li>
              </ul>
            </div>
            {/* Developer.java removed from this page */}
          </div>
        </motion.section>

        {/* Technical Arsenal */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Technical <span className="text-orange-500">Arsenal</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Mastered Java ecosystem and enterprise architecture. Full-stack capabilities from REST APIs to real-time systems.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.15 }}
                className={`glass p-4 rounded-lg hover:border-orange-500/60 transition-all duration-300 border ${
                  group.highlight ? 'border-2 border-orange-500 ring-1 ring-orange-500/30 md:scale-105' : 'border-orange-500/30'
                }`}
              >
                <h3 className={`text-sm font-bold mb-3 text-center flex items-center justify-center space-x-2 ${
                  group.highlight ? 'text-orange-400' : 'text-white'
                }`}>
                  <span>{group.category}</span>
                  {group.highlight && <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full animate-pulse">⭐</span>}
                </h3>

                {group.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-2 rounded bg-gray-800/50 hover:bg-orange-500/10 transition-colors mb-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <span className="text-sm text-gray-300">{skill}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Why Java Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="py-12 px-6 mb-16 glass rounded-xl border-2 border-orange-500/50 hover:border-orange-500 transition-all"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-3 text-center">
              Why <span className="text-orange-500">Java</span> Powers My Career
            </h2>
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto text-sm">
              From enterprise reliability to microservices scalability, Java enables building systems that matter.
            </p>

            <div className="grid md:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="p-3 rounded-md bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/5 transition-all"
              >
                <div className="text-2xl mb-1">🏗️</div>
                <h3 className="text-xs font-bold text-orange-400 mb-1">Enterprise Architecture</h3>
                <p className="text-[10px] text-gray-300">Spring Boot enables building production-grade systems with proven patterns, security, and scalability that power real-world applications.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="p-3 rounded-md bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/5 transition-all"
              >
                <div className="text-2xl mb-1">⚡</div>
                <h3 className="text-xs font-bold text-orange-400 mb-1">Performance & Reliability</h3>
                <p className="text-[10px] text-gray-300">JVM optimization, async processing, and concurrency patterns enable high-performance systems serving millions of requests reliably.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="p-3 rounded-md bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/5 transition-all"
              >
                <div className="text-2xl mb-1">🎯</div>
                <h3 className="text-xs font-bold text-orange-400 mb-1">Mastery Through Depth</h3>
                <p className="text-[10px] text-gray-300">Java's rich ecosystem, Spring framework, and design patterns create opportunities for continuous learning and architectural excellence.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="p-3 rounded-md bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 hover:border-orange-500 hover:bg-orange-500/5 transition-all"
              >
                <div className="text-2xl mb-1">🔐</div>
                <h3 className="text-xs font-bold text-orange-400 mb-1">Security & Compliance</h3>
                <p className="text-[10px] text-gray-300">Enterprise-grade security frameworks, OAuth2, JWT authentication, and compliance patterns ensure secure, trustworthy systems.</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer Section */}
        <Footer showCV={true} cvLink="/cv/Venkata_Saikumar_CV.pdf" />

      </div>
    </div>
  );
};

export default ExperiencePage;
