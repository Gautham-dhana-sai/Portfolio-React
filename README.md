# Pandiri Goutham Dhana Sai Reddy — Engineering Portfolio

A modern, production-grade personal engineering portfolio website built for **Pandiri Goutham Dhana Sai Reddy**, Full Stack Developer (4 Years Experience).

Built following the core design philosophy: **"Minimal at first glance. Detailed on demand."**

---

## 🎨 Strict Design System (Black, White & Orange)

Strictly adheres to the defined color palette:
- **Rich Black**: `#0A0A0A` (Backgrounds, hero canvas, code environments)
- **Charcoal**: `#171717` (Cards, elevated panels, navigation docks)
- **Dark Grey**: `#303030` (Hairline borders, subtle separators)
- **Medium Grey**: `#737373` (Secondary typography, metadata, timestamps)
- **Light Grey**: `#E5E5E5` (Light borders, soft surfaces)
- **Off White**: `#F5F5F5` (High-contrast light section backgrounds)
- **Pure White**: `#FFFFFF` (Headings, primary high-contrast surfaces)
- **Signature Orange**: `#FF6B27` (CTAs, active tabs, verified metrics, hover states)
- **Soft Orange**: `#FF8A50` (Gradient accents, scroll progress)

**Color distribution ratio**: ~60% white/off-white, ~30% black/charcoal, ~10% orange accents.

---

## 🏗️ Architecture & Tech Stack

- **Framework**: React 19 + TypeScript (Strict Type Safety)
- **Build Tool**: Vite 8 with code-splitting and asset optimization
- **Routing**: React Router DOM 7 with lazy-loaded route chunks
- **Styling**: Tailwind CSS 3.4 with custom typography scales (`clamp()`)
- **Motion**: Framer Motion with reduced-motion accessibility support
- **Icons**: Lucide React + custom authentic vector SVGs
- **Fonts**: Space Grotesk (Headings), Inter (Body), JetBrains Mono (Technical telemetry)

---

## 📁 Project Structure

```
src/
├── assets/                  # Local media & fallback assets
├── components/
│   ├── layout/              # Navbar, Footer, PageLayout, Breadcrumb, ScrollProgress
│   ├── common/              # Button, SectionHeading, AnimatedSection, SocialLinks, TechnologyIcon, BrandLogo
│   ├── hero/                # HeroSection, ProfileImage
│   ├── about/               # AboutPreview
│   ├── skills/              # SkillsPreview
│   ├── experience/          # ExperiencePreview
│   ├── projects/            # ProjectPreview
│   ├── education/           # EducationPreview
│   ├── resume/              # ResumeSection
│   └── contact/             # ContactSection
├── pages/
│   ├── Home/                # Curated homepage overview (10-15s value proposition)
│   ├── About/               # Detailed professional narrative & full skills matrix
│   ├── Experience/          # Deep-dive case studies for Akrivia, Inncircles, Motivity
│   ├── Projects/            # Case studies for Open-Bot (RAG) & Find-It-Here (MERN)
│   ├── Education/           # Academic timeline with distinction marks & map links
│   └── Resume/              # PDF viewer & downloadable verified resume
├── data/                    # Single source of truth configuration
│   ├── portfolio.ts         # Profile details, bio, photo path, resume path, metrics
│   ├── experience.ts        # Organizations, verified telemetry, deep dives
│   ├── projects.ts          # Project blueprints, architecture layers, live links
│   ├── skills.ts            # Grouped skills inventory with category filters
│   ├── education.ts         # Academic history and honors
│   └── socials.ts           # Configurable social links and direct channels
└── index.css                # Base Tailwind layer, grid patterns, custom scrollbars
```

---

## ⚙️ Configuration & Content Maintenance

Content is completely decoupled from the UI. You can update your profile without modifying any components:

1. **Profile Photo**:
   - Put your image in `public/assets/profile/profile-photo.jpeg`.
   - Update path or fallback in `src/data/portfolio.ts` under `portfolioData.profilePhoto.path`.
2. **Resume PDF**:
   - Put your resume PDF in `public/assets/resume/Gautham-Resume.pdf`.
   - Update path in `src/data/portfolio.ts` under `portfolioData.resume.path`.
3. **Social Links**:
   - Edit, add, or reorder links in `src/data/socials.ts`.
4. **Experience & Projects**:
   - Add new achievements, metrics, or deep-dive sections in `src/data/experience.ts` and `src/data/projects.ts`.

---

## 🚀 Development & Production Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run Oxlint validation (0 errors, 0 warnings)
npm run lint

# Compile TypeScript and create production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Routes Overview

| Route | Description |
|---|---|
| `/` | Homepage (Curated minimal overview, 10–15s scan) |
| `/about` | Detailed professional background, problem-solving philosophy & all categorized skills |
| `/experience/akrivia` | Akrivia HCM deep dive (70k rec/min, 70% bulk speedup, Kafka sync) |
| `/experience/inncircles` | Inncircles Tech deep dive (Fintech, Surepass encryption, Arena, Control Center) |
| `/experience/motivity` | Motivity Labs deep dive (Edge facial recognition analytics, Limina serverless) |
| `/projects/open-bot` | Open-Bot RAG case study (Multi-portal, vector embeddings, pgvector) |
| `/projects/find-it-here`| Find-It-Here MERN case study (Geospatial search, local discovery) |
| `/education` | Academic timeline (Raghu Eng. College, Govt. Polytechnic, Priyanka's Vidyodaya) |
| `/resume` | Inline PDF viewer and direct download |
