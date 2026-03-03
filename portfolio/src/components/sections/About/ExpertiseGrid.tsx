"use client";

import GlassCard from "@/components/ui/GlassCard";

const expertise = [
  {
    title: "Artificial Intelligence",
    description:
      "Designing intelligent systems using machine learning, deep learning, and data-driven modeling.",
  },
  {
    title: "Software Engineering",
    description:
      "Building scalable full-stack applications with strong architectural and system design principles.",
  },
  {
    title: "System Design",
    description:
      "Developing efficient backend structures, APIs, and distributed system workflows.",
  },
  {
    title: "Cybersecurity",
    description:
      "Understanding secure architectures, threat modeling, and defensive system strategies.",
  },
  {
    title: "Simulation & Visualization",
    description:
      "Creating immersive technical simulations and visually driven computational experiences.",
  },
  {
    title: "Research & Problem Solving",
    description:
      "Exploring complex engineering problems through experimentation and analytical thinking.",
  },
];

export default function ExpertiseGrid() {
  return (
    <div className="space-y-10">
      {/* SECTION TITLE */}
      <div className="text-center">
        <h3 className="text-4xl md:text-5xl font-semibold">
          Expertise
        </h3>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Core domains shaping my approach toward building
          intelligent and scalable technology.
        </p>
      </div>

      {/* GRID */}
      <div
        className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >
        {expertise.map((item) => (
          <GlassCard key={item.title}>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">
                {item.title}
              </h4>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}