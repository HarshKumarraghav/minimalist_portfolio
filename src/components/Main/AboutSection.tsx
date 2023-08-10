import React from "react";
import { Badge } from "../ui/badge";
import { MdEngineering } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";
import Link from "next/link";
const AboutSection = () => {
  return (
    <div className="w-full h-screen p-2 mt-4">
      <div className="border-b text-center">
        <h1 className="text-2xl text-primary">
          <span>1.</span> About Me
        </h1>
      </div>
      <div className="mt-3 px-3 md:px-0">
        <div className="flex flex-col gap-y-2">
          <span className="text-primary text-xl">Harsh Kumar Raghav</span>
          <div className="flex gap-x-2">
            <Link href={"https://twitter.com/_Harsh_raghav_"} target="_blank">
              @_Harsh_raghav_
            </Link>
            <span className="text-primary">|</span>
            IT <span className="text-primary">|</span> GBU{" "}
            <span className="text-primary">|</span> Delhi
          </div>
          <div className="w-full flex gap-x-2">
            <Badge className="text-white flex gap-x-2">
              <MdEngineering size={20} />
              Software Engineer
            </Badge>
            <Badge className="text-white flex gap-x-2">
              <PiStudentBold size={20} />
              Student
            </Badge>
          </div>
        </div>
        <div className="mt-3">
          <br />
          <p>
            Greetings, I am{" "}
            <span className="text-primary">Harsh Kumar Raghav</span>, a
            dedicated Software Engineer from Delhi, India, with a relentless
            passion for innovation and technological advancement. Currently
            pursuing a Bachelor's degree in Information Technology from Gautam
            Buddha University, I have maintained an impressive GPA of 8.2.
          </p>
          <br />
          <p>
            My tech journey commenced in July 2020, joining{" "}
            <span className="text-primary">Bots Fusion AI's </span>
            Core Development Team. At Bots Fusion AI, I played a pivotal role in
            creating the Chatbot Builder Dashboard. Employing ReactFlow, I
            designed a node-based UI, streamlining chatbot development. I
            fortified the system against unauthorized access using Go fiber and
            established a real-time conversation server using WebSockets,
            enhancing chatbot responsiveness.
          </p>
          <br />
          <p>
            At <span className="text-primary"> Mangodoc.ai</span>, I led the
            development of a comprehensive contract and document management
            system using React.js, Tailwind CSS, and Schadcn UI. As Web
            Development Lead at{" "}
            <span className="text-primary">
              Google Developer Student Club (GDSC)
            </span>
            , I organized workshops, guiding students in web and app
            development.
          </p>
          <br />
          <p>
            1'm also a writer, sharing insights on becoming a front-end
            developer and GitHub management. Committed to innovation,
            collaborative problem-solving, and mentorship, I'm ready to make a
            lasting impact in software engineering. Excited to drive change and
            contribute further.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
