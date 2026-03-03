"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import useParallax from "@/hooks/useParallax";

export default function ProfileReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Cursor depth interaction
  useParallax(containerRef, 35);

  return (
    <div
      className="
        relative
        flex
        items-end
        justify-center
        h-[88vh]
        w-full
        pointer-events-none
        object-cover
        select-none
        drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
      "
    >
      <motion.div
        ref={containerRef}
        initial={{
          opacity: 0,
          y: 80,
          scale: 1.05,
          filter: "blur(20px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1.8,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.6,
        }}
        className="relative will-change-transform"
      >
        <img
          src="/images/profile.png"
          alt="Sitti Jaivardhan"
          draggable={false}
          className="
            h-[88vh]
            max-h-[920px]
            object-contain
            select-none
            drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]
          "
        />
      </motion.div>
    </div>
  );
}