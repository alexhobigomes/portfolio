"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CaseTags from "@/components/CaseTags";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function UIStreamingContent() {
  const { lang } = useLanguage();
  const pt = lang === "pt";

  return (
    <>
      <main className="min-h-screen bg-[#0a0a0a] pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[#888] hover:text-[#6c63ff] transition-colors text-sm mb-12"
          >
            <ArrowLeft size={14} />
            {pt ? "Voltar para Projetos" : "Back to Projects"}
          </Link>

          <header className="mb-12">
            <span className="inline-block text-[#6c63ff] text-xs font-medium tracking-widest uppercase mb-4">
              {pt ? "Design de UI" : "UI Design"}
            </span>
            <h1 className="font-display font-bold text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-6">
              {pt ? "Criando Interfaces para Produto de Streaming" : "Building Interfaces for Streaming Product"}
            </h1>
            <p className="text-[#6c63ff] text-xl font-medium">
              {pt
                ? "Prototipando um Novo Layout para a Plataforma de Streaming SBT Vídeos"
                : "Prototyping a New Layout for SBT Vídeos Streaming Platform"}
            </p>
            <CaseTags tags={["Prototyping", "UI Design", "Benchmarking", "Cross-Platform"]} />
          </header>

          <div className="mb-14">
            <ImagePlaceholder
              src="cases/ui-streaming/cover.jpg"
              alt="SBT Vídeos streaming platform UI"
              aspectRatio="16/9"
            />
          </div>

          <article className="max-w-none text-[#888] leading-[1.8] text-base">
            <div className="space-y-5 mb-14">
              {pt ? (
                <>
                  <p>
                    Neste estudo de caso, compartilho minha experiência trabalhando no redesign do SBT
                    Vídeos como parte do Laboratório de Inovação do SBT (Sistema Brasileiro de
                    Televisão), e os principais resultados entregues durante o projeto.
                  </p>
                  <p>
                    Como UX Designer na equipe de inovação do SBT, participei da redefinição da
                    experiência do usuário da plataforma de streaming da empresa. Os novos layouts foram
                    embasados em um extenso processo de benchmarking competitivo, no qual analisei os
                    principais serviços de streaming para identificar e aplicar as melhores práticas de
                    design de experiência do usuário.
                  </p>
                  <p>
                    Ao longo do projeto, participei de reuniões de alinhamento estratégico com as
                    equipes de produção de conteúdo, marketing e desenvolvimento. Essas sessões
                    ajudaram a definir decisões-chave do produto — como dimensões e variações de arte —
                    que impactaram diretamente outras áreas, especialmente em função dos custos de
                    produção de assets visuais. Também consideramos a manutenibilidade de longo prazo
                    com base na capacidade de investimento da empresa.
                  </p>
                  <p>
                    Um dos aspectos mais desafiadores e gratificantes deste projeto foi o design de
                    protótipos de alta fidelidade seguindo as diretrizes específicas de cada plataforma
                    — iOS Human Interface Guidelines e Material Design do Google. Todas as telas foram
                    adaptadas para múltiplas plataformas e resoluções, incluindo Web, Tablet (Android)
                    e Mobile (iOS).
                  </p>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>

            <div className="mb-14">
              <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
                {pt
                  ? "Entregas — O que foi produzido em todas as plataformas"
                  : "Deliverables — What was produced across all platforms"}
              </h2>
              <ul className="space-y-3">
                {(pt
                  ? [
                      "Protótipos interativos para tablets Android",
                      "Protótipos interativos para mobile iOS",
                      "Layouts da plataforma web",
                      "Consistência de UI entre plataformas, alinhada à marca e às restrições técnicas",
                    ]
                  : [
                      "Interactive prototypes for Android tablets",
                      "Interactive prototypes for iOS mobile",
                      "Web platform layouts",
                      "Cross-platform UI consistency aligned with brand and technical constraints",
                    ]
                ).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6c63ff] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-14">
              <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
                {pt
                  ? "Interface Web — Layout desktop para o SBT Vídeos"
                  : "Web Interface — Desktop layout for SBT Vídeos"}
              </h2>
              <ImagePlaceholder
                src="cases/ui-streaming/1.png"
                alt="Web interface homepage"
                aspectRatio="auto"
              />
            </div>

            <div className="mb-14">
              <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
                {pt
                  ? "Tablet e Mobile — Designs responsivos para Android e iOS"
                  : "Tablet & Mobile — Responsive designs for Android and iOS"}
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
