"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CaseTags from "@/components/CaseTags";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function UsabilityTestingContent() {
  const { lang } = useLanguage();
  const pt = lang === "pt";

  return (
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
            {pt ? "Teste de Usabilidade" : "Usability Testing"}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-6">
            {pt ? "Validando Hipóteses para App de Mobilidade" : "Validating Hypothesis for Mobility App"}
          </h1>
          <p className="text-[#6c63ff] text-xl font-medium">
            {pt
              ? "Testes de Usabilidade e Validação da Jornada do Usuário"
              : "Usability Testing and User Journey Validation"}
          </p>
          <CaseTags tags={["Usability Testing", "Heatmaps", "User Research", "Maze"]} />
        </header>

        <div className="mb-14">
          <ImagePlaceholder
            src="cases/usability-testing/cover.jpg"
            alt="Usability testing for mobility app"
            aspectRatio="16/9"
            objectPosition="center 30%"
          />
        </div>

        <article className="text-[#888] leading-[1.8] text-base">

          <p className="mb-14">
            {pt
              ? "Neste estudo de caso, detalho como planejei e conduzi um teste de usabilidade com mais de 88 usuários reais, gerando insights valiosos para melhorar a experiência de usuário de um app multifuncional de uma grande empresa brasileira de mobilidade."
              : "In this case study, I detail how I planned and conducted a usability test with over 88 real users, generating valuable insights to improve the user experience of a multifunctional app from a major Brazilian mobility company."}
          </p>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              {pt
                ? "Contexto — A funcionalidade testada e o desafio de negócio"
                : "Context — The feature being tested and the business challenge"}
            </h2>
            <p>
              {pt
                ? "O projeto envolveu avaliar a efetividade de uma funcionalidade-chave do app chamada \"Onde Usar\", que apresenta um mapa com todos os locais onde os serviços da empresa estão disponíveis. Como a empresa estava investindo em parcerias e expandindo sua oferta de serviços, essa funcionalidade precisava ser intuitiva e eficiente — atendendo tanto às necessidades dos usuários quanto aos objetivos de negócio."
                : "The project involved evaluating the effectiveness of a key app feature called \"Onde Usar\" (\"Where to Use\"), which presents a map with all the locations where the company's services are available. As the company was investing in partnerships and expanding its service offerings, this feature needed to be intuitive and efficient—supporting both user needs and business goals."}
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              {pt
                ? "Abordagem e Ferramentas — Tarefas estruturadas com heatmaps e feedback direto"
                : "Approach and Tools — Structured tasks with heatmaps and direct feedback"}
            </h2>
            <div className="space-y-5">
              {pt ? (
                <>
                  <p>
                    Optei por utilizar o Maze, uma plataforma de testes de usabilidade. Criei fluxos de
                    tarefas, escrevi instruções detalhadas para os participantes e fiz upload dos
                    protótipos interativos a serem testados.
                  </p>
                  <p>
                    O grande diferencial do Maze é o recurso de heatmap, que rastreia visualmente o
                    comportamento de cliques ao longo da jornada de teste. Isso forneceu tanto feedback
                    qualitativo (por meio de avaliações e comentários abertos dos usuários) quanto dados
                    comportamentais quantitativos.
                  </p>
                  <p>
                    Antes de iniciar as tarefas, pedi aos participantes que compartilhassem sua idade e
                    frequência de uso do app para avaliar o quão próximo seu perfil estava da persona do
                    produto.
                  </p>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              {pt
                ? "Tarefa 1 – O Botão \"Onde Usar\" É Claramente Identificável?"
                : "Task 1 – Is the \"Onde Usar\" Button Clearly Identifiable?"}
            </h2>
            <p>
              {pt
                ? "Os participantes foram solicitados a navegar pelo protótipo e localizar onde poderiam usar os serviços da empresa. O heatmap do Maze revelou grande dispersão de cliques — os usuários tocaram em áreas não relacionadas da tela, o que indicou claramente que a funcionalidade \"Onde Usar\" não tinha clareza ou destaque visual suficientes."
                : "Participants were asked to navigate the prototype and locate where they could use the company's services. Maze's heatmap revealed significant click dispersion—users tapped across unrelated areas of the screen, which clearly indicated that the \"Onde Usar\" feature lacked visual clarity or prominence."}
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              {pt
                ? "Tarefa 2 – Entendendo o Fluxo de \"Favoritos\""
                : "Task 2 – Understanding the \"Favorites\" Flow"}
            </h2>
            <p className="mb-6">
              {pt
                ? "A segunda tarefa focou na avaliação do ícone de Favoritos (em formato de coração). Enquanto alguns usuários concluíram a tarefa com sucesso, outros demonstraram confusão e hesitação."
                : "The second task focused on evaluating the heart-shaped Favorites icon. While some users completed the task successfully, others showed confusion and hesitation."}
            </p>
            <div className="space-y-4">
              {(pt
                ? [
                    "A seção de favoritos estava muito escondida. Acabei verificando 'estacionamento' primeiro.",
                    "O termo 'Favoritos' não é muito intuitivo. Talvez 'Locais Salvos' fosse mais claro.",
                  ]
                : [
                    "The favorites section was too hidden. I ended up checking 'parking' first.",
                    "The term 'Favorites' isn't very intuitive. Maybe 'Saved Places' would be clearer.",
                  ]
              ).map((quote) => (
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
              {pt
                ? "Tarefa 3 – Testando os Filtros em \"Onde Usar\""
                : "Task 3 – Testing the Filters in \"Onde Usar\""}
            </h2>
            <p className="mb-6">
              {pt
                ? "Esta tarefa avaliou como os usuários percebiam os filtros rápidos no topo da tela do mapa. Os filtros apareciam com fundo azul por padrão, o que gerava confusão visual."
                : "This task assessed how users perceived the quick filters at the top of the map screen. The filters appeared with a blue background by default, which led to visual confusion."}
            </p>
            <blockquote className="pl-4 border-l-2 border-[#6c63ff] text-[#888] italic">
              {pt
                ? "\"O estado selecionado é muito claro; parece que desmarquei. Sugeriria inverter a lógica de cores.\""
                : "\"The selected state is too light; it looks like I deselected it. I'd suggest inverting the color logic.\""}
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
              {pt
                ? "Satisfação e Resultados — O que os usuários avaliaram e o que isso sinaliza"
                : "User Satisfaction & Results — What users scored and what it signals"}
            </h2>
            <p>
              {pt ? (
                <>
                  Ao final do teste, os usuários avaliaram sua experiência geral de 0 a 5. A pontuação
                  média foi <strong className="text-[#f0f0f0]">3,9</strong>, indicando espaço para
                  melhoria.
                </>
              ) : (
                <>
                  At the end of the test, users rated their overall experience from 0 to 5. The average
                  score was <strong className="text-[#f0f0f0]">3.9</strong>, signaling room for
                  improvement.
                </>
              )}
            </p>
          </div>

          <div className="mb-14">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              {pt
                ? "Próximos Passos — Melhorias de design apontadas pelos dados"
                : "Next Steps — Design improvements the data pointed to"}
            </h2>
            <ul className="space-y-3">
              {(pt
                ? [
                    "Ícone de Favoritos pouco claro – Testar ícones alternativos ou reposicionar a funcionalidade.",
                    "Comportamento de cores dos filtros é enganoso – Testar uma lógica de cores invertida.",
                    "Considerar testar layouts alternativos para exibir locais além da visualização em mapa.",
                  ]
                : [
                    "Favorites icon is unclear – Test alternative icons or reposition the feature.",
                    "Filter color behavior is misleading – Test an inverted color logic.",
                    "Consider testing alternative layouts for showing locations beyond the map view.",
                  ]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#6c63ff] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-5">
              {pt
                ? "Resultado — Insights compilados e entregues para a equipe de produto"
                : "Outcome — Insights compiled and delivered to the product team"}
            </h2>
            <p>
              {pt
                ? "Compilei todos os insights, heatmaps e feedbacks dos usuários em uma apresentação abrangente entregue à equipe de produto do cliente. A sessão ajudou a alinhar os próximos passos e forneceu um roadmap claro para melhorar as funcionalidades principais do app."
                : "I compiled all insights, heatmaps, and user feedback into a comprehensive presentation delivered to the client's product team. The session helped align next steps and provided a clear roadmap for improving the app's core features."}
            </p>
          </div>

        </article>
      </div>
    </main>
  );
}
