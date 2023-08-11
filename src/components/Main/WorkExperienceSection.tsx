import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";

const WorkExperienceSection = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center px-4 "
      id="experience"
    >
      <div className="border-b text-center my-4">
        <h1 className="text-2xl text-primary">
          <span>3.</span> Work Experience
        </h1>
      </div>
      <ol className="relative border-l border-primary ">
        <li className="mb-10 ml-4">
          <Card>
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <CardHeader>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                February 2022 - Present
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Software Engineer at Bots Fusion AI
              </h3>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                I spearheaded the creation of the Chatbot Builder Dashboard from
                the ground up, utilizing ReactFlow for an intuitive node-based
                interface. This innovation drove productivity and data
                visualization. I also crafted a dynamic chatbot widget with
                React.js for effortless integration into any website. On the
                backend, I fortified security using Go fiber, implementing
                robust authentication measures to curtail unauthorized access.
                Furthermore, I engineered a real-time conversation server via
                WebSockets, amplifying chatbot responsiveness and user
                engagement.
              </p>
            </CardContent>
          </Card>
        </li>
        <li className="mb-10 ml-4">
          <Card>
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <CardHeader>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                May 2023 - Present
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Software Engineer at Mangodoc.ai
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Mangodoc.ai, a Botsfusion subsidiary in partnership with HighIQ,
                is akin to a ChatGPT for contracts and documents. Independently,
                I built the entire product, leveraging cutting-edge technologies
                like React.js, Tailwind CSS, and Schadcn UI. I integrated
                protected routes and managed state efficiently using the Context
                API.
              </p>
            </CardContent>
          </Card>
        </li>
        <li className="ml-4">
          <Card>
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-primary "></div>
            <CardHeader>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Aug 2022 - Aug 2023
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Web Development Lead - Google Developer Student Club (GDSC)
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                I took the lead in organizing seminars and workshops, mentoring
                students and initiating their development paths. Through various
                App and Web development workshops, I played a pivotal role in
                enhancing students skills in crafting web and mobile
                applications.
              </p>
            </CardContent>
          </Card>
        </li>
      </ol>
    </div>
  );
};

export default WorkExperienceSection;
