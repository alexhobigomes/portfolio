"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "14+", label: "Years of experience in technology" },
  { value: "6+", label: "Years in UX / UI & Product Strategy" },
  { value: "8", label: "Years working with Business Intelligence" },
];

function MetricCard({
  value,
  label,
  index,
}: {
  value: string;
  label: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border border-[#e5e5e5] rounded-xl p-6 text-center shadow-sm hover:border-[#6c63ff]/40 hover:shadow-md transition-all duration-300"
    >
      <p className="font-display font-bold text-4xl text-[#6c63ff] mb-2">{value}</p>
      <p className="text-[#666] text-sm leading-relaxed">{label}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase">
            About
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] mt-3 mb-8">
            About Me
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-[#555] text-lg leading-relaxed">
              Designer with 14+ years in technology, including 6+ in UX/UI and 8 in Business Intelligence. Bachelor&apos;s in Information Systems and an MBA in UX Research, DesignOps, and Leadership.
            </p>
            <p className="text-[#555] text-lg leading-relaxed">
              Currently at Renault Brasil, I lead strategic discovery and delivery for digital products across all LATAM projects, working closely with Product, Engineering, and Business teams. Previous experience includes Veloe (main app), Fiserv (digital products, payment terminals, and internal financial systems), and SBT (SBT+ streaming app, platform, and internal systems).
            </p>
            <p className="text-[#555] text-lg leading-relaxed">
              Core strengths: user research, in-depth interviews, journey mapping, affinity mapping, data analysis, prototyping, ideation, and workshops — with strong DesignOps leadership and hands-on use of AI throughout the design process (Claude, Claude Code, ChatGPT, Antigravity, Gemini).
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, i) => (
            <MetricCard key={metric.value} value={metric.value} label={metric.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
