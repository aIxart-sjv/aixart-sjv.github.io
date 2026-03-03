"use client";

import { useRef } from "react";

import HeroVideo from "./HeroVideo";
import ProfileReveal from "./ProfileReveal";
import ScrambledText from "./ScrambledText";
import Signature from "./Signature";

import useHeroCinematicScroll from "@/hooks/useHeroCinematicScroll";
import useParallax from "@/hooks/useParallax";
import useScrollCamera from "@/hooks/useScrollCamera";

export default function Hero() {
  /* =============================
     CAMERA SCROLL TRANSITION
  ============================= */
  const heroRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLImageElement>(null);
  useHeroCinematicScroll(heroRef, signatureRef);

  /* =============================
     TEXT PARALLAX (SUBTLE)
  ============================= */
  const textRef = useRef<HTMLDivElement>(null);
  useParallax(textRef, 10);

  return (
    <section
      ref={heroRef}
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        flex
        items-center
        justify-center
        will-change-transform
      "
    >
      {/* =============================
          BACKGROUND VIDEO
      ============================= */}
      <HeroVideo />

      {/* DARK CINEMATIC OVERLAY */}
      <div className="absolute inset-0 bg-black/55 z-0" />

      {/* =============================
          HERO CONTENT GRID
      ============================= */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          px-6
          grid
          md:grid-cols-2
          items-end
        "
      >
        {/* =============================
            LEFT — IDENTITY TEXT
        ============================= */}
        <div
          ref={textRef}
          className="
            flex
            flex-col
            justify-center
            pb-24
          "
        >
          <ScrambledText
            radius={60}
            duration={0.5}
            speed={0.35}
            className="
            text-6xl
            md:text-7xl
            lg:text-7xl
            font-semibold
            tracking-wide
            "
          >
            <>
              SITTI <br />
              JAIVARDHAN
            </>
          </ScrambledText>

          <p className="mt-6 text-gray-300 text-lg">
            AI & Software Engineer
          </p>
        </div>

        {/* =============================
            RIGHT — FOREGROUND SUBJECT
        ============================= */}
        <div className="relative flex justify-center md:justify-end">
          <ProfileReveal />
        </div>
      </div>
    </section>
  );
}