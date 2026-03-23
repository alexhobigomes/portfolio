"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const wrap = wrapRef.current;
    const path = pathRef.current;
    if (!wrap || !path) return;

    let currentLight = false;

    const onMove = (e: MouseEvent) => {
      wrap.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      wrap.style.opacity = "1";

      const under = document.elementFromPoint(e.clientX, e.clientY);
      if (under && !wrap.contains(under as Node)) {
        const bg = getComputedBg(under as HTMLElement);
        const light = isLightBg(bg);
        if (light !== currentLight) {
          currentLight = light;
          if (light) {
            path.style.fill = "#1a1a3a";
            path.style.stroke = "rgba(255,255,255,0.25)";
          } else {
            path.style.fill = "#ffffff";
            path.style.stroke = "rgba(0,0,0,0.25)";
          }
        }
      }
    };

    const onLeave = () => { wrap.style.opacity = "0"; };
    const onEnter = () => { wrap.style.opacity = "1"; };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 99999,
        opacity: 0,
        willChange: "transform",
      }}
    >
      <svg width="22" height="30" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          ref={pathRef}
          d="M0,0 L0,13 L3.5,9.5 L5.8,15 L7.5,14.2 L5.3,8.8 L9.5,8.8 Z"
          fill="#ffffff"
          stroke="rgba(0,0,0,0.25)"
          strokeWidth="0.7"
          strokeLinejoin="round"
          style={{ transition: "fill 0.15s, stroke 0.15s" }}
        />
      </svg>
    </div>
  );
}

function getComputedBg(el: HTMLElement): string {
  let node: HTMLElement | null = el;
  while (node) {
    const bg = window.getComputedStyle(node).backgroundColor;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      return bg;
    }
    node = node.parentElement;
  }
  return "rgb(10, 10, 10)";
}

function isLightBg(color: string): boolean {
  const nums = color.match(/\d+/g);
  if (!nums || nums.length < 3) return false;
  const [r, g, b] = nums.map(Number);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.5;
}
