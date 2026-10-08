import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CaseTags from "@/components/CaseTags";

export const metadata: Metadata = {
  title: "AI-Driven Design Process — Alex Hobi",
  description:
    "How AI tools compressed a full design cycle — from discovery to MVP — into 5 to 10 days.",
  openGraph: {
    title: "AI-Driven Design Process — Alex Hobi",
    description:
      "How AI tools compressed a full design cycle — from discovery to MVP — into 5 to 10 days.",
  },
};

export default function DesignEngineeringCase() {
  return (
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
            Design Engineering
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-6">
            AI-Driven Design Process
          </h1>
          <p className="text-[#6c63ff] text-xl font-medium">
            Lean UX boosted by AI
          </p>
          <CaseTags tags={["Figma Make", "Claude", "NotebookLM", "Discovery", "Prototyping"]} />
        </header>

        {/* Cover image */}
        <div className="mb-14">
          <ImagePlaceholder
            src="cases/design-engineering/cover.png"
            alt="AI-Driven Design Process"
            aspectRatio="16/9"
          />
        </div>

        {/* Body */}
        <article className="text-[#888] leading-[1.8] text-base">

          <p className="text-[#aaa] text-lg leading-relaxed mb-14">
            The problem arrived the way it always does: urgent. A product team came to me with a
            real demand — redesign the onboarding flow of an urban mobility app. Churn in the first
            48 hours was high. Users weren&apos;t completing registration, dropping off mid-journey,
            and the business team was pressing for a quick solution. At another point in my career,
            this project would have taken weeks just for discovery. This time, it was different.
          </p>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Discovery — Understanding the problem with more depth and speed
            </h2>
            <div className="space-y-5">
              <p>
                The first step was structuring the research. I used ChatGPT to generate an initial
                script of interview questions — within minutes I had a solid base that I refined with
                my own knowledge of the product context. I conducted 8 interviews via Google Meet
                and, once done, fed the transcripts into NotebookLM. Instead of spending hours
                re-reading and categorizing quotes, I asked NotebookLM directly: &quot;What are the
                main frustration patterns across these interviews?&quot; — and received a structured
                summary organized by themes, with direct participant quotes.
              </p>
              <p>
                In parallel, I used Gemini to run a quick competitive analysis: which mobility apps
                lead in onboarding experience, which UX patterns are most common, what conversion
                benchmarks the market practices. Within hours I had a reference document that would
                previously have taken days of manual research.
              </p>
              <p>
                With the data in hand, I used Claude to build the affinity map, synthesize the key
                insights into a CDE Matrix format (Certainties, Doubts, Expectations), and write the
                executive discovery summary to present to the product team and C-Level. What would
                have been a full day of synthesis work became a morning.
              </p>
            </div>

            {/* Discovery process diagram */}
            <div className="mt-8">
              <svg viewBox="0 0 700 730" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl">
                <defs>
                  <marker id="arrowD" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#bbb" />
                  </marker>
                  <marker id="arrowDDash" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                    <polygon points="0 0, 8 3, 0 6" fill="#ccc" />
                  </marker>
                </defs>

                {/* Background */}
                <rect width="700" height="730" fill="#f7f4ef" rx="20" />

                {/* ── 1. ChatGPT (centrado) ── */}
                <rect x="250" y="30" width="200" height="76" rx="14" fill="#c9e8c2" />
                <text x="350" y="64" textAnchor="middle" fill="#2c5f26" fontWeight="700" fontSize="15" fontFamily="system-ui, sans-serif">ChatGPT</text>
                <text x="350" y="84" textAnchor="middle" fill="#4a8a42" fontSize="12" fontFamily="system-ui, sans-serif">Interview script</text>

                {/* Arrow + label */}
                <line x1="350" y1="106" x2="350" y2="142" stroke="#bbb" strokeWidth="1.5" markerEnd="url(#arrowD)" />
                <text x="360" y="128" fill="#bbb" fontSize="11" fontFamily="system-ui, sans-serif">script</text>

                {/* ── 2. 8 Interviews (centrado) ── */}
                <rect x="220" y="144" width="260" height="76" rx="14" fill="#d4c5f9" />
                <text x="350" y="178" textAnchor="middle" fill="#3d2080" fontWeight="700" fontSize="15" fontFamily="system-ui, sans-serif">8 interviews</text>
                <text x="350" y="198" textAnchor="middle" fill="#5a3ab0" fontSize="12" fontFamily="system-ui, sans-serif">Google Meet · transcripts</text>

                {/* Dashed arrow down */}
                <line x1="350" y1="220" x2="350" y2="258" stroke="#ccc" strokeWidth="1.5" strokeDasharray="5,4" markerEnd="url(#arrowDDash)" />

                {/* ── 3. 8 real participants (centrado) ── */}
                <circle cx="326" cy="270" r="6.5" fill="#b0a8d4" opacity="0.9" />
                <circle cx="340" cy="270" r="6.5" fill="#b0a8d4" opacity="0.9" />
                <circle cx="354" cy="270" r="6.5" fill="#b0a8d4" opacity="0.9" />
                <circle cx="368" cy="270" r="6.5" fill="#b0a8d4" opacity="0.9" />
                <circle cx="326" cy="285" r="6.5" fill="#b0a8d4" opacity="0.35" />
                <circle cx="340" cy="285" r="6.5" fill="#b0a8d4" opacity="0.35" />
                <circle cx="354" cy="285" r="6.5" fill="#b0a8d4" opacity="0.35" />
                <circle cx="368" cy="285" r="6.5" fill="#b0a8d4" opacity="0.35" />
                <text x="347" y="307" textAnchor="middle" fill="#999" fontSize="12" fontFamily="system-ui, sans-serif">8 real participants</text>

                {/* Dashed L-paths → NotebookLM (esq) e Gemini (dir) */}
                <path d="M 338,314 L 338,352 L 160,352 L 160,362" stroke="#ccc" strokeWidth="1.5" strokeDasharray="5,4" fill="none" markerEnd="url(#arrowDDash)" />
                <path d="M 360,314 L 360,352 L 540,352 L 540,362" stroke="#ccc" strokeWidth="1.5" strokeDasharray="5,4" fill="none" markerEnd="url(#arrowDDash)" />

                {/* ── 4. NotebookLM (esq) | Gemini (dir) ── */}

                {/* NotebookLM */}
                <rect x="30" y="364" width="260" height="78" rx="14" fill="#d4b8f4" />
                <text x="160" y="398" textAnchor="middle" fill="#4a1d96" fontWeight="700" fontSize="15" fontFamily="system-ui, sans-serif">NotebookLM</text>
                <text x="160" y="418" textAnchor="middle" fill="#6a3db0" fontSize="12" fontFamily="system-ui, sans-serif">Pattern synthesis</text>

                {/* Wavy lines */}
                <path d="M 38,456 Q 63,448 88,456 Q 113,464 138,456 Q 163,448 188,456 Q 213,464 238,456 Q 263,448 283,456" stroke="#ccc" strokeWidth="1.5" fill="none" />
                <path d="M 38,468 Q 63,460 88,468 Q 113,476 138,468 Q 163,460 188,468 Q 213,476 238,468 Q 263,460 283,468" stroke="#ccc" strokeWidth="1.5" fill="none" />
                <text x="160" y="492" textAnchor="middle" fill="#aaa" fontSize="11" fontFamily="system-ui, sans-serif">themes · quotes · patterns</text>

                {/* Gemini */}
                <rect x="410" y="364" width="260" height="78" rx="14" fill="#b8d8f4" />
                <text x="540" y="398" textAnchor="middle" fill="#1a4a80" fontWeight="700" fontSize="15" fontFamily="system-ui, sans-serif">Gemini</text>
                <text x="540" y="418" textAnchor="middle" fill="#2a6aaa" fontSize="12" fontFamily="system-ui, sans-serif">Competitive analysis</text>

                {/* Gemini tags */}
                <rect x="418" y="454" width="100" height="24" rx="12" fill="#e8e8e8" stroke="#ccc" strokeWidth="1" />
                <text x="468" y="470" textAnchor="middle" fill="#666" fontSize="11" fontFamily="system-ui, sans-serif">benchmarks</text>
                <rect x="526" y="454" width="96" height="24" rx="12" fill="#e8e8e8" stroke="#ccc" strokeWidth="1" />
                <text x="574" y="470" textAnchor="middle" fill="#666" fontSize="11" fontFamily="system-ui, sans-serif">UX patterns</text>
                <text x="540" y="496" textAnchor="middle" fill="#aaa" fontSize="11" fontFamily="system-ui, sans-serif">market references</text>

                {/* L-shaped arrows → Claude (saem dos lados dos cards) */}
                <path d="M 290,403 L 340,403 L 340,522" stroke="#bbb" strokeWidth="1.5" fill="none" markerEnd="url(#arrowD)" />
                <path d="M 410,403 L 360,403 L 360,522" stroke="#bbb" strokeWidth="1.5" fill="none" markerEnd="url(#arrowD)" />

                {/* ── 5. Claude (centrado) ── */}
                <rect x="220" y="524" width="260" height="78" rx="14" fill="#f5c8b0" />
                <text x="350" y="558" textAnchor="middle" fill="#7a3520" fontWeight="700" fontSize="15" fontFamily="system-ui, sans-serif">Claude</text>
                <text x="350" y="578" textAnchor="middle" fill="#a05030" fontSize="12" fontFamily="system-ui, sans-serif">Synthesis · CDE · PRD</text>

                {/* Arrow → Discovery output */}
                <line x1="350" y1="602" x2="350" y2="628" stroke="#bbb" strokeWidth="1.5" markerEnd="url(#arrowD)" />

                {/* ── 6. Discovery output ── */}
                <rect x="55" y="630" width="590" height="68" rx="14" fill="#e4e4e4" stroke="#ccc" strokeWidth="1" />
                <text x="350" y="662" textAnchor="middle" fill="#1a1a1a" fontWeight="600" fontSize="14" fontFamily="system-ui, sans-serif">Discovery output</text>
                <text x="350" y="682" textAnchor="middle" fill="#888" fontSize="11" fontFamily="system-ui, sans-serif">Affinity map · CDE matrix · Executive brief</text>

                {/* Footer */}
                <text x="350" y="716" textAnchor="middle" fill="#aaa" fontSize="12" fontFamily="system-ui, sans-serif">1 day · previously 1 week</text>
              </svg>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Definition — Turning insights into direction
            </h2>
            <p>
              With insights organized, I needed to translate everything into design direction. I asked
              Claude to help me structure the How Might We statements from the identified pain points,
              prioritize opportunities by impact and effort, and draft the initial PRD — already in
              the format the engineering team expected. The result was a clear, well-written
              definition document aligned with the team&apos;s technical language — something that
              normally requires multiple rounds of revision.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Ideation — Exploring solutions at speed
            </h2>
            <p>
              In the ideation phase, I ran a quick workshop with the team. I used ChatGPT to generate
              UI concept variations based on the patterns identified in discovery, and Gemini to
              explore visual references of onboardings that balance simplicity and engagement. With
              directions validated internally, I went straight to Figma — but not to start from
              scratch.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Prototyping — From canvas to testable prototype in hours
            </h2>
            <div className="space-y-5">
              <p>
                This is where the process changed most radically. With Figma Make, I generated an
                interactive prototype built on top of our own Design System in under 30 minutes.
                Figma Make consumed the company&apos;s DS components and assembled the onboarding
                flows with immediate visual consistency — no dragging components one by one. The
                result was a real prototype, with functional navigation, ready to be tested with real
                users on the same day.
              </p>
              <p>
                I didn&apos;t need to wait for the engineering team to see the solution working. I
                didn&apos;t need a preliminary handoff. I didn&apos;t need visual approval before
                testing. The barrier between idea and testable prototype practically disappeared.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Testing and Validation — Learning fast, iterating even faster
            </h2>
            <p>
              We ran a usability test with 6 users using the Figma Make prototype. With the
              recordings in hand, I returned to NotebookLM to process the feedback and identify
              patterns. Claude helped me format the insights report and write the improvement
              recommendations clearly and objectively for the stakeholder. Within 48 hours we had
              concrete learnings and a second version of the flow ready for validation.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Build and Delivery — From prototype to real product
            </h2>
            <div className="space-y-5">
              <p>
                This is where the process becomes even more powerful. Claude Code, connected directly
                to the Figma file via MCP integration, read the prototype and built the solution in
                the company&apos;s technology stack — React, with the Design System tokens already
                applied. It wasn&apos;t an approximate interpretation. It was a faithful
                implementation of what had been designed and validated.
              </p>
              <p>
                And most importantly: in projects where time is even more critical, Claude Code can
                also skip the prototype entirely — going straight from the PRD or ideation canvas to
                building the product. The designer and engineer work together over the same file, at
                the same speed.
              </p>
              <p>
                What used to take 3 to 6 weeks — discovery, design, prototype, testing, handoff,
                development — now happens in cycles of 5 to 10 days. The MVP shipped faster, more
                consistently, and more aligned with what the user actually needed.
              </p>
            </div>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              What really changed
            </h2>
            <div className="space-y-5">
              <p>
                This isn&apos;t about replacing design work. It&apos;s about removing the friction
                between each stage. AI doesn&apos;t think for the designer — it amplifies the speed
                at which the designer thinks, researches, documents, prototypes, and delivers. My
                process today is the same as it&apos;s always been: Discovery → Definition →
                Ideation → Prototyping → Testing → Delivery. What changed is that every stage now
                has a co-pilot that learns fast, never tires, and is always available.
              </p>
              <p>
                The process got faster. The decisions got better. And MVPs reach users when they
                still make a difference.
              </p>
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}
