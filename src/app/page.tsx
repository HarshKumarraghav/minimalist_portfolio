import Footer from "@/components/Footer/Footer";
import Header from "@/components/Navigation/Header";
import AboutSection from "@/components/Main/AboutSection";
import HeroSection from "@/components/Main/HeroSection";
import ProjectSection from "@/components/Main/ProjectSection";
import TechStack from "@/components/Main/TechStack";
import WorkExperienceSection from "@/components/Main/WorkExperienceSection";
import ScrollToTop from "@/utils/ScrollToTop";
import MouseTorch from "@/utils/MouseTorch";
export default function Home() {
  return (
    <main
      className="w-screen flex flex-col items-center"
      style={{
        background:
          "radial-gradient(600px at 431px 957px, rgba(29, 78, 216, 0.15), transparent 80%)",
      }}
    >
      <section className="relative w-full md:w-[80%] lg:w-[60%]">
        <MouseTorch />
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
