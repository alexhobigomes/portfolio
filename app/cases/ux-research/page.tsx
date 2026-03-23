import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CaseTags from "@/components/CaseTags";

export const metadata: Metadata = {
  title: "Exploratory Analysis for Business Strategy — Alex Hobi",
  description:
    "Reducing churn through user research for a Brazilian mobility company facing high cancellation rates.",
  openGraph: {
    title: "Exploratory Analysis for Business Strategy — Alex Hobi",
    description:
      "Reducing churn through user research for a Brazilian mobility company facing high cancellation rates.",
  },
};


function BulletList({ items, dark }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6c63ff] flex-shrink-0" />
          <span className={dark ? "text-[#444]" : ""}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function UXResearchCase() {
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
            UX Research
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-6">
            Exploratory Analysis for Business Strategy
          </h1>
          <p className="text-[#6c63ff] text-xl font-medium">
            Reducing Churn Through User Research
          </p>
          <CaseTags tags={["Interviews", "Documentation", "Data Analytics"]} />
        </header>

        {/* Cover image */}
        <div className="mb-14">
          <ImagePlaceholder
            src="cases/ux-research/cover.jpg"
            alt="UX Research for churn reduction"
            aspectRatio="16/9"
            objectPosition="center 65%"
          />
        </div>

        {/* Body */}
        <article className="text-[#999] leading-[1.8] text-base">

          {/* Intro */}
          <p className="text-[#aaa] text-lg leading-relaxed mb-16">
            A Brazilian mobility company faced a high churn rate, especially after the end of a
            12-month free trial offered to 90% of users. As soon as billing began, many users
            attempted to cancel or freeze their subscriptions. The challenge: understand why users
            were leaving and identify opportunities to improve retention.
          </p>

          {/* ── RECRUITMENT ── */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-3">Recruitment — How incentives turned participation around</h2>
            <p className="mb-8 text-[#999]">
              Initial tests without incentives proved ineffective. After securing R$50 vouchers as
              incentives in collaboration with the Customer Support team, attendance improved
              significantly.
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#888] text-xs uppercase tracking-widest mb-5">Without incentive</p>
                <div className="space-y-5">
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">49</p>
                    <p className="text-[#666] text-sm mt-1">calls made</p>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">2</p>
                    <p className="text-[#666] text-sm mt-1">interviews scheduled</p>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">2</p>
                    <p className="text-[#666] text-sm mt-1">no-shows</p>
                  </div>
                </div>
              </div>
              <div style={{background:'#e5e5e5'}} className="border border-[#6c63ff]/40 rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs uppercase tracking-widest mb-5">With incentive</p>
                <div className="space-y-5">
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">36</p>
                    <p className="text-[#666] text-sm mt-1">calls made</p>
                  </div>
                  <div>
                    <p className="text-[#6c63ff] text-4xl font-bold font-display leading-none">8</p>
                    <p className="text-[#666] text-sm mt-1">interviews scheduled</p>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">2</p>
                    <p className="text-[#666] text-sm mt-1">no-shows</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── PARTICIPANT PROFILE ── */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
              Participant Profile — Who we spoke with
            </h2>

            <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
              <p className="text-[#1a1a1a] font-medium text-base mb-5">
                6 customers who contacted support to cancel their subscription
              </p>
              <div className="grid grid-cols-3 gap-6 pb-5 border-b border-[#ccc]">
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">Gender</p>
                  <p className="text-[#333] text-sm">3 Male / 3 Female</p>
                </div>
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">Region</p>
                  <p className="text-[#333] text-sm">Southeast Brazil</p>
                </div>
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">Age</p>
                  <p className="text-[#333] text-sm">32 to 48 years old</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-5">
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">Plan</p>
                  <p className="text-[#555] text-sm">4 Bradesco · 1 Total Prepaid · 1 Total Postpaid</p>
                </div>
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">Time as customer</p>
                  <p className="text-[#555] text-sm">14 to 24 months</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── REPORT ── */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-3">Report — From raw interviews to structured learnings</h2>
            <p className="mb-5 text-[#999]">Before producing this report, we completed:</p>
            <BulletList
              items={[
                "Consolidation of user quotes and statements",
                "Identification of key learnings",
                "Empathy mapping",
                "Affinity mapping",
              ]}
            />
          </section>

          {/* ── RESEARCH QUESTIONS ── */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-8">
              Research Questions — The hypotheses guiding our interviews
            </h2>

            <div className="space-y-5">
              {/* Question 1 */}
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs font-medium uppercase tracking-widest mb-2">
                  Question 1
                </p>
                <h3 className="text-[#1a1a1a] font-display font-semibold text-lg mb-4 leading-snug">
                  What does the user look for in a vehicle tag service?
                </h3>
                <BulletList
                  dark
                  items={[
                    "Convenience and practicality — but without paying fees or monthly charges",
                    "Without spending even more on tolls",
                  ]}
                />
                <p className="mt-5 text-sm rounded-lg px-4 py-3 border-l-2 border-[#6c63ff] leading-relaxed text-[#444]" style={{background:'#d4d4d4'}}>
                  Among the 6 interviewees,{" "}
                  <strong className="text-[#111]">4 were opposed</strong> to paying fees and
                  monthly charges on top of what they already spend on tolls.
                </p>
              </div>

              {/* Question 2 */}
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs font-medium uppercase tracking-widest mb-2">
                  Question 2
                </p>
                <h3 className="text-[#1a1a1a] font-display font-semibold text-lg mb-4 leading-snug">
                  Are there other pricing models or plans that would appeal to users?
                </h3>
                <BulletList
                  dark
                  items={[
                    "Pay-per-use instead of a fixed monthly fee",
                    "Monthly fee that converts into toll discounts or balance",
                  ]}
                />
                <p className="mt-5 text-sm text-[#555]">
                  The manual top-up model was also well received.
                </p>
              </div>

              {/* Question 3 */}
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs font-medium uppercase tracking-widest mb-2">
                  Question 3
                </p>
                <h3 className="text-[#1a1a1a] font-display font-semibold text-lg mb-4 leading-snug">
                  Why would a customer prefer a competitor?
                </h3>
                <BulletList dark items={["Lower cost", "Fee exemption"]} />
                <p className="mt-5 text-sm rounded-lg px-4 py-3 border-l-2 border-[#6c63ff] leading-relaxed text-[#444]" style={{background:'#d4d4d4'}}>
                  Among the 6 interviewees,{" "}
                  <strong className="text-[#111]">3 were or had been customers of Sem Parar</strong>:{" "}
                  2 had negative experiences related to billing · 1 prefers Sem Parar due to fewer
                  issues on the road.
                </p>
              </div>

              {/* Question 4 */}
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs font-medium uppercase tracking-widest mb-2">
                  Question 4
                </p>
                <h3 className="text-[#1a1a1a] font-display font-semibold text-lg mb-4 leading-snug">
                  Why do customers cancel their tag?
                </h3>
                <BulletList
                  dark
                  items={["End of the free trial period", "Low perceived usage"]}
                />
                <p className="mt-5 text-sm rounded-lg px-4 py-3 border-l-2 border-[#6c63ff] leading-relaxed text-[#444]" style={{background:'#d4d4d4'}}>
                  Among the 6 interviewees,{" "}
                  <strong className="text-[#111]">4 expressed discomfort</strong> with paying a
                  monthly fee for a tag service, especially when they consider their usage to be low.
                </p>
              </div>
            </div>
          </section>

          {/* ── INSIGHTS SUMMARY ── */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
              Insights Summary — Key themes and their strategic implications
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[#ccc]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#ccc]" style={{background:'#e5e5e5'}}>
                    <th className="text-left px-5 py-4 text-[#6c63ff] font-medium uppercase tracking-widest text-xs w-1/3">
                      Theme
                    </th>
                    <th className="text-left px-5 py-4 text-[#6c63ff] font-medium uppercase tracking-widest text-xs">
                      Insight
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ccc]">
                  {[
                    {
                      tema: "Monthly fees & charges",
                      insight:
                        "Financial cost plays a major role in choosing a tag service. When a competitor offers fee exemption, switching becomes very easy.",
                    },
                    {
                      tema: "New plans",
                      insight:
                        "Customers with low usage feel there are no suitable options for their profile.",
                    },
                    {
                      tema: "Competition",
                      insight:
                        "Financial cost is a decisive factor when switching between providers.",
                    },
                    {
                      tema: "Cancellation",
                      insight:
                        "Monthly fees combined with low perceived usage is the primary driver of cancellations.",
                    },
                    {
                      tema: "Retention",
                      insight:
                        "Customers were retained when offered the option to pay less or nothing.",
                    },
                    {
                      tema: "Payment methods",
                      insight:
                        "Most users are satisfied with the current payment methods available.",
                    },
                  ].map((row) => (
                    <tr key={row.tema} style={{background:'#dcdcdc'}} className="hover:brightness-95 transition-all">
                      <td className="px-5 py-4 text-[#1a1a1a] font-medium align-top">{row.tema}</td>
                      <td className="px-5 py-4 text-[#555] align-top leading-relaxed">{row.insight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── NEXT STEPS ── */}
          <section>
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-3">
              Next Steps — Data that could guide future decisions
            </h2>
            <p className="mb-5 text-[#999]">Additional data that could guide future decisions:</p>
            <BulletList
              items={[
                "Number of users who remained as paying customers after the free trial ended.",
                "Which plan is most used among paying customers.",
                "How frequently they use the service.",
                "Could churn be predicted based on usage behavior and frequency?",
                "Do users return after freezing their subscription?",
              ]}
            />
          </section>

        </article>
      </div>
    </main>
  );
}
