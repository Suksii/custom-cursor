import { useEffect, useState } from "react";
import { motion, transform } from "framer-motion";
import "./App.css";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTextHovered, setIsTextHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const handleMouseTextEnter = () => setIsTextHovered(true);
  const handleMouseTextLeave = () => setIsTextHovered(false);

  return (
    <div className="container">
      <h1
        className="text"
        onMouseEnter={handleMouseTextEnter}
        onMouseLeave={handleMouseTextLeave}
      >
        Hover over this text!
      </h1>

      <button className="">Click on me!</button>
      <div
        className="custom-cursor"
        style={{
          width: isTextHovered ? "100px" : "40px",
          height: isTextHovered ? "100px" : "40px",
          mixBlendMode: "difference",
          backgroundColor: "#ccc",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          transition: "width 0.3s, height 0.3s, background-color 0.3s"
        }}
      />
    </div>
  );
};

export default App;
