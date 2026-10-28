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
    title: "AlgorAI",
    platform: "mobile",
    href: "https://algorai.faithdevs.com",
    createdAt: "Jul 2026 -- Present",
    description:
      "Offline-first Android and iOS app that teaches data structures, algorithms and AI/ML through 504 topics, each with its own interactive lab, plus timed interview quizzes, coding problems and spaced-repetition flashcards. Shipped on Google Play and the App Store.",
    features: [
      "30+ deterministic simulation engines — graph search, DP, sorting, neural nets, attention, RL — behind one frame-based playback system",
      "54 timed interview quizzes, 102 coding problems and 57 pattern guides",
      "SM-2 spaced repetition over 2,414 flashcards with a weak-spot drill",
      "Kotlin-to-JSON content pipeline that ships all 504 topics to both the Android app and its SwiftUI port from one source",
      "Freemium: lifetime IAP, monthly subscription, rewarded-ad unlocks and capped interstitials",
    ],
    badge: ["Kotlin", "Compose", "Swift", "SwiftUI", "StoreKit 2", "AdMob"],
  },
  {
    id: 6,
    title: "Axon",
    platform: "desktop",
    href: "https://axon.faithdevs.com",
    createdAt: "2025 -- Present",
    description:
      "Native, offline-first, multi-protocol API client (Postman/Insomnia class) — a 22-crate Rust workspace with a SolidJS frontend, signed installers for macOS, Windows and Linux, and serverless peer-to-peer team sync.",
    features: [
      "9 protocols: REST, GraphQL, gRPC, WebSocket, Socket.IO, SOAP, SSE, MQTT and MCP",
      "LAN P2P team sync on Automerge CRDTs with SAS-authenticated pairing and encrypted secrets",
      "Sandboxed JS scripting with a Postman-compatible pm.* API",
      "Collection runner and headless CLI with JUnit and SARIF reports for CI",
      "Importers for Postman, Insomnia, Bruno, OpenAPI, HAR and curl; ~1,200 tests",
    ],
    badge: ["Tauri 2", "SolidJS", "TypeScript", "SQLite"],
  },
  {
    id: 9,
    title: "RetailFlow",
    platform: "desktop",
    href: "https://retailflow.faithdevs.com",
    createdAt: "Jun 2026 -- Present",
    description:
      "Commercial offline ERP/CRM for hardware and parts shops — inventory, sales, purchases, returns, dues and 15+ reports — shipped as one installer for macOS, Windows and Linux with server-free cryptographic licensing.",
    features: [
      "Invoicing, purchases, item-level returns, due collection and day-close Z-reports",
      "Offline ed25519 licensing verified in Rust with machine-derived Install IDs",
      "AES-256-GCM encrypted backups with Google Drive sync",
      "Atomic financial writes via Rust-side sqlx transactions",
      "Barcode scanning, thermal receipts and 246 tests on real SQLite migrations",
    ],
    badge: ["Tauri 2", "React", "TypeScript", "SQLite"],
  },
  {
    id: 10,
    title: "Sarothi",
    platform: "web",
    href: "https://correctly.faithdevs.com",
    createdAt: "Jul 2026 -- Present",
    description:
      "Online coaching platform for Bangladesh's BCS preliminary exam — admissions, payments, live classes, a past-paper question bank and timed mock exams with rankings — with a Go backend designed for 1 lakh students sitting at once.",
    features: [
      "Redis-backed exam engine with batched Postgres sync and group-committed grading",
      "Load-tested at ~10k answer saves/s with p95 ~110 ms on a single machine",
      "Server-enforced exam integrity: no answer keys, server deadlines, seeded shuffles",
      "Coaching back office with fees, bKash/Nagad verification and finance reports",
      "CI/CD via GitHub Actions, GHCR and Docker with staging and production",
    ],
    badge: ["Next.js", "TypeScript", "Go", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: 11,
    title: "Salify",
    platform: "web",
    href: "#",
    createdAt: "2025",
    description:
      "Multi-branch sales ERP for an electrical-goods retailer — POS billing, inventory, inter-branch transfers, purchasing, customer credit and reports — deployed with Docker Compose behind Nginx on a VPS.",
    features: [
      "Role- and branch-scoped access control enforced in both UI and API",
      "Atomic stock and money flows with row-level locking",
      "Moving weighted-average cost that fixed a stock overstatement of up to 36%",
      "N+1 query removal (e.g. 22 → 2) guarded by query-count regression tests",
      "70% smaller initial bundle via route-level code splitting",
    ],
    badge: ["Django", "DRF", "React", "PostgreSQL", "Redis", "Docker"],
  },
  {
    id: 5,
    title: "RichKit",
    platform: "web",
    href: "https://faithdevss.github.io/richkit/",
    createdAt: "May 2026 -- Present",
    description:
      "Open-core, headless WYSIWYG editor framework on ProseMirror, published to npm as 57 packages with React and Vue bindings. A full 41-extension editor ships at 184 KB gzipped — smaller than Tiptap, CKEditor 5 and TinyMCE.",
    features: [
      "Extension-first core with typed commands, schema builder and HTML/JSON I/O",
      "AI writing that streams model output into the document as tracked suggestions",
      "Track changes and inline comment threads anchored to text ranges",
      "In-browser DOCX and Markdown import/export with smart paste from Word and Google Docs",
      "Offline ECDSA-verified Pro licenses and 600+ Vitest and Playwright tests",
    ],
    badge: [
      "TypeScript",
      "ProseMirror",
      "React",
      "Vue",
      "Turborepo",
      "Playwright",
    ],
  },
  {
    id: 2,
    title: "Systa",
    platform: "mobile",
    href: "https://systa.faithdevs.com",
    createdAt: "Jun 2026 -- Present",
    description:
      "Offline-first system-design learning app built as two native apps (Kotlin/Compose and Swift/SwiftUI) sharing one JSON content source — interactive simulators, lessons, case studies and interview practice. Shipped on Google Play and the App Store.",
    features: [
      "32 interactive distributed-systems simulators on a custom drawing kit ported 1:1 between Compose and SwiftUI",
      "Drag-and-drop architecture playground with a deterministic throughput, latency and bottleneck model",
      "103 lessons, 46 case studies, 88 interview prompts and SM-2 flashcards",
      "Play Billing 9 and StoreKit 2 subscriptions with consent-gated rewarded ads capped at one per day",
      "Token-based design system mirrored across both platforms, light and dark",
    ],
    badge: [
      "Kotlin",
      "Compose",
      "Swift",
      "SwiftUI",
      "StoreKit 2",
      "Play Billing",
    ],
  },
  {
    id: 7,
    title: "Kora",
    platform: "desktop",
    href: "https://kora.faithdevs.com",
    createdAt: "2026",
    description:
      "Open-source desktop app that runs AI coding-agent CLIs such as Claude Code behind one keyboard-first interface — tabs, split panes, multiple accounts and live token, context and usage telemetry.",
    features: [
      "Pluggable Rust AgentAdapter trait — a new agent is one file plus one registry line",
      "Async Tokio process manager streaming structured JSON events from agent subprocesses",
      "Live context-window gauge, token counts and weekly rate-limit meter",
      "SQLite sessions with full-text search and crash recovery with context resume",
      "Strict security model: sandboxed webview, CSP, argv-only spawn, no stored credentials",
    ],
    badge: ["Tauri 2", "React", "TypeScript", "Tokio", "SQLite"],
  },
  {
    id: 4,
    title: "Aurails",
    platform: "android",
    href: "https://aurails.faithdevs.com",
    createdAt: "Jul 2026 -- Present",
    description:
      "All-in-one Android audio player — local music, word-synced lyrics, internet radio (50K+ stations), podcasts, audiobooks and an ambience mixer — built on Jetpack Compose and Media3 ExoPlayer.",
    features: [
      "Media3 playback engine with gapless playback, fades, 5-band EQ and session restore",
      "Android Auto browsing, Glance widget and custom media notification on one player boundary",
      "Karaoke-style synced lyrics with a provider chain, Room cache and Indic/Urdu transliteration",
      "25-entity Room schema with hand-written migrations up to v17",
      "Play-compliant flavor split, Play Billing IAP and AdMob rewarded ads",
    ],
    badge: ["Kotlin", "Compose", "Media3", "Hilt", "Room"],
  },
  {
    id: 3,
    title: "Mosques: Salah & Sunnah",
    platform: "android",
    href: "https://salah-sunnah.faithdevss.workers.dev/",
    createdAt: "Feb 2025 -- Present",
    description:
      "Bilingual (English/Bangla) Islamic companion app for Bangladesh — nearby mosques with congregation times, on-device prayer times, and an offline Quran, hadith and du'a library — backed by a Node/Koa/MongoDB API. A native Kotlin rewrite of the original React Native app, live on Google Play.",
    features: [
      "On-device prayer times with madhab-aware Asr, offsets and sunrise/sunset calibration",
      "77 MB bundled offline database with Unicode-safe Bangla and Arabic full-text search",
      "Reliable exact-alarm system for prayers, sunnah reminders and eclipse alerts",
      "Geospatial mosque search on MongoDB 2dsphere with revocable two-tier JWT auth",
      "GitHub Actions CI/CD with PM2 zero-downtime reload and automatic rollback",
    ],
    badge: ["Kotlin", "Compose", "Room", "Koa.js", "MongoDB", "GitHub Actions"],
  },
  {
    id: 8,
    title: "Goldware",
    platform: "desktop",
    href: "https://goldware.faithdevs.com",
    createdAt: "2025",
    description:
      "Fully offline desktop ERP for gold and jewelry shops — orders, workshop manufacturing, invoicing, per-purity gold stock, payroll and reporting from one local SQLite database. Sold as a white-label, per-shop licensed product.",
    features: [
      "Custom-order and manufacturing workflow with old-gold exchange and live gold rates",
      "Per-purity gold stock ledger and 13 PDF-exportable reports",
      "Ed25519-signed offline licensing in Rust with clock-rollback detection",
      "AES-256-GCM encrypted backups with Google Drive sync over OAuth PKCE",
      "Native silent printing on Windows, macOS and Linux",
    ],
    badge: ["Tauri 2", "React", "TypeScript", "SQLite"],
  },
  {
    id: 13,
    title: "Crawler Studio",
    platform: "cli",
    href: "https://github.com/SaimumIslam/crawler",
    createdAt: "2026",
    description:
      "Template-driven web crawler configured in YAML, with tiered fetch escalation, selector or Claude-powered LLM extraction, SQLite deduplication across scheduled runs, and a local React dashboard.",
    features: [
      "Three-tier fetching that escalates from plain HTTP to headless browsers only when needed",
      "Content-based block and CAPTCHA detection with human-in-the-loop handling",
      "LLM extraction via Claude returning schema-pinned JSON records",
      "Multi-threaded frontier with robots.txt, rate limiting and proxy rotation",
      "Flask + React dashboard with template editor, live logs and scheduler",
    ],
    badge: ["Python", "Playwright", "SQLite", "React", "AI API"],
  },
  {
    id: 14,
    title: "Storyteller",
    platform: "cli",
    href: "https://github.com/SaimumIslam/storyteller",
    createdAt: "2025",
    description:
      "Open-source bilingual (Bangla/English) RAG tool that turns your own PDF and text library into source-cited posts — OCR-backed ingestion, cross-lingual vector search, and an MCP server so Claude, Cursor and VS Code can write from your books.",
    features: [
      "Retrieval-augmented generation grounded in your own books, with book and page citations",
      "Bangla-aware Unicode normalization, script-ratio filtering and front/back-matter removal",
      "Tesseract OCR fallback for scanned PDF pages and SHA-256 incremental ingest",
      "Cross-lingual retrieval with multilingual bge-m3 embeddings in ChromaDB",
      "MCP server (6 tools) and Claude Code plugin; ships via pip, uvx and Docker",
    ],
    badge: ["Python", "RAG", "ChromaDB", "MCP", "OCR", "Docker"],
  },
  {
    id: 15,
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
    id: 12,
    title: "Syntaxis",
    platform: "web",
    href: "https://saimumislam.github.io/syntaxis/",
    createdAt: "2026",
    description:
      "Open-source, framework-agnostic rich text editor framework on Meta's Lexical — a headless TypeScript core with React and Vue bindings built on one shared command layer.",
    features: [
      "Framework-agnostic command layer shared by React and Vue bindings",
      "Typed commands and fluent chain API with types inferred from the command module",
      "Versioned document format with chained schema migrations and SSR rendering",
      "Custom Lexical nodes: resizable images, allowlisted embeds, page breaks",
      "345 Vitest tests and CI on every push",
    ],
    badge: ["TypeScript", "Lexical", "React", "Vue", "Turborepo"],
  },
  {
    id: 16,
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
    id: 17,
    title: "Brandy",
    platform: "desktop",
    href: "https://github.com/SaimumIslam/brandy", // in development
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
    id: 18,
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
    badge: ["PHP", "Simtire", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 19,
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
