"use client";
import { IoIosArrowUp } from "react-icons/io";
import React, { useEffect, useState } from "react";
import { useSound } from "@/Hooks/Sound/useSound";

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
  const { soundEnabled } = useSound();
  const AudioSrc = "/Audio/click.mp3";
  const AudioPlayer = (Audiosrc: string) => {
    const audio = new Audio(Audiosrc);
    if (soundEnabled) audio.play();
  };
  return (
    // Show the button only if showScroll is true
    <div
      className={`fixed bottom-8 right-4 z-50 ${showScroll ? "" : "hidden"}`}
    >
      <button
        onClick={() => {
          AudioPlayer(AudioSrc);
          window.scrollTo({ top: 0, behavior: "smooth" });
          AudioPlayer("/Audio/slide.mp3");
        }}
        className="bg-primary hover:bg-primary hover:text-white text-white rounded-full p-2"
      >
        <IoIosArrowUp size={25} />
      </button>
    </div>
  );
};

export default ScrollToTop;
