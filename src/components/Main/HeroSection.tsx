"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { useSound } from "@/Hooks/Sound/useSound";

const HeroSection = () => {
  const { soundEnabled } = useSound();
  const { theme } = useTheme();
  const HoverSrc = "/Audio/tap.mp3";
  const ClickSrc = "/Audio/click.mp3";
  const AudioPlayer = (Audiosrc: string) => {
    const audio = new Audio(Audiosrc);
    if (soundEnabled) audio.play();
  };
  return (
    <div
      className="w-full h-[calc(100vh-5rem)] flex flex-col justify-center items-center px-4 mb-12"
      style={{
        background:
          "radial-gradient(600px at 431px 97px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <div className="w-full h-2/4 border-b border-primary relative flex justify-center">
        <div className="absolute -bottom-9 floating__avatar glow__background">
          <Badge
            className="ml-16 mb-4 text-white"
            onMouseEnter={() => AudioPlayer(HoverSrc)}
          >
            Software Engineer
          </Badge>
          {theme === "dark" ? (
            <Image
              src="/avatars/Avatar-dark.png"
              alt="avatar-light"
              width={100}
              height={100}
            />
          ) : (
            <Image
              src="/avatars/Avatar-light.png"
              alt="avatar-light"
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
      <div className="w-full h-2/3 flex mt-12 items-center justify-evenly flex-col gap-y-2 ">
        <div className="text-3xl font-bold text-center">
          <span className="text-xl"> Hi,👋 I&apos;m</span>
          <h1 className="text-primary typewriter__heading">Harsh K. Raghav</h1>
          <span className=" text-lg font-semibold ">
            &quot;I build things for the web.&quot;
          </span>
        </div>
        <div className="flex gap-x-4">
          <Link
            href={"https://twitter.com/_Harsh_raghav_"}
            onClick={() => AudioPlayer(ClickSrc)}
            target="_blank"
            className="p-2 bg-primary rounded-lg text-white transform transition-transform hover:scale-110"
          >
            <TwitterLogoIcon />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/harsh-kumar-raghav-7285311b9/"}
            onClick={() => AudioPlayer(ClickSrc)}
            target="_blank"
            className="p-2 bg-primary rounded-lg text-white transform transition-transform hover:scale-110"
          >
            <LinkedInLogoIcon />
          </Link>
          <Link
            href={"mailto:raghavharsh)68@gmial.com"}
            onClick={() => AudioPlayer(ClickSrc)}
            target="_blank"
            className="p-2 bg-primary rounded-lg text-white transform transition-transform hover:scale-110"
          >
            <BiMailSend />
          </Link>
        </div>
        <p className="text-center text-gray-500 dark:text-white">
          Tech-savvy problem-solver with a passion for coding and a love for
          innovation. Proficient in Javascript, TypeScript, Go, Next JS,
          ReactJS, React Native and go-fiber, Bringing a unique blend of
          technical and creative skills to develop robust and visually appealing
          solutions.
        </p>
        <div className="flex gap-x-8 z-10">
          <Button className="flex items-center justify-center gap-x-2 text-white ">
            <Link
              onMouseEnter={() => AudioPlayer(HoverSrc)}
              className="flex items-center justify-center gap-x-2 text-white"
              href="/Resume/Harsh'sResume.pdf"
              onMouseDown={() => AudioPlayer(ClickSrc)}
            >
              <FileTextIcon />
              <span>Resume</span>
            </Link>
          </Button>
          <Button
            onMouseEnter={() => AudioPlayer(HoverSrc)}
            className="flex items-center justify-center gap-x-2 "
            variant={"outline"}
            onClick={() => window.open("https://github.com/HarshKumarraghav")}
            onMouseDown={() => AudioPlayer(ClickSrc)}
          >
            <GitHubLogoIcon />
            <span>GitHub</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
