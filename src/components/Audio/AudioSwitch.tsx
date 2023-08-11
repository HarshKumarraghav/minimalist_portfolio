"use client";
import React from "react";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useSound } from "@/Hooks/Sound/useSound";
import { Button } from "../ui/button";
const AudioSwitch = () => {
  const { soundEnabled, toggleSound } = useSound();
  const AudioController = (Audiosrc: string) => {
    toggleSound();
    const audio = new Audio(Audiosrc);
    audio.play();
  };
  return (
    <Button
      size="icon"
      variant={"outline"}
      onClick={() => {
        AudioController("/Audio/click.mp3");
      }}
      className="bg-primary hover:bg-primary hover:text-white text-white"
    >
      {soundEnabled ? <HiSpeakerWave /> : <HiSpeakerXMark />}
    </Button>
  );
};

export default AudioSwitch;
