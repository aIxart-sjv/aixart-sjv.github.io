"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function useParallax(
  ref: React.RefObject<HTMLElement>,
  strength = 20
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      const x =
        (e.clientX / window.innerWidth - 0.5) *
        strength;

      const y =
        (e.clientY / window.innerHeight - 0.5) *
        strength;

      gsap.to(el, {
        x,
        y,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, [ref, strength]);
}