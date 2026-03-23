"use client";

import { useState } from "react";
import Image from "next/image";
import {
  UIStreamingCover,
  UIStreamingWebHomepage,
  UIStreamingTabletMobile,
  UsabilityTestingCover,
  UsabilityTestingHeatmap,
  UXResearchCover,
  UXResearchImmersion,
  UXResearchInterviews,
  UXResearchAnalysis,
  WebDevCover,
  WebDevHome,
  WebDevBlog,
  WebDevPost,
  DesignProcessCover,
} from "./CaseIllustrations";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | "auto";
  className?: string;
  objectPosition?: string;
}

const paddingMap: Record<string, string> = {
  "16/9": "56.25%",
  "4/3": "75%",
  "1/1": "100%",
  "21/9": "42.86%",
};

// These illustrations render immediately without trying to load an image first
const PRIMARY_ILLUSTRATIONS: Record<string, React.FC> = {};

const ILLUSTRATIONS: Record<string, React.FC> = {
  "cases/ui-streaming/cover.jpg": UIStreamingCover,
  "cases/ui-streaming/web-homepage.jpg": UIStreamingWebHomepage,
  "cases/ui-streaming/tablet-mobile.jpg": UIStreamingTabletMobile,
  "cases/usability-testing/cover.jpg": UsabilityTestingCover,
  "cases/usability-testing/heatmap-task1.jpg": UsabilityTestingHeatmap,
  "cases/ux-research/cover.jpg": UXResearchCover,
  "cases/ux-research/immersion.jpg": UXResearchImmersion,
  "cases/ux-research/interviews.jpg": UXResearchInterviews,
  "cases/ux-research/analysis.jpg": UXResearchAnalysis,
  "cases/design-engineering/cover.jpg": WebDevCover,
  "cases/design-engineering/screenshot-home.jpg": WebDevHome,
  "cases/design-engineering/screenshot-blog.jpg": WebDevBlog,
  "cases/design-engineering/screenshot-post.jpg": WebDevPost,
};

export default function ImagePlaceholder({
  src,
  alt,
  aspectRatio = "16/9",
  className = "",
  objectPosition = "center center",
}: ImagePlaceholderProps) {
  const [error, setError] = useState(false);
  const isAuto = aspectRatio === "auto";
  const padding = paddingMap[aspectRatio];
  const Illustration = ILLUSTRATIONS[src];
  const PrimaryIllustration = PRIMARY_ILLUSTRATIONS[src];

  // Render primary illustration directly, no image load attempt
  if (PrimaryIllustration) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl ${className}`}
        style={{ paddingBottom: padding ?? "56.25%" }}
        aria-label={alt}
      >
        <div className="absolute inset-0">
          <PrimaryIllustration />
        </div>
      </div>
    );
  }

  // "auto" mode: natural image height, no crop
  if (isAuto && !error) {
    return (
      <div className={`rounded-xl overflow-hidden ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/${src}`}
          alt={alt}
          className="w-full h-auto block"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  if (error && Illustration) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl ${className}`}
        style={{ paddingBottom: padding ?? "56.25%" }}
        aria-label={alt}
      >
        <div className="absolute inset-0">
          <Illustration />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`relative overflow-hidden rounded-xl border-2 border-dashed border-[#333] bg-[#1a1a1a] ${className}`}
        style={{ paddingBottom: padding ?? "56.25%" }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#444" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
          <p className="text-[#444] text-xs text-center font-mono">/public/{src}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl ${className}`}
      style={{ paddingBottom: padding }}
    >
      <Image
        src={`/${src}`}
        alt={alt}
        fill
        className="object-cover"
        style={{ objectPosition }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
        onError={() => setError(true)}
      />
    </div>
  );
}
