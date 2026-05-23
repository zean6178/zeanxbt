"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <main className="relative">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
