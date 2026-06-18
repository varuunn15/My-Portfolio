import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/jack/HeroSection";
import { MarqueeSection } from "@/components/jack/MarqueeSection";
import { AboutSection } from "@/components/jack/AboutSection";
import { ServicesSection } from "@/components/jack/ServicesSection";
import { ProjectsSection } from "@/components/jack/ProjectsSection";
import { SkillsSection } from "@/components/jack/SkillsSection";
import { FooterSection } from "@/components/jack/FooterSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Varun Visoriya | AI & Data Science Student & MERN Stack Developer",
      },
      {
        name: "description",
        content:
          "Varun Visoriya — B.Tech student in Artificial Intelligence & Data Science at MITS-DU, Gwalior and MERN stack developer.",
      },
      {
        property: "og:title",
        content:
          "Varun Visoriya | AI & Data Science Student & MERN Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Varun Visoriya — B.Tech student in Artificial Intelligence & Data Science at MITS-DU, Gwalior and MERN stack developer.",
      },
    ],

    links: [
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
    ],
  }),

  component: Index,
});

function Index() {
  return (
    <main style={{ background: "#0C0C0C", overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <SkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
}
