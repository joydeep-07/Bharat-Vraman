import React, { useState, useEffect } from "react";

const CircleCursor = ({ targetId, hoverId }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [size, setSize] = useState(50);

  useEffect(() => {
    const moveHandler = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const target = document.getElementById(targetId);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      setIsActive(inside);
    };

    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, [targetId]);

  useEffect(() => {
    const hover = document.getElementById(hoverId);
    if (!hover) return;

    const enter = () => setSize(200);
    const leave = () => setSize(50);

    hover.addEventListener("mouseenter", enter);
    hover.addEventListener("mouseleave", leave);

    return () => {
      hover.removeEventListener("mouseenter", enter);
      hover.removeEventListener("mouseleave", leave);
    };
  }, [hoverId]);

  if (!isActive) return null;

  return (
    <div
      className="pointer-events-none fixed z-[60]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: mousePos.y - size / 2,
        left: mousePos.x - size / 2,

        backdropFilter: "grayscale(1)", 
        WebkitBackdropFilter: "grayscale(1)",

        backgroundColor: "rgba(255,255,255,0.2)",
        // border: "1px solid rgba(0,0,0,0.3)",

        transition: "width 0.3s ease-out, height 0.3s ease-out",
      }}
    />
  );
};

export default CircleCursor;
