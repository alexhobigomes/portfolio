"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import CaseTags from "@/components/CaseTags";
import { useLanguage } from "@/lib/i18n/LanguageContext";

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

export default function UXResearchContent() {
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
            {pt ? "Pesquisa UX" : "UX Research"}
          </span>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-[#f0f0f0] leading-tight mb-6">
            {pt
              ? "Análise Exploratória para Estratégia de Negócio"
              : "Exploratory Analysis for Business Strategy"}
          </h1>
          <p className="text-[#6c63ff] text-xl font-medium">
            {pt ? "Reduzindo Churn através de Pesquisa com Usuários" : "Reducing Churn Through User Research"}
          </p>
          <CaseTags tags={["Interviews", "Documentation", "Data Analytics"]} />
        </header>

        <div className="mb-14">
          <ImagePlaceholder
            src="cases/ux-research/cover.jpg"
            alt="UX Research for churn reduction"
            aspectRatio="16/9"
            objectPosition="center 65%"
          />
        </div>

        <article className="text-[#999] leading-[1.8] text-base">

          <p className="text-[#aaa] text-lg leading-relaxed mb-16">
            {pt
              ? "Uma empresa brasileira de mobilidade enfrentava uma alta taxa de churn, especialmente após o término de um período gratuito de 12 meses oferecido a 90% dos usuários. Assim que a cobrança era iniciada, muitos usuários tentavam cancelar ou congelar suas assinaturas. O desafio: entender por que os usuários estavam saindo e identificar oportunidades para melhorar a retenção."
              : "A Brazilian mobility company faced a high churn rate, especially after the end of a 12-month free trial offered to 90% of users. As soon as billing began, many users attempted to cancel or freeze their subscriptions. The challenge: understand why users were leaving and identify opportunities to improve retention."}
          </p>

          {/* RECRUITMENT */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-3">
              {pt
                ? "Recrutamento — Como os incentivos reverteram a participação"
                : "Recruitment — How incentives turned participation around"}
            </h2>
            <p className="mb-8 text-[#999]">
              {pt
                ? "Os testes iniciais sem incentivos se mostraram ineficazes. Após garantir vouchers de R$50 como incentivos em colaboração com a equipe de Atendimento ao Cliente, a participação melhorou significativamente."
                : "Initial tests without incentives proved ineffective. After securing R$50 vouchers as incentives in collaboration with the Customer Support team, attendance improved significantly."}
            </p>

            <div className="grid grid-cols-2 gap-5">
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#888] text-xs uppercase tracking-widest mb-5">
                  {pt ? "Sem incentivo" : "Without incentive"}
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">49</p>
                    <p className="text-[#666] text-sm mt-1">{pt ? "ligações realizadas" : "calls made"}</p>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">2</p>
                    <p className="text-[#666] text-sm mt-1">{pt ? "entrevistas agendadas" : "interviews scheduled"}</p>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">2</p>
                    <p className="text-[#666] text-sm mt-1">{pt ? "não compareceram" : "no-shows"}</p>
                  </div>
                </div>
              </div>
              <div style={{background:'#e5e5e5'}} className="border border-[#6c63ff]/40 rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs uppercase tracking-widest mb-5">
                  {pt ? "Com incentivo" : "With incentive"}
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">36</p>
                    <p className="text-[#666] text-sm mt-1">{pt ? "ligações realizadas" : "calls made"}</p>
                  </div>
                  <div>
                    <p className="text-[#6c63ff] text-4xl font-bold font-display leading-none">8</p>
                    <p className="text-[#666] text-sm mt-1">{pt ? "entrevistas agendadas" : "interviews scheduled"}</p>
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] text-4xl font-bold font-display leading-none">2</p>
                    <p className="text-[#666] text-sm mt-1">{pt ? "não compareceram" : "no-shows"}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PARTICIPANT PROFILE */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
              {pt ? "Perfil dos Participantes — Com quem conversamos" : "Participant Profile — Who we spoke with"}
            </h2>
            <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
              <p className="text-[#1a1a1a] font-medium text-base mb-5">
                {pt
                  ? "6 clientes que contataram o suporte para cancelar sua assinatura"
                  : "6 customers who contacted support to cancel their subscription"}
              </p>
              <div className="grid grid-cols-3 gap-6 pb-5 border-b border-[#ccc]">
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">{pt ? "Gênero" : "Gender"}</p>
                  <p className="text-[#333] text-sm">{pt ? "3 Masculino / 3 Feminino" : "3 Male / 3 Female"}</p>
                </div>
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">{pt ? "Região" : "Region"}</p>
                  <p className="text-[#333] text-sm">{pt ? "Sudeste do Brasil" : "Southeast Brazil"}</p>
                </div>
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">{pt ? "Idade" : "Age"}</p>
                  <p className="text-[#333] text-sm">{pt ? "32 a 48 anos" : "32 to 48 years old"}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 pt-5">
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">{pt ? "Plano" : "Plan"}</p>
                  <p className="text-[#555] text-sm">4 Bradesco · 1 Total Pré-pago · 1 Total Pós-pago</p>
                </div>
                <div>
                  <p className="text-[#888] text-xs uppercase tracking-widest mb-2">{pt ? "Tempo como cliente" : "Time as customer"}</p>
                  <p className="text-[#555] text-sm">{pt ? "14 a 24 meses" : "14 to 24 months"}</p>
                </div>
              </div>
            </div>
          </section>

          {/* REPORT */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-3">
              {pt
                ? "Relatório — Das entrevistas brutas aos aprendizados estruturados"
                : "Report — From raw interviews to structured learnings"}
            </h2>
            <p className="mb-5 text-[#999]">
              {pt ? "Antes de produzir este relatório, concluímos:" : "Before producing this report, we completed:"}
            </p>
            <BulletList
              items={pt
                ? [
                    "Consolidação de citações e declarações dos usuários",
                    "Identificação dos principais aprendizados",
                    "Mapa de empatia",
                    "Mapa de afinidades",
                  ]
                : [
                    "Consolidation of user quotes and statements",
                    "Identification of key learnings",
                    "Empathy mapping",
                    "Affinity mapping",
                  ]}
            />
          </section>

          {/* RESEARCH QUESTIONS */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-8">
              {pt
                ? "Perguntas de Pesquisa — As hipóteses que guiaram nossas entrevistas"
                : "Research Questions — The hypotheses guiding our interviews"}
            </h2>

            <div className="space-y-5">
              {/* Question 1 */}
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs font-medium uppercase tracking-widest mb-2">
                  {pt ? "Pergunta 1" : "Question 1"}
                </p>
                <h3 className="text-[#1a1a1a] font-display font-semibold text-lg mb-4 leading-snug">
                  {pt
                    ? "O que o usuário busca em um serviço de tag veicular?"
                    : "What does the user look for in a vehicle tag service?"}
                </h3>
                <BulletList
                  dark
                  items={pt
                    ? [
                        "Conveniência e praticidade — mas sem pagar tarifas ou mensalidades",
                        "Sem gastar ainda mais com pedágios",
                      ]
                    : [
                        "Convenience and practicality — but without paying fees or monthly charges",
                        "Without spending even more on tolls",
                      ]}
                />
                <p className="mt-5 text-sm rounded-lg px-4 py-3 border-l-2 border-[#6c63ff] leading-relaxed text-[#444]" style={{background:'#d4d4d4'}}>
                  {pt ? (
                    <>Entre os 6 entrevistados, <strong className="text-[#111]">4 eram contra</strong> o pagamento de tarifas e mensalidades além do que já gastam em pedágios.</>
                  ) : (
                    <>Among the 6 interviewees, <strong className="text-[#111]">4 were opposed</strong> to paying fees and monthly charges on top of what they already spend on tolls.</>
                  )}
                </p>
              </div>

              {/* Question 2 */}
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs font-medium uppercase tracking-widest mb-2">
                  {pt ? "Pergunta 2" : "Question 2"}
                </p>
                <h3 className="text-[#1a1a1a] font-display font-semibold text-lg mb-4 leading-snug">
                  {pt
                    ? "Existem outros modelos de preço ou planos que atrairiam os usuários?"
                    : "Are there other pricing models or plans that would appeal to users?"}
                </h3>
                <BulletList
                  dark
                  items={pt
                    ? [
                        "Pagamento por uso em vez de mensalidade fixa",
                        "Mensalidade que converte em descontos ou crédito de pedágio",
                      ]
                    : [
                        "Pay-per-use instead of a fixed monthly fee",
                        "Monthly fee that converts into toll discounts or balance",
                      ]}
                />
                <p className="mt-5 text-sm text-[#555]">
                  {pt
                    ? "O modelo de recarga manual também foi bem recebido."
                    : "The manual top-up model was also well received."}
                </p>
              </div>

              {/* Question 3 */}
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs font-medium uppercase tracking-widest mb-2">
                  {pt ? "Pergunta 3" : "Question 3"}
                </p>
                <h3 className="text-[#1a1a1a] font-display font-semibold text-lg mb-4 leading-snug">
                  {pt
                    ? "Por que um cliente preferiria um concorrente?"
                    : "Why would a customer prefer a competitor?"}
                </h3>
                <BulletList dark items={pt ? ["Custo menor", "Isenção de tarifa"] : ["Lower cost", "Fee exemption"]} />
                <p className="mt-5 text-sm rounded-lg px-4 py-3 border-l-2 border-[#6c63ff] leading-relaxed text-[#444]" style={{background:'#d4d4d4'}}>
                  {pt ? (
                    <>Entre os 6 entrevistados, <strong className="text-[#111]">3 eram ou foram clientes do Sem Parar</strong>: 2 tiveram experiências negativas relacionadas a cobrança · 1 prefere o Sem Parar por menos problemas na estrada.</>
                  ) : (
                    <>Among the 6 interviewees, <strong className="text-[#111]">3 were or had been customers of Sem Parar</strong>: 2 had negative experiences related to billing · 1 prefers Sem Parar due to fewer issues on the road.</>
                  )}
                </p>
              </div>

              {/* Question 4 */}
              <div style={{background:'#e5e5e5'}} className="border border-[#ccc] rounded-xl p-6">
                <p className="text-[#6c63ff] text-xs font-medium uppercase tracking-widest mb-2">
                  {pt ? "Pergunta 4" : "Question 4"}
                </p>
                <h3 className="text-[#1a1a1a] font-display font-semibold text-lg mb-4 leading-snug">
                  {pt ? "Por que os clientes cancelam sua tag?" : "Why do customers cancel their tag?"}
                </h3>
                <BulletList
                  dark
                  items={pt
                    ? ["Término do período gratuito", "Baixa percepção de uso"]
                    : ["End of the free trial period", "Low perceived usage"]}
                />
                <p className="mt-5 text-sm rounded-lg px-4 py-3 border-l-2 border-[#6c63ff] leading-relaxed text-[#444]" style={{background:'#d4d4d4'}}>
                  {pt ? (
                    <>Entre os 6 entrevistados, <strong className="text-[#111]">4 expressaram desconforto</strong> com o pagamento de mensalidade por um serviço de tag, especialmente quando consideram seu uso como baixo.</>
                  ) : (
                    <>Among the 6 interviewees, <strong className="text-[#111]">4 expressed discomfort</strong> with paying a monthly fee for a tag service, especially when they consider their usage to be low.</>
                  )}
                </p>
              </div>
            </div>
          </section>

          {/* INSIGHTS SUMMARY */}
          <section className="mb-16">
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-6">
              {pt
                ? "Síntese de Insights — Temas-chave e suas implicações estratégicas"
                : "Insights Summary — Key themes and their strategic implications"}
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[#ccc]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#ccc]" style={{background:'#e5e5e5'}}>
                    <th className="text-left px-5 py-4 text-[#6c63ff] font-medium uppercase tracking-widest text-xs w-1/3">
                      {pt ? "Tema" : "Theme"}
                    </th>
                    <th className="text-left px-5 py-4 text-[#6c63ff] font-medium uppercase tracking-widest text-xs">
                      Insight
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#ccc]">
                  {(pt
                    ? [
                        { tema: "Tarifas e mensalidades", insight: "O custo financeiro tem grande peso na escolha de um serviço de tag. Quando um concorrente oferece isenção de tarifa, a troca se torna muito fácil." },
                        { tema: "Novos planos", insight: "Clientes com baixo uso sentem que não há opções adequadas para seu perfil." },
                        { tema: "Concorrência", insight: "O custo financeiro é fator decisivo ao trocar de operadora." },
                        { tema: "Cancelamento", insight: "Mensalidades combinadas com baixa percepção de uso são o principal driver de cancelamentos." },
                        { tema: "Retenção", insight: "Clientes foram retidos quando oferecida a opção de pagar menos ou nada." },
                        { tema: "Meios de pagamento", insight: "A maioria dos usuários está satisfeita com os meios de pagamento disponíveis." },
                      ]
                    : [
                        { tema: "Monthly fees & charges", insight: "Financial cost plays a major role in choosing a tag service. When a competitor offers fee exemption, switching becomes very easy." },
                        { tema: "New plans", insight: "Customers with low usage feel there are no suitable options for their profile." },
                        { tema: "Competition", insight: "Financial cost is a decisive factor when switching between providers." },
                        { tema: "Cancellation", insight: "Monthly fees combined with low perceived usage is the primary driver of cancellations." },
                        { tema: "Retention", insight: "Customers were retained when offered the option to pay less or nothing." },
                        { tema: "Payment methods", insight: "Most users are satisfied with the current payment methods available." },
                      ]
                  ).map((row) => (
                    <tr key={row.tema} style={{background:'#dcdcdc'}} className="hover:brightness-95 transition-all">
                      <td className="px-5 py-4 text-[#1a1a1a] font-medium align-top">{row.tema}</td>
                      <td className="px-5 py-4 text-[#555] align-top leading-relaxed">{row.insight}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* NEXT STEPS */}
          <section>
            <h2 className="font-display font-bold text-2xl text-[#f0f0f0] mb-3">
              {pt
                ? "Próximos Passos — Dados que podem guiar decisões futuras"
                : "Next Steps — Data that could guide future decisions"}
            </h2>
            <p className="mb-5 text-[#999]">
              {pt ? "Dados adicionais que poderiam orientar decisões futuras:" : "Additional data that could guide future decisions:"}
            </p>
            <BulletList
              items={pt
                ? [
                    "Número de usuários que continuaram como clientes pagantes após o término do período gratuito.",
                    "Qual plano é mais utilizado entre os clientes pagantes.",
                    "Com que frequência utilizam o serviço.",
                    "O churn poderia ser previsto com base no comportamento e frequência de uso?",
                    "Os usuários retornam após congelar sua assinatura?",
                  ]
                : [
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
