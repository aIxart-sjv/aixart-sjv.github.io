"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

export default function ProjectCaseStudy({
  project,
  open,
  onClose,
}: any) {

  /* ===== LOCK SCROLL ===== */
  useEffect(() => {
    document.body.style.overflow = open
      ? "hidden"
      : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="
            fixed
            inset-0
            z-[999]
            bg-black
            overflow-y-auto
          "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="
              fixed
              top-8
              right-10
              text-white/60
              hover:text-white
              text-3xl
              z-50
            "
          >
            ✕
          </button>

          {/* ===== MORPH TARGET ===== */}
          <motion.div
            layoutId={`card-${project.title}`}
            className="max-w-6xl mx-auto pt-32 px-6"
          >
            <motion.img
              layoutId={`image-${project.title}`}
              src={project.image}
              alt={project.title}
              className="
                w-full
                rounded-xl
                mb-16
                object-cover
              "
            />

            <h1 className="text-5xl font-semibold mb-6">
              {project.title}
            </h1>

            <p className="text-gray-400 text-lg max-w-3xl">
              {project.description}
            </p>

            {/* STACK */}
            <div className="flex flex-wrap gap-3 mt-8">
              {project.stack?.map((tech: string) => (
                <span
                  key={tech}
                  className="
                    border border-white/20
                    px-3 py-1
                    rounded-md
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* STORY */}
            <div className="mt-24 space-y-10 max-w-3xl">
              <h2 className="text-3xl font-medium">
                Engineering Overview
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {project.caseStudy?.overview}
              </p>

              <h2 className="text-3xl font-medium">
                Technical Challenges
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {project.caseStudy?.challenges}
              </p>

              <h2 className="text-3xl font-medium">
                Outcome
              </h2>

              <p className="text-gray-400 leading-relaxed">
                {project.caseStudy?.outcome}

              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}