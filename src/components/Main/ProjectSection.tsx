"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { SiAuth0, SiMysql, SiOpenai, SiPrisma } from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandGolang, TbBrandNextjs } from "react-icons/tb";
import { useSound } from "@/Hooks/Sound/useSound";
const PROJECT_DATA = [
  {
    tittle:
      "Infinimind.ai - AI-powered Chatbot, Code, Video, Music, and Image Generation",
    description: `Infinimind.ai the ultimate destination where human creativity intersects with the power of artificial intelligence. Unleash the full potential of your imagination and bring your ideas to life in ways you've never imagined. With its cutting-edge features, Infinimind.ai stands out as a pioneer in the world of AI-powered creativity.`,
    details: `Infinimind.ai the ultimate destination where human creativity intersects with the power of artificial intelligence. Unleash the full potential of your imagination and bring your ideas to life in ways you've never imagined. With its cutting-edge features,Infinimind.ai stands out as a pioneer in the world of AI-powered creativity. Engage in captivating conversations with our advanced AI chatbot, which not only responds intelligently but learns from you, adapting its interactions to your unique style. Need to generate code? Let our cutting-edge AI algorithms instantly craft code snippets, revolutionizing your development process.`,
    techStack: [
      {
        name: "React.js",
        icon: <BiLogoReact size={25} />,
      },
      {
        name: "Next.js",
        icon: <TbBrandNextjs size={25} />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript size={25} />,
      },
      {
        name: "NextAuth",
        icon: <SiAuth0 size={25} />,
      },
      {
        name: "MySQL",
        icon: <SiMysql size={25} />,
      },
      {
        name: "PrismaORM",
        icon: <SiPrisma size={25} />,
      },
      {
        name: "OpenAI",
        icon: <SiOpenai size={25} />,
      },
    ],
    imageSrc: "/projects/infinimind-poster.png",
    githubLink: "https://github.com/HarshKumarraghav/InfiniMind.ai",
    liveLink: "https://infinimind.harshraghav.tech/",
  },
  {
    title: "Balloon.js : Create-balloon CLI (npx create-balloon@latest)",
    description: `Balloon.js is a Flexible command-line tool that Seamlessly integrated major frameworks like Next.js, React, Vue, Preact, Svelte, Solid, and Qwik for enhanced project flexibility. `,
    details: `Create-balloon CLI is a versatile and powerful command-line tool that empowers developers to effortlessly generate state-of-the-art application starter kits for a wide range of modern frontend frameworks and UI libraries. Whether you're building applications using Next.js, React, Vue, Preact, Svelte, Solid, Qwik, or other popular frameworks, Create-balloon CLI has got you covered. It offers seamless integration with essential UI libraries like Tailwind, Tailwind + SchadCn UI, ChakraUI, AntDesign, and MaterialUI, allowing you to kickstart your project with stunning visual design and exceptional user experiences.`,
    techStack: [
      {
        name: "Node.js",
        icon: <BiLogoJavascript size={25} />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript size={25} />,
      },
    ],
    imageSrc: "/projects/balloon-poster.png",
    githubLink: "https://github.com/HarshKumarraghav/balloon.js",
    liveLink: "https://www.npmjs.com/package/create-balloon",
  },
  {
    title: "Periodically - The Periodic Table",
    description: `Periodically - is a free web application which displays the entire Periodic Table at startup interface. The table has a long- form approved by the International Union of Pure and Applied Chemistry (IUPAC) as the core.`,
    details: `We all remember the times when we used to struggle to remember the names, properties, groups, etc. of periodic elements. Those sweet-saur nostalgic school memories of memorizing the whole periodic table for our upcoming Unit test used to be a nightmare for many of us! The periodic table is the heart of chemistry and to make its learning more fun and engaging, the idea to build "Periodically-The Periodic Table" was born.`,
    techStack: [
      {
        name: "React.js",
        icon: <BiLogoReact size={25} />,
      },
      {
        name: "Next.js",
        icon: <TbBrandNextjs size={25} />,
      },
      {
        name: "Javascipt",
        icon: <BiLogoJavascript size={25} />,
      },
      {
        name: "GoLang",
        icon: <TbBrandGolang size={25} />,
      },
    ],

    imageSrc: "/projects/Periodically-poster.gif",
    githubLink: "https://github.com/HarshKumarraghav/periodically",
    liveLink: "https://periodically-webapp-harshkumarraghav.vercel.app/",
  },
  {
    title: "cryptoverse - Cryptocurrency App",
    description: `Cryptoverse: Your all-in-one crypto companion. Explore 200+ cryptos, interactive charts, currency converter, news, and portfolio tracking. Powered by React.js, Tailwind CSS, CoinGecko API, Bing News API, and Shcadcn UI.`,
    details: `Cryptoverse is an innovative and user-friendly web application designed to cater to cryptocurrency enthusiasts and investors alike. With a vast database comprising details of over 200 cryptocurrencies and information on 50 different country currencies, Cryptoverse offers a one-stop platform for all your cryptocurrency-related needs. Whether you are a beginner exploring the world of digital assets or an experienced investor seeking in-depth analysis and real-time data, Cryptoverse has you covered.`,
    techStack: [
      {
        name: "React.js",
        icon: <BiLogoReact size={25} />,
      },
      {
        name: "TypeScript",
        icon: <BiLogoTypescript size={25} />,
      },
    ],
    imageSrc: "/projects/cryptoverse-poster.png",
    githubLink: "https://github.com/HarshKumarraghav/Cryptoverse",
    liveLink: "https://periodically-webapp-harshkumarraghav.vercel.app/",
  },
];
const ProjectSection = () => {
  const { soundEnabled } = useSound();
  const HoverSrc = "/Audio/tap.mp3";
  const ClickSrc = "/Audio/click.mp3";
  const AudioPlayer = (Audiosrc: string) => {
    const audio = new Audio(Audiosrc);
    if (soundEnabled) audio.play();
  };
  return (
    <div className="w-full min-h-screen flex flex-col px-4 mt-12" id="projects">
      <div className="border-b text-center my-8">
        <h1 className="text-2xl text-primary">
          <span>4.</span> Projects
        </h1>
      </div>
      <div className="flex flex-col gap-y-4">
        {PROJECT_DATA.map((project, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-col gap-4 border-b">
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="flex gap-4 items-center  text-gray-500 dark:text-gray-400">
                {project.description}
                <Button
                  className="text-white  rounded-full z-10"
                  onClick={() => {
                    AudioPlayer(ClickSrc);
                    window.open(project.githubLink);
                  }}
                >
                  <GitHubLogoIcon />
                </Button>
                <Button
                  className="text-white rounded-full z-10"
                  onClick={() => {
                    AudioPlayer(ClickSrc);
                    window.open(project.liveLink);
                  }}
                >
                  <ExternalLinkIcon />
                </Button>
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-8 border-b">
              <div className="w-full flex justify-center ">
                <Image
                  src={project.imageSrc}
                  alt="Periodically"
                  width={500}
                  height={500}
                  className="rounded-lg glow__background"
                />
              </div>
              <p className="mt-8 text-gray-500 dark:text-gray-400">
                {project.details}
              </p>
            </CardContent>
            <CardFooter className="mt-2 flex flex-col">
              <h1 className="text-xl text-primary">Tech Stack:</h1>
              <div className="flex gap-2 flex-wrap">
                {project.techStack.map((tech, i) => (
                  <Badge
                    className="text-white z-10"
                    key={i}
                    onMouseEnter={() => AudioPlayer(HoverSrc)}
                  >
                    {tech.icon}
                    <span className="pl-2">{tech.name}</span>
                  </Badge>
                ))}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
