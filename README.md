# Alex Hobi — Portfolio

Personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Adding Images

Place your images inside the `/public` folder following the structure below. Once a file is found,
the placeholder is automatically replaced by the actual image.

```
public/
├── cases/
│   ├── ui-streaming/
│   │   ├── cover.jpg          ← Project card cover (Projects grid)
│   │   ├── web-homepage.jpg   ← Web Interface section
│   │   └── tablet-mobile.jpg  ← Tablet & Mobile section
│   ├── usability-testing/
│   │   ├── cover.jpg
│   │   └── heatmap-task1.jpg
│   ├── ux-research/
│   │   ├── cover.jpg
│   │   ├── immersion.jpg
│   │   ├── interviews.jpg
│   │   └── analysis.jpg
│   └── web-development/
│       ├── cover.jpg
│       ├── screenshot-home.jpg
│       ├── screenshot-blog.jpg
│       └── screenshot-post.jpg
```

**Recommended formats:** `.jpg`, `.png`, `.webp`
**Recommended size for covers:** 1600×900px (16:9)

---

## Editing Content

| What to edit | File |
|---|---|
| Name, nav links, WhatsApp number | `components/Navbar.tsx` |
| Hero title, subtitle, badge | `components/HeroSection.tsx` |
| About text, metrics | `components/AboutSection.tsx` |
| Skills cards | `components/SkillsSection.tsx` |
| Projects list | `components/ProjectsGrid.tsx` |
| Contact info, email, phone | `components/ContactSection.tsx` |
| Footer links | `components/Footer.tsx` |
| Case study content | `app/cases/[slug]/page.tsx` |

---

## Deploy to Vercel

### Option 1 — Via GitHub (recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**
3. Import your GitHub repository
4. Vercel will detect Next.js automatically — click **Deploy**

### Option 2 — Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel deploy
```

For production:

```bash
vercel --prod
```

---

## Build

To verify the build locally before deploying:

```bash
npm run build
npm start
```
