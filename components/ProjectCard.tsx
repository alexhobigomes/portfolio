"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ImagePlaceholder from "./ImagePlaceholder";

interface ProjectCardProps {
  tag: string;
  title: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  index: number;
  imageObjectPosition?: string;
}

export default function ProjectCard({
  tag,
  title,
  href,
  imageSrc,
  imageAlt,
  index,
  imageObjectPosition,
}: ProjectCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="block group">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
          className="bg-white border border-[#e5e5e5] rounded-xl overflow-hidden shadow-sm hover:border-[#6c63ff]/40 hover:shadow-md transition-all duration-300"
        >
          {/* Image area */}
          <div className="relative">
            <ImagePlaceholder src={imageSrc} alt={imageAlt} aspectRatio="16/9" objectPosition={imageObjectPosition} />
          </div>

          {/* Content */}
          <div className="p-6 flex items-start justify-between gap-4">
            <div>
              <span className="inline-block text-[#6c63ff] text-xs font-medium tracking-widest uppercase mb-2">
                {tag}
              </span>
              <h3 className="font-display font-bold text-lg text-[#1a1a1a] leading-snug group-hover:text-[#6c63ff] transition-colors">
                {title}
              </h3>
            </div>
            <div className="mt-1 w-8 h-8 rounded-full border border-[#ddd] flex items-center justify-center flex-shrink-0 group-hover:bg-[#6c63ff] group-hover:border-[#6c63ff] transition-all">
              <ArrowUpRight size={14} className="text-[#999] group-hover:text-white transition-colors" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
