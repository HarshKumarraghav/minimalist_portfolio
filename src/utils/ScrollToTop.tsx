"use client";
import { IoIosArrowUp } from "react-icons/io";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Add an event listener to handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Show the button only if showScroll is true
    <div
      className={`fixed bottom-8 right-4 z-50 ${showScroll ? "" : "hidden"}`}
    >
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="bg-primary hover:bg-primary hover:text-white text-white rounded-full p-2"
      >
        <IoIosArrowUp size={25} />
      </button>
    </div>
  );
};

export default ScrollToTop;
