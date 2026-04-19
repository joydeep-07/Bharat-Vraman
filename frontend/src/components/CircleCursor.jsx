import React, { useState, useEffect } from "react";

const CircleCursor = ({ targetId, hoverId, noHoverId }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [size, setSize] = useState(50);
  const [isBlocked, setIsBlocked] = useState(false);

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

  // hover size effect on specific element
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

  // 🔴 disable cursor on specific element
  useEffect(() => {
    const block = document.getElementById(noHoverId);
    if (!block) return;

    const enter = () => setIsBlocked(true);
    const leave = () => setIsBlocked(false);

    block.addEventListener("mouseenter", enter);
    block.addEventListener("mouseleave", leave);

    return () => {
      block.removeEventListener("mouseenter", enter);
      block.removeEventListener("mouseleave", leave);
    };
  }, [noHoverId]);

  // ❌ hide cursor if not active OR blocked
  if (!isActive || isBlocked) return null;

  return (
    <div
      className="pointer-events-none hidden md:flex fixed z-[60]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: mousePos.y - size / 2,
        left: mousePos.x - size / 2,

        backdropFilter: "grayscale(1)",
        WebkitBackdropFilter: "grayscale(1)",

        backgroundColor: "rgba(255,255,255,0.2)",

        transition: "width 0.3s ease-out, height 0.3s ease-out",
      }}
    />
  );
};

export default CircleCursor;
