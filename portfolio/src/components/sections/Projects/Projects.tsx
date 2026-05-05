"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { projects } from "@/data/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import ProjectCaseStudy from "@/components/projects/ProjectCaseStudy";

export default function Projects() {
  /* ===============================
     ACTIVE PROJECT STATE
  =============================== */
  const [activeProject, setActiveProject] = useState<any>(null);

  /* ===============================
     DATA SPLIT
  =============================== */
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <>
      {/* =====================================================
          PROJECTS SECTION
      ===================================================== */}
      <section
        className="
          relative
          min-h-screen
          bg-black
          px-6
          py-32
          overflow-hidden
        "
      >
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto mb-28"
        >
          <h2 className="text-5xl md:text-6xl font-semibold">
            Recent Endeavors
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
            Intelligent systems, AI platforms, and scalable
            software engineered to bridge research and
            real-world applications.
          </p>
        </motion.div>

        {/* ================= FEATURED ================= */}
        {featuredProject && (
          <motion.div
            className="mb-32"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            onClick={() =>
              setActiveProject(featuredProject)
            }
          >
            <FeaturedProject project={featuredProject} />
          </motion.div>
        )}

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
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <ProjectCard
                project={project}
                onClick={() =>
                  setActiveProject(project)
                }
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* =====================================================
          CINEMATIC CASE STUDY OVERLAY
      ===================================================== */}
      <ProjectCaseStudy
        project={activeProject}
        open={!!activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  );
}