import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(e.clientX, e.clientY);
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  return (
    <div className="container">
      <h1 className="">Hello, world!</h1>
      <button className="">Hover over me!</button>
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default App;
