"use client";
import React, { useState } from "react";

const MouseTorch = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = event;
    setMousePosition({ x: clientX, y: clientY });
  };

  const gradientStyle = {
    background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
    zIndex: 0,
  };

  return (
    <div
      className="w-screen h-screen fixed top-0 left-0 "
      onMouseMove={handleMouseMove}
      style={gradientStyle}
    />
  );
};

export default MouseTorch;
