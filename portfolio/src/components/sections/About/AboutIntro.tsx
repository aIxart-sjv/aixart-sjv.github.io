"use client";

import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h2 className="text-5xl md:text-6xl font-semibold">
        About Me
      </h2>

      <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
        Engineering intelligent systems that merge
        artificial intelligence, scalable software,
        and immersive digital experiences.
      </p>
    </motion.div>
  );
}