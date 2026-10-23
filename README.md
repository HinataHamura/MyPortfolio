# Atkia Farzana Esha: Portfolio

A responsive personal portfolio presenting my research (Bangla NLP, speech, applied ML), projects, experience and achievements, built with Next.js, React, TypeScript and Tailwind CSS.

🔗 **Live Demo:** [my-portfolio-ten-inky-yopqds0hjd.vercel.app](https://my-portfolio-ten-inky-yopqds0hjd.vercel.app)

[![Portfolio screenshot](https://image.thum.io/get/width/1200/https://my-portfolio-ten-inky-yopqds0hjd.vercel.app)](https://my-portfolio-ten-inky-yopqds0hjd.vercel.app)

## Core Features

- Animated hero, about, experience, achievements and contact sections
- Featured projects with live links, GitHub links and tech pills
- Dedicated pages for projects, research publications and resume
- Dark and light theme with `next-themes`
- Smooth motion with Framer Motion and GSAP, plus 3D elements with Three.js
- SEO ready: metadata, `sitemap.xml` and `robots.txt`
- Fully responsive from phone to desktop

## Technologies Used

| Category | Tools |
|---|---|
| Framework | Next.js 16 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS, Radix UI, class-variance-authority |
| Animation | Framer Motion, GSAP |
| Icons | Lucide React |
| Hosting | Vercel |

## Dependencies

`next`, `react`, `react-dom`, `framer-motion`, `gsap`, `next-themes`, `lucide-react`, `@radix-ui/react-separator`, `@radix-ui/react-slot`, `@radix-ui/react-tooltip`, `class-variance-authority`, `clsx`, `tailwind-merge`, `@types/three`.
Full list with versions is in [package.json](./package.json).

## Run Locally

**Prerequisites:** [Node.js](https://nodejs.org/) 18.18+ and Git.

1. Clone the repository
   ```bash
   git clone https://github.com/HinataHamura/MyPortfolio.git
   ```
2. Go to the project folder
   ```bash
   cd MyPortfolio
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build and lint

```bash
npm run lint
npm run build
npm start
```

## Project Structure

```
app/          Routes (home, projects, research, resume, sitemap, robots)
components/   Sections, layout, motion, project cards, UI primitives
lib/data/     Profile, projects and publications content
public/       Images and static assets
```

## Links

- Live site: https://my-portfolio-ten-inky-yopqds0hjd.vercel.app
- LinkedIn: https://linkedin.com/in/atkia-farzana-esha-069389229
- IEEE publication: https://ieeexplore.ieee.org/document/11429342

## Author

**Atkia Farzana Esha**, [GitHub](https://github.com/HinataHamura) · eshafarzana666@gmail.com
