import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AboutSection from "@/components/Main/AboutSection";
import HeroSection from "@/components/Main/HeroSection";
import ProjectSection from "@/components/Main/ProjectSection";
import TechStack from "@/components/Main/TechStack";
import WorkExperienceSection from "@/components/Main/WorkExperienceSection";

export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center">
      <section className="w-full md:w-[80%] lg:w-[60%]">
        <Header />
        <HeroSection />
        <AboutSection />
        <TechStack />
        <WorkExperienceSection />
        <ProjectSection />
        <Footer />
      </section>
    </main>
  );
}
