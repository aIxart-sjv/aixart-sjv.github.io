"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function Contact() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isInView) {
      // Play video and fade in audio
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error);
      });
      setIsPlaying(true);

      // Fade in volume smoothly
      videoRef.current.volume = 0;
      let volume = 0;
      const fadeIn = setInterval(() => {
        if (videoRef.current) {
          volume = Math.min(volume + 0.08, 0.6);
          videoRef.current.volume = volume;
          if (volume >= 0.6) clearInterval(fadeIn);
        }
      }, 50);

      return () => clearInterval(fadeIn);
    } else {
      // Fade out and pause
      setIsPlaying(false);

      if (videoRef.current) {
        let volume = videoRef.current.volume;
        const fadeOut = setInterval(() => {
          if (videoRef.current) {
            volume = Math.max(volume - 0.08, 0);
            videoRef.current.volume = volume;
            if (volume <= 0) {
              videoRef.current.pause();
              clearInterval(fadeOut);
            }
          }
        }, 50);

        return () => clearInterval(fadeOut);
      }
    }
  }, [isInView]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 1}}
      whileInView={{ opacity: 0.4 }}
      viewport={{ once: false, amount: 0.8 }}
      transition={{
        duration: 1.4,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-120px" }}
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        text-white
      "
    >
      {/* ================= VIDEO BACKGROUND ================= */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="absolute inset-0 -z-20"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          className="
            w-full
            h-full
            object-cover
          "
        >
          <source
            src="/videos/contact-bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      </motion.div>

      {/* CINEMATIC DARK FADE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.75 }}
        transition={{ duration: 1.6 }}
        viewport={{ once: true }}
        className="
          absolute
          inset-0
          bg-black/20
          -z-10
        "
      />

      {/* ================= CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="
          text-center
          max-w-2xl
          px-6
        "
      >
        <h2 className="text-5xl md:text-6xl font-semibold">
          Let’s Build Something Meaningful
        </h2>

        <p className="text-gray-300 mt-6 leading-relaxed">
          Open to collaboration, research,
          and building intelligent systems
          that solve real-world problems.
        </p>

        {/* CONTACT LINKS */}
        <div className="flex justify-center gap-8 mt-12 flex-wrap">

          <MagneticButton href="mailto:sittijaivardhan@gmail.com">
           Email
          </MagneticButton>

          <MagneticButton href="https://github.com/aixart-sjv">
           GitHub
          </MagneticButton>

          <MagneticButton href="https://www.linkedin.com/in/sitti-jaivardhan-90a8b3329/">
           LinkedIn
          </MagneticButton>

          <MagneticButton href="https://www.instagram.com/_alxart_sjv_/">
           Instagram
          </MagneticButton>

        </div>
        <div className="
            absolute
            w-[600px]
            h-[600px]
            bg-white/10
            blur-[160px]
            rounded-full
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            pointer-events-none
        "/>
      </motion.div>
    </motion.section>
  );
}