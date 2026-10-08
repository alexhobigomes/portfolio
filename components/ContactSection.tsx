"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, FileText, MessageCircle } from "lucide-react";

const WhatsAppIcon = ({ size = 18, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hobigomes@gmail.com",
    href: "mailto:hobigomes@gmail.com",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: "(11) 96352-0810",
    href: "https://wa.me/5511963520810?text=Ol%C3%A1%2C%20vi%20seu%20portfolio%20online%20e%20gostaria%20de%20mais%20detalhes%2C%20podemos%20conversar%3F.",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "alexhobigomes",
    href: "https://www.linkedin.com/in/alexhobigomes/",
    external: true,
  },
  {
    icon: FileText,
    label: "Resume",
    value: "View CV",
    href: "https://drive.google.com/file/d/1UePQZTgDaP5NLFrnLM4ERkRw0rvVHjES/view?usp=sharing",
    external: true,
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-[#f4f4f5]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase">
            Contact
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1a1a1a] mt-3 mb-4">
            Let&apos;s work together!
          </h2>
          <p className="text-[#666] text-lg">
            Have a project in mind? I&apos;d love to hear about it.
          </p>
        </motion.div>

        {/* Contact items — 2×2 grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          {contacts.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#e5e5e5] shadow-sm hover:border-[#6c63ff]/40 hover:shadow-md transition-all duration-200 group min-w-0"
              >
                <div className="w-11 h-11 rounded-lg bg-[#f4f4f5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#6c63ff]/10 transition-colors">
                  <Icon size={18} className="text-[#666] group-hover:text-[#6c63ff] transition-colors" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-[#999] mb-1">{item.label}</p>
                  <p className="text-[#1a1a1a] text-base sm:text-lg font-semibold group-hover:text-[#6c63ff] transition-colors truncate">
                    {item.value}
                  </p>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* CTA button — below the grid, left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="https://wa.me/5511963520810"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#6c63ff] text-white font-medium text-base rounded-xl hover:bg-[#5a52d5] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#6c63ff]/25"
          >
            <MessageCircle size={18} />
            Send a message
          </a>
        </motion.div>

      </div>
    </section>
  );
}
