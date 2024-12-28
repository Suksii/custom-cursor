import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isTextSectionHovered, setIsTextSectionHovered] = useState(false);
  const [isButtonSectionHovered, setIsButtonSectionHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const handleMouseTextEnter = () => setIsTextHovered(true);
  const handleMouseTextLeave = () => setIsTextHovered(false);
  const handleMouseTextSectionEnter = () => setIsTextSectionHovered(true);
  const handleMouseTextSectionLeave = () => setIsTextSectionHovered(false);
  const handleMouseButtonSectionEnter = () => setIsButtonSectionHovered(true);
  const handleMouseButtonSectionLeave = () => setIsButtonSectionHovered(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);

    setTimeout(() => setIsButtonClicked(false), 1000);
  };

  return (
    <div className="container">
      <div
        className="text-section"
        style={{ flex: 1 }}
        onMouseEnter={handleMouseTextSectionEnter}
        onMouseLeave={handleMouseTextSectionLeave}
      >
        <h1
          className="text"
          onMouseEnter={handleMouseTextEnter}
          onMouseLeave={handleMouseTextLeave}
        >
          Hover over this text!
        </h1>

        {isTextSectionHovered && (
          <div
            className="custom-cursor-text"
            style={{
              width: isTextHovered ? "100px" : "40px",
              height: isTextHovered ? "100px" : "40px",
              mixBlendMode: "difference",
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transition: "width 0.3s, height 0.3s, background-color 0.3s",
            }}
          />
        )}
        {isButtonSectionHovered && (
          <div
            className={`custom-cursor-button ${
              isButtonClicked ? "clicked" : ""
            }`}
            style={{
              width: isTextHovered ? "100px" : "40px",
              height: isTextHovered ? "100px" : "40px",
              left: `${mousePosition.x}px`,
              top: `${mousePosition.y}px`,
              transition: "width 0.3s, height 0.3s, background-color 0.3s",
            }}
          />
        )}
      </div>
      <div
        className="button-section"
        onMouseEnter={handleMouseButtonSectionEnter}
        onMouseLeave={handleMouseButtonSectionLeave}
      >
        <button onClick={handleButtonClick}>Click on me!</button>
      </div>
    </div>
  );
};

export default App;
