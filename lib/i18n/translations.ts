import type { Lang } from "./LanguageContext";

const t = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
      cta: "Get in touch",
    },
    hero: {
      badge: "Lead Product Designer at Renault LATAM",
      heading: "Hi, I'm Alex!",
      subtitle:
        "Design Engineer with 14+ years in tech — from data analytics to digital products that blend exceptional experiences with real business impacts",
      scroll: "Scroll",
    },
    about: {
      tag: "About",
      heading: "About Me",
      p1: "Designer with 14+ years in technology, including 6+ in UX/UI and 8 in Business Intelligence. Bachelor's in Information Systems and an MBA in UX Research, DesignOps, and Leadership.",
      p2: "Currently at Renault Brasil, I lead strategic discovery and delivery for digital products across all LATAM projects, working closely with Product, Engineering, and Business teams. Previous experience includes Veloe (main app), Fiserv (digital products, payment terminals, and internal financial systems), and SBT (SBT+ streaming app, platform, and internal systems).",
      p3: "Core strengths: user research, in-depth interviews, journey mapping, affinity mapping, data analysis, prototyping, ideation, and workshops — with strong DesignOps leadership and hands-on use of AI throughout the design process (Claude, Claude Code, ChatGPT, Antigravity, Gemini).",
      metrics: [
        { value: "14+", label: "Years of experience in technology" },
        { value: "6+", label: "Years in UX / UI & Product Strategy" },
        { value: "8", label: "Years working with Business Intelligence" },
      ],
    },
    skills: {
      tag: "Expertise",
      heading: "What I Do",
      cards: [
        {
          title: "Product Design",
          description:
            "Strategic design approach in digital product development and DesignOps initiatives. Technical leadership with LATAM teams.",
        },
        {
          title: "UX Research",
          description:
            "Leading user research, interviews, process and journey mapping, data analysis, and pain point prioritization across multiple teams.",
        },
        {
          title: "UI Design",
          description:
            "Prototypes and visual interface deliveries. Strong usability testing skills. Proficient in the use and maintenance of Design Systems.",
        },
        {
          title: "Web Development",
          description:
            "Development of personal, commercial, and corporate websites. Proficient in industry tools and technologies.",
        },
      ],
      aiCard: {
        title: "AI Design\nEngineer",
        description:
          "Leveraging AI to accelerate every stage of digital product work — from research synthesis and ideation to documentation and delivery. Deep integration of AI tools into daily workflows for faster, smarter, and more impactful design decisions.",
      },
    },
    projects: {
      tag: "Work",
      heading: "Projects",
      items: [
        { tag: "Design Engineering", title: "AI-Driven Design Process" },
        { tag: "Usability Testing", title: "Validating Hypothesis for Mobility App" },
        { tag: "UX Research", title: "Exploratory Analysis for Business Strategy" },
        { tag: "UI Design", title: "Building Interfaces for Streaming Product" },
      ],
    },
    contact: {
      tag: "Contact",
      heading: "Let's work together!",
      subheading: "Have a project in mind? I'd love to hear about it.",
      cta: "Send a message",
      resumeLabel: "Resume",
      resumeValue: "View CV",
    },
    footer: {
      copyright: "© 2026 Alex Hobi. All rights reserved.",
    },
    cases: {
      backToProjects: "Back to Projects",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      projects: "Projetos",
      contact: "Contato",
      cta: "Fale comigo",
    },
    hero: {
      badge: "Lead Product Designer na Renault LATAM",
      heading: "Olá, eu sou Alex!",
      subtitle:
        "Design Engineer com +14 anos em tecnologia — de analytics a produtos digitais que aliam experiências excepcionais a resultados reais de negócio",
      scroll: "Rolar",
    },
    about: {
      tag: "Sobre",
      heading: "Sobre Mim",
      p1: "Designer com +14 anos em tecnologia, incluindo 6+ em UX/UI e 8 em Business Intelligence. Graduado em Sistemas de Informação com MBA em UX Research, DesignOps e Liderança.",
      p2: "Atualmente na Renault Brasil, lidero a descoberta estratégica e a entrega de produtos digitais em todos os projetos da LATAM, trabalhando de perto com as equipes de Produto, Engenharia e Negócio. Experiências anteriores incluem Veloe (app principal), Fiserv (produtos digitais, terminais de pagamento e sistemas financeiros internos) e SBT (app de streaming SBT+, plataforma e sistemas internos).",
      p3: "Principais competências: pesquisa com usuários, entrevistas em profundidade, jornada do usuário, mapa de afinidades, análise de dados, prototipação, ideação e workshops — com forte liderança em DesignOps e uso intensivo de IA ao longo do processo de design (Claude, Claude Code, ChatGPT, Antigravity, Gemini).",
      metrics: [
        { value: "14+", label: "Anos de experiência em tecnologia" },
        { value: "6+", label: "Anos em UX / UI e Estratégia de Produto" },
        { value: "8", label: "Anos trabalhando com Business Intelligence" },
      ],
    },
    skills: {
      tag: "Especialidade",
      heading: "O que faço",
      cards: [
        {
          title: "Product Design",
          description:
            "Abordagem estratégica de design no desenvolvimento de produtos digitais e iniciativas de DesignOps. Liderança técnica com times da LATAM.",
        },
        {
          title: "UX Research",
          description:
            "Liderança em pesquisa com usuários, entrevistas, mapeamento de processos e jornadas, análise de dados e priorização de pontos de dor em múltiplas equipes.",
        },
        {
          title: "UI Design",
          description:
            "Entregas de protótipos e interfaces visuais. Forte habilidade em testes de usabilidade. Proficiente no uso e manutenção de Design Systems.",
        },
        {
          title: "Desenvolvimento Web",
          description:
            "Desenvolvimento de sites pessoais, comerciais e corporativos. Proficiente em ferramentas e tecnologias do mercado.",
        },
      ],
      aiCard: {
        title: "AI Design\nEngineer",
        description:
          "Uso de IA para acelerar todas as etapas do trabalho com produtos digitais — da síntese de pesquisa e ideação à documentação e entrega. Integração profunda de ferramentas de IA nos fluxos de trabalho para decisões de design mais rápidas, inteligentes e impactantes.",
      },
    },
    projects: {
      tag: "Trabalhos",
      heading: "Projetos",
      items: [
        { tag: "Design Engineering", title: "Processo de Design com IA" },
        { tag: "Teste de Usabilidade", title: "Validando Hipóteses para App de Mobilidade" },
        { tag: "Pesquisa UX", title: "Análise Exploratória para Estratégia de Negócio" },
        { tag: "Design de UI", title: "Criando Interfaces para Produto de Streaming" },
      ],
    },
    contact: {
      tag: "Contato",
      heading: "Vamos trabalhar juntos!",
      subheading: "Tem um projeto em mente? Adoraria ouvir sobre ele.",
      cta: "Enviar mensagem",
      resumeLabel: "Currículo",
      resumeValue: "Ver CV",
    },
    footer: {
      copyright: "© 2026 Alex Hobi. Todos os direitos reservados.",
    },
    cases: {
      backToProjects: "Voltar para Projetos",
    },
  },
};

export function useT(lang: Lang) {
  return t[lang];
}

export default t;
