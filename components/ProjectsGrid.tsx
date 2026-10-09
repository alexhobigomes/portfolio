"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useT } from "@/lib/i18n/translations";

const projectHrefs = [
  "/cases/design-engineering",
  "/cases/usability-testing",
  "/cases/ux-research",
  "/cases/ui-streaming",
];

const projectImages = [
  { src: "cases/design-engineering/cover.png", alt: "Website for plastic surgery specialist" },
  { src: "cases/usability-testing/cover.jpg", alt: "Usability testing for mobility app", pos: "center 65%" },
  { src: "cases/ux-research/cover.jpg", alt: "UX research for churn reduction", pos: "center 65%" },
  { src: "cases/ui-streaming/cover.jpg", alt: "SBT Vídeos streaming platform UI design", pos: "center 65%" },
];

export default function ProjectsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();
  const tr = useT(lang);

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
            {tr.projects.tag}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] mt-3">
            {tr.projects.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tr.projects.items.map((project, i) => (
            <ProjectCard
              key={projectHrefs[i]}
              tag={project.tag}
              title={project.title}
              href={projectHrefs[i]}
              imageSrc={projectImages[i].src}
              imageAlt={projectImages[i].alt}
              imageObjectPosition={projectImages[i].pos}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
