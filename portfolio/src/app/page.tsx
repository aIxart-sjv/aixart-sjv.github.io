"use client";

import Hero from "@/components/hero/Hero";
import About from "@/components/sections/About/About";
import Projects from "@/components/sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  );
}