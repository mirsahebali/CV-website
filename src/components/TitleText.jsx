import React, { useState, useEffect } from "react";
import "../style.css";
const letters = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";

function TitleText({ text, className, size }) {
  const [iterations, setIterations] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  useEffect(() => {
    const id = setInterval(() => {
      setIterations((iterations) => iterations + 1 / 3);
    }, 30);
    setIntervalId(id);
    return () => clearInterval(id);
  }, [iterations, text]);
    useEffect(() => {
    if (iterations >= text.length) {
      clearInterval(intervalId);
    }
  }, [iterations, text, intervalId]);
   const displayedText = text
    .split("")
    .map((letter, index) => {
      if (index < iterations) {
        return letter;
      }
      return letters[Math.floor(Math.random() * 26)];
    })
    .join("");

  return (
    <h1
      style={{ fontSize: { size } }}
      className={className}
      onMouseOver={() => setIterations(0)}
    >
      {displayedText}
    </h1>
  );
}

export default TitleText;
