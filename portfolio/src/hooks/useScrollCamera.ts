"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollCamera(
  ref: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    gsap.to(el, {
      scale: 0.82,
      y: -120,
      opacity: 0.6,
      ease: "none",

      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [ref]);
}