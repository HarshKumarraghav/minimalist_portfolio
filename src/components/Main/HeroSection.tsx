"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { FileTextIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <div className="w-full h-[calc(100vh-5rem)] flex flex-col justify-center items-center px-4">
      <div className="w-full h-1/3 border-b border-primary  relative flex justify-center">
        <div className="absolute -bottom-9  floating__avatar glow__background">
          <Badge className="ml-16 mb-4 text-white">Software Engineer</Badge>
          {theme === "dark" ? (
            <Image
              className=""
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
        <div className="text-3xl font-bold text-center ">
          <span className="text-xl"> Hi,👋 I&apos;m</span>
          <h1 className="italic text-primary typewriter__heading">
            Harsh K. Raghav
          </h1>
          <span className="italic text-lg font-semibold ">
            "I build things for the web."
          </span>
        </div>
        <p className="text-center">
          Tech-savvy problem-solver with a passion for coding and a love for
          innovation. Proficient in Javascript, TypeScript, Go, Next JS,
          ReactJS, React Native and go-fiber, Bringing a unique blend of
          technical and creative skills to develop robust and visually appealing
          solutions.
        </p>
        <div className="flex gap-x-8">
          <Button className="flex items-center justify-center gap-x-2 text-white">
            <FileTextIcon />
            <span>Resume</span>
          </Button>
          <Button
            className="flex items-center justify-center gap-x-2"
            variant={"outline"}
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
