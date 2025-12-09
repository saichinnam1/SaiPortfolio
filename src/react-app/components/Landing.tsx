import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState<string[]>([]);

  const bootLogs: string[] = [
    "Initializing JVM runtime...",
    "Loading Spring Boot Modules...",
    "Connecting to Microservices...",
    "Establishing Database Connection (PostgreSQL/MySQL)...",
    "Compiling React UI Build...",
    "Optimizing REST API routes...",
    "Deploying Full-Stack Application...",
    "Access Granted ✔"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < bootLogs.length) {
        setLogs((prev) => [...prev, bootLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#0f0",
        height: "100vh",
        fontFamily: "monospace",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "auto" }}>
        {logs.map((line, index) => (
          <div key={index} style={{ fontSize: "18px" }}>
            {"> " + line}
          </div>
        ))}
      </div>

      {logs.length === bootLogs.length && (
        <button
          onClick={() => navigate("/home")}
          style={{
            marginTop: "40px",
            padding: "14px 35px",
            fontSize: "20px",
            fontWeight: "bold",
            borderRadius: "10px",
            cursor: "pointer",
            background: "#0f0",
            color: "#000",
            border: "none",
            alignSelf: "center",
          }}
        >
          Enter System →
        </button>
      )}
    </div>
  );
};

export default Landing;
