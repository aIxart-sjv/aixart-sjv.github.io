"use client";

import { motion, useMotionValue } from "framer-motion";

export default function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const x = useMotionValue(5);
  const y = useMotionValue(5);

  function handleMove(e: any) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 1.0);
    y.set((e.clientY - rect.top - rect.height / 2) * 3.0);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="
        px-7 py-3
        border border-white/30
        rounded-lg
        backdrop-blur-md
        hover:bg-white hover:text-black
        transition
      "
    >
      {children}
    </motion.a>
  );
}