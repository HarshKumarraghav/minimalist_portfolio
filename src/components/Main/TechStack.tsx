import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  BiLogoBaidu,
  BiLogoGithub,
  BiLogoGoLang,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNetlify,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoVisualStudio,
} from "react-icons/bi";
import { TbBrandGolang, TbBrandNextjs } from "react-icons/tb";
import { SiPostman, SiRailway, SiRender, SiVercel } from "react-icons/si";
const TechStack = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center px-4 ">
      <div className="border-b text-center my-4">
        <h1 className="text-2xl text-primary">
          <span>2.</span> Teck Stack
        </h1>
      </div>
      <div className="flex flex-col gap-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-x-2">
            <Badge className="text-white">
              <BiLogoJavascript size={25} />
              <span className="pl-2">JavaScript</span>
            </Badge>
            <Badge className="text-white">
              <BiLogoTypescript size={25} />
              <span className="pl-2">Typescript</span>
            </Badge>
            <Badge className="text-white">
              <BiLogoGoLang size={25} />
              <span className="pl-2">Golang</span>
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Frameworks/Libraries</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap ">
            <Badge className="text-white">
              <BiLogoReact size={25} />
              <span className="pl-2">React.js</span>
            </Badge>
            <Badge className="text-white">
              <TbBrandNextjs size={25} />
              <span className="pl-2">Next.js</span>
            </Badge>
            <Badge className="text-white">
              <BiLogoReact size={25} />
              <span className="pl-2">React Native</span>
            </Badge>
            <Badge className="text-white">
              <TbBrandGolang size={25} />
              <span className="pl-2">Gin-Gonic</span>
            </Badge>
            <Badge className="text-white">
              <TbBrandGolang size={25} />
              <span className="pl-2">Go Fiber</span>
            </Badge>
            <Badge className="text-white">
              <BiLogoTailwindCss size={25} />
              <span className="pl-2">Tailwind CSS</span>
            </Badge>
            <Badge className="text-white">
              <BiLogoBaidu size={25} />
              <span className="pl-2">SchadCn UI</span>
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Tools</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap ">
            <Badge className="text-white">
              <BiLogoVisualStudio size={25} />
              <span className="pl-2">VS Code</span>
            </Badge>
            <Badge className="text-white">
              <BiLogoGithub size={25} />
              <span className="pl-2">GitHub</span>
            </Badge>
            <Badge className="text-white">
              <SiPostman size={25} />
              <span className="pl-2">Postman</span>
            </Badge>
            <Badge className="text-white">
              <BiLogoMongodb size={25} />
              <span className="pl-2">MongoDB</span>
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Hosting</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2 flex-wrap ">
            <Badge className="text-white">
              <SiVercel size={25} />
              <span className="pl-2">Vercel</span>
            </Badge>
            <Badge className="text-white">
              <BiLogoNetlify size={25} />
              <span className="pl-2">Netlify</span>
            </Badge>
            <Badge className="text-white">
              <SiRailway size={25} />
              <span className="pl-2">Railway</span>
            </Badge>
            <Badge className="text-white">
              <SiRender size={25} />
              <span className="pl-2">Render</span>
            </Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TechStack;
