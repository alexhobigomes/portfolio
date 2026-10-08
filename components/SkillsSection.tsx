"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Search, Monitor, Code, Sparkles } from "lucide-react";

function ClaudeIcon() {
  // Anthropic Claude: 3 nested open-C arcs — recognisable layered identity
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <circle cx="16" cy="16" r="12.5" fill="#CC785C" opacity="0.08"/>
      <path d="M25.5 9 A13 13 0 1 0 25.5 23" stroke="#CC785C" strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M22.5 11.5 A9.5 9.5 0 1 0 22.5 20.5" stroke="#CC785C" strokeWidth="2.2" strokeLinecap="round" opacity="0.6"/>
      <path d="M19.5 14 A6 6 0 1 0 19.5 18" stroke="#CC785C" strokeWidth="1.8" strokeLinecap="round" opacity="0.35"/>
    </svg>
  );
}

function ChatGPTIcon() {
  // OpenAI: 6-node radial wheel — simplified version of the OpenAI mark
  const nodes = Array.from({ length: 6 }, (_, i) => {
    const a = (i * 60 - 90) * (Math.PI / 180);
    return { x: 16 + 9.5 * Math.cos(a), y: 16 + 9.5 * Math.sin(a) };
  });
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <circle cx="16" cy="16" r="12.5" fill="#10a37f" opacity="0.08"/>
      {nodes.map((n, i) => {
        const next = nodes[(i + 2) % 6];
        return <line key={i} x1={n.x} y1={n.y} x2={next.x} y2={next.y} stroke="#10a37f" strokeWidth="1.4" strokeLinecap="round" opacity="0.5"/>;
      })}
      {nodes.map((n, i) => (
        <line key={`s${i}`} x1="16" y1="16" x2={n.x} y2={n.y} stroke="#10a37f" strokeWidth="1.6" strokeLinecap="round" opacity="0.7"/>
      ))}
      <circle cx="16" cy="16" r="3.5" fill="#10a37f" opacity="0.9"/>
      {nodes.map((n, i) => (
        <circle key={`d${i}`} cx={n.x} cy={n.y} r="1.8" fill="#10a37f" opacity="0.75"/>
      ))}
    </svg>
  );
}

function GeminiIcon() {
  // Google Gemini: smooth 4-pointed elongated star with gradient
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <defs>
        <linearGradient id="gem-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4285f4"/>
          <stop offset="45%" stopColor="#9333ea"/>
          <stop offset="100%" stopColor="#06b6d4"/>
        </linearGradient>
      </defs>
      {/* Single smooth 4-pointed star path */}
      <path
        d="M16 2 C15.1 9.2 12.8 13.2 2 16 C12.8 18.8 15.1 22.8 16 30 C16.9 22.8 19.2 18.8 30 16 C19.2 13.2 16.9 9.2 16 2Z"
        fill="url(#gem-g)"
      />
    </svg>
  );
}

function NotebookLMIcon() {
  // NotebookLM official logo — 3 nested arches, outer arch has distinctive left-foot swoop
  // Rendered without background so the container's tinted bg shows through
  return (
    <svg viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      {/* Outer arch — left terminal has the characteristic curling swoop */}
      <path
        d="M 91 63 A 41 41 0 0 0 9 63 C 4 63 3 71 10 75"
        stroke="#1d4ed8" strokeWidth="8.5" strokeLinecap="round" fill="none"
      />
      {/* Middle arch — clean symmetrical */}
      <path
        d="M 78 63 A 28 28 0 0 0 22 63"
        stroke="#1d4ed8" strokeWidth="8.5" strokeLinecap="round" fill="none"
      />
      {/* Inner arch — smallest, clean symmetrical */}
      <path
        d="M 65 63 A 15 15 0 0 0 35 63"
        stroke="#1d4ed8" strokeWidth="8.5" strokeLinecap="round" fill="none"
      />
    </svg>
  );
}

function ClaudeCodeIcon() {
  // Claude Code: same 3 nested C arcs as Claude but in violet + terminal prompt
  return (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
      <circle cx="16" cy="16" r="12.5" fill="#7c3aed" opacity="0.1"/>
      <path d="M25.5 9 A13 13 0 1 0 25.5 23" stroke="#7c3aed" strokeWidth="2.8" strokeLinecap="round"/>
      <path d="M22.5 11.5 A9.5 9.5 0 1 0 22.5 20.5" stroke="#7c3aed" strokeWidth="2.2" strokeLinecap="round" opacity="0.6"/>
      <path d="M19.5 14 A6 6 0 1 0 19.5 18" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" opacity="0.35"/>
      {/* Terminal prompt badge */}
      <rect x="18" y="18" width="13" height="9" rx="2" fill="#7c3aed"/>
      <text x="24.5" y="25" textAnchor="middle" fill="white" fontSize="5.5" fontFamily="monospace" fontWeight="700">&gt;_</text>
    </svg>
  );
}

const aiTools = [
  { name: "Claude",       Icon: ClaudeIcon,      color: "#CC785C", bg: "rgba(204,120,92,0.12)",  border: "rgba(204,120,92,0.25)"  },
  { name: "ChatGPT",      Icon: ChatGPTIcon,     color: "#10a37f", bg: "rgba(16,163,127,0.12)",  border: "rgba(16,163,127,0.25)"  },
  { name: "Gemini",       Icon: GeminiIcon,      color: "#4285f4", bg: "rgba(66,133,244,0.12)",  border: "rgba(66,133,244,0.25)"  },
  { name: "Claude Code",  Icon: ClaudeCodeIcon,  color: "#7c3aed", bg: "rgba(124,58,237,0.12)",  border: "rgba(124,58,237,0.25)"  },
];

const skills = [
  {
    icon: Layers,
    title: "Product Design",
    description:
      "Strategic design approach in digital product development and DesignOps initiatives. Technical leadership with LATAM teams.",
  },
  {
    icon: Search,
    title: "UX Research",
    description:
      "Leading user research, interviews, process and journey mapping, data analysis, and pain point prioritization across multiple teams.",
  },
  {
    icon: Monitor,
    title: "UI Design",
    description:
      "Prototypes and visual interface deliveries. Strong usability testing skills. Proficient in the use and maintenance of Design Systems.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Development of personal, commercial, and corporate websites. Proficient in industry tools and technologies.",
  },
];


function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-[#e5e5e5] rounded-xl p-8 shadow-sm hover:border-[#6c63ff]/40 hover:shadow-md transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-lg bg-[#6c63ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#6c63ff]/20 transition-colors">
        <Icon size={22} className="text-[#6c63ff]" />
      </div>
      <h3 className="font-display font-bold text-xl text-[#1a1a1a] mb-3">{skill.title}</h3>
      <p className="text-[#666] text-sm leading-relaxed">{skill.description}</p>
    </motion.div>
  );
}

function AISkillCard({ index }: { index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="col-span-full gemini-border shadow-sm transition-all duration-300 group"
    >
      <div className="gemini-border-inner overflow-hidden">
      <div className="p-8 flex flex-col md:flex-row md:items-center gap-8">
        {/* Icon + title */}
        <div className="flex items-center gap-5 md:w-72 flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-[#6c63ff]/10 flex items-center justify-center group-hover:bg-[#6c63ff]/20 transition-colors flex-shrink-0">
            <Sparkles size={22} className="text-[#6c63ff]" />
          </div>
          <h3 className="font-display font-bold text-xl text-[#1a1a1a]">
            AI Design<br />Engineer
          </h3>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-16 bg-[#e5e5e5] flex-shrink-0" />

        {/* Description */}
        <p className="text-[#666] text-sm leading-relaxed flex-1">
          Leveraging AI to accelerate every stage of digital product work — from research synthesis
          and ideation to documentation and delivery. Deep integration of AI tools into daily
          workflows for faster, smarter, and more impactful design decisions.
        </p>

        {/* Tool icons */}
        <div className="flex flex-wrap gap-4 md:justify-end flex-shrink-0">
          {aiTools.map(({ name, Icon, bg, border }) => (
            <div key={name} className="flex flex-col items-center gap-1.5 group/tool">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 group-hover/tool:scale-110"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <Icon />
              </div>
              <span className="text-[10px] text-[#888] font-medium leading-none">{name}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] mt-3">
            What I Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} index={i} />
          ))}
          <AISkillCard index={4} />
        </div>
      </div>
    </section>
  );
}
