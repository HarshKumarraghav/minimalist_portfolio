import Header from "@/components/Header/Header";
import AboutSection from "@/components/Main/AboutSection";
import HeroSection from "@/components/Main/HeroSection";
import WorkExperienceSection from "@/components/Main/WorkExperienceSection";

export default function Home() {
  return (
    <main className="w-screen flex flex-col items-center">
      <section className="w-full md:w-[80%] lg:w-[60%]">
        <Header />
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
      </section>
    </main>
  );
}
