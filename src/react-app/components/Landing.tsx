import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  const bootLogs: string[] = [
    "Initializing JVM runtime...",
    "Loading Spring Boot Modules...",
    "Connecting to Microservices...",
    "Establishing Database Connection...",
    "Compiling React UI Build...",
    "Optimizing REST API routes...",
    "Deploying Full-Stack Application...",
    "Access Granted ✔"
  ];

  // Typing effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLogs.length) {
        setLogs((prev) => [...prev, bootLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
        // Auto redirect after 1s of last log
        setTimeout(() => navigate("/home"), 1000);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [navigate]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center font-mono text-green-400 bg-black z-50">
      <div className="max-w-xl mx-auto text-lg">
        {logs.map((line, index) => (
          <div key={index}>{"> " + line}</div>
        ))}
        {logs.length < bootLogs.length && (
          <div>{showCursor ? "█" : ""}</div>
        )}
        {logs.length === bootLogs.length && (
          <div className={`mt-10 px-8 py-4 text-black font-bold rounded bg-green-400 opacity-0 animate-fadeIn`}>
            Entering Portfolio...
          </div>
        )}
      </div>

      {/* Tailwind animation for fadeIn */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s forwards;
        }
      `}</style>
    </div>
  );
};

export default Landing;
