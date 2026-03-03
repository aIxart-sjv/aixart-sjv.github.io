"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      "perspective(800px) rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.0 }}
      transition={{ type: "spring", stiffness: 9000}}
      className="
        relative
        p-6
        rounded-xl
        border border-white/10
        backdrop-blur-xl
        bg-white/[0.05]
        shadow-lg
        transition-transform
        duration-200
        will-change-transform
      "
    >
      {children}
    </motion.div>
  );
}