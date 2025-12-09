import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code2, Copy, Check } from 'lucide-react';
import Footer from '@/react-app/components/Footer';

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const javaPhilosophyCode = `// Developer.java - My Core Philosophy
public abstract class Developer {
    
    private final String name = "Venkata Saikumar";
    private final int yearsLearning = 3;
    private final int monthsInternship = 6;
    
    public abstract void writeCleanCode();
    public abstract void buildScalableSystems();
    
    @Override
    public String toString() {
        return "Passionate Java Developer → " +
               "Enterprise Solutions Architect";
    }
}

// VenkataSaikumar.java - Implementation
public class VenkataSaikumar extends Developer {
    
    @Override
    public void writeCleanCode() {
        System.out.println("✓ SOLID Principles");
        System.out.println("✓ Design Patterns");
        System.out.println("✓ Clean Architecture");
    }
    
    @Override
    public void buildScalableSystems() {
        System.out.println("✓ Spring Boot Microservices");
        System.out.println("✓ REST APIs");
        System.out.println("✓ Database Optimization");
    }
}`;

  const coreValuesCode = `public List<String> getCoreValues() {
    return Arrays.asList(
        "Continuous Learning",
        "Code Quality Excellence",
        "Team Collaboration",
        "User-Centric Design",
        "Problem Solving"
    );
}`;

  const javaTopics = [
    'Core Java', 'OOP Concepts', 'Collections', 'Multithreading',
    'Exception Handling', 'Spring Boot', 'REST APIs', 'Hibernate ORM',
    'MySQL', 'Microservices', 'Design Patterns', 'Clean Code'
  ];

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
            About <span className="text-orange-500 font-mono">.java</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Exploring my journey from Java learner to Enterprise Developer
          </p>
        </motion.div>

        {/* Main Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Left - Story + Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
                <Code2 className="w-6 h-6 text-orange-500" />
                <span>My Journey</span>
              </h2>
              
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p className="text-sm">
                  My story began in <span className="text-orange-400 font-semibold">2021</span> when I discovered the power of Java. 
                  What started as curiosity about object-oriented design evolved into a passion for building enterprise-grade systems.
                </p>

                <div className="glass p-3 rounded-lg border border-orange-500/30 bg-orange-500/5">
                  <p className="text-xs">
                    <span className="text-orange-400 font-mono">→ 3 Years:</span> Deep Java mastery including OOP, Collections, Multithreading, Design Patterns
                  </p>
                </div>

                <div className="glass p-3 rounded-lg border border-green-500/30 bg-green-500/5">
                  <p className="text-xs">
                    <span className="text-green-400 font-mono">→ 6 Months (2024):</span> Professional internship at <span className="font-semibold">Proloto Technologies</span> building live production systems
                  </p>
                </div>

                <p className="text-xs">
                  During my internship, I worked on real-world Spring Boot microservices, optimized MySQL databases, 
                  implemented REST APIs, and deployed containerized Java applications. I collaborated with senior developers 
                  and contributed to production systems serving real users.
                </p>

                <p className="text-xs">
                  Today, I'm focused on deepening my expertise in enterprise Java development, mastering microservices patterns, 
                  and building full-stack solutions that solve real problems with elegance.
                </p>
              </div>
            </div>

            {/* Core Values Code Block - Now on Left */}
            <div className="bg-gray-950 border border-orange-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-900 px-3 py-2 flex items-center justify-between border-b border-orange-500/20">
                <span className="text-orange-400 font-mono text-xs">CoreValues.java</span>
                <button
                  onClick={() => copyToClipboard(coreValuesCode, 'values')}
                  className="p-2 hover:bg-orange-500/10 rounded transition-colors"
                  title="Copy code"
                >
                  {copiedCode === 'values' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 hover:text-orange-400" />
                  )}
                </button>
              </div>
              <pre className="p-3 text-[10px] sm:text-xs text-green-400 font-mono overflow-x-auto">
                <code>{coreValuesCode}</code>
              </pre>
            </div>
          </motion.div>

          {/* Right - Code Display (Developer.java only) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gray-950 border border-orange-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-900 px-3 py-2 flex items-center justify-between border-b border-orange-500/20">
                <span className="text-orange-400 font-mono text-xs">Developer.java</span>
                <button
                  onClick={() => copyToClipboard(javaPhilosophyCode, 'philosophy')}
                  className="p-2 hover:bg-orange-500/10 rounded transition-colors"
                  title="Copy code"
                >
                  {copiedCode === 'philosophy' ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400 hover:text-orange-400" />
                  )}
                </button>
              </div>
              <pre className="p-3 text-[10px] sm:text-xs text-green-400 font-mono overflow-x-auto">
                <code>{javaPhilosophyCode}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Java Topics Grid */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Java <span className="text-orange-500">Topics Mastered</span>
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-2">
            {javaTopics.map((topic, idx) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="glass p-2 rounded-md text-center border border-orange-500/20 hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300 cursor-default h-full flex items-center justify-center min-h-[48px]">
                  <span className="text-[10px] font-mono text-gray-300 group-hover:text-orange-400 transition-colors">{topic}</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-orange-500 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education & Achievements */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Education & <span className="text-orange-500">Achievements</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: GraduationCap,
                title: 'Master of Computer Applications',
                org: 'LITAM College, Hyderabad',
                year: '2024',
                detail: 'CGPA: 7.78/10',
                color: 'text-blue-500'
              },
              {
                icon: Award,
                title: '3rd Rank - MCA Topper',
                org: 'LITAM College',
                year: '2024',
                detail: 'Top Performer',
                color: 'text-yellow-500'
              },
              {
                icon: Code2,
                title: 'Java Developer Internship',
                org: 'Proloto Technologies',
                year: '2024',
                detail: '6 Months (Mar - Aug)',
                color: 'text-orange-500'
              }
            ].map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: idx * 0.2 }}
                  className="glass p-4 rounded-lg border border-orange-500/20 hover:border-orange-500 hover:scale-105 transition-all duration-300 group text-center"
                >
                  <div className={`w-12 h-12 ${achievement.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-125 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${achievement.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">{achievement.title}</h3>
                  <p className="text-gray-400 text-xs mb-2">{achievement.org}</p>
                  <div className="space-y-0.5 border-t border-gray-700 pt-2">
                    <div className="text-orange-400 font-mono font-semibold text-xs">{achievement.year}</div>
                    <div className="text-gray-500 text-[10px]">{achievement.detail}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white text-center mb-6">
            Development <span className="text-orange-500">Timeline</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent hidden md:block"></div>
            
            <div className="space-y-6 md:space-y-8">
              {[
                {
                  year: '2021',
                  title: '$ git init learningJava',
                  desc: 'Started Java fundamentals, OOP concepts, Collections Framework',
                  icon: '📚'
                },
                {
                  year: '2023-2024',
                  title: '$ git commit -m "Advanced Mastery"',
                  desc: 'Spring Boot, Microservices, REST APIs, Database Design, Enterprise Patterns',
                  icon: '🚀'
                },
                {
                  year: '2024 (Mar-Aug)',
                  title: '$ git branch proloto && git checkout proloto',
                  desc: 'Professional internship at Proloto Technologies building production systems',
                  icon: '⚡'
                },
                {
                  year: 'Today',
                  title: '$ git branch -a (expertise expanding)',
                  desc: 'Continuing mastery of Java, Spring Boot, and enterprise architecture',
                  icon: '🎯'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex items-start md:items-center"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-lg shadow-lg shadow-orange-500/50 md:ml-0">
                    {item.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="ml-4 md:ml-6 flex-1 glass p-3 rounded-lg border border-orange-500/20 hover:border-orange-500 transition-all duration-300">
                    <span className="text-orange-400 font-mono text-xs font-bold">{item.year}</span>
                    <h3 className="text-sm font-bold text-white mt-0.5 font-mono">{item.title}</h3>
                    <p className="text-gray-400 mt-1 text-xs">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Why Java section removed as requested */}
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;
