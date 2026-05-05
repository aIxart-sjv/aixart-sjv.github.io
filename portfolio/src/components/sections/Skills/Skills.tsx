"use client";

import { motion } from "framer-motion";
import { skillDomains } from "@/data/skills";
import SkillDomain from "./SkillDomain";

export default function Skills() {
  return (
    <section
      className="
        relative
        min-h-screen
        px-6
        py-32
        bg-black
        flex
        flex-col
      "
    >
      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-24"
      >
        <h2 className="text-5xl md:text-6xl font-semibold">
          Technical Skills
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl">
          Technologies and engineering domains shaping
          intelligent system design.
        </p>
      </motion.div>

      {/* ================= GRID ================= */}
      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-10
        "
      >
        {skillDomains.map((domain, index) => (
          <motion.div
            key={domain.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
          >
            <SkillDomain domain={domain} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}