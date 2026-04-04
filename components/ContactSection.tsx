"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Linkedin, FileText, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hobigomes@gmail.com",
    href: "mailto:hobigomes@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(11) 96351-0810",
    href: "tel:+5511963510810",
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
    href: "https://drive.google.com/file/d/1c3dfjyzkUNGhpWkj8zxCJ0VEtCg5mMk5/view?usp=sharing",
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
            Vamos trabalhar juntos!
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
            href="https://wa.me/5511963510810"
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
