import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  CardStackIcon,
  ExternalLinkIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  BiLogoGoLang,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import { TbBrandGolang, TbBrandNextjs } from "react-icons/tb";

const ProjectSection = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-4 mt-8">
      <div className="border-b text-center my-8">
        <h1 className="text-2xl text-primary">
          <span>3.</span> Projects
        </h1>
      </div>
      <div className="flex flex-col gap-y-4">
        <Card>
          <CardHeader className="flex flex-col gap-4 border-b">
            <CardTitle>Periodically - The Periodic Table </CardTitle>
            <CardDescription className="flex gap-4 items-center  text-gray-500 dark:text-gray-400">
              Periodically - is a free web application which displays the entire
              Periodic Table at startup interface. The table has a long- form
              approved by the International Union of Pure and Applied Chemistry
              (IUPAC) as the core.
              <Button className="text-white  rounded-full">
                <GitHubLogoIcon />
              </Button>
              <Button className="text-white rounded-full">
                <ExternalLinkIcon />
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-8 border-b">
            <div className="w-full flex justify-center ">
              <Image
                src={"/projects/Periodically-poster.gif"}
                alt="Periodically"
                width={500}
                height={500}
                className="rounded-lg glow__background"
              />
            </div>
            <p className="mt-8 text-gray-500 dark:text-gray-400">
              We all remember the times when we used to struggle to remember the
              names, properties, groups, etc. of periodic elements. Those
              sweet-saur nostalgic school memories of memorizing the whole
              periodic table for our upcoming Unit test used to be a nightmare
              for many of us! The periodic table is the heart of chemistry and
              to make its learning more fun and engaging, the idea to build
              "Periodically-The Periodic Table" was born.
            </p>
          </CardContent>
          <CardFooter className="mt-2 flex flex-col">
            <h1 className="text-xl text-primary">Tech Stack:</h1>
            <div className="flex gap-2 flex-wrap">
              <Badge className="text-white">
                <BiLogoJavascript size={25} />
                <span className="pl-2">JavaScript</span>
              </Badge>
              <Badge className="text-white">
                <BiLogoGoLang size={25} />
                <span className="pl-2">Golang</span>
              </Badge>
              <Badge className="text-white">
                <TbBrandNextjs size={25} />
                <span className="pl-2">Next.js</span>
              </Badge>
              <Badge className="text-white">
                <TbBrandGolang size={25} />
                <span className="pl-2">Gin-Gonic</span>
              </Badge>
            </div>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="flex flex-col gap-4 border-b">
            <CardTitle>cryptoverse - Cryptocurrency App </CardTitle>
            <CardDescription className="flex gap-4 items-center  text-gray-500 dark:text-gray-400">
              Cryptoverse: Your all-in-one crypto companion. Explore 200+
              cryptos, interactive charts, currency converter, news, and
              portfolio tracking. Powered by React.js, Tailwind CSS, CoinGecko
              API, Bing News API, and Shcadcn UI.
              <Button className="text-white  rounded-full">
                <GitHubLogoIcon />
              </Button>
              <Button className="text-white rounded-full">
                <ExternalLinkIcon />
              </Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-8 border-b">
            <div className="w-full flex justify-center ">
              <Image
                src={"/projects/cryptoverse-poster.png"}
                alt="Periodically"
                width={500}
                height={500}
                className="rounded-lg glow__background"
              />
            </div>
            <p className="mt-8  text-gray-500 dark:text-gray-400">
              Cryptoverse is an innovative and user-friendly web application
              designed to cater to cryptocurrency enthusiasts and investors
              alike. With a vast database comprising details of over 200
              cryptocurrencies and information on 50 different country
              currencies, Cryptoverse offers a one-stop platform for all your
              cryptocurrency-related needs. Whether you are a beginner exploring
              the world of digital assets or an experienced investor seeking
              in-depth analysis and real-time data, Cryptoverse has you covered.
            </p>
          </CardContent>
          <CardFooter className="mt-2 flex flex-col">
            <h1 className="text-xl text-primary">Tech Stack:</h1>
            <div className="flex gap-2 flex-wrap">
              <Badge className="text-white">
                <BiLogoTypescript size={25} />
                <span className="pl-2">TypeScript</span>
              </Badge>
              <Badge className="text-white">
                <BiLogoReact size={25} />
                <span className="pl-2">React.js</span>
              </Badge>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProjectSection;
