# Premium AI & Full-Stack Developer Portfolio

**PEDDI REDDY LEELA ANIRUDH REDDY**  
*AI & Full-Stack Developer*  
Specializing in Artificial Intelligence, Generative AI, Cloud Computing, Cybersecurity, IoT and Modern Full-Stack Web Development.

---

## 🚀 Overview

A high-performance, responsive portfolio built using **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Lucide React**. Designed with a dark navy glassmorphism aesthetic inspired by modern developer portfolios, featuring:

- **Particle & Constellation Canvas Engine**: Interactive ambient particle network with smooth connection lines and gradient glow spheres.
- **Dynamic Typewriter & Hero Section**: Rotating roles (*AI/ML Developer*, *Generative AI Enthusiast*, *Cloud Computing Enthusiast*, *Full-Stack Developer*, *Cybersecurity Enthusiast*), key metrics counter, and customizable holographic profile image slot.
- **Narrative About Me**: Highlighting 4 core engineering pillars: AI & Machine Learning, Cloud Technologies, Cybersecurity, and Full-Stack Development.
- **Categorized Skills Matrix**: Fully interactive, filterable skill cards across Programming, AI/ML, Cloud Computing, Cybersecurity & IoT, Databases, Tools & Frameworks, and Architectural Concepts (no fabricated percentages).
- **Specialized AI & Cloud Architecture Spotlight**: Interactive tabs showcasing Generative AI & RAG pipelines, Multi-Cloud infrastructure (Azure, GCP, OCI), and Threat Detection telemetry.
- **Featured Projects**: AI-Powered Cloud Security & Threat Detection, Smart IoT-Based Environmental Monitoring, and Cloud-Based Full-Stack Application with problem-solution breakdowns and architecture modals (marked as *Concept / In Progress*).
- **Internship Milestones**: Professional timeline cards for Cloud Computing and Cyber Security internships at Corizo (clearly designated as *Internship Training*).
- **Credential Verification Gallery**: 12 official certifications across Oracle, Google Cloud, NPTEL, Infosys Springboard, Corizo, and CodeTantra with interactive PDF viewer modals.
- **Academic Foundations & Problem Solving**: B.Tech AI & ML at R.M.D. Engineering College (2024–2028), HSC at Sanskriti jr college, and **1300+ Solved Problems** on SkillRack.
- **Contact & Communication**: Functional contact form with prefilled email client dispatch, click-to-copy quick badges with visual feedback for phone/email, and social profile links.
- **Interactive Resume Modal & PDF Generator**: Built-in formatted curriculum vitae with one-click print-to-PDF and markdown export.

---

## 🛠️ Tech Stack

- **Framework**: React 18 & Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS & Glassmorphism Utilities
- **Icons**: Lucide React
- **Typography**: Inter & JetBrains Mono

---

## 🏃 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
anirudh-portfolio/
├── public/
│   ├── avatar.svg             # Default holographic profile graphic
│   ├── resume.pdf             # PDF download target
│   └── certificates/          # Official certificate PDFs
│       ├── oracle-oci-ai-foundations-2025.pdf
│       ├── google-cloud-computing-foundations.pdf
│       ├── nptel-introduction-to-iot-elite.pdf
│       └── ... (12 verified certificate files)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with mobile drawer
│   │   ├── ParticleBackground.tsx # HTML5 canvas constellation engine
│   │   ├── Hero.tsx           # Typewriter, stats ticker & CTAs
│   │   ├── About.tsx          # Bio & 4 pillar cards
│   │   ├── Skills.tsx         # Filterable categorized skill matrix
│   │   ├── AIAndCloud.tsx     # RAG, Multi-Cloud & Security architecture
│   │   ├── Projects.tsx       # 3 featured projects
│   │   ├── ProjectModal.tsx   # Project architecture detail modal
│   │   ├── Experience.tsx     # Corizo internship training timeline
│   │   ├── Certifications.tsx # Certificate cards gallery
│   │   ├── CertificateModal.tsx # Certificate viewer & PDF opener
│   │   ├── Education.tsx      # Academic degrees & SkillRack 1300+ highlight
│   │   ├── Contact.tsx        # Contact form & click-to-copy badges
│   │   ├── ResumeModal.tsx    # Digital CV & PDF print exporter
│   │   └── Footer.tsx         # Footer with quick links & back-to-top
│   ├── data/
│   │   └── portfolioData.ts   # Centralized data model for all content
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── App.tsx                # Main app layout
│   ├── main.tsx               # React root entry
│   └── index.css              # Tailwind base & custom glowing utilities
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

---

## 🎨 How to Customize

1. **Update Profile Photo**: Replace `public/avatar.svg` or drop an image as `public/avatar.png` and update the `src` attribute in `src/components/Hero.tsx`.
2. **Add Your Official Certificate PDFs**: Place your official certificate PDFs in `public/certificates/` using the exact names listed in `public/certificates/README.md`.
3. **Attach Real Project GitHub / Live URLs**: Edit `src/data/portfolioData.ts` under `PROJECTS_DATA` to add your repositories and live deployment URLs whenever you publish them.
4. **Update Social Links**: Edit `src/data/portfolioData.ts` under `PERSONAL_INFO.github` and `PERSONAL_INFO.linkedin`.
