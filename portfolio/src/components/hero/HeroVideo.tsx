"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.play().catch(() => {
      console.log("Autoplay prevented");
    });
  }, []);

  return (
    <motion.video
      ref={videoRef}
      className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        -z-10
      "
      src="/videos/hero-bg.mp4"
      autoPlay
      muted
      loop
      playsInline
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
    />
  );
}