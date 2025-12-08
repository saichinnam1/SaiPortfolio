import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code2, Target, Users, Download, Github, Linkedin, Mail } from 'lucide-react';
// import TerminalWindow from '@/react-app/components/TerminalWindow';
// import CodeBlock from '@/react-app/components/CodeBlock';

const AboutPage = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  const javaTopics = [
    'Core Java',
    'OOP Concepts',
    'Collections Framework',
    'Multithreading',
    'Exception Handling',
    'Spring Framework',
    'Spring Boot',
    'Hibernate ORM',
    'REST APIs',
    'SQL & MySQL',
    'Microservices',
    'Design Patterns'
  ];

  const personalCode = `/**
 * @author Hema Chandramn
 * @version 1.0
 * @since 2025
 */
public class AboutSital {
    private final PersonalInfo info = new PersonalInfo();
    
    public AboutSital() {
        info.setName("Venkata Saikumar Chinnam");
        info.setLocation("Hyderabad, Telangana, India");
        info.setPassion("Problem Solving & Innovation");
        info.setGoal("Building scalable enterprise solutions");
    }
    
    @Override
    public String getPhilosophy() {
        return "Clean code is not written by following rules. " +
               "It is written by someone who cares about " +
               "creating solutions that matter.";
    }
    
    public List<String> getCoreValues() {
        return Arrays.asList(
            "Continuous Learning",
            "Code Quality",
            "Team Collaboration",
            "User-Centric Design"add 
        );
    }
}`;
  // Note: personalCode is displayed in the commented TerminalWindow above

  const achievements = [
    {
      icon: GraduationCap,
      title: 'Master of Computer Applications(MCA)',
      organization: 'LITAM College,Dhulipalla Affiliated to JNTUK',
      year: '2024',
      grade: '7.78/10.0',
      color: 'text-blue-500'
    },
    {
      icon: Award,
      title: 'NSS -  National Service Scheme',
      organization: 'LITAM College,Dhulipalla',
      year: '2023',
      color: 'text-green-500'
    },
    {
      icon: Award,
      title: '3rd Rank - MCA Top Ranker',
      organization: 'LITAM College,Dhulipalla',
      year: '2024',
      grade: 'Secured 3rd Rank in MCA Final Examinations',
      color: 'text-orange-500'
    }
  ];

  const journey = [
    {
      year: '2021',
      title: 'Started Programming Journey',
      description: 'Began with Java fundamentals and object-oriented programming concepts',
      icon: Code2
    },
    {
      year: '2024',
      title: 'Advanced Learning Phase',
      description: 'Mastered data structures, algorithms, and database management systems',
      icon: Target
    },
    {
      year: '2024',
      title: 'Professional Developer',
      description: 'Joined Proloto Technologies Pvt Ltd as a Java Developer Intern',
      icon: Users
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopicIndex((prev) => (prev + 1) % javaTopics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            About <span className="text-orange-500 font-mono">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer with a love for clean code and innovative solutions
          </p>
        </motion.div>

        {/* Main Content Grid - About & Java Topics */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Left Side - Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                {/* <Heart className="w-8 h-8 text-red-500" /> */}
                <span>About</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  My passion for technology began during my Bachelor of Science in Computers, 
                  where I developed a strong interest in backend development. Through dedication and 
                  consistent effort, I was proud to Secured Top 5th Rank in my both UG and PG
                  a milestone that reinforced my commitment to the field.
                </p>

                <p>
             I completed my Java Developer Internship at Proloto Technologies Pvt Ltd, where I contributed to live projects using Java 8, Hibernate, Spring Boot, REST APIs, and MySQL. During my internship, I wrote clean and efficient code, collaborated with senior developers, and helped build scalable backend systems. This experience significantly strengthened my technical skills and prepared me for a full-time software development role.
                </p>
                
                <p>
                 With a strong educational background and practical exposure, I’m now focused on growing 
                 as a backend developer and contributing to impactful software solutions in a professional setting.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Target className="w-5 h-5 text-orange-500" />
                <span>Core Values</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {['Continuous Learning', 'Code Quality', 'Team Collaboration', 'User-Centric Design'].map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, scale: 0.8, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ 
                      delay: 0.6 + index * 0.1,
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20
                    }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent hover:from-orange-500/20 hover:to-orange-500/10 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 cursor-default group"
                  >
                    <motion.div 
                      className="w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    ></motion.div>
                    <span className="text-sm text-gray-300 group-hover:text-orange-300 transition-colors duration-300">{value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Java Topics & Download CV */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Java Topics Section */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Java <span className="text-orange-500">Topics</span> & Skills
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                I have expertise in a wide range of Java technologies and concepts, from core Java fundamentals to advanced frameworks like Spring Boot and microservices architecture.
              </p>
              
              {/* Auto-scrolling Topic Display */}
              <motion.div
                className="glass p-8 rounded-xl min-h-[180px] flex flex-col justify-center items-center"
                key={currentTopicIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Currently Focusing On</p>
                  <h3 className="text-4xl font-bold text-orange-500 mb-2 font-mono">
                    {javaTopics[currentTopicIndex]}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {currentTopicIndex + 1} of {javaTopics.length}
                  </p>
                </div>
              </motion.div>

              {/* Topic Grid */}
              <div className="grid grid-cols-2 gap-3">
                {javaTopics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`p-3 rounded-lg text-center transition-all duration-300 ${
                      index === currentTopicIndex
                        ? 'bg-orange-500 text-white scale-105 shadow-lg shadow-orange-500/50'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    <span className="font-semibold text-sm">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Achievements */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            Education & <span className="text-orange-500">Achievements</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="glass p-6 rounded-xl text-center hover:glow-orange transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 ${achievement.color} bg-current/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${achievement.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm mb-1">{achievement.organization}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{achievement.year}</span>
                    <span className="text-orange-500 font-mono">{achievement.grade}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Journey Timeline */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            My <span className="text-orange-500">Journey</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-orange-400 to-orange-300"></div>
            
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.3 }}
                  className="relative flex items-start space-x-8 mb-12"
                >
                  {/* Timeline Node */}
                  <div className="relative z-10 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass p-6 rounded-xl">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-orange-500 font-mono font-bold">{item.year}</span>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Footer - Download CV & Connect Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 mt-20 border-t border-gray-800"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
    </div>
  );
};

export default AboutPage;
