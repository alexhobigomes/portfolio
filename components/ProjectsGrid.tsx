"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    tag: "Design Engineering",
    title: "AI-Driven Design Process",
    href: "/cases/design-engineering",
    imageSrc: "cases/design-engineering/cover.png",
    imageAlt: "Website for plastic surgery specialist",
  },
  {
    tag: "Usability Testing",
    title: "Validating Hypothesis for Mobility App",
    href: "/cases/usability-testing",
    imageSrc: "cases/usability-testing/cover.jpg",
    imageAlt: "Usability testing for mobility app",
    imageObjectPosition: "center 65%",
  },
  {
    tag: "UX Research",
    title: "Exploratory Analysis for Business Strategy",
    href: "/cases/ux-research",
    imageSrc: "cases/ux-research/cover.jpg",
    imageAlt: "UX research for churn reduction",
    imageObjectPosition: "center 65%",
  },
  {
    tag: "UI Design",
    title: "Building Interfaces for Streaming Product",
    href: "/cases/ui-streaming",
    imageSrc: "cases/ui-streaming/cover.jpg",
    imageAlt: "SBT Vídeos streaming platform UI design",
    imageObjectPosition: "center 65%",
  },
];

export default function ProjectsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase">
            Work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] mt-3">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.href} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
