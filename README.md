# Iventions — Interactive Web Experience

A high-performance, interactive frontend recreation and digital experience inspired by **Iventions Event Architects** ([iventions.com](https://iventions.com)). Built with **Next.js 15**, **React 19**, **GSAP**, **Lenis**, and **Tailwind CSS**, featuring advanced scroll-driven animations, custom SVG clip paths, and physics-based interactions.

---

## ✨ Features

- **Hero Experience**: Interactive 3D perspective tilt reacting to mouse position, synchronized scrub scroll-zoom on background video, and animated typography reveals.
- **Diagonal Clip-Path Transitions**: Custom SVG polygon clipping and animated V-shape overlays across slide transitions.
- **Sticky SVG Masked Narrative**: Viewport-anchored SVG text masking (`moving-about`) revealing underlying visuals as the user scrolls.
- **3D Card Deck Categories**: Multi-layered card deck with simultaneous rotation, scale-down, and image depth scaling powered by GSAP ScrollTrigger.
- **Case Study Slider**: Animated carousel featuring split-text line reveals, dynamic metrics, and smooth polygon transitions.
- **Interactive Dual Contact Panel**: Dual-state split interface smoothly transitioning between "Get a Quote" and "General Contact" via GSAP clip-path animations.
- **Dynamic Footer with Cursor Light Mask**: Mouse-tracking radial/linear gradient mask over full-width SVG branding with integrated office information.
- **Smooth Inertia Scrolling**: Integrated [Lenis](https://github.com/darkroomengineering/lenis) smooth scroll provider for seamless fluid scrolling across all devices.
- **Single-Source Responsive Layout**: Clean, unified responsive architecture using Tailwind CSS utilities without duplicate mobile components.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 15 (Turbopack)** | React framework for SSR, routing, and asset optimization |
| **React 19** | Component-driven UI architecture |
| **Tailwind CSS v4** | Utility-first styling and responsive layouts |
| **GSAP (GreenSock)** | Timeline orchestration, `ScrollTrigger`, and `SplitText` typography animations |
| **Lenis** | Smooth momentum-based inertia scrolling |
| **Local Fonts** | Custom typography integration (`--font-body`, `--font-display`, `--font-third`) |

---

## 📁 Project Structure

```text
iventions/
├── public/
│   └── assets/
│       ├── icons/          # SVG icons & arrows
│       ├── img/            # Case study & background imagery
│       ├── svg/            # Hero branding & decorative SVGs
│       └── video/          # Showcase background videos
├── src/
│   ├── app/
│   │   ├── contact/        # Standalone contact route
│   │   ├── fonts/          # Custom web fonts (font1, font2, font3)
│   │   ├── globals.css     # Design tokens, keyframes, clip-paths
│   │   ├── layout.js       # Root layout with fonts & Lenis scroll provider
│   │   └── page.js         # Main single-page application entry
│   └── components/
│       ├── button/         # Interactive animated buttons & icon buttons
│       ├── contact/        # Interactive split-screen contact form
│       ├── footer/         # Interactive SVG mask footer
│       ├── header/         # Global navigation bar & overlay menus
│       ├── home/           # Page sections (Hero, About, Categories, Stats, CaseStudy2, QuoteContact)
│       ├── Lenis/          # Smooth scroll provider wrapper
│       ├── page-transition/# Page entrance & exit animations
│       └── text-animation/ # Reusable SplitText & reveal effects
├── package.json
└── next.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18.18+ or v20+ recommended).

### Installation

1. Clone or open the repository:
   ```bash
   cd iventions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Scripts

- `npm run dev` — Starts the Next.js development server with Turbopack.
- `npm run build` — Compiles and creates an optimized production bundle.
- `npm run start` — Starts the production server.
- `npm run lint` — Runs ESLint checks across the codebase.

---

## 📄 License

This project is created for demonstration and creative frontend development purposes. Design inspiration belongs to the original creators and **Iventions Event Architects**.
