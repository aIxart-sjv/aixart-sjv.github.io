"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function ProjectCard({ project, onClick }: any) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.04)
    `;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const reset = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <motion.div
      layoutId={`card-${project.title}`}
      onClick={onClick}
      className="cursor-pointer perspective-[1400px]"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className="
          relative
          group
          rounded-xl
          overflow-hidden
          border border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
          transition-transform
          duration-200
        "
      >
        {/* ===== CINEMATIC SPOTLIGHT ===== */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-0
            group-hover:opacity-100
            transition
          "
          style={{
            background: `
              radial-gradient(
                600px circle at var(--mouse-x) var(--mouse-y),
                rgba(255,255,255,0.15),
                transparent 40%
              )
            `,
          }}
        />

        {/* ===== IMAGE ===== */}
        <div className="h-56 overflow-hidden">
          <motion.img
            layoutId={`image-${project.title}`}
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-110
            "
          />
        </div>

        {/* ===== CONTENT ===== */}
        <div className="p-6 space-y-3 relative z-10">
          <h3 className="text-xl font-semibold">
            {project.title}
          </h3>

          <p className="text-gray-400 text-sm">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack?.map((tech: string) => (
              <span
                key={tech}
                className="
                  text-xs
                  border border-white/15
                  px-2 py-1
                  rounded-md
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}