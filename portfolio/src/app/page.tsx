"use client";

import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About/About";
import Projects from "@/components/sections/Projects/Projects";
import Skills from "@/components/sections/Skills/Skills";
import Contact from "@/components/sections/Contact/Contact";
import SignatureEnding from "@/components/cinematic/SignatureEnding";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <SignatureEnding />
    </>
  );
}