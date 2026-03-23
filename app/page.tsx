import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Alex Hobi — Lead Product Designer",
  description:
    "Designer with 14+ years of experience crafting digital products that balance user needs and business goals. Lead Product Designer at Renault LATAM.",
  openGraph: {
    title: "Alex Hobi — Lead Product Designer",
    description:
      "Designer with 14+ years of experience crafting digital products that balance user needs and business goals.",
    url: "https://alexhobi.vercel.app",
    siteName: "Alex Hobi Portfolio",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsGrid />
      <ContactSection />
    </>
  );
}
