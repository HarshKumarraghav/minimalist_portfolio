import Image from "next/image";
import React from "react";

const AboutSection = () => {
  return (
    <div className="w-full h-screen p-2 mt-4">
      <h1 className="text-2xl text-primary text-center">
        <span>1.</span> About Me
      </h1>
      <div className="w-40 h-40 rounded-full border-primary border-2">
        <Image
          src={"/me/me.jpg"}
          alt="my profile"
          className="w-full h-full rounded-full border-primary border-2"
          width={200}
          height={200}
        />
      </div>
      Hello, I'm Harsh Kumar, a dedicated and driven Software Engineer with a
      passion for crafting innovative solutions and pushing the boundaries of
      technology. Based in Hyderabad, India, I am currently pursuing a
      Bachelor's degree in Information Technology from Gautam Buddha University,
      where I have consistently maintained a commendable GPA of 8.2 out of 10.
      My journey in the world of technology began in July 2020 when I embarked
      on an exciting internship with Bots Fusion AI's Core Development Team.
      During my time at Bots Fusion AI, I have made significant contributions to
      the development of the Chatbot Builder Dashboard, a remarkable project
      that has enhanced productivity and data visualization. Leveraging my
      expertise in ReactFlow, I created a node-based UI that streamlined
      processes and facilitated seamless code-based chatbot building. I also
      designed and implemented a secure backend using the Go fiber framework,
      effectively fortifying the system against unauthorized access attempts.
      One of my notable achievements includes establishing a real-time
      conversation server using WebSockets, leading to heightened chatbot
      responsiveness and user engagement. Continuing my journey, I joined
      Mangodoc.ai, a subsidiary of Botsfusion in collaboration with HighIQ.
      Here, I have taken on the challenge of single-handedly developing an
      entire product from scratch. My skills in React.js and Tailwind CSS, along
      with the integration of a design system library called Schadcn UI, have
      been pivotal in creating an exceptional contract and document management
      system akin to ChatGPT. In addition to my professional endeavors, I am
      deeply committed to nurturing the next generation of tech enthusiasts. As
      the Web Development Lead of the Google Developer Student Club (GDSC), I
      have organized workshops and seminars, guiding students on their
      development journey and fostering a supportive learning environment.
      Through various App and Web development workshops, I have empowered
      countless students to hone their skills in creating both web and mobile
      applications. In the realm of projects, I've demonstrated my proficiency
      through two remarkable ventures. "Periodically," a fully responsive web
      application, showcases my mastery of Next.js and the Context API for
      efficient state management. This application, housing the Periodic Table
      and a Table of solubility, presents a user-friendly interface driven by
      modern web technologies. On the other hand, "Cryptoverse" exemplifies my
      expertise in UI design, state management, and data fetching. This
      cryptocurrency web app provides real-time updates, interactive charts, and
      insightful information about the top 200 cryptocurrencies. My technical
      skill set encompasses a range of programming languages, including
      JavaScript and TypeScript. I'm well-versed in a variety of libraries and
      frameworks, such as React.js, Next.js, React Native, Fiber, TailwindCSS,
      and Schadcn UI. Moreover, I have hands-on experience with MongoDB, Git,
      GitHub, Node.js, and Express.js, underscoring my versatility and
      adaptability in the ever-evolving tech landscape. Beyond my professional
      achievements, I am an avid writer and have shared my insights through blog
      posts. My articles cover topics like becoming a front-end developer and
      managing multiple GitHub accounts, offering valuable guidance to fellow
      tech enthusiasts. In summary, my journey as a Software Engineer has been
      marked by an unwavering commitment to innovation, continuous learning, and
      collaborative problem-solving. With a proven track record of developing
      cutting-edge solutions and empowering others through mentorship, I am
      poised to make a lasting impact in the realm of technology. Looking ahead,
      I am excited to take on new challenges, drive meaningful change, and
      contribute to the ever-growing world of software engineering.
    </div>
  );
};

export default AboutSection;
