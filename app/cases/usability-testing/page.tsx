import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CaseTags from "@/components/CaseTags";

export const metadata: Metadata = {
  title: "Validating Hypothesis for Mobility App — Alex Hobi",
  description:
    "Usability testing and user journey validation with 88+ real users for a major Brazilian mobility company.",
  openGraph: {
    title: "Validating Hypothesis for Mobility App — Alex Hobi",
    description:
      "Usability testing and user journey validation with 88+ real users for a major Brazilian mobility company.",
  },
};

export default function UsabilityTestingCase() {
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
            Usability Testing
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-6">
            Validating Hypothesis for Mobility App
          </h1>
          <p className="text-[#6c63ff] text-xl font-medium">
            Usability Testing and User Journey Validation
          </p>
          <CaseTags tags={["Usability Testing", "Heatmaps", "User Research", "Maze"]} />
        </header>

        {/* Cover image */}
        <div className="mb-14">
          <ImagePlaceholder
            src="cases/usability-testing/cover.jpg"
            alt="Usability testing for mobility app"
            aspectRatio="16/9"
            objectPosition="center 30%"
          />
        </div>

        {/* Body */}
        <article className="text-[#888] leading-[1.8] text-base">

          <p className="mb-14">
            In this case study, I detail how I planned and conducted a usability test with over 88
            real users, generating valuable insights to improve the user experience of a
            multifunctional app from a major Brazilian mobility company.
          </p>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">Context — The feature being tested and the business challenge</h2>
            <p>
              The project involved evaluating the effectiveness of a key app feature called
              &quot;Onde Usar&quot; (&quot;Where to Use&quot;), which presents a map with all the
              locations where the company&apos;s services are available. As the company was investing
              in partnerships and expanding its service offerings, this feature needed to be intuitive
              and efficient—supporting both user needs and business goals.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Approach and Tools — Structured tasks with heatmaps and direct feedback
            </h2>
            <div className="space-y-5">
              <p>
                I opted to use Maze, a usability testing platform. I created task flows, wrote detailed
                instructions for participants, and uploaded the interactive prototypes to be tested.
              </p>
              <p>
                Maze&apos;s key strength is its heatmap feature, which visually tracks click behavior
                across the test journey. This provided both qualitative feedback (through user ratings
                and open comments) and quantitative behavioral data.
              </p>
              <p>
                Before starting the tasks, I asked participants to share their age and frequency of app
                usage to assess how closely their profiles matched the product persona.
              </p>
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Task 1 – Is the &quot;Onde Usar&quot; Button Clearly Identifiable?
            </h2>
            <p>
              Participants were asked to navigate the prototype and locate where they could use the
              company&apos;s services. Maze&apos;s heatmap revealed significant click dispersion—users
              tapped across unrelated areas of the screen, which clearly indicated that the &quot;Onde
              Usar&quot; feature lacked visual clarity or prominence.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Task 2 – Understanding the &quot;Favorites&quot; Flow
            </h2>
            <p className="mb-6">
              The second task focused on evaluating the heart-shaped Favorites icon. While some users
              completed the task successfully, others showed confusion and hesitation.
            </p>
            <div className="space-y-4">
              {[
                "The favorites section was too hidden. I ended up checking 'parking' first.",
                "The term 'Favorites' isn't very intuitive. Maybe 'Saved Places' would be clearer.",
              ].map((quote) => (
                <blockquote
                  key={quote}
                  className="pl-4 border-l-2 border-[#6c63ff] text-[#888] italic"
                >
                  &quot;{quote}&quot;
                </blockquote>
              ))}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              Task 3 – Testing the Filters in &quot;Onde Usar&quot;
            </h2>
            <p className="mb-6">
              This task assessed how users perceived the quick filters at the top of the map screen.
              The filters appeared with a blue background by default, which led to visual confusion.
            </p>
            <blockquote className="pl-4 border-l-2 border-[#6c63ff] text-[#888] italic">
              &quot;The selected state is too light; it looks like I deselected it. I&apos;d suggest
              inverting the color logic.&quot;
            </blockquote>
          </div>

          <div className="mb-14">
            <ImagePlaceholder
              src="cases/usability-testing/heatmap-task1.jpg"
              alt="Heatmap showing click dispersion across all tasks"
              aspectRatio="auto"
            />
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              User Satisfaction &amp; Results — What users scored and what it signals
            </h2>
            <p>
              At the end of the test, users rated their overall experience from 0 to 5. The average
              score was <strong className="text-[#f0f0f0]">3.9</strong>, signaling room for
              improvement.
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">Next Steps — Design improvements the data pointed to</h2>
            <ul className="space-y-3">
              {[
                "Favorites icon is unclear – Test alternative icons or reposition the feature.",
                "Filter color behavior is misleading – Test an inverted color logic.",
                "Consider testing alternative layouts for showing locations beyond the map view.",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6c63ff] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">Outcome — Insights compiled and delivered to the product team</h2>
            <p>
              I compiled all insights, heatmaps, and user feedback into a comprehensive presentation
              delivered to the client&apos;s product team. The session helped align next steps and
              provided a clear roadmap for improving the app&apos;s core features.
            </p>
          </div>

        </article>
      </div>
    </main>
  );
}
