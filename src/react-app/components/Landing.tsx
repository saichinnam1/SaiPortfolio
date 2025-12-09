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

  // Typing effect per character
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
      }, 50); // typing speed
      return () => clearTimeout(timeout);
    } else {
      // Move to next line
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);

        // Play beep on last line
        if (currentLine === bootLogs.length - 1) {
          const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
          audio.play();
          // Auto redirect after 1s
          setTimeout(() => navigate("/home"), 1000);
        }
      }, 200); // pause between lines
      return () => clearTimeout(timeout);
    }
  }, [currentChar, currentLine, displayedText, navigate]);

  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center font-mono text-green-400 bg-black z-50">
      <div className="max-w-xl mx-auto text-lg">
        {displayedText.map((line, index) => (
          <div key={index}>{"> " + line}</div>
        ))}
        {currentLine < bootLogs.length && (
          <div>{showCursor ? "█" : ""}</div>
        )}
      </div>

      {/* Fade-in message after last line */}
      {currentLine === bootLogs.length && (
        <div className="mt-10 px-8 py-4 text-black font-bold rounded bg-green-400 opacity-0 animate-fadeIn">
          Entering Portfolio...
        </div>
      )}

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
