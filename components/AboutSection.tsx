"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useT } from "@/lib/i18n/translations";

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
  const { lang } = useLanguage();
  const tr = useT(lang);

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
            {tr.about.tag}
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] mt-3 mb-8">
            {tr.about.heading}
          </h2>
          <div className="max-w-3xl space-y-5">
            <p className="text-[#555] text-lg leading-relaxed">{tr.about.p1}</p>
            <p className="text-[#555] text-lg leading-relaxed">{tr.about.p2}</p>
            <p className="text-[#555] text-lg leading-relaxed">{tr.about.p3}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tr.about.metrics.map((metric, i) => (
            <MetricCard key={metric.value} value={metric.value} label={metric.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
