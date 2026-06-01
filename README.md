# Rayane Terki — Portfolio

My personal developer portfolio. A single page site that shows who I am, my skills, my projects and a way to get in touch.

**Live:** https://rayane-portfolio-eight.vercel.app

![Tech](https://img.shields.io/badge/React-19-22d3b8?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)

## Features

- Light and dark mode with a toggle (saved in `localStorage`, no flash on reload)
- Animated hero with a typewriter role and a syntax highlighted code card
- Floating glass navbar with a matching mobile menu
- Projects section with status badges, a details modal, and a Coming Soon page for projects without a public repo
- Skills, Process and About sections
- Working contact form (Web3Forms) with success and error states
- Fully responsive (tested on mobile, tablet and desktop)
- Downloadable CV (PDF) generated from an HTML template
- Respects `prefers-reduced-motion` and includes Open Graph / Twitter meta tags

## Tech stack

- **React 19** + **Vite 8**
- **Tailwind CSS 4**
- **lucide-react** and **react-icons** for icons
- **Web3Forms** for the contact form
- Deployed on **Vercel**

## Getting started

```bash
# 1. Clone
git clone https://github.com/trrayane/Rayane-Portfolio.git
cd Rayane-Portfolio

# 2. Install
npm install

# 3. Set up the contact form (optional for local dev)
cp .env.example .env
# then paste a free key from https://web3forms.com into VITE_WEB3FORMS_KEY

# 4. Run
npm run dev
```

Open http://localhost:5173 in your browser.

### Scripts

| Command           | What it does                          |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload  |
| `npm run build`   | Build for production into `dist/`     |
| `npm run preview` | Preview the production build locally  |
| `npm run lint`    | Run ESLint                            |

## Environment variables

| Variable             | Required | Description                                                        |
| -------------------- | -------- | ----------------------------------------------------------------- |
| `VITE_WEB3FORMS_KEY` | for the contact form | Free access key from [web3forms.com](https://web3forms.com) |

Without this key the site still runs; only the contact form returns an error on submit.

## Project structure

```
public/                 Static assets (favicon, hero image, CV PDF)
scripts/cv.html         HTML template used to generate the CV PDF
src/
  components/           Reusable UI (Button, ThemeToggle, AnimatedBorderButton)
  layout/               Navbar, Footer
  sections/             Hero, About, Skills, Projects, Process, Contact
  index.css             Tailwind theme tokens + light mode + animations
  App.jsx               Page composition + scroll reveal + cursor glow
```

## Deployment

The site is hosted on Vercel. Every push to `main` triggers an automatic production deploy. Configuration lives in `vercel.json` (Vite framework, SPA rewrites).

## Contact

- Email: rayaneterki55@gmail.com
- GitHub: [@trrayane](https://github.com/trrayane)
