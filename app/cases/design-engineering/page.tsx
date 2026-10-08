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
              <svg viewBox="0 0 700 640" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl">
                <defs>
                  <linearGradient id="discBg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0f0f1a" />
                    <stop offset="100%" stopColor="#13131f" />
                  </linearGradient>
                  <marker id="arr" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                    <polygon points="0 0, 7 2.5, 0 5" fill="rgba(255,255,255,0.25)" />
                  </marker>
                  <marker id="arrDash" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
                    <polygon points="0 0, 7 2.5, 0 5" fill="rgba(255,255,255,0.18)" />
                  </marker>
                </defs>

                {/* Background */}
                <rect width="700" height="640" fill="url(#discBg)" rx="20" />

                {/* ── ROW 1: ChatGPT → 8 Interviews ── */}

                {/* ChatGPT card */}
                <rect x="28" y="32" width="168" height="76" rx="14" fill="rgba(16,163,127,0.12)" stroke="#10a37f" strokeWidth="1.5" />
                <rect x="28" y="32" width="168" height="4" rx="2" fill="#10a37f" />
                <text x="112" y="67" textAnchor="middle" fill="white" fontWeight="700" fontSize="14" fontFamily="system-ui, sans-serif">ChatGPT</text>
                <text x="112" y="86" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="system-ui, sans-serif">Interview script</text>

                {/* Arrow ChatGPT → 8 Interviews */}
                <line x1="196" y1="70" x2="230" y2="70" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" markerEnd="url(#arr)" />
                <text x="213" y="63" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="10" fontFamily="system-ui, sans-serif">script</text>

                {/* 8 Interviews card */}
                <rect x="238" y="32" width="212" height="76" rx="14" fill="rgba(108,99,255,0.12)" stroke="#6c63ff" strokeWidth="1.5" />
                <rect x="238" y="32" width="212" height="4" rx="2" fill="#6c63ff" />
                <text x="344" y="67" textAnchor="middle" fill="white" fontWeight="700" fontSize="14" fontFamily="system-ui, sans-serif">8 interviews</text>
                <text x="344" y="86" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="system-ui, sans-serif">Google Meet · transcripts</text>

                {/* Dashed vertical from 8 Interviews down */}
                <line x1="344" y1="108" x2="344" y2="150" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="4,3" markerEnd="url(#arrDash)" />

                {/* ── ROW 2: 8 real participants ── */}
                <circle cx="320" cy="161" r="7" fill="#6c63ff" opacity="0.85" />
                <circle cx="334" cy="161" r="7" fill="#6c63ff" opacity="0.85" />
                <circle cx="348" cy="161" r="7" fill="#6c63ff" opacity="0.85" />
                <circle cx="362" cy="161" r="7" fill="#6c63ff" opacity="0.85" />
                <circle cx="320" cy="177" r="7" fill="#6c63ff" opacity="0.28" />
                <circle cx="334" cy="177" r="7" fill="#6c63ff" opacity="0.28" />
                <circle cx="348" cy="177" r="7" fill="#6c63ff" opacity="0.28" />
                <circle cx="362" cy="177" r="7" fill="#6c63ff" opacity="0.28" />
                <text x="341" y="201" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="11" fontFamily="system-ui, sans-serif">8 real participants</text>

                {/* Dashed L-paths to NotebookLM and Gemini */}
                <path d="M 328,206 L 328,240 L 173,240 L 173,270" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" strokeDasharray="4,3" fill="none" markerEnd="url(#arrDash)" />
                <path d="M 355,206 L 355,240 L 526,240 L 526,270" stroke="rgba(255,255,255,0.16)" strokeWidth="1.5" strokeDasharray="4,3" fill="none" markerEnd="url(#arrDash)" />

                {/* ── ROW 3: NotebookLM | Gemini ── */}

                {/* NotebookLM card */}
                <rect x="44" y="272" width="258" height="78" rx="14" fill="rgba(168,85,247,0.12)" stroke="#a855f7" strokeWidth="1.5" />
                <rect x="44" y="272" width="258" height="4" rx="2" fill="#a855f7" />
                <text x="173" y="307" textAnchor="middle" fill="white" fontWeight="700" fontSize="14" fontFamily="system-ui, sans-serif">NotebookLM</text>
                <text x="173" y="326" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="system-ui, sans-serif">Pattern synthesis</text>

                {/* Wavy lines below NotebookLM */}
                <path d="M 58,368 Q 83,360 108,368 Q 133,376 158,368 Q 183,360 208,368 Q 233,376 258,368 Q 283,360 295,368" stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" fill="none" />
                <path d="M 58,380 Q 83,372 108,380 Q 133,388 158,380 Q 183,372 208,380 Q 233,388 258,380 Q 283,372 295,380" stroke="rgba(168,85,247,0.2)" strokeWidth="1.5" fill="none" />
                <text x="173" y="402" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="10.5" fontFamily="system-ui, sans-serif">themes · quotes · patterns</text>

                {/* Gemini card */}
                <rect x="418" y="272" width="220" height="78" rx="14" fill="rgba(59,130,246,0.12)" stroke="#3b82f6" strokeWidth="1.5" />
                <rect x="418" y="272" width="220" height="4" rx="2" fill="#3b82f6" />
                <text x="528" y="307" textAnchor="middle" fill="white" fontWeight="700" fontSize="14" fontFamily="system-ui, sans-serif">Gemini</text>
                <text x="528" y="326" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="system-ui, sans-serif">Competitive analysis</text>

                {/* Gemini tags */}
                <rect x="426" y="362" width="97" height="22" rx="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <text x="474" y="377" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10.5" fontFamily="system-ui, sans-serif">benchmarks</text>
                <rect x="530" y="362" width="97" height="22" rx="11" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <text x="578" y="377" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="10.5" fontFamily="system-ui, sans-serif">UX patterns</text>
                <text x="528" y="403" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="10.5" fontFamily="system-ui, sans-serif">market references</text>

                {/* L-shaped arrows → Claude */}
                <path d="M 302,311 L 352,311 L 352,450" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />
                <path d="M 418,311 L 368,311 L 368,450" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" fill="none" markerEnd="url(#arr)" />

                {/* ── ROW 4: Claude ── */}
                <rect x="218" y="452" width="224" height="78" rx="14" fill="rgba(249,115,22,0.12)" stroke="#f97316" strokeWidth="1.5" />
                <rect x="218" y="452" width="224" height="4" rx="2" fill="#f97316" />
                <text x="330" y="487" textAnchor="middle" fill="white" fontWeight="700" fontSize="14" fontFamily="system-ui, sans-serif">Claude</text>
                <text x="330" y="506" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="system-ui, sans-serif">Synthesis · CDE · PRD</text>

                {/* Arrow Claude → Discovery output */}
                <line x1="330" y1="530" x2="330" y2="551" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" markerEnd="url(#arr)" />

                {/* ── ROW 5: Discovery output ── */}
                <rect x="55" y="553" width="570" height="60" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
                <text x="340" y="581" textAnchor="middle" fill="white" fontWeight="600" fontSize="14" fontFamily="system-ui, sans-serif">Discovery output</text>
                <text x="340" y="600" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="system-ui, sans-serif">Affinity map · CDE matrix · Executive brief</text>

                {/* Footer */}
                <text x="350" y="628" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="11" fontFamily="system-ui, sans-serif">1 day · previously 1 week</text>
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
