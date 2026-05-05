"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";

export default function SignatureEnding() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  /* ===============================
     SCROLL TRACKING
  =============================== */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* ===============================
     CINEMATIC TRANSFORMS
  =============================== */

  const opacity = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    [0, 1]
  );

  const scale = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    [0.7, 1.05]
  );

  const rotateY = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    [-15, 0]
  );

  const blurValue = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    [30, 0]
  );

  const filter = useTransform(
    blurValue,
    (v) => `blur(${v}px)`
  );

  const bgOpacity = useTransform(
    scrollYProgress,
    [0.4, 1],
    [0, 0.8]
  );

  const yOffset = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    [100, 0]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-black"
    >
      {/* ===============================
          STICKY CINEMATIC STAGE
      =============================== */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-black">

        {/* BACKGROUND GLOW */}
        <motion.div
          style={{ opacity: bgOpacity }}
          className="
            absolute
            inset-0
            z-0
            bg-gradient-to-b
            from-transparent
            via-white/5
            to-black
          "
        />

        {/* ANIMATED BACKGROUND ELEMENTS */}
        <motion.div
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.6 }}
          className="
            absolute
            inset-0
            z-[1]
            pointer-events-none
          "
        >
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </motion.div>

        {/* SIGNATURE CONTENT */}
        <motion.div
          style={{
            opacity,
            scale,
            rotateY,
            filter,
            y: yOffset,
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
            gap-8
            text-center
            perspective
          "
        >
          {/* DECORATIVE TOP LINE */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 200, opacity: 0.4 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
          />

          {/* SIGNATURE WITH GLOW */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* GLOW EFFECT */}
            <motion.div
              animate={{
                opacity: isHovered ? 0.3 : 0.1,
                blur: isHovered ? 20 : 10,
              }}
              className="
                absolute
                inset-0
                -z-10
                bg-white/20
                blur-3xl
                rounded-lg
              "
            />

            <Image
              src="/images/signature.png"
              alt="Signature"
              width={1400}
              height={600}
              priority
              className="
                w-[700px]
                max-w-[85vw]
                object-contain
                select-none
                pointer-events-none
                drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]
              "
            />
          </motion.div>

          {/* DECORATIVE BOTTOM LINE */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 200, opacity: 0.4 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
          />

          {/* FINAL LINE WITH TYPING EFFECT */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-4"
          >
            <motion.p
              animate={{
                opacity: isHovered ? 1 : 0.6,
              }}
              transition={{ duration: 0.3 }}
              className="
                text-gray-300
                tracking-[0.35em]
                text-sm
                font-light
                hover:text-white
                transition-colors
                duration-300
              "
            >
              Crafted with intention.
            </motion.p>
          </motion.div>

          {/* SUBTLE SCROLL INDICATOR */}
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pt-8"
          >
            <div className="text-gray-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
              ↓
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}