import { useEffect, useState } from "react";
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
        className=""
        onMouseEnter={handleMouseTextEnter}
        onMouseLeave={handleMouseTextLeave}
      >
        Hover over this text!
      </h1>
      <button className="">Hover over me!</button>
      <div
        className="custom-cursor"
        style={{
          width: isTextHovered ? "140px" : "40px",
          height: isTextHovered ? "140px" : "40px",
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default App;
