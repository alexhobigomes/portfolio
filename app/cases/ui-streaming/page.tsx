import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CaseTags from "@/components/CaseTags";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Building Interfaces for Streaming Product — Alex Hobi",
  description:
    "Prototyping a new layout for SBT Vídeos streaming platform across Web, Tablet, and Mobile.",
  openGraph: {
    title: "Building Interfaces for Streaming Product — Alex Hobi",
    description:
      "Prototyping a new layout for SBT Vídeos streaming platform across Web, Tablet, and Mobile.",
  },
};

export default function UIStreamingCase() {
  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#6c63ff] transition-colors text-sm mb-12"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </Link>

          {/* Header */}
          <header className="mb-12">
            <span className="inline-block text-[#6c63ff] text-xs font-medium tracking-widest uppercase mb-4">
              UI Design
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-6">
              Building Interfaces for Streaming Product
            </h1>
            <p className="text-[#6c63ff] text-xl font-medium">
              Prototyping a New Layout for SBT Vídeos Streaming Platform
            </p>
            <CaseTags tags={["Prototyping", "UI Design", "Benchmarking", "Cross-Platform"]} />
          </header>

          {/* Cover image */}
          <div className="mb-14">
            <ImagePlaceholder
              src="cases/ui-streaming/cover.jpg"
              alt="SBT Vídeos streaming platform UI"
              aspectRatio="16/9"
            />
          </div>

          {/* Body */}
          <article className="max-w-none text-[#888] leading-[1.8] text-base">
            <div className="space-y-5 mb-14">
              <p>
                In this case study, I share my experience working on the redesign of SBT Vídeos as
                part of the SBT (Sistema Brasileiro de Televisão) Innovation Lab, and the key
                outcomes delivered during the project.
              </p>
              <p>
                As a UX Designer within SBT&apos;s innovation team, I was involved in redefining the
                user experience of the company&apos;s streaming platform. The new layouts were informed
                by an extensive competitive benchmarking process, where I analyzed leading streaming
                services to identify and apply best practices in user experience design.
              </p>
              <p>
                Throughout the project, I participated in strategic alignment meetings with content
                production, marketing, and development teams. These sessions helped define key product
                decisions—such as artwork dimensions and variations—which directly impacted other
                areas, particularly due to the production costs of visual assets. We also considered
                long-term maintainability based on the company&apos;s investment capacity.
              </p>
              <p>
                One of the most challenging and rewarding aspects of this project was designing
                high-fidelity prototypes that followed platform-specific guidelines—namely iOS Human
                Interface Guidelines and Google&apos;s Material Design. All screens were adapted for
                multiple platforms and resolutions, including Web, Tablet (Android), and Mobile (iOS).
              </p>
            </div>

            <div className="mb-14">
              <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
                Deliverables — What was produced across all platforms
              </h2>
              <ul className="space-y-3">
                {[
                  "Interactive prototypes for Android tablets",
                  "Interactive prototypes for iOS mobile",
                  "Web platform layouts",
                  "Cross-platform UI consistency aligned with brand and technical constraints",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6c63ff] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
                Web Interface — Desktop layout for SBT Vídeos
              </h2>
              <ImagePlaceholder
                src="cases/ui-streaming/1.png"
                alt="Web interface homepage"
                aspectRatio="auto"
              />
            </div>

            <div className="mb-14">
              <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
                Tablet &amp; Mobile — Responsive designs for Android and iOS
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <ImagePlaceholder
                  src="cases/ui-streaming/2.png"
                  alt="Tablet interface homepage"
                  aspectRatio="auto"
                />
                <ImagePlaceholder
                  src="cases/ui-streaming/3.png"
                  alt="Mobile interface homepage"
                  aspectRatio="auto"
                />
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
