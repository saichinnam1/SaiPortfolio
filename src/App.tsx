import { HashRouter as Router, Routes, Route, useLocation } from "react-router";
import Landing from "./react-app/components/Landing";
import HomePage from "./react-app/pages/Home";
import AboutPage from "./react-app/pages/About";
import ExperiencePage from "./react-app/pages/Experience";
import ProjectsPage from "./react-app/pages/Projects";
import ContactPage from "./react-app/pages/Contact";

import Navigation from "./react-app/components/Navigation";
import MatrixRain from "./react-app/components/MatrixRain";
import ParticleField from "./react-app/components/ParticleField";
import ScrollToTop from "./react-app/components/ScrollToTop";

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        {/* Background effects */}
        <MatrixRain />
        <ParticleField />

        {/* Conditional Navbar */}
        <ConditionalNavbar />

        <AppContent />
      </div>
    </Router>
  );
}

// Hide Navbar on Landing page
function ConditionalNavbar() {
  const location = useLocation();
  if (location.pathname === "/") return null; // hide navbar on landing
  return <Navigation />;
}
