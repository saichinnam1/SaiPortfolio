import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const bootLogs = [
  "Initializing JVM runtime...",
  "Loading Spring Boot Modules...",
  "Connecting to Microservices...",
  "Establishing Database Connection...",
  "Compiling React UI Build...",
  "Optimizing REST API routes...",
  "Deploying Full-Stack Application...",
  "Access Granted ✔"
];

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(prev => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  // Typing per character
  useEffect(() => {
    if (currentLine >= bootLogs.length) return;

    if (currentChar < bootLogs[currentLine].length) {
      const timeout = setTimeout(() => {
        if (displayedText[currentLine]) {
          const newText = [...displayedText];
          newText[currentLine] += bootLogs[currentLine][currentChar];
          setDisplayedText(newText);
        } else {
          setDisplayedText(prev => [...prev, bootLogs[currentLine][currentChar]]);
        }
        setCurrentChar(prev => prev + 1);
      }, 30); // typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);

        // Play beep and redirect on last line
        if (currentLine === bootLogs.length - 1) {
          const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
          audio.play();
          setTimeout(() => navigate("/home"), 800);
        }
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine, displayedText, navigate]);

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-center items-center font-mono text-green-400 pointer-events-none">
      {/* Terminal overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center z-50 max-w-xl mx-auto text-[10px] text-center pointer-events-none">
        {displayedText.map((line, index) => (
          <div key={index}>{"> " + line}</div>
        ))}
        {currentLine < bootLogs.length && (
          <div>{showCursor ? "█" : ""}</div>
        )}
        {currentLine === bootLogs.length && (
          <div className="mt-4 px-6 py-2 text-black font-bold rounded bg-green-400 opacity-0 animate-fadeIn pointer-events-auto text-[10px]">
            Entering Portfolio...
          </div>
        )}
      </div>

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
