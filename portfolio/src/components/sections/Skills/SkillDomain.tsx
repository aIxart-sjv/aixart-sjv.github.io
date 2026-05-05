"use client";

import { motion } from "framer-motion";

export default function SkillDomain({ domain }: any) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 1000 }}
      className="
        rounded-xl
        border border-gray-700
        bg-white/10
        backdrop-blur-x1
        p-8
        h-full
        p-8
      "
    >
      <h3 className="text-2xl font-semibold mb-6">
        {domain.title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {domain.skills.map((skill: string) => (
          <span
            key={skill}
            className="
              px-3 py-1
              text-sm
              border border-white/15
              rounded-md
              text-gray-300
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}