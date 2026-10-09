"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { useT } from "@/lib/i18n/translations";

function FlipCard() {
  return (
    <div
      className="flip-card"
      style={{ perspective: "1000px", width: "200px", height: "200px", transformStyle: "preserve-3d" }}
    >
      <div
        className="flip-inner"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Front: profile photo */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backfaceVisibility: "hidden" }}>
          <div className="relative w-full h-full">
            <Image
              src="/profile.jpg"
              alt="Alex Hobi"
              fill
              unoptimized
              className="object-cover rounded-[2rem] shadow-2xl shadow-black/40"
              priority
            />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10" />
          </div>
        </div>

        {/* Back: Brazilian flag */}
        <div
          className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/40"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <Image
            src="/brazil-flag.png"
            alt="Bandeira do Brasil"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const { lang } = useLanguage();
  const tr = useT(lang);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d12] pt-16 pb-24">

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, #6c63ff 0%, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #4f46e5 0%, transparent 70%)", filter: "blur(90px)" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-[280px] h-[280px] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#6c63ff]/30 bg-[#6c63ff]/10 text-[#a78bfa] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#6c63ff] animate-pulse" />
          {tr.hero.badge}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-6xl md:text-8xl text-[#f0f0f0] mb-10 leading-none tracking-tight"
        >
          {tr.hero.heading}
        </motion.h1>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-14"
          style={{ transformStyle: "preserve-3d" }}
        >
          <FlipCard />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[#9ca3af] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {tr.hero.subtitle}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">{tr.hero.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
