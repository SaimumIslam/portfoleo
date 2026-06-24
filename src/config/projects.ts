const projects = [
  {
    id: 1,
    title: "Axon",
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
    id: 2,
    title: "EduGate / StudyPath",
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
    badge: [
      "NestJS",
      "Next.js",
      "React",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "TypeScript",
    ],
  },
  {
    id: 3,
    title: "Salify",
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
    badge: [
      "Django",
      "DRF",
      "React",
      "PostgreSQL",
      "Docker",
      "TypeScript",
    ],
  },
  {
    id: 4,
    title: "Goldware Offline",
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
    badge: ["Tauri 2", "React", "TypeScript", "SQLite", "Rust", "Desktop App"],
  },
  {
    id: 5,
    title: "Goalface",
    href: "#",
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
    id: 6,
    title: "Systa",
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
    badge: ["Android", "Kotlin", "Compose", "Room", "Offline-first"],
  },
  {
    id: 7,
    title: "RetailFlow",
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
    badge: [
      "React.js",
      "Django REST Framework",
      "TypeScript",
      "MySQL",
      "Project Management",
    ],
  },
  {
    id: 8,
    title: "Mosque Finder",
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
    id: 9,
    title: "BRTA Guide",
    href: "https://play.google.com/store/apps/details?id=com.saimum.brtaguide",
    createdAt: "Dec 2024",
    description:
      "Mobile application assisting users in Bangladesh with driving license preparation, renewals, and vehicle registration, with React Native frontend and Koa/MongoDB backend.",
    features: [
      "Smooth and responsive user experience",
      "Server setup and deployment with Nginx",
      "Sourcing and structuring accurate government-related data",
      "Managed full development lifecycle from frontend to backend",
    ],
    badge: ["Koa.js", "React Native", "TypeScript", "MongoDB"],
  },
  {
    id: 10,
    title: "Result and Registration System",
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
    id: 11,
    title: "Notice Board",
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
    badge: [
      "Android",
      "Java",
      "PHP",
      "MySQL",
      "Mobile App",
      "Role-Based Access",
    ],
  },
];

export default projects;
