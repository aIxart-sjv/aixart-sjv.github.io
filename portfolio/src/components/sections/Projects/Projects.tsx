"use client";

import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section
      className="
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        px-6
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
      >
        <h2 className="text-6xl font-semibold">
          Projects
        </h2>
      </motion.div>
    </section>
  );
}