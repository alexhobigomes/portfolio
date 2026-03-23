"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e5e5e5] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`font-display font-bold text-xl transition-colors hover:text-[#6c63ff] ${
            scrolled ? "text-[#1a1a1a]" : "text-[#f0f0f0]"
          }`}
        >
          Alex Hobi
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {["about", "skills", "projects", "contact"].map((item) => (
            <Link
              key={item}
              href={`/#${item}`}
              className={`text-base capitalize transition-colors ${
                scrolled
                  ? "text-[#666] hover:text-[#1a1a1a]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/5511963510810"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#6c63ff] text-white text-sm font-medium rounded-lg hover:bg-[#5a52d5] transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
