import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navigation/Header";
import AboutSection from "@/components/Main/AboutSection";
import HeroSection from "@/components/Main/HeroSection";
import ProjectSection from "@/components/Main/ProjectSection";
import TechStack from "@/components/Main/TechStack";
import WorkExperienceSection from "@/components/Main/WorkExperienceSection";
import ScrollToTop from "@/utils/ScrollToTop";

export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center">
      <section className="relative w-full md:w-[80%] lg:w-[60%]">
        <Header />
        <HeroSection />
        <AboutSection />
        <TechStack />
        <WorkExperienceSection />
        <ProjectSection />
        <Footer />
        <ScrollToTop />
      </section>
    </main>
  );
}
