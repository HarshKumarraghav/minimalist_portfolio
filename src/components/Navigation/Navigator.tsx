"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-scroll/modules";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useSound } from "@/Hooks/Sound/useSound";
const NavigatorMenu = () => {
  const { soundEnabled } = useSound();
  const AudioSrc = "/Audio/click.mp3";
  const SlideSrc = "/Audio/slide.mp3";
  const AudioPlayer = (Audiosrc: string) => {
    const audio = new Audio(Audiosrc);
    if (soundEnabled) audio.play();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant={"outline"}
          className="bg-primary hover:bg-primary hover:text-white text-white"
        >
          <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <HamburgerMenuIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onMouseDown={() => {
            AudioPlayer(SlideSrc);
          }}
        >
          <DropdownMenuItem
            onClick={() => {
              AudioPlayer(AudioSrc);
            }}
          >
            About
          </DropdownMenuItem>
        </Link>
        <Link
          activeClass="active"
          to="stack"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onMouseDown={() => {
            AudioPlayer(SlideSrc);
          }}
        >
          <DropdownMenuItem onClick={() => AudioPlayer(AudioSrc)}>
            Teck Stack
          </DropdownMenuItem>
        </Link>
        <Link
          activeClass="active"
          to="experience"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onMouseDown={() => {
            AudioPlayer(SlideSrc);
          }}
        >
          <DropdownMenuItem onClick={() => AudioPlayer(AudioSrc)}>
            Work Experience
          </DropdownMenuItem>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          onMouseDown={() => {
            AudioPlayer(SlideSrc);
          }}
        >
          <DropdownMenuItem onClick={() => AudioPlayer(AudioSrc)}>
            Projects
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavigatorMenu;
