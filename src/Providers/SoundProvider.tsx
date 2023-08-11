"use client";
import React, { createContext, useState } from "react";

// Create a context for sound effects
export const SoundContext = createContext<any>(null);

// Sound effects provider component
export const SoundProvider = ({ children }: any) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    setSoundEnabled((prevState) => !prevState);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};
