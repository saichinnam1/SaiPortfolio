import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Users, Code, Award, Briefcase, GitCommit, GitBranch, Github, Linkedin, Mail, Download } from 'lucide-react';
import Footer from '@/react-app/components/Footer';

const ExperiencePage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      id: 1,
      title: 'Java Spring Boot Intern',
      company: 'Proloto Technologies Pvt Ltd',
      duration: 'Mar 2024 – Aug 2024',
      location: 'Hyderabad, India',
      type: 'Internship',
      status: 'completed',
      responsibilities: [
        'Architected and developed scalable backend microservices using Java Spring Boot with enterprise design patterns.',
        'Implemented JWT-based authentication and WebSocket optimization using advanced Java concurrency patterns.',
        'Optimized MySQL queries using Hibernate ORM, indexing strategies, and Java-based caching solutions.',
        'Deployed containerized Java applications using Docker and orchestrated CI/CD pipelines for automated testing and releases.'
      ],
      technologies: [
        'Java', 'Spring Boot', 'Microservices', 'MySQL',
        'React.js', 'WebSockets', 'JWT', 'OAuth2',
        'Docker', 'RabbitMQ', 'Maven', 'Git'
      ],
      achievements: [
        '🚀 Improved real-time chatbot performance by 40% using Java asynchronous programming and optimized WebSocket routing with Spring Boot.',
        '⚡ Boosted MySQL database performance by 30% through Hibernate query optimization, strategic indexing, and Java caching layers.',
        '🔧 Reduced deployment time by 25% by containerizing Java microservices and implementing automated CI/CD pipelines.',
        '💡 Developed 10+ enterprise-grade Java-Spring components with React frontend integration, establishing best practices for the team.'
      ]
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
      items: ['Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Spring Cloud', 'Microservices'],
      highlight: true
    },
    {
      category: 'Backend Architecture',
      items: ['REST APIs', 'WebSockets', 'Message Queues', 'Caching', 'Database Design', 'JWT Authentication']
    },
    {
      category: 'Database & Tools',
      items: ['MySQL', 'Hibernate ORM', 'JDBC', 'Git', 'Docker', 'Maven', 'Postman', 'CI/CD Pipelines']
    },
    {
      category: 'Frontend Complementary',
      items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'TailwindCSS']
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Java <span className="text-orange-500 font-mono">Mastery</span>
          </h1>
          <p className="text-lg sm:text-2xl text-orange-400 font-bold mb-4">
            Passionate Java Developer | Enterprise Solutions Architect
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto">
            Building high-performance, scalable backend systems with Java Spring Boot. 
            Expertise in microservices architecture, real-time systems, and enterprise-grade solutions.
            Java is not just a language—it's my passion and craft.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-8">
              <GitBranch className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-bold text-white font-mono">git log --career</h2>
            </div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2 }}
                className={`relative pl-8 pb-8 ${index !== experiences.length - 1 ? 'border-l-2 border-orange-500/30' : ''}`}
              >
                <div className="absolute -left-2 w-4 h-4 bg-orange-500 rounded-full"></div>

                <div className="glass p-6 rounded-xl hover:glow-orange transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                      <p className="text-orange-500 font-semibold">{exp.company}</p>
                    </div>

                    <div className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/20 text-blue-400">
                      COMPLETED
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1"><Calendar className="w-4 h-4" /><span>{exp.duration}</span></div>
                    <div className="flex items-center space-x-1"><MapPin className="w-4 h-4" /><span>{exp.location}</span></div>
                    <div className="flex items-center space-x-1"><Briefcase className="w-4 h-4" /><span>{exp.type}</span></div>
                  </div>

                  <div className="space-y-2 text-gray-300 text-sm">
                    {exp.responsibilities.slice(0, 3).map((resp, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <GitCommit className="w-3 h-3 text-orange-500 mt-1 flex-shrink-0" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Detailed Experience */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Detailed <span className="text-orange-500">Experience</span>
          </h2>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.3 }}
              className="glass p-8 rounded-xl mb-12"
            >
              <div className="grid lg:grid-cols-3 gap-8">

                {/* Basic Info */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-orange-500 text-lg font-semibold">{exp.company}</p>
                  <p className="text-gray-400">{exp.duration}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <Code className="w-5 h-5 text-orange-500" />
                    <span>Key Responsibilities</span>
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"></div>
                        <span className="text-sm">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center space-x-2">
                    <Award className="w-5 h-5 text-orange-500" />
                    <span>Key Achievements</span>
                  </h4>

                  <ul className="space-y-3">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center">
                          <Users className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-sm text-gray-300">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Skills */}
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center">
            Technical <span className="text-orange-500">Arsenal</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Mastered Java and the Spring ecosystem. Complementary skills across databases, DevOps, and frontend technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {skills.map((group, index) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                className={`glass p-6 rounded-xl hover:glow-orange transition-all duration-300 ${
                  group.highlight ? 'border-2 border-orange-500 ring-1 ring-orange-500/30 scale-105' : ''
                }`}
              >
                <h3 className={`text-lg font-bold text-white mb-4 text-center flex items-center justify-center space-x-2 ${
                  group.highlight ? 'text-orange-400' : ''
                }`}>
                  <span>{group.category}</span>
                  {group.highlight && <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full animate-pulse">⭐</span>}
                </h3>

                {group.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2 p-2 rounded bg-gray-800/50 hover:bg-gray-700/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      group.highlight ? 'bg-orange-500' : 'bg-orange-500'
                    }`}></div>
                    <span className="text-sm text-gray-300">{skill}</span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Java Passion Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-20 px-6 mt-20 mb-20"
        >
          <div className="max-w-4xl mx-auto">
            <div className="glass p-12 rounded-xl border-2 border-orange-500/50 hover:border-orange-500 transition-all duration-300">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-center">
                Why I Love <span className="text-orange-500">Java</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">🏗️</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Enterprise Architecture</h3>
                  <p className="text-gray-300">Build robust, scalable systems that power real-world applications serving millions.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">⚡</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Performance & Reliability</h3>
                  <p className="text-gray-300">JVM optimization, memory management, and concurrency enable high-performance systems.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-xl font-bold text-orange-400 mb-2">Mastery Through Depth</h3>
                  <p className="text-gray-300">Java's rich ecosystem and Spring framework enable elegant, maintainable solutions.</p>
                </motion.div>
              </div>
              <p className="text-gray-300 text-center mt-10 text-lg">
                I'm committed to mastering Java and building enterprise-grade solutions that make an impact.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ===== Footer Section ===== */}
        <Footer showCV={true} cvLink="/cv/Venkata_Saikumar_CV.pdf" />

      </div>
    </div>
  );
};

export default ExperiencePage;
