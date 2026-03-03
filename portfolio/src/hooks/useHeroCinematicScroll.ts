"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useHeroCinematicScroll(
  heroRef: React.RefObject<HTMLElement>,
  signatureRef: React.RefObject<HTMLElement>
) {
  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    const signature = signatureRef.current;

    const tl = gsap.timeline({
    scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "+=180%",
        scrub: true,
        pin: true,
    },
    });

    /* HERO ZOOM OUT */
    tl.to(hero, {
    scale: 0.75,
    y: -80,
    ease: "none",
    duration: 1,
    });

    /* SIGNATURE APPEAR */
    if (signature) {
    tl.to(
        signature,
        {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        },
        "+=0.2"
    );
    }

    /* HERO CLOSE */
    tl.to(hero, {
    scale: 0.6,
    opacity: 0.3,
    filter: "blur(8px)",
    duration: 1,
    });
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [heroRef, signatureRef]);
}