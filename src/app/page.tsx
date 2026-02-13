import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";
import MatrixRain from "@/components/MatrixRain";

export default function Home() {
  return (
    <main className="relative">
      <MatrixRain />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
