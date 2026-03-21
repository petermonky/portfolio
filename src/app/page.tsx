import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Root() {
  return (
    <div
      id="top"
      className="mx-auto min-h-screen max-w-7xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0"
    >
      <div className="lg:flex lg:justify-between lg:gap-4">
        <Header />
        <main id="content" className="scroll-smooth pt-24 lg:w-[52%] lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
