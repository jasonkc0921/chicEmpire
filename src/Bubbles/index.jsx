import React, { useRef, useEffect } from "react";
import BubblesCanvas from "./BubblesCanvas";
import "./index.css";

export default function Bubbles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    new BubblesCanvas({
      canvas: canvasRef.current,
      bubbleDensity: 0.6,
      bubbleText: [
        "Luxury",
        "Rolex",
        "Patek Philippe",
        "Single Malt",
        "Hermes",
        "Chateau Lafite",
        "Leanardo Da Vinci"
      ],
      bubbleSize: [10, 25],
      bubbleVelocityY: [1, 2],
      bubbleOpacity: [0.05, 0.2]
    });
  }, [canvasRef]);
  return <canvas ref={canvasRef} id="bubblesCanvas"></canvas>;
}
