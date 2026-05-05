"use client";

import { motion } from "framer-motion";

export default function FeaturedProject({ project }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        relative
        max-w-7xl
        mx-auto
        rounded-2xl
        overflow-hidden
        border border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
      "
    >
      <div className="grid lg:grid-cols-2">

        {/* ================= IMAGE / VISUAL ================= */}
        <div className="relative h-[480px] overflow-hidden group">

          <motion.img
            src={project.image || "/projects/placeholder.png"}
            alt={project.title}
            className="
              w-full
              h-full
              object-cover
            "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />

          {/* cinematic overlay */}
          <div className="
            absolute inset-0
            bg-gradient-to-r
            from-black/60
            via-transparent
            to-transparent
          " />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="p-12 flex flex-col justify-center space-y-7">

          <p className="text-sm text-gray-400 tracking-widest">
            FEATURED PROJECT
          </p>

          <h3 className="text-4xl font-semibold leading-tight">
            {project.title}
          </h3>

          <p className="text-gray-400 leading-relaxed">
            {project.description}
          </p>

          {/* STACK */}
          <div className="flex flex-wrap gap-3">
            {project.stack?.map((tech: string) => (
              <span
                key={tech}
                className="
                  px-3 py-1
                  text-xs
                  border border-white/15
                  rounded-full
                  text-gray-300
                "
              >
                {tech}
              </span>
            ))}
          </div>

          {/* ACTIONS */}
            <div className="flex gap-5 pt-4">

            <a
                href={project.github || "https://github.com/aIxart-sjv/Renkei"}
                target="_blank"
                className="
                px-6
                py-3
                border border-white/20
                rounded-md
                hover:bg-white/58
                transition
                "
            >
                View Repository
            </a>

            </div>
        </div>
      </div>
    </motion.div>
  );
}