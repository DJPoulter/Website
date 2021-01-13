import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import HeaderSection from "@/components/HeaderSection";
import NavigationMenu from "@/components/NavigationMenu";
import SkillsSection from "@/components/SkillsSection";
import React from "react";

const HomePage: React.FC<any> = () => {
  return (
    <div className="font-sans">
      <HeaderSection />
      <NavigationMenu />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
