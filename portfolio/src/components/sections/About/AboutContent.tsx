"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT TEXT */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          I am an AI & Software Engineering student focused
          on building intelligent, scalable systems that
          bridge research and real-world applications.
          My interests span machine learning,
          system architecture, cybersecurity,
          and immersive simulations.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed">
          I approach development as a systems problem —
          combining engineering discipline with creative
          experimentation to design technology that feels
          both powerful and intuitive.
        </p>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          h-[420px]
          bg-gradient-to-br
          from-white/5
          to-white/0
          rounded-xl
          border border-white/10
        "
      />
    </div>
  );
}