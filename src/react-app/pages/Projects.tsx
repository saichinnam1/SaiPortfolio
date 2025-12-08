import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ExternalLink,
  Github,
  Code,
  Filter,
  Search,
  Star,
  Linkedin,
  Mail,
} from "lucide-react";
import Footer from "../components/Footer";

// Images
import ECommerce from "../assets/images/E-Commerce.png";
import Ecommerce2 from "../assets/images/Ecommerce2.png";
import Chopper from "../assets/images/Chopper.jpg";
import Hospital from "../assets/images/Hospital.webp";
import SpotifyImage from "../assets/images/Spotify.png";
import LibraryImage from "../assets/images/Library.png";
import AyurevdhaImage from "../assets/images/Ayurevdha.png";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // ----------------- UPDATED PROJECTS ARRAY --------------------
  const projects = [
    // ---------- 3 LIVE DEMO PROJECTS FIRST ----------
    {
      id: 1,
      title: "E-Commerce App 1 – Men's Fashion Hub",
      category: "web",
      description:
        "Full-stack E-Commerce website with authentication, wishlist, cart, orders, and payments.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Java",
        "Spring Boot",
        "Hibernate",
        "MySQL",
      ],
      features: ["Cart", "Wishlist", "Orders", "Payments", "Admin Panel"],
      status: "completed",
      featured: true,
      image: ECommerce,
      demo: "https://ecommerce-frontend-7n2w.onrender.com",
      code: "https://github.com/saichinnam1/EcommerceFrontend",
    },

    {
      id: 2,
      title: "E-Commerce App 2 – Techno Titans Store",
      category: "web",
      description:
        "Modern full-stack E-Commerce platform with secured backend and dashboard.",
      technologies: [
        "React.js",
        "TailwindCSS",
        "Spring Boot",
        "Hibernate",
        "MySQL",
      ],
      features: ["Product Catalog", "JWT Auth", "Admin Panel"],
      status: "completed",
      featured: true,
      image: Ecommerce2,
      demo: "https://saitecnotitans.netlify.app/",
      code: "https://github.com/saichinnam1/TechnoBackend1",
    },

    {
      id: 3,
      title: "Ayurvedha – Ayurvedic Medicine Store",
      category: "web",
      description:
        "Ayurvedic medicine E-Commerce frontend with filters, cart, wishlist & authentication.",
      technologies: ["React.js", "TailwindCSS", "Redux Toolkit", "REST API"],
      features: [
        "Product Browsing",
        "Cart",
        "Wishlist",
        "User Authentication",
        "Responsive UI",
      ],
      status: "completed",
      featured: true,
      image: AyurevdhaImage,
      demo: "https://ayurevdha-frontend.vercel.app/",
      code: "https://github.com/saichinnam1/Ayurevdha-frontend",
    },

    // ----------- OTHER FULL STACK WEB PROJECTS ------------
    {
      id: 4,
      title: "Spotify Web App – Music Streaming Platform",
      category: "web",
      description:
        "Spotify-style music streaming web app with playlists, player controls, albums & artists.",
      technologies: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Music Player",
        "Playlists",
        "Song Streaming",
        "Artist Pages",
        "Responsive UI",
      ],
      status: "completed",
      featured: true,
      image: SpotifyImage,
      demo: "",
      code: "https://github.com/saichinnam1/Spotify-Clone",
    },

    {
      id: 5,
      title: "Library Management System",
      category: "web",
      description:
        "Library web system for book management, members, fines, and dashboard.",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL"],
      features: [
        "Book Issue & Return",
        "Member Management",
        "Fine Calculation",
        "Admin Dashboard",
      ],
      status: "completed",
      featured: false,
      image: LibraryImage,
      demo: "",
      code: "https://github.com/saichinnam1/Library-Management-System",
    },

    // -------------------- MOBILE APPS --------------------
    {
      id: 6,
      title: "Chopper Mobile App",
      category: "mobile",
      description:
        "Ride-hailing mobile app with wallet, coupons, tracking, and chat support.",
      technologies: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "MySQL",
        "REST API",
        "Spring Security",
      ],
      features: ["Ride Booking", "Tracking", "Wallet", "Coupons", "Chat Support"],
      status: "completed",
      featured: true,
      image: Chopper,
      demo: "",
      code: "https://github.com/saichinnam1",
    },

    {
      id: 7,
      title: "Hospital Healthcare Mobile App",
      category: "mobile",
      description:
        "Cross-platform mobile app for hospital appointments, patients & treatment management.",
      technologies: ["React Native", "Spring Boot", "MySQL"],
      features: ["Appointments", "Patient Records", "Treatment Booking"],
      status: "completed",
      featured: true,
      image: Hospital,
      demo: "",
      code: "https://github.com/saichinnam1",
    },

    {
      id: 8,
      title: "Spotify Mobile App",
      category: "mobile",
      description:
        "Mobile version of music streaming app with playlists and player.",
      technologies: ["React Native", "Node.js", "MongoDB"],
      features: ["Music Player", "Playlists", "Streaming"],
      status: "completed",
      featured: false,
      image: SpotifyImage,
      demo: "",
      code: "#",
    },
  ];

  // -------------------------------------

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "web",
      label: "Full Stack Web Development",
      count: projects.filter((p) => p.category === "web").length,
    },
    {
      id: "mobile",
      label: "Mobile Apps",
      count: projects.filter((p) => p.category === "mobile").length,
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <div className="min-h-screen pt-24 px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            My <span className="text-orange-500 font-mono">Projects</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {projects.length}+ projects showcasing Full Stack Web & Mobile Development
          </p>

          {/* SEARCH BAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-md mx-auto mb-8"
          >
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
            />
          </motion.div>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <Filter className="w-4 h-4" />
              <span>{category.label}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  selectedCategory === category.id
                    ? "bg-white/20"
                    : "bg-orange-500/20 text-orange-400"
                }`}
              >
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* FEATURED PROJECTS */}
        {selectedCategory === "all" && (
          <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center space-x-3">
              <Star className="w-8 h-8 text-orange-500" />
              <span>Featured Projects</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 2).map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="glass rounded-xl overflow-hidden hover:glow-orange transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-orange-500/20 text-orange-400 rounded text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span className="text-sm">Demo</span>
                          </a>
                        )}
                        {project.code && (
                          <a
                            href={project.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span className="text-sm">Code</span>
                          </a>
                        )}
                      </div>
                      <span className="text-green-400 text-sm font-mono">
                        ✓ {project.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* ALL PROJECTS */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            All Projects{" "}
            <span className="text-gray-400 text-lg">
              ({filteredProjects.length})
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="glass rounded-xl overflow-hidden hover:glow-orange transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.5 bg-gray-700 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-400 rounded text-xs">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <div className="flex space-x-3">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          <Code className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <span className="text-green-400 font-mono">✓</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ===== Footer Section ===== */}
        <Footer showCV={false} />
      </div>
    </div>
  );
};

export default ProjectsPage;
