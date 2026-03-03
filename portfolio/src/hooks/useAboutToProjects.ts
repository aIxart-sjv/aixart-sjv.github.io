"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAboutToProjects(
  aboutRef: React.RefObject<HTMLElement>,
  projectsRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!aboutRef.current || !projectsRef.current) return;

    const about = aboutRef.current;
    const projects = projectsRef.current;

    gsap.set(projects, {
      opacity: 0,
      y: 150,
      scale: 1.1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: about,
        start: "bottom 80%",
        end: "bottom top",
        scrub: true,
      },
    });

    /* ABOUT LEAVES */
    tl.to(about, {
      scale: 0.9,
      opacity: 0.4,
      y: -120,
      filter: "blur(6px)",
      ease: "none",
    });

    /* PROJECTS ENTER */
    tl.to(
      projects,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        ease: "none",
      },
      0
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [aboutRef, projectsRef]);
}