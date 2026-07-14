export type Platform =
  | "web"
  | "desktop"
  | "android"
  | "mobile"
  | "cli"
  | "wearos";

export type Project = {
  id: number;
  title: string;
  platform: Platform;
  href: string;
  createdAt: string;
  description: string;
  features: string[];
  badge: string[];
  hidden?: boolean; // when true, omitted from the portfolio UI (data kept for later)
};

const projects: Project[] = [
  {
    id: 1,
    title: "Brandy",
    platform: "desktop",
    href: "#", // in development
    createdAt: "2026",
    description:
      "Offline-first desktop marketing studio that turns product screenshots into every asset a product needs — device mockups, App Store / Play Store / Microsoft Store listings, social graphics, ad formats, and full campaigns. Built with Tauri 2, React, and TypeScript.",
    features: [
      "Device mockups — iPhone, Pixel, foldable, iPad, MacBook, desktop, browser, with 3D compositions",
      "14 store-ready presets across App Store, Play Store, Microsoft Store, social, web, and email",
      "Multi-page projects with magic resize — one design recomposed for every format",
      "Campaign generator — one message into coordinated assets for every channel",
      "Real exports: PNG, JPG, WebP, SVG, PDF, PPTX at exact store dimensions, fully offline",
    ],
    badge: ["Tauri 2", "React", "TypeScript", "Konva", "Zustand"],
  },
  {
    id: 2,
    title: "Correctly",
    platform: "web",
    href: "#", // in development
    createdAt: "2026",
    description:
      "BCS exam-preparation system built as a monorepo — a Django REST backend, a Next.js web app, and a mobile client — covering question banks, practice tests, and progress tracking for competitive-exam candidates.",
    features: [
      "Monorepo with shared backend API, web frontend, and mobile app",
      "JWT-authenticated Django REST API on Django 6",
      "Next.js 16 + React 19 web frontend with Tailwind CSS",
      "Practice tests, question banks, and progress tracking",
      "Type-safe, form-driven UI with react-hook-form",
    ],
    badge: ["Django", "DRF", "Next.js", "React", "PostgreSQL", "TypeScript"],
  },
  {
    id: 3,
    title: "Aurails",
    platform: "android",
    href: "#", // in development
    createdAt: "2025 -- Present",
    description:
      "Modern, battery-optimized Android audio player for local music, playlists, internet radio, custom streams, and audiobooks. Built with Jetpack Compose and Media3 (ExoPlayer).",
    features: [
      "Local music library, playlists, and audiobook playback",
      "Internet radio and custom stream support",
      "Battery-optimized background playback via Media3 / ExoPlayer",
      "Jetpack Compose UI with Hilt dependency injection",
      "Offline-first library management",
    ],
    badge: ["Kotlin", "Compose", "Media3", "Hilt"],
  },
  {
    id: 4,
    title: "Verso",
    platform: "web",
    href: "#", // v0.1.0, phase 1 MVP
    createdAt: "2025 -- Present",
    description:
      "Headless, extensible WYSIWYG rich-text editor — a ProseMirror core with a React binding and 20 extensions, published as a monorepo of composable packages.",
    features: [
      "Headless ProseMirror core with a thin React binding",
      "20 extensions: marks, blocks, lists, tables, images, links, history",
      "Markdown input shortcuts and HTML/JSON import-export round-trip",
      "BubbleMenu and default toolbar via Floating UI",
      "Turborepo + pnpm monorepo published as scoped packages",
    ],
    badge: ["TypeScript", "ProseMirror", "React", "Turborepo", "pnpm"],
  },
  {
    id: 5,
    title: "Storyteller",
    platform: "cli",
    href: "#", // internal tool
    createdAt: "2025",
    description:
      "RAG-based CLI that ingests your own PDFs and text, then generates Bangla Facebook-style posts on any topic with proper citations — Bangla-first normalization, OCR fallback, and a customizable writing-style system.",
    features: [
      "Retrieval-augmented generation grounded in your own books, never fabricated",
      "Bangla-first Unicode normalization with ZWJ, quote, and danda cleanup",
      "Tesseract Bangla OCR fallback for image-based PDF pages",
      "Style system for tone and length via few-shot Markdown examples",
      "Any OpenRouter model via bge-m3 embeddings and ChromaDB vector store",
    ],
    badge: ["Python", "RAG", "ChromaDB", "PyTorch", "OpenRouter", "OCR"],
  },
  {
    id: 6,
    title: "Axon",
    platform: "desktop",
    href: "#", // pre-alpha, not yet released
    createdAt: "2025 -- Present",
    description:
      "Native, offline-first, multi-protocol API client built in Rust — a Postman/Insomnia-class desktop app supporting REST, GraphQL, WebSocket, gRPC, SOAP, and SSE with scripting, mocks, and a plugin system.",
    features: [
      "Multi-protocol requests: REST, GraphQL, WebSocket, gRPC, SOAP, SSE",
      "Local-first storage with git-friendly YAML serialization over SQLite",
      "Scripting, tests, and a headless CLI runner for CI",
      "Collections, auth, and import from existing API clients",
      "Plugin system and embedded Monaco editor",
    ],
    badge: ["Rust", "Tauri 2", "SolidJS", "TypeScript", "gRPC", "SQLite"],
  },
  {
    id: 7,
    title: "EduGate",
    platform: "web",
    href: "#", // in development
    createdAt: "2025 -- Present",
    description:
      "Study-abroad platform built as a modular monolith — 30+ modules covering the full student journey, web-first with native mobile to follow, designed to peel hot modules into services as it scales.",
    features: [
      "Modular monolith with strict, microservice-ready boundaries",
      "30+ CRUD modules sharing types across backend and web",
      "Realtime messaging with typing and read receipts via Socket.IO",
      "SSR public SEO pages plus a CSR application shell",
      "Event-driven cross-module communication, no cross-module DB reads",
    ],
    badge: ["NestJS", "Next.js", "React", "PostgreSQL", "Prisma", "TypeScript"],
  },
  {
    id: 8,
    title: "Salify",
    platform: "web",
    href: "#",
    createdAt: "2025",
    description:
      "Multi-branch Sales ERP for an electrical-products business — single tenant, multi-branch, with a Django REST backend and a React frontend, deployed via Docker on a VPS.",
    features: [
      "Single-tenant, multi-branch sales and inventory management",
      "JWT-authenticated Django REST API with OpenAPI docs",
      "React + Vite frontend with shadcn/ui",
      "Dockerized stack behind Nginx with Redis caching",
      "Full MVP architecture deployed on VPS",
    ],
    badge: ["Django", "DRF", "React", "PostgreSQL", "Docker", "TypeScript"],
  },
  {
    id: 9,
    title: "Goldware",
    platform: "desktop",
    href: "#",
    createdAt: "2025",
    description:
      "Fully offline desktop app for gold and jewelry business management — no server, no internet required, with all data in a single local SQLite file. Built with Tauri 2 and React 19.",
    features: [
      "Orders, manufacturing workflow, invoicing, and payments with old-gold exchange",
      "Per-purity gold stock tracking and conversions",
      "Daily ledger, maker balance, and sales reports with branded PDF export",
      "Native A5 invoice and order-slip printing",
      "Local single-admin login with backup/restore and Google Drive sync",
    ],
    badge: ["Tauri 2", "React", "TypeScript", "SQLite", "Rust"],
  },
  {
    id: 10,
    title: "Goalface",
    platform: "wearos",
    href: "#",
    hidden: true, // temporarily hidden from portfolio; set false to show again
    createdAt: "2025",
    description:
      "Football watch-face product for Wear OS with live match data from API-Football, pairing declarative watch faces and Tiles with a Go backend that polls live matches.",
    features: [
      "Declarative Watch Face Format (WFF) dials",
      "Wear OS app with Tiles and complication data sources",
      "Go backend with live-match poller and REST API",
      "Redis-backed caching and Firebase push notifications",
      "Native Kotlin phone companion app",
    ],
    badge: ["Kotlin", "Compose", "Wear OS", "Go", "Firebase"],
  },
  {
    id: 11,
    title: "Systa",
    platform: "android",
    href: "#",
    createdAt: "2025",
    description:
      "Offline-first Android app that teaches System Design through interactive simulations, animated diagrams, case studies, and quizzes — making distributed-system behaviour visible, not just readable.",
    features: [
      "Shared deterministic simulation engine with pluggable models",
      "Animated diagrams reused across lessons and simulators",
      "Versioned JSON + Markdown content seeded into Room",
      "Flashcards with spaced repetition and progress tracking",
      "Multi-theme, multilingual, calm low-glare reading UI",
    ],
    badge: ["Kotlin", "Compose", "Room"],
  },
  {
    id: 12,
    title: "RetailFlow",
    platform: "web",
    href: "https://retailflow.faithdevs.com/",
    createdAt: "Mar. 2025 -- Oct. 2025",
    description:
      "A web-based shop management system enabling retailers to manage products, pricing, invoices, customers, and inventory through a clean and intuitive interface.",
    features: [
      "Manage products, pricing, invoices, and customer registrations",
      "Dynamic invoice generation with PDF export",
      "Real-time stock tracking within a single outlet",
      "Comprehensive reporting for invoices, customers, and inventory",
      "User-friendly interface for small to medium-sized retailers",
    ],
    badge: ["React.js", "Django REST Framework", "TypeScript", "MySQL"],
  },
  {
    id: 13,
    title: "Mosque Finder",
    platform: "mobile",
    href: "https://play.google.com/store/apps/details?id=com.saimum.mosque-finder",
    createdAt: "Apr 2024",
    description:
      "Islamic utility mobile app to locate nearby mosques, view prayer times, determine Qibla direction, and access Hijri calendar, Quran, Hadith, and Zakat calculator.",
    features: [
      "Advanced geolocation and nearest mosque detection",
      "Reverse geocoding for accurate location",
      "Integration with multiple APIs for real-time religious data",
      "Seamless and responsive interface",
    ],
    badge: ["Koa.js", "React Native", "TypeScript", "MongoDB", "Geolocation"],
  },
  {
    id: 14,
    title: "BRTA Guide",
    platform: "android",
    href: "https://play.google.com/store/apps/details?id=com.saimum.brtaguide",
    createdAt: "Dec 2024 -- Present",
    description:
      "Native Android app for Bangladesh driving-license preparation — driving and motor-vehicle guides, MCQ and written question banks, traffic signs, a driving simulation, offline BRTA forms, and the official result check. A ground-up Kotlin/Compose rewrite of the original React Native app.",
    features: [
      "Driving-license and motor-vehicle guides with bundled offline PDF forms",
      "MCQ and written practice question banks with answer reveal",
      "Traffic-sign browser and interactive driving-scenario simulation",
      "Official BRTA result check via in-app WebView",
      "Offline-first, MVVM + Clean Architecture with Hilt and Room",
    ],
    badge: ["Kotlin", "Compose", "Hilt", "Room"],
  },
  {
    id: 15,
    title: "Result and Registration System",
    platform: "web",
    href: "#", // source confidential
    createdAt: "Nov 2018",
    description:
      "Automated university course registration and grading system, enabling students to register for courses, view marks, download transcripts, and track academic progress.",
    features: [
      "Automated course registration with prerequisites and credit limits",
      "Grade and transcript download for students",
      "Teacher-facing evaluation management",
      "Streamlined academic workflow",
    ],
    badge: ["PHP", "Python", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 16,
    title: "Notice Board",
    platform: "android",
    href: "https://youtu.be/ic1U8nmzKFs?si=K4ZG9CqXYp4GXgMa",
    createdAt: "Nov 2017",
    description:
      "An Android application including authentication, role-based authorization, notice creation, approval, distribution, and subscription management for university users.",
    features: [
      "Authentication and role-based authorization",
      "Notice creation, approval, and distribution workflow",
      "Subscription to notices for targeted notifications",
      "Hands-on learning of Android app design, database, and REST API integration",
    ],
    badge: ["Android", "Java", "PHP", "MySQL"],
  },
];

export default projects;
