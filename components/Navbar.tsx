"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useLanguage, type Lang } from "@/lib/i18n/LanguageContext";
import { useT } from "@/lib/i18n/translations";

function BRFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" rx="2" fill="#009C3B"/>
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FFDF00"/>
      <circle cx="10" cy="7" r="3.2" fill="#002776"/>
      <path d="M6.9 6.2 Q10 5.0 13.1 6.2" stroke="white" strokeWidth="0.6" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function USFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="14" rx="2" fill="white"/>
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x="0" y={i * 2} width="20" height="1" fill="#B22234"/>
      ))}
      <rect x="0" y="12" width="20" height="1" fill="#B22234"/>
      <rect x="0" y="0" width="8" height="7" rx="1" fill="#3C3B6E"/>
    </svg>
  );
}

const languages: { code: Lang; label: string; Flag: () => JSX.Element }[] = [
  { code: "pt", label: "Português", Flag: BRFlag },
  { code: "en", label: "English", Flag: USFlag },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { lang, setLang } = useLanguage();
  const tr = useT(lang);
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navSections = ["about", "skills", "projects", "contact"] as const;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e5e5e5] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">
        <Link
          href="/"
          className={`font-display font-bold text-xl transition-colors hover:text-[#6c63ff] ${
            scrolled ? "text-[#1a1a1a]" : "text-[#f0f0f0]"
          }`}
        >
          Alex Hobi
        </Link>

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navSections.map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              className={`text-base capitalize transition-colors ${
                scrolled
                  ? "text-[#666] hover:text-[#1a1a1a]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {tr.nav[item]}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium transition-all duration-200 ${
                scrolled
                  ? "border-[#e5e5e5] text-[#444] hover:border-[#6c63ff]/40 hover:text-[#6c63ff] bg-white"
                  : "border-white/20 text-white/80 hover:border-white/50 hover:text-white bg-white/10"
              }`}
            >
              <current.Flag />
              <span className="hidden sm:inline">{current.label}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {open && (
              <div
                className="absolute right-0 top-full mt-2 w-40 bg-white border border-[#e5e5e5] rounded-xl shadow-lg overflow-hidden z-50"
              >
                {languages.map(({ code, label, Flag }) => (
                  <button
                    key={code}
                    onClick={() => { setLang(code); setOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-[#f4f4f5] ${
                      lang === code ? "text-[#6c63ff] font-medium bg-[#f4f4f5]" : "text-[#444]"
                    }`}
                  >
                    <Flag />
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5511963520810"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#6c63ff] text-white text-sm font-medium rounded-lg hover:bg-[#5a52d5] transition-colors"
          >
            {tr.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
