"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useAboutReveal(
  ref: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 150,
        scale: 1.1,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [ref]);
}