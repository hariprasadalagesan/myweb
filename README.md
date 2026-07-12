# HariWorks

HariWorks is a premium, high-performance, and responsive personal brand website for Hariprasad, designed to showcase engineering work, projects, technical skills, and software design philosophy.

Inspired by the design languages of Apple, Linear, and Vercel, this project emphasizes minimalism, accessibility (WCAG compliance), speed, and micro-interactions.

---

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first configurations)
- **Component Primitives**: shadcn/ui + Base UI
- **Animations**: Framer Motion
- **Theme Support**: next-themes (Light & Dark Mode)
- **Icons**: Lucide React
- **Package Manager**: npm

---

## ✨ Features (Planned & Implemented)

- [x] **Sticky Nav Bar**: Fluid glassmorphic header tracking scroll depth.
- [x] **Active Link Highlighter**: Viewport scroll observer dynamically sliding navigation focus using Framer Motion layout animations.
- [x] **Theme Switcher**: Smooth rotation/scaling icon transitions between Light and Dark themes.
- [x] **Design System Catalog**: Live interactive preview of typography, buttons, colors, glass controls, and custom border hover glows.
- [ ] **Interactive Projects Showcase**: Categorized card layout fetching details dynamically.
- [ ] **Engineering Mindset / Case Studies**: Structured markdown logs detailing architectures, trade-offs, and learnings.
- [ ] **Skills Matrix**: Interactive visualization of core engineering competencies.
- [ ] **Contact Panel**: Secure API-connected input form.

---

## 📂 Project Structure

```text
hariworks/
├── app/                  # Next.js App Router (pages, layouts, globals)
│   ├── favicon.ico
│   ├── globals.css       # Design tokens, theme variables, custom utilities
│   ├── layout.tsx        # Theme wrappers and root document
│   └── page.tsx          # Design system catalog and main landing page
├── components/           # UI Components
│   ├── layout/           # Global components (Navbar, Footer, Menu)
│   ├── ui/               # Core atomic building blocks (Cards, Buttons, Containers)
│   └── theme-provider.tsx# Theme provider component (next-themes)
├── content/              # Static databases (Projects JSON, Case Studies)
│   └── projects.json
├── hooks/                # Custom React Hooks (scroll and view observers)
│   ├── use-scroll.ts
│   └── use-active-section.ts
├── lib/                  # Shared helper configuration
│   └── utils.ts
├── types/                # Global TypeScript definitions
│   └── index.ts
├── utils/                # General utility helper files
│   └── metadata.ts
├── public/               # Public assets (images, logos, svg vectors)
├── package.json          # Dependency scripts
└── tsconfig.json         # TypeScript configuration
```

---

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org) (v18.0.0 or higher) installed.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/hariprasadalagesan/myweb.git
   cd myweb
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:

   ```bash
   npm run dev
   ```

4. Build the application for production:
   ```bash
   npm run build
   ```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
