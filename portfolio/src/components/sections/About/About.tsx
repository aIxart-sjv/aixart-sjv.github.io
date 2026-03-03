"use client";

import { forwardRef } from "react";

import AboutParticles from "@/components/background/AboutParticles";
import AboutIntro from "./AboutIntro";
import AboutContent from "./AboutContent";
import ExpertiseGrid from "./ExpertiseGrid";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="
        relative
        min-h-screen
        px-6
        py-32
        flex
        flex-col
        justify-center
        bg-gradient-to-b
        from-black
        via-[#555555]/20
        to-black
        overflow-hidden
      "
    >
      {/* ===== BACKGROUND LAYER ===== */}
      <div className="absolute inset-0 z-0">
        <AboutParticles />
      </div>

      {/* ===== CONTENT LAYER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto w-full space-y-28">
        <AboutIntro />
        <AboutContent />
        <ExpertiseGrid />
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;