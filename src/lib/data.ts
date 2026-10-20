export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface RepoContribution {
  system: string;
  role: string;
  commits: string;
  scope: string;
  highlight: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  featured?: boolean;
  scale: string;
  role: string;
  description: string;
  outcome: string;
  tech: string[];
  architecture: string[];
  capabilities: string[];
  qualityAndDelivery?: string[];
}

export type ChallengeCategory =
  | "Production Incidents"
  | "Data Integrity & Compliance"
  | "Multi-State Integration"
  | "Security Vulnerabilities"
  | "Architecture & Design"
  | "Full-Stack Feature Delivery";

export interface ChallengeItem {
  id: number;
  title: string;
  platform: "WellSky EVV" | "Dekhval ERP";
  component: string;
  category: ChallengeCategory;
  problem: string;
  rootCause: string;
  solution: string[];
  codeSnippet?: {
    language: string;
    code: string;
  };
  impact: string;
  lessonLearned?: string;
}

export interface PatternItem {
  number: string;
  title: string;
  description: string;
}

export interface MotivationItem {
  title: string;
  description: string;
}

export interface CompetencyItem {
  title: string;
  description: string;
}

export const personalInfo = {
  name: "Nahid Babu",
  title: "Senior Full-Stack & Platform Engineer",
  subtitle:
    "Architecting mission-critical US healthcare compliance platforms (.NET 10, Python, GCP) and multi-industry AI SaaS systems — from Dhaka to Geneva.",
  location: "8 Rue Charles-Humbert, Geneva",
  availableFrom: "September 2026",
  email: "nahidjahid8698@gmail.com",
  phone: "+41 77 943 59 42",
  linkedin: "https://linkedin.com/in/nahidbabu",
  github: "https://github.com/Nahid71",
  about: [
    "I'm a Senior Full-Stack & Platform Engineer specializing in enterprise healthcare compliance systems and multi-industry SaaS platforms. Over the past three years, I have been the single largest contributor (~30% of all commits, 940+ commits, 370+ tickets) to WellSky's Electronic Visit Verification (EVV) platform — a federally mandated healthcare compliance system that verifies home-health visits across 45+ US state-and-vendor combinations.",
    "My ownership spans every layer of the stack: designing multi-state vendor integrations across ~147k lines of Python, building operator workflows in the Next.js/React Transaction Manager, managing 5 GCP environments across 136 Terraform commits, and resolving P0 production incidents. Currently, I am building the platform's next-generation, spec-driven .NET 10 successor (~68k lines of C#, ~2,000 xUnit tests) alongside the live system using a strangler-fig migration pattern.",
    "Alongside my enterprise healthcare work, I founded and architected Dekhval — an AI-powered multi-tenant ERP and operations platform (~396 commits, 37 modules, 5,028-line Prisma PostgreSQL schema) serving healthcare, pharmacy, retail, agriculture, and service businesses. Having previously worked in Geneva building European GDPR compliance and real-time streaming systems, I am relocating back to Geneva, Switzerland.",
  ],
};

export const heroStats: StatItem[] = [
  {
    value: "1,350+",
    label: "Production Commits",
    sublabel: "Across 6 production repos + .NET 10 successor",
  },
  {
    value: "#1",
    label: "EVV Platform Contributor",
    sublabel: "940+ commits · ~30% of core backend",
  },
  {
    value: "45+",
    label: "State-Vendor Integrations",
    sublabel: "All 14 aggregator families · 25+ US states",
  },
  {
    value: "5,500+",
    label: "Automated Tests",
    sublabel: "~3,557 pytest + ~2,000 xUnit v3 tests",
  },
  {
    value: "37",
    label: "SaaS ERP Modules",
    sublabel: "5,028-line Prisma schema · Multi-tenant AI",
  },
];

export const platformContributions: RepoContribution[] = [
  {
    system: "EVV Next-Generation Platform (.NET 10)",
    role: "Core Architect & Engineer — Current Focus",
    commits: "~68k LOC C#",
    scope: "8 production projects · ~2,000 xUnit v3 tests",
    highlight:
      "Spec-driven strangler-fig successor: single typed contract driving validation, OpenAPI/docs, Roslyn C# codegen, golden-locked vendor transformers, and a 6-RID self-updating CLI.",
  },
  {
    system: "EVV Core Compliance Backend (Python)",
    role: "#1 Contributor (~30% of all commits)",
    commits: "738 commits",
    scope: "295 tickets · ~147k LOC Python · 3,557 unit tests",
    highlight:
      "Delivered across all 14 vendor aggregator families and 25+ US states, including building DCI Oregon end-to-end from scratch and full state onboardings for MA, KS, NM, NY, and UT.",
  },
  {
    system: "EVV Platform Infrastructure (Terraform IaC)",
    role: "Primary Vendor-Onboarding Engineer",
    commits: "136 commits",
    scope: "41 tickets · 5 GCP environments (dev/qa/stage/prod/DR)",
    highlight:
      "Managed 6 Cloud Run services, 20+ Cloud Scheduler crons, 60+ Firestore composite indexes, 35+ secrets, dual API Gateways for zero-downtime maintenance, and state drift recovery.",
  },
  {
    system: "EVV Transaction Manager (Next.js UI)",
    role: "Feature Owner",
    commits: "73 commits",
    scope: "35 tickets · React 18 · Ant Design 5 · GraphQL + REST",
    highlight:
      "Built caregiver/patient requeue workflows, bulk reason-code operations, cursor-backed numbered pagination, Live-In visit views, and hardened CI/CD stage/prod gates.",
  },
  {
    system: "EVV Transaction Audit-Trail API (FastAPI)",
    role: "P0 Incident Responder & Contributor",
    commits: "P0 Fix",
    scope: "Python 3.13 · FastAPI · Firestore + Cloud Storage",
    highlight:
      "Diagnosed and resolved a platform-wide P0 compliance report outage caused by an unpinned transitive gRPC breaking change across all environments.",
  },
  {
    system: "Dekhval ERP & Marketing Platform (SaaS)",
    role: "Founder & Lead Architect",
    commits: "417 commits",
    scope: "37 ERP modules · 5,028-line Prisma schema · EN/BN i18n",
    highlight:
      "Built multi-tenant Healthcare, Pharmacy FEFO POS, AI WhatsApp bots, Postiz Social Media Gateway, Project Management, Stripe billing, and self-healing Docker/Coolify deployments.",
  },
];

export const experiences: ExperienceItem[] = [
  {
    company: "WellSky",
    role: "Senior Software Engineer — EVV Platform & Next-Gen Architecture",
    period: "Jul 2023 — Present",
    location: "Remote (US Healthcare Compliance)",
    summary:
      "Single largest contributor (~30% of all commits; 940+ commits and 370+ Jira tickets) across the federally mandated Electronic Visit Verification (EVV) compliance platform, and core engineer on its spec-driven .NET 10 successor.",
    achievements: [
      "Architecting the EVV Next-Generation Platform in C# / .NET 10 (~68k LOC, 8 production projects, ~2,000 xUnit v3 tests) using a strangler-fig migration alongside the legacy Python API, where a single typed spec drives validation, JSON Schema, Markdown docs, Roslyn codegen, and byte-deterministic payload emission.",
      "Enforced strict platform-to-vendor boundaries via assembly references and Roslyn-parsed architecture tests, paired with a cross-platform self-updating CLI (`evv`) distributed across 6 runtime identifiers (Windows/macOS/Linux, x64/arm64).",
      "Engineered features and state compliance across all 14 vendor aggregator families in the ~147k-line Python backend (Sandata, HHAeXchange, Tellus/Netsmart, CareBridge, AHCCCS, AuthentiCare, DCI, Therap, eMedNY, UEVV), including building DCI Oregon end-to-end from scratch (~1,970 lines).",
      "Led multi-environment GCP infrastructure provisioning across 5 environments (dev, QA, stage, prod, DR) with 136 Terraform commits — managing 6 Cloud Run services, 20+ Cloud Scheduler crons, 60+ Firestore composite indexes, 35+ secrets, and zero-downtime API Gateway maintenance switching.",
      "Delivered full-stack workflows in the Next.js / React 18 / GraphQL Transaction Manager (bulk reason codes, caregiver/patient requeue, O(1) cursor-backed page-numbered pagination, Live-In visit management) and resolved a P0 platform-wide audit-trail outage.",
    ],
    tech: [
      "C# / .NET 10",
      "Python 3.11–3.13",
      "ASP.NET Core",
      "Flask",
      "FastAPI",
      "Next.js / React 18",
      "GCP (Cloud Run, Firestore, Pub/Sub)",
      "Terraform 1.9",
      "Roslyn",
      "OpenTelemetry",
    ],
  },
  {
    company: "Dekhval",
    role: "Founder & Lead Platform Architect",
    period: "2023 — Present",
    location: "Remote / Dhaka, Bangladesh",
    summary:
      "Designed and built an AI-powered multi-tenant business operations ERP (37 modules, ~396 commits) and bilingual marketing platform serving Healthcare, Agriculture, Retail, and Services SMEs.",
    achievements: [
      "Architected a 37-module multi-tenant SaaS ERP on Next.js 16, React 19, TypeScript, and a 5,028-line Prisma PostgreSQL schema with strict organization-level data isolation.",
      "Built comprehensive Healthcare & Pharmacy modules including doctors, appointments, prescriptions, surgeries, medical camps, optical catalogs, and FEFO (First Expired, First Out) batch-tracked pharmacy POS inventory.",
      "Integrated multi-provider AI capabilities (Claude API, OpenAI, WhatsApp bots, natural language queries with human-in-the-loop approval workflows) and a multi-platform Social Media Scheduler via Postiz and Facebook Graph API.",
      "Engineered self-healing production deployments on Docker/Coolify with automatic Prisma P3009 failed-migration recovery, idempotent SQL migrations, exponential-backoff concurrency guards, and lazy SDK initialization.",
      "Created the bilingual (English + Bangla) marketing site (`dekhval.com`) featuring 9 industry-specific landing pages, MDX blog, and interactive workflow visualizations.",
    ],
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma (PostgreSQL)",
      "Tailwind CSS v4",
      "Claude & OpenAI APIs",
      "Stripe",
      "pg-boss",
      "Cloudflare R2",
      "Docker / Coolify",
    ],
  },
  {
    company: "Uberry",
    role: "Software Engineer",
    period: "2020 — 2022",
    location: "Geneva, Switzerland",
    summary:
      "Developed European privacy compliance platforms and real-time asynchronous data streaming systems in Geneva.",
    achievements: [
      "Developed 'Priveo' — a GDPR compliance management platform enabling European businesses to automate data subject requests, consent workflows, and privacy audits.",
      "Built asynchronous WebSocket architectures for real-time dynamic data processing and low-latency notifications.",
      "Designed high-performance relational and caching layers with PostgreSQL and Redis.",
      "Collaborated across cross-functional European engineering and product teams in an agile environment.",
    ],
    tech: ["Python", "Django REST", "React", "PostgreSQL", "Redis", "WebSockets"],
  },
  {
    company: "Earlier Engineering Roles",
    role: "Full-Stack Software Engineer",
    period: "2019 — 2020",
    location: "Dhaka, Bangladesh",
    summary:
      "Built full-stack web applications and RESTful APIs for high-concurrency client platforms.",
    achievements: [
      "Built full-stack web applications using Django REST Framework and React.",
      "Designed and optimized relational database schemas with PostgreSQL and MySQL.",
      "Implemented RESTful APIs serving thousands of concurrent users with automated testing and CI/CD pipelines.",
    ],
    tech: ["Python", "Django REST", "React", "PostgreSQL", "MySQL", "Docker"],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "evv-next",
    title: "EVV Next-Generation Platform — Spec-Driven .NET 10 API, SDK & CLI",
    subtitle: "Strangler-Fig Successor Platform · Local-First API, Contract SDK & Cross-Platform CLI",
    badge: "Featured · Current Focus",
    featured: true,
    scale: "~68k lines of C# · 8 production projects · ~2,000 xUnit v3 tests",
    role: "Core Platform Engineer",
    description:
      "The spec-driven .NET 10 successor to the legacy Python EVV core backend. Built alongside the live system using a strangler-fig pattern with a transparent reverse proxy so clients can adopt a single surface early, while doubling as a unified 'backend for QA'.",
    outcome:
      "Eliminated contract drift by making a single typed spec drive validation, OpenAPI/docs, Roslyn C# codegen, and byte-deterministic payload emission",
    tech: [
      "C# / .NET 10",
      "ASP.NET Core Minimal APIs",
      "Roslyn (CodeAnalysis)",
      "System.CommandLine",
      "Spectre.Console",
      "Firestore & Pub/Sub",
      "OpenTelemetry (OTLP)",
      "xUnit v3",
      "Docker Compose",
      "GitHub Actions",
    ],
    architecture: [
      "Spec as the single source of truth: the EVV payload contract is authored once as a typed spec value over an order-preserving typed value-tree IR. Every artifact is a pure interpreter of it — JSON validation, JSON Schema, Markdown docs, deterministic payload emission, Roslyn C# code generation, and structural spec diffs.",
      "Event-driven ingest spine (`validate → persist → publish`) with an at-least-once, ack-after-publish background consumer that composes and submits vendor-specific payloads (400 malformed / 422 contract-invalid / 201 created / 503 store or publish failure).",
      "Lane-agnostic storage and messaging seams: the exact same ingest flow runs in-memory, against Dockerized Firestore + Pub/Sub emulators, or on GCP with zero cloud credentials required locally.",
      "Compiler-enforced vendor boundary: vendor assemblies reference the platform, never the reverse (making a platform→vendor import a build error), backed by Roslyn-parsed architecture tests forbidding vendor names in identifiers/literals and enforcing zero `global using`.",
      "Result-style error handling via closed discriminated union C# records (`Lookup<T>`, `SaveOutcome`, `ClaimOutcome`) with exhaustive pattern matching, plus explicit layered config loading (Code Defaults → Secret Manager → File → Env Vars).",
      "Security model with SHA-256 hashed Personal Access Tokens (shown once, rotated via revoke-and-remint), BFF cookie flow with OIDC, and a write-protected cloud credential store.",
    ],
    capabilities: [
      "Built the `evv` CLI with a pure, IO-free scenario runner streaming typed events for HTTP steps, variable interpolation, and EVV steps to Console, Log, and NDJSON renderers with masked history snapshots.",
      "Implemented `evv superset` subcommands (`emit`, `validate`, `schema`, `docs`, `codegen`, `diff`) directly interpreting the contract spec.",
      "Packaged self-contained CLI binaries for 6 runtime identifiers (Windows/macOS/Linux, x64/arm64) with `gh` bootstrap installation, `evv update` self-updating release channels, and `evv install qa` for AI-assisted QA workspaces.",
      "Shipped contract-first server-side filter/sort/page read endpoints with full wire contract and auth gates so sibling transaction-manager teams can integrate in parallel.",
    ],
    qualityAndDelivery: [
      "CalVer commit-deterministic releases (`vYYYY.MM.DD-<sha>`) where CLI binaries and API container images are cut from the exact same commit.",
      "Non-vacuous CI merge gate running against Dockerized Firestore & Pub/Sub emulators that asserts every test suite reported results and emulator-gated tests actually executed.",
      "Golden-locked vendor transformers and spec outputs, hand-rolled fakes instead of mocking frameworks, and process-wide invariant globalization.",
    ],
  },
  {
    id: "evv-core-backend",
    title: "EVV Core Backend — Multi-Vendor Healthcare Compliance Engine",
    subtitle: "Enterprise Medicaid Visit Verification API, Batch Workers & Aggregator Pipelines",
    badge: "#1 Contributor · 738 Commits",
    featured: true,
    scale: "~147k lines of Python · 14 vendor families · 41 REST endpoints · 3,557 unit tests",
    role: "Top Contributor (~30% of all repository commits · 295 Jira tickets)",
    description:
      "Enterprise compliance engine that receives home-health visit, caregiver, patient, and authorization records, validates them against per-state Medicaid rules, transmits payloads to state aggregators over REST, SOAP, and SFTP, and reconciles acknowledgements and billing statuses.",
    outcome:
      "Delivered integrations across all 14 vendor families and 25+ US states, including building the DCI Oregon aggregator family from scratch",
    tech: [
      "Python 3.11+",
      "Flask & flask-restx",
      "Google Firestore",
      "Cloud Run",
      "Pub/Sub & Eventarc",
      "Cloud Storage",
      "BigQuery",
      "Redis",
      "SFTP (Paramiko)",
      "SOAP (Zeep)",
      "OpenTelemetry",
      "pytest",
    ],
    architecture: [
      "Pluggable aggregator architecture with a shared base contract (`identification → payload build → transport → acknowledgement → exception mapping`) isolating 14 vendor families across 25+ US states.",
      "Unified transport abstraction over REST, SOAP (Zeep), and SFTP (Paramiko) with per-vendor configurable timeouts and Redis-coordinated token refresh.",
      "Event-driven processing via Firestore Eventarc triggers and Pub/Sub topics with dead-letter queues, paired with 20+ Cloud Scheduler batch crons and a BigQuery analytics sync service.",
    ],
    capabilities: [
      "Built DCI Oregon (`corelogic/dci/`, ~1,970 lines) end-to-end from scratch: Employee, Client (v2.2), and Visit payloads, aggregation results, 401 vs. 403 business-rejection split, and persistent `dciRecordId` GUID tracking that survives re-ingest.",
      "Delivered full state onboardings for Sandata Massachusetts, AuthentiCare Kansas, AuthentiCare New Mexico, eMedNY New York, and Utah UEVV (automated SOAP batch cron replacing manual entry).",
      "Unified adjusted visit-time rules across 10 Sandata states (AR, CT, IN, MA, NV, NC, ND, OH, PA, TN) and Arizona AHCCCS (~1,500 lines) so payloads never carry both a call and its adjustment for the same side.",
      "Implemented CareBridge void claim lifecycle (`ClaimAction=V`) across 6 states (AR, IA, NC, NJ, TN, WY), SFTP appointment-status reconciliation, and redundant Firestore write elimination.",
      "Built Bulk Add Reason Code APIs, automatic Caregiver & Patient profile-diff requeue pipelines, O(1) cursor-based numbered pagination, exception detection framework, and BigTable-to-Cloud Storage historical migration.",
    ],
    qualityAndDelivery: [
      "Fixed silent pagination cursor drift under date filters (178 lines of regression tests), patient requeue 500 errors (332 lines of tests), and Sandata-AR false Location Out of Range exceptions.",
      "Enforced HIPAA/PII minimization by stripping unnecessary SSNs, NPIs, and payer fields from state payloads (Sandata VT, HHA-MN) and normalizing Decimal(8,6) GPS precision.",
    ],
  },
  {
    id: "dekhval-erp",
    title: "Dekhval ERP — 37-Module Multi-Industry SaaS Platform",
    subtitle: "Multi-Tenant Enterprise Operations Platform with Healthcare, POS & AI Workflows",
    badge: "Founder · ~396 Commits",
    featured: true,
    scale: "37 modules · 5,028-line Prisma schema · Multi-tenant PostgreSQL",
    role: "Founder & Lead Architect",
    description:
      "Comprehensive multi-tenant SaaS ERP platform serving Healthcare, Agriculture, Retail, and Services industries. Evolved from an agricultural seed production system into a 37-module enterprise platform with integrated AI assistants, hospital/pharmacy management, and Stripe billing.",
    outcome:
      "Scaled from 5 to 37 production modules with zero-touch self-healing database migrations and multi-tenant isolation",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Prisma ORM",
      "PostgreSQL",
      "Tailwind CSS",
      "shadcn/ui",
      "NextAuth.js v5",
      "Stripe",
      "Claude & OpenAI APIs",
      "pg-boss",
      "Cloudflare R2",
      "Docker & Coolify",
    ],
    architecture: [
      "Multi-tenant architecture with strict organization-scoped data isolation across a 5,028-line Prisma PostgreSQL schema and generic core modules shared across industries.",
      "Self-healing Docker/Coolify deployment pipeline that automatically clears partial/failed Prisma migration records (`P3009`) before re-applying idempotent SQL migrations (`IF NOT EXISTS`, `pg_constraint` guards).",
      "Lazy runtime SDK initialization and 4096MB heap tuning to keep Next.js build-time static evaluation fast and secret-free.",
    ],
    capabilities: [
      "Healthcare & Optical/Pharmacy POS: doctors, patients, appointments, prescriptions, surgeries, medical camps, optical catalogs, and FEFO (First Expired, First Out) multi-batch inventory allocation (`sale_item_batches`) with full cancellation restoration.",
      "AI Operations Suite: WhatsApp bot integration, natural-language ERP querying, per-tenant AI configuration, and human-in-the-loop approval workflows.",
      "Social Media Management: Postiz gateway integration, multi-platform scheduling, Facebook Graph API analytics sync, and session-independent webhook reconciliation (`syncGatewayIntegrationsForOrg`).",
      "Project Management & Finance: Kanban boards, cycles, issue tracking, bank accounts, expenses, loans, asset depreciation, P&L reporting, Website Builder, and Stripe subscription billing.",
    ],
    qualityAndDelivery: [
      "Eliminated concurrent order-number race conditions (`P2002`) via transactional retry with exponential backoff.",
      "Closed stored XSS vulnerabilities in AI bot host links and org themes, and hardened AI approval bypass protections.",
    ],
  },
  {
    id: "terraform-evv",
    title: "EVV Platform Infrastructure — Multi-Environment GCP Terraform (IaC)",
    subtitle: "Cloud-Native Healthcare Infrastructure Across Dev, QA, Stage, Prod & DR",
    badge: "136 Commits · 5 Environments",
    scale: "~130 Terraform files · 60+ Firestore indexes · 20+ Cloud Scheduler crons · 35+ Secrets",
    role: "Primary Vendor-Onboarding & Infrastructure Engineer (41 Jira tickets)",
    description:
      "Infrastructure-as-Code monorepo managing the complete Google Cloud footprint for the EVV compliance platform across 5 isolated environments (dev, QA, stage, prod, and Disaster Recovery).",
    outcome:
      "Onboarded 8+ state/vendor integrations with zero-downtime maintenance switching and reviewable per-environment promotion",
    tech: [
      "Terraform 1.9",
      "Google Cloud Run",
      "Firestore",
      "Cloud Pub/Sub",
      "Eventarc",
      "API Gateway",
      "Cloud Scheduler",
      "Secret Manager",
      "BigQuery",
      "Memorystore Redis",
      "Cloud Storage",
    ],
    architecture: [
      "Manages 6 Cloud Run services, 2 Cloud Run jobs, 20+ Cloud Scheduler jobs, 4 Pub/Sub topics with dead-letter queues and Eventarc triggers, 11+ Cloud Storage buckets, BigQuery datasets, HTTPS Load Balancer, and 2 API Gateways.",
      "Dual API Gateway architecture (`evv-api.yml` and `evv-maintenance-api.yml`) with a `/servingMode` endpoint enabling instant zero-downtime switching during planned maintenance.",
      "Explicit environment-as-files promotion model (dev → QA → stage → prod + DR) where every production infrastructure change is an auditable diff against live state.",
    ],
    capabilities: [
      "Provisioned schedulers, environment configs, and Secret Manager credentials for 8+ vendor integrations (Sandata, AuthentiCare KS/NM, Therap, AHCCCS, HHAeXchange, eMedNY, Alabama, Utah UEVV, DCI Oregon) using a safe disabled-by-default scheduler rollout pattern.",
      "Designed 60+ Firestore composite indexes (including 10+ multi-filter indexes for Live-In query permutations) with `__name__` descending cursor support and TTL policies.",
      "Expanded API Gateway with 28+ routes for bulk eligibility checks, caregiver/patient requeue, and Live-In CRUD.",
      "Reconciled Terraform state drift on orphaned Firestore composite indexes via targeted import blocks without disrupting live traffic.",
    ],
  },
  {
    id: "evv-frontend",
    title: "EVV Transaction Manager — Enterprise Web Console",
    subtitle: "Operational Healthcare Compliance UI for Home-Health Agencies",
    badge: "Feature Owner · 73 Commits",
    scale: "5 domain tabs · Hybrid GraphQL + REST data layer · 35 Jira tickets",
    role: "Frontend Feature Owner",
    description:
      "The operational web console where home-health agency staff review visit verifications, diagnose state aggregator rejections, apply bulk reason codes, manage caregivers and patients, and oversee Live-In care relationships.",
    outcome:
      "Replaced O(N) Firestore offset scans with O(1) cursor-backed numbered pagination across all 5 transaction tabs",
    tech: [
      "Next.js",
      "React 18",
      "JavaScript (ES6+)",
      "Ant Design 5",
      "Apollo Client (GraphQL)",
      "Axios",
      "Jest & React Testing Library",
      "Azure DevOps Pipelines",
      "Google App Engine",
    ],
    architecture: [
      "Domain-modular architecture across Visits, Caregivers, Patients, Files, and Live-In management, backed by Apollo GraphQL (resource platform) and Axios REST (EVV API Gateway).",
      "Hybrid cursor-plus-count pagination architecture: combines `nextToken` cursor traversal (O(1) Firestore read cost) with a `totalCount` metadata endpoint to render 'Page X of Y' and total record counts without expensive offset reads.",
    ],
    capabilities: [
      "Built the Caregiver & Patient Re-queue UI and fixed document identifier mapping (`documentId` vs `caregiverId`) and approved-status filtering.",
      "Developed the Bulk Add Reason Code interface with per-state eligibility checks.",
      "Delivered the Live-In visit management tab joining patient/caregiver identities with environment-gated production rollout.",
      "Rebuilt manual visit creation and clock-time edit workflows, and hardened Azure DevOps CI/CD pipelines with mandatory test gates and explicit upstream dependency checks.",
    ],
  },
  {
    id: "evv-audit-trail",
    title: "EVV Transaction Audit-Trail API",
    subtitle: "Regulatory Document History & Dynamic Compliance Reporting Microservice",
    badge: "FastAPI · P0 Incident Resolved",
    scale: "Python 3.13 · FastAPI · Versioned Cloud Storage + Firestore Reconciliation",
    role: "Backend Contributor & P0 Incident Responder",
    description:
      "FastAPI microservice exposing field-level version history for every EVV transaction document by reconciling versioned Cloud Storage snapshots against live Firestore state, paired with an asynchronous Pub/Sub compliance report generator.",
    outcome:
      "Diagnosed and resolved a platform-wide P0 compliance report outage across all environments caused by a transitive gRPC breaking change",
    tech: [
      "Python 3.13",
      "FastAPI",
      "Pydantic",
      "Google Firestore",
      "Cloud Storage",
      "Cloud Pub/Sub",
      "Redis",
      "Okta SSO",
      "Docker",
    ],
    architecture: [
      "Layered router-to-service architecture with a dynamic parameterized Firestore query-runner subsystem featuring composite-index awareness and Redis caching.",
      "Asynchronous report generation pipeline queued via Pub/Sub and delivered as downloadable Cloud Storage artifacts.",
    ],
    capabilities: [
      "Diagnosed a platform-wide P0 outage where every `query.stream()` call threw `'_UnaryStreamMultiCallable' object has no attribute '_retry'` despite zero application code changes.",
      "Traced the failure into vendor SDK internals, bisected the `grpcio` / `google-cloud-firestore` version matrix locally, and pinned `grpcio>=1.62.0,<1.71.0` and `google-cloud-firestore>=2.16.0,<3.0.0` to restore federal audit compliance.",
    ],
  },
  {
    id: "dekhval-web",
    title: "Dekhval.com — Internationalized AI Operations Platform",
    subtitle: "Bilingual (English + Bangla) Product Marketing, Interactive Flows & Industry Solutions",
    badge: "Next.js 16 · EN/BN i18n",
    scale: "9 industry verticals · Bilingual typed dictionaries · MDX blog engine",
    role: "Lead Developer (21 commits)",
    description:
      "Internationalized marketing and product showcase platform for Dekhval's WhatsApp-first AI operations partner, tailored for SMEs across 9 industry verticals in English and Bangla.",
    outcome:
      "Launched 9 vertical landing pages, 5 interactive enterprise proposals, and full bilingual SEO architecture",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "ReactFlow",
      "MDX",
      "Cloudflare Pages",
    ],
    architecture: [
      "Locale-aware App Router architecture with strictly typed English and Bangla dictionaries, per-locale MDX content pipelines, and dark-mode visual parity.",
    ],
    capabilities: [
      "Built 9 industry-specific landing pages (Healthcare, E-commerce, Education, Fitness, Restaurant, Real Estate, Salon, Wedding, Social Media Management) and a dedicated Social Media Manager product showcase.",
      "Engineered interactive ReactFlow operational diagrams and tailored enterprise client proposal portals.",
    ],
  },
];

export const challenges: ChallengeItem[] = [
  {
    id: 1,
    title: "Production Report Generation Broken — gRPC Transitive Dependency Conflict",
    platform: "WellSky EVV",
    component: "Transaction Audit-Trail API",
    category: "Production Incidents",
    problem:
      "All compliance report generation across every environment suddenly stopped working. The FastAPI audit service threw `'_UnaryStreamMultiCallable' object has no attribute '_retry'` on every Firestore `query.stream()` call, blocking healthcare agencies from pulling federally mandated audit reports.",
    rootCause:
      "An unpinned `google-cloud-firestore` dependency in `requirements.txt` allowed a container rebuild to resolve a newer `grpcio` release that removed the internal `_retry` attribute still expected by the Firestore SDK.",
    solution: [
      "Recognized the stack trace bottomed out in vendor internals despite an empty application code diff.",
      "Bisected the version matrix locally and pinned `grpcio>=1.62.0,<1.71.0` and `google-cloud-firestore>=2.16.0,<3.0.0`.",
      "Restored report generation across all environments with a surgical 2-line dependency pin.",
    ],
    impact:
      "Resolved a P0 production incident and restored federal EVV compliance report generation for all healthcare agencies.",
    lessonLearned:
      "Always pin transitive SDK dependencies in production healthcare systems; unpinned packages create invisible breaking changes on container rebuilds.",
  },
  {
    id: 2,
    title: "SFTP Pull Timeouts Blocking CareBridge Visit Processing",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Production Incidents",
    problem:
      "CareBridge's appointment-status pull cron was timing out over SFTP. The worker opened SFTP connections even when zero transactions were in `SENT` status, exhausting cron windows against a hardcoded 90-second timeout.",
    rootCause:
      "No pre-check existed before initiating the expensive SFTP handshake, and the SFTP transport enforced a rigid 90-second timeout instead of failing fast when CareBridge's server hung.",
    solution: [
      "Added a lightweight Firestore pre-check (`limit 1` on `SENT` status) to skip the entire SFTP connection flow when no work exists.",
      "Made the SFTP transport timeout configurable per vendor constructor and tuned CareBridge to 30 seconds.",
      "Added comprehensive unit tests covering the skip-when-no-sent-transactions path.",
    ],
    impact:
      "Eliminated wasted SFTP connections and prevented pull timeouts across 6 CareBridge states (IA, AR, NC, NJ, TN, WY).",
  },
  {
    id: 3,
    title: "500 Internal Server Errors on Patient & Caregiver Requeue",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Production Incidents",
    problem:
      "Requeue API endpoints for patients and caregivers returned 500 Internal Server Errors whenever agencies attempted to requeue approved transactions, blocking daily visit corrections.",
    rootCause:
      "The patient requeue handler referenced a non-existent/mismatched `disallowed_status` variable instead of the shared `disallowed_patient_caregiver_status` constant, and returned improperly wrapped Flask response tuples.",
    solution: [
      "Updated the status filter reference to `disallowed_patient_caregiver_status` and fixed Flask `(jsonify(), status_code)` tuple returns.",
      "Authored a 332-line unit test suite (`test_requeue_patient_transactions.py`) covering all patient requeue status transitions.",
    ],
    impact:
      "Unblocked daily EVV submission workflows for agencies correcting patient and caregiver records.",
  },
  {
    id: 4,
    title: "Pagination Cursor Using Wrong Field — Silent Data Skipping",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Data Integrity & Compliance",
    problem:
      "When users paginated through EVV transactions with date filters (visit date or creation date), records were silently skipped or duplicated across pages — the worst failure mode during a compliance audit.",
    rootCause:
      "The pagination cursor (`nextToken`) always extracted the `updated` timestamp regardless of the active sort order (`clockInTime` for visit dates or `created` for creation dates), causing Firestore's `start_after` to jump to the wrong index position.",
    solution: [
      "Dynamically bound `cursor_field` to match the active sort filter (`clockInTime`, `created`, or `updated`).",
      "Added 178 lines of unit tests with distinct timestamps across all three fields to verify unambiguous cursor selection.",
    ],
    codeSnippet: {
      language: "python",
      code: `if self.visitStartDate or self.visitEndDate:
    cursor_field = "clockInTime"
elif self.startDate or self.endDate:
    cursor_field = "created"
else:
    cursor_field = "updated"`,
    },
    impact:
      "Restored 100% pagination accuracy across thousands of daily compliance records in the Transaction Manager.",
  },
  {
    id: 5,
    title: "Void Claim Lifecycle (`ClaimAction=V`) Across 6 CareBridge States",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Data Integrity & Compliance",
    problem:
      "When appointments were cancelled or modified after submission, visits remained stuck in `SENT` status because the platform only supported initial additions (`ClaimAction=A`), risking inaccurate home-health billing.",
    rootCause:
      "No mechanism existed to parse CareBridge's pipe-delimited appointment status files, track already-billed claims, or emit reversal (`ClaimAction=V`) payloads over SFTP.",
    solution: [
      "Implemented a 708-line void claim pipeline across 16 files, including `parse_appointment_status_file()` for CareBridge CSV responses.",
      "Built void claim detection, `ClaimAction=V` payload generation, and `AppointmentStatusFileEntity` tracking to prevent double-processing across AR, IA, NC, NJ, TN, and WY.",
      "Added 351 lines of end-to-end unit tests for the void lifecycle.",
    ],
    impact:
      "Enabled automated claim reversals across 6 US states, preventing erroneous Medicaid billing for cancelled home-health visits.",
  },
  {
    id: 6,
    title: "GPS Coordinate Precision Mismatch — HHA Exchange Rejections",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Data Integrity & Compliance",
    problem:
      "Minnesota EVV transactions were rejected by HHA Exchange because Firestore stored raw GPS strings with varying precision (`44.977`, `20.000`, `44.123456789`) while the aggregator enforced strict `Decimal(8,6)` formatting.",
    rootCause:
      "Upstream scheduling systems ingested coordinates without normalization, and the payload builder passed raw strings straight through.",
    solution: [
      "Created `_format_gps_coordinate()` to normalize all `clockIn`/`clockOut` coordinates to exact 6-decimal precision while gracefully handling `None`, empty, or malformed inputs.",
      "Added 12 parametrized unit tests covering every boundary condition.",
    ],
    impact:
      "Eliminated GPS format rejections for all Minnesota home-health agencies submitting to HHA Exchange.",
  },
  {
    id: 7,
    title: "PII Minimization in State Caregiver Payloads",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Data Integrity & Compliance",
    problem:
      "Caregiver payloads for Minnesota (HHA-MN) and Vermont (Sandata VT) were transmitting `employeeId`, `npi`, `EmployeeSSN`, and payer fields that those states did not require — expanding HIPAA/PII exposure.",
    rootCause:
      "State payload builders inherited an 'include everything by default' dictionary from shared parent classes built for stricter states like New York.",
    solution: [
      "Stripped `employeeId` and `npi` from HHA-MN caregiver payloads, removed `EmployeeSSN` and `ClientPayerInformation` from Sandata VT, and blanked billing fields for non-billing payers.",
    ],
    impact:
      "Enforced strict healthcare data minimization across state boundaries, reducing PII surface area in external transmissions.",
  },
  {
    id: 8,
    title: "Location Type Casing Inheritance Regression Across HHA States",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Multi-State Integration",
    problem:
      "HHA Exchange's V5 spec for New York required capitalized `\"Home\"`, but changing `" +
      "`\"home\"` to `\"Home\"` in the base HHA class immediately broke SFTP submissions for AR, NC, VA, FL, and PA, which still required lowercase `\"home\"`.",
    rootCause:
      "A state-specific spec change was applied directly to the abstract base class without auditing all inheriting state subclasses.",
    solution: [
      "Defined `get_location_type()` on the base class returning lowercase `\"home\"` by default and overrode it exclusively in `HHAeXchangeNYPayload` to return `\"Home\"`.",
      "Added parametrized inheritance tests across all state payload subclasses.",
    ],
    impact:
      "Restored multi-state SFTP compliance while satisfying New York's V5 specification.",
    lessonLearned:
      "In a multi-state inheritance hierarchy, always trace every subclass consumer before modifying shared base behavior.",
  },
  {
    id: 9,
    title: "Caregiver Profile Diffing — Preventing Unnecessary Requeue Storms",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Architecture & Design",
    problem:
      "Every caregiver re-ingest from upstream scheduling systems reset the caregiver's status to `SUBMITTED` even when no meaningful field changed, triggering redundant reprocessing across all associated visits.",
    rootCause:
      "The ingest pipeline blindly overwrote status without comparing the prior vendor payload against the newly generated payload.",
    solution: [
      "Engineered a 142-line payload comparison system that snapshots the pre-write caregiver payload, builds the post-write vendor payload via `build_caregiver_payload()`, and diffs field-by-field while ignoring volatile metadata timestamps.",
      "Preserved existing status when unchanged, with fail-safe fallback to requeue on comparison errors.",
    ],
    impact:
      "Eliminated redundant compute, Firestore writes, and duplicate state aggregator submissions across all vendor integrations.",
  },
  {
    id: 10,
    title: "HHA-MN Missed Visit Code Whitespace — Single-Character Compliance Failures",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Multi-State Integration",
    problem:
      "Minnesota EVV submissions with reason code 604 or action code 505 were rejected by HHA Exchange's exact-string validator.",
    rootCause:
      "Code 604 lacked a space after a hyphen (`\"Service -original\"`) and code 505 had an invisible trailing space (`\"...cannot be billed \"`) in the configuration JSON.",
    solution: [
      "Corrected exact character-level strings in the state configuration and verified against HHA Exchange's lookup tables.",
    ],
    impact:
      "Unblocked missed-visit compliance submissions for Minnesota home-health agencies.",
  },
  {
    id: 11,
    title: "Live-In Visit Verification — 3-Repo, 5-Environment End-to-End Rollout",
    platform: "WellSky EVV",
    component: "Full-Stack + Terraform IaC",
    category: "Full-Stack Feature Delivery",
    problem:
      "The platform needed end-to-end support for 'Live-In' home-health caregivers across infrastructure, backend APIs, aggregator payloads, and the web console across 5 environments.",
    rootCause:
      "Live-In visits require distinct relationship entities, composite Firestore indexes, API Gateway routes, Pub/Sub status topics, and environment-gated UI views.",
    solution: [
      "Terraform IaC (8 commits): provisioned `live_in` collection, 10+ composite indexes, CRUD API Gateway routes, and Pub/Sub status topics across dev/qa/stage/prod/DR.",
      "Backend: implemented the LiveIn entity, CRUD endpoints, and state aggregator payload mapping.",
      "Frontend: built the Live-In management tab joining patient/caregiver names with feature-gated rollout.",
    ],
    impact:
      "Delivered a complete new compliance visit category from database and cloud infrastructure up to the agency UI.",
  },
  {
    id: 12,
    title: "Firestore Composite Index Permutation Design",
    platform: "WellSky EVV",
    component: "EVV Platform Infrastructure (IaC)",
    category: "Architecture & Design",
    problem:
      "The Live-In GET API needed flexible filtering across `agencyId`, `appName`, `status`, `patientId`, and `caregiverId` sorted by `updated` descending, where any missing Firestore composite index causes a runtime `FAILED_PRECONDITION` crash.",
    rootCause:
      "Firestore requires an explicit pre-provisioned composite index for every filter combination rather than merging single-field indexes on sorted queries.",
    solution: [
      "Mapped the exact frontend query combinations and authored 276 lines of Terraform defining 10+ composite indexes (single-filter, dual-filter, and triple-filter variants) with `__name__` descending for cursor pagination.",
    ],
    impact:
      "Enabled flexible multi-criteria filtering across all 5 environments with zero runtime index failures.",
  },
  {
    id: 13,
    title: "Zero-Downtime Maintenance Mode via Dual API Gateways",
    platform: "WellSky EVV",
    component: "EVV Platform Infrastructure (IaC)",
    category: "Architecture & Design",
    problem:
      "A 24/7 healthcare compliance platform needed a maintenance mode for database migrations and upgrades without dropping active connections or requiring service redeployments.",
    rootCause:
      "Restarting or redeploying Cloud Run services to toggle maintenance mode introduced downtime windows.",
    solution: [
      "Architected dual API Gateway specs in Terraform (`evv-api.yml` for live Cloud Run routing and `evv-maintenance-api.yml` routing to a maintenance Cloud Function) plus a `/servingMode` discovery endpoint for the UI.",
    ],
    impact:
      "Enabled instant, zero-downtime maintenance switching at the edge gateway across all GCP environments.",
  },
  {
    id: 14,
    title: "Pagination Architecture Pivot — Preventing O(N) Firestore Read Cost Explosion",
    platform: "WellSky EVV",
    component: "EVV Transaction Manager UI + Backend",
    category: "Architecture & Design",
    problem:
      "Users needed 'Page X of Y' and total record counts across 50,000+ transactions, but standard SQL-style offset pagination in Firestore bills a read for every skipped document.",
    rootCause:
      "Jumping to page 100 with a 50-row page size via Firestore `offset()` costs 5,000 document reads per click — creating an O(N) cost multiplier at scale.",
    solution: [
      "Pivoted to a hybrid cursor architecture: preserved `nextToken` cursor traversal (O(1) page reads) while pairing it with an efficient `totalCount` aggregation endpoint and a unified `PaginationControls` UI across all 5 tabs.",
    ],
    impact:
      "Delivered numbered page navigation and record counts while keeping Firestore read costs flat regardless of dataset size.",
  },
  {
    id: 15,
    title: "Caregiver Requeue — Frontend Identifier & Status Filter Fix",
    platform: "WellSky EVV",
    component: "EVV Transaction Manager UI",
    category: "Full-Stack Feature Delivery",
    problem:
      "Requeuing caregivers from the Transaction Manager UI either failed silently or targeted the wrong records, and blocked valid `approved` records from selection.",
    rootCause:
      "The table row selector mapped `caregiverId` instead of the Firestore `documentId` expected by the backend requeue endpoint, and excluded `approved` rows in the client filter.",
    solution: [
      "Switched payload mapping from `_.map(filteredRows, 'caregiverId')` to `_.map(filteredRows, 'documentId')`.",
      "Removed the erroneous `approved` status exclusion and surfaced backend error messages in toast notifications.",
    ],
    impact:
      "Restored end-to-end caregiver requeue reliability for agency operations staff.",
  },
  {
    id: 16,
    title: "Multi-State Vendor Onboarding — Disabled-by-Default Scheduler Pattern",
    platform: "WellSky EVV",
    component: "EVV Platform Infrastructure (IaC)",
    category: "Multi-State Integration",
    problem:
      "Onboarding 8+ state aggregators across dev, QA, stage, prod, and DR risked premature live traffic if Cloud Scheduler crons fired before credentials and state sign-off were complete.",
    rootCause:
      "Each vendor requires distinct pull/process/acknowledge cron schedules, Secret Manager credentials, and per-environment endpoints.",
    solution: [
      "Established a disciplined promotion pattern across 136 Terraform commits: provision new vendor Cloud Scheduler jobs in a `PAUSED`/disabled state first, validate in lower environments, and enable production traffic in a dedicated, explicitly reviewable commit.",
    ],
    impact:
      "Safely onboarded 8+ vendor integrations (AuthentiCare, Sandata, Therap, HHAeXchange, eMedNY, AHCCCS, Alabama, DCI Oregon) into production.",
  },
  {
    id: 17,
    title: "DCI Oregon — Persistent Record Identity Across Re-Ingests",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Multi-State Integration",
    problem:
      "After DCI Oregon launched, record updates failed in two ways: DCI 403 business-rule rejections were displayed to staff as authentication errors, and updated records were sent as new POSTs and rejected as duplicates.",
    rootCause:
      "1) The handler treated HTTP 403 the same as 401; 2) POST vs. PUT was guessed by pattern-matching 409/403 error text; 3) `externalTransactionId` was wiped by ingest on every re-submit, losing the link to DCI's record (and falling back to caregiver SSNs in URLs).",
    solution: [
      "Split HTTP 401 from 403 so business-rule rejections surface DCI's exact message under a dedicated error code.",
      "Persisted the GUID returned by DCI on initial POST in a new `dciRecordId` field protected from re-ingest diff wiping; records with a GUID always `PUT` to `{url}/{guid}` (except `visitType=3` cancels which POST per spec).",
      "Deleted the fragile response-text matching and eliminated caregiver SSNs from request URLs, shrinking the codebase net by 49 lines (+273 / -322).",
    ],
    impact:
      "Guaranteed deterministic updates for DCI Oregon records and gave agency staff actionable rejection reasons.",
    lessonLearned:
      "If you are pattern-matching error messages to decide which operation you should have sent, the real bug is missing record identity.",
  },
  {
    id: 18,
    title: "Adjusted Visit Times — Unifying Call Omission Across 11 State Modules",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Multi-State Integration",
    problem:
      "When a visit's clock times were corrected, Sandata and AHCCCS payloads sent both `AdjInDateTime`/`AdjOutDateTime` and the original `Calls` segment for the same side — violating aggregator specs (e.g., AHCCCS v1.3 §5.4).",
    rootCause:
      "`check_if_visit_time_changed()` returned a single boolean for the whole visit, the logic was copy-pasted with drift across 10 Sandata states, and the corrected-visit handler indexed `Calls[0]`/`Calls[1]` by position.",
    solution: [
      "Split change detection into per-side `get_visit_time_changes()` returning `(clock_in_changed, clock_out_changed)`.",
      "Built a single shared `apply_adjusted_visit_times()` helper that emits the matching `Adj*` field and drops only the corresponding call by `CallAssignment` (or empties `Calls` when both sides move).",
      "Replaced duplicated logic across 10 Sandata states (AR, CT, IN, MA, NV, NC, ND, OH, PA, TN) and AHCCCS, rewrote call updates to match by assignment rather than array index, and added ~1,500 lines of changes/tests.",
    ],
    impact:
      "Brought 11 state modules into strict spec compliance while consolidating 11 diverging copies of the rule into one tested helper.",
  },
  {
    id: 19,
    title: "False 'Location Out of Range' Exceptions — The Always-Truthy List Guard",
    platform: "WellSky EVV",
    component: "EVV Core Backend",
    category: "Data Integrity & Compliance",
    problem:
      "Sandata-Arkansas visits were flagged with false `Location Out of Range` exceptions even when caregivers were at the patient's home or when client coordinates were missing.",
    rootCause:
      "`client_gps = [addresses[0].get('lng'), addresses[0].get('lat')]` followed by `if not client_gps:` never triggered because a 2-element Python list `[None, None]` is always truthy. Additionally, some addresses stored longitude under `long` instead of `lng`.",
    solution: [
      "Checked the coordinate values rather than the list container, supported both `lng` and `long` keys, and parsed coordinates with `float()` inside a `try` block so missing/malformed coordinates skip distance calculation cleanly.",
      "Added ~100 lines of unit tests covering `long` vs `lng`, missing addresses, null/empty/non-numeric strings, and valid in-range visits.",
    ],
    codeSnippet: {
      language: "python",
      code: `# Before (Bug: [None, None] is always truthy in Python!)
client_gps = [addresses[0].get("lng"), addresses[0].get("lat")]
if not client_gps:
    return exception_info`,
    },
    impact:
      "Eliminated false-positive location exceptions that agency staff previously had to review and clear by hand.",
  },
  {
    id: 20,
    title: "Production Next.js Builds Crashing — Module-Level OpenAI SDK Init",
    platform: "Dekhval ERP",
    component: "AI Services",
    category: "Production Incidents",
    problem:
      "Production Docker builds on Coolify failed during `next build` with `Missing credentials` errors from the OpenAI SDK, blocking all ERP deployments.",
    rootCause:
      "`const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })` ran at module import time when Next.js statically evaluated server modules during build, when runtime secrets are absent.",
    solution: [
      "Refactored to a lazy singleton factory (`getOpenAI()`) across chat and image-generation services so the SDK client is instantiated only on first runtime request.",
    ],
    codeSnippet: {
      language: "typescript",
      code: `let _openai: OpenAI | null = null;

function getOpenAI(): OpenAI {
  if (!_openai) {
    _openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return _openai;
}`,
    },
    impact:
      "Unblocked all production CI/CD builds while keeping runtime API keys out of the build environment.",
  },
  {
    id: 21,
    title: "Out of Memory (OOM) Crashes During 37-Module TypeScript Compilation",
    platform: "Dekhval ERP",
    component: "Docker Build Pipeline",
    category: "Production Incidents",
    problem:
      "Production builds on the 12GB deployment server crashed with OOM errors during the TypeScript type-checking phase of `next build`.",
    rootCause:
      "As the codebase scaled to 37 dashboard modules and a 5,028-line Prisma schema, the generated TypeScript AST exceeded the Dockerfile's conservative `--max-old-space-size=2048` limit.",
    solution: [
      "Captured `/proc/meminfo` diagnostics during build failure, tuned `NODE_OPTIONS=\"--max-old-space-size=4096\"` in the Dockerfile, and documented host memory headroom.",
    ],
    impact:
      "Stabilized production builds for the full 37-module ERP monolith.",
  },
  {
    id: 22,
    title: "Self-Healing Prisma Migration Crash Loops (`P3009` Auto-Recovery)",
    platform: "Dekhval ERP",
    component: "Database & Docker Entrypoint",
    category: "Architecture & Design",
    problem:
      "If a Prisma migration partially applied and failed during deploy, the Docker container entered an infinite crash loop on restart with Prisma error `P3009` ('Migration found in database that has been marked as failed').",
    rootCause:
      "Prisma leaves a row in `_prisma_migrations` with `finished_at IS NULL` and refuses all subsequent `migrate deploy` runs without manual SQL intervention.",
    solution: [
      "Added a pre-migration self-healing step in `docker-entrypoint.sh` that clears unfinished/rolled-back rows from `_prisma_migrations` via `prisma db execute --stdin` before running `prisma migrate deploy`.",
      "Paired with idempotent SQL migration authoring so re-running partially applied migrations is 100% safe.",
    ],
    codeSnippet: {
      language: "bash",
      code: `echo 'DELETE FROM "_prisma_migrations" WHERE "rolled_back_at" IS NOT NULL OR "finished_at" IS NULL;' | $PRISMA_CLI db execute --stdin`,
    },
    impact:
      "Eliminated deployment crash loops and removed the need for manual SSH database recovery after transient deploy failures.",
  },
  {
    id: 23,
    title: "Sale Cancellation Silent Inventory Loss — FEFO Multi-Batch Tracking",
    platform: "Dekhval ERP",
    component: "Pharmacy & Retail POS",
    category: "Data Integrity & Compliance",
    problem:
      "Cancelling a pharmacy or retail sale failed to restore stock quantities to the product batches consumed during checkout, causing silent inventory drift.",
    rootCause:
      "Sale creation used FEFO (First Expired, First Out) to deduct stock across multiple batches, but `sale_items` only had a single nullable `productBatchId` column (left `NULL`), so cancellation had no record of which batches to restore.",
    solution: [
      "Created a `sale_item_batches` junction table recording exact `{ batchId, quantity }` allocations per sale item during FEFO deduction.",
      "Updated the sale cancellation transaction to iterate over `batchAllocations` and restore exact quantities to each source batch.",
    ],
    impact:
      "Restored 100% batch-level pharmaceutical and retail inventory accuracy for hospital and retail tenants.",
  },
  {
    id: 24,
    title: "Idempotent PostgreSQL Migrations for Partial-Apply Resilience",
    platform: "Dekhval ERP",
    component: "PostgreSQL & Prisma",
    category: "Data Integrity & Compliance",
    problem:
      "When a migration failed after creating a table but before adding foreign-key constraints, re-running standard Prisma SQL failed with `relation already exists`.",
    rootCause:
      "Default Prisma-generated DDL (`CREATE TABLE`, `ALTER TABLE ADD CONSTRAINT`) is not idempotent.",
    solution: [
      "Rewrote migrations using `CREATE TABLE IF NOT EXISTS`, `CREATE INDEX IF NOT EXISTS`, and `DO $$ ... IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = ... AND conrelid = ...) $$` blocks.",
    ],
    codeSnippet: {
      language: "sql",
      code: `DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'sale_item_batches_saleItemId_fkey'
  ) THEN
    ALTER TABLE "sale_item_batches"
    ADD CONSTRAINT "sale_item_batches_saleItemId_fkey" ...;
  END IF;
END $$;`,
    },
    impact:
      "Made database schema deployments safely re-runnable across all environments.",
  },
  {
    id: 25,
    title: "Order Number Race Condition Under Concurrent Checkout Requests",
    platform: "Dekhval ERP",
    component: "Order Management",
    category: "Data Integrity & Compliance",
    problem:
      "Simultaneous order creations during peak sales generated duplicate sequential order numbers, failing checkouts with Prisma `P2002` unique constraint errors.",
    rootCause:
      "`generateOrderNumber()` performed a classic read-then-increment query where concurrent transactions read the same latest number before committing.",
    solution: [
      "Wrapped order number generation and insertion in a `$transaction` with bounded exponential-backoff retry specifically catching `P2002` collisions, plus `Math.min(pageSize, 100)` pagination bounds.",
    ],
    impact:
      "Eliminated checkout failures under concurrent order spikes.",
  },
  {
    id: 26,
    title: "Stored XSS Vulnerability in AI Bot Server Host Rendering",
    platform: "Dekhval ERP",
    component: "Admin Security",
    category: "Security Vulnerabilities",
    problem:
      "The AI bot detail view rendered `bot.serverHost` directly inside `<a href={bot.serverHost}>`, allowing a `javascript:` or `data:` URI to execute arbitrary script in an admin's browser.",
    rootCause:
      "Missing URL protocol allowlist validation prior to rendering user/config-supplied strings as anchor targets.",
    solution: [
      "Added strict `/^https?:\\/\\//i` protocol validation, rendering non-HTTP(S) values as inert `<span>` text alongside `rel=\"noopener noreferrer\"`.",
    ],
    codeSnippet: {
      language: "tsx",
      code: `{/^https?:\\/\\//i.test(bot.serverHost) ? (
  <a href={bot.serverHost} target="_blank" rel="noopener noreferrer">
    {bot.serverHost}
  </a>
) : (
  <span className="font-medium">{bot.serverHost}</span>
)}`,
    },
    impact:
      "Closed a stored XSS vector in the administration console.",
  },
  {
    id: 27,
    title: "Webhook Auth Bypass & Session-Free Organization Sync",
    platform: "Dekhval ERP",
    component: "Social Media Gateway",
    category: "Security Vulnerabilities",
    problem:
      "Incoming Postiz social media webhooks failed with `401 Unauthorized`, and even when reached, crashed because the sync handler relied on `getServerSession()`.",
    rootCause:
      "`/api/webhooks` was blocked by session middleware, and `syncGatewayIntegrations()` assumed an interactive browser session rather than a server-to-server webhook context.",
    solution: [
      "Registered `/api/webhooks` in `publicApiRoutes` and built `syncGatewayIntegrationsForOrg(orgId)` to reconcile social channels, upsert accounts, and validate `deleteChannel` responses without session state.",
    ],
    impact:
      "Restored real-time social media account synchronization across tenant organizations.",
  },
  {
    id: 28,
    title: "Docker Production Build Failure — Prisma Generated Enum Import Path",
    platform: "Dekhval ERP",
    component: "Healthcare Billing Module",
    category: "Full-Stack Feature Delivery",
    problem:
      "Coolify production builds failed in the healthcare billing module even though local development builds succeeded.",
    rootCause:
      "A component imported `ServiceType` from `@/generated/prisma/client` instead of `@/generated/prisma/enums`, which failed under the clean Docker production Prisma output layout.",
    solution: [
      "Traced the build log across the 37-module tree and standardized enum imports to `@/generated/prisma/enums`.",
    ],
    impact:
      "Restored deterministic parity between local development and production Docker builds.",
  },
];

export const problemSolvingPatterns: PatternItem[] = [
  {
    number: "01",
    title: "Diagnose Before You Fix",
    description:
      "Every fix starts with root-cause analysis, not symptom treatment — whether tracing a `_UnaryStreamMultiCallable` error into unpinned gRPC internals or proving that pagination cursor fields must match the active sort order.",
  },
  {
    number: "02",
    title: "Test What You Fix",
    description:
      "Every bug is a test gap. A 1-line variable fix ships with 332 lines of tests; the adjusted-visit-time rule ships with ~1,500 lines; the Utah SOAP integration ships with 1,064 lines. Each test is a contract that the failure won't recur.",
  },
  {
    number: "03",
    title: "Respect the Blast Radius",
    description:
      "In a multi-state aggregator architecture where 14 vendor families and 25+ states share base classes, a 'simple' base change can break 5 states. I trace the full inheritance tree and consumer graph before touching shared contracts.",
  },
  {
    number: "04",
    title: "Build Self-Healing Systems",
    description:
      "Production systems should recover without 2 AM SSH sessions: Docker entrypoints automatically clear partial Prisma migrations, SFTP workers skip empty runs before connecting, and caregiver pipelines diff payloads before requeuing.",
  },
  {
    number: "05",
    title: "Security & Privacy Are Non-Negotiable",
    description:
      "Healthcare data carries HIPAA and 21st Century Cures Act obligations. From stripping unneeded SSNs/NPIs in state payloads to hashing PATs with SHA-256 and closing stored XSS vectors, security is fixed immediately.",
  },
  {
    number: "06",
    title: "Understand the Cost Model",
    description:
      "Patterns that are free in SQL can be a financial trap in cloud NoSQL. Replacing Firestore offset scans (O(N) billed reads) with cursor traversal + count metadata prevented a read-cost explosion across 50,000+ record tables.",
  },
  {
    number: "07",
    title: "Make the Right Thing Structural",
    description:
      "The best fixes turn a rule people have to remember into one the compiler enforces. In the .NET 10 successor platform, one typed spec drives validation, docs, schema, codegen, and payload emission, and Roslyn tests enforce vendor boundaries at build time.",
  },
];

export const motivations: MotivationItem[] = [
  {
    title: "The Healthcare Stakes Are Real",
    description:
      "Every EVV transaction represents a real caregiver helping a patient at home. When the system fails, agencies can't submit compliance data and caregivers risk delayed pay. Building reliable software here directly protects healthcare workers and patients across the US.",
  },
  {
    title: "Modernizing a System That Can't Stop",
    description:
      "Three years of fixing the legacy Python platform taught me exactly where its defects originate: duplicated contracts across 14 vendors and identifiers overwritten by the pipeline. Building its spec-driven .NET 10 successor via a strangler-fig migration rules out those defect classes by construction — without a risky cutover.",
  },
  {
    title: "Problem Diagnosis Over Quick Fixes",
    description:
      "The most satisfying fixes often end in a small diff after a deep investigation — bisecting transitive gRPC versions, catching an always-truthy `[None, None]` Python list guard, or uncovering silent cursor drift.",
  },
  {
    title: "Bridging Compliance Precision & SaaS Breadth",
    description:
      "Working across US Medicaid compliance (where a single extra space rejects a claim) and a 37-module multi-tenant ERP (spanning pharmacy FEFO inventory, AI bots, and Stripe billing) sharpens both microscopic precision and macro-level system architecture.",
  },
];

export const competencies: CompetencyItem[] = [
  {
    title: "Platform Modernization",
    description:
      "Strangler-fig migration onto a spec-driven .NET 10 platform with Roslyn-enforced boundaries and a 6-RID self-updating CLI.",
  },
  {
    title: "Multi-Vendor Backend Engineering",
    description:
      "Extensible integration frameworks spanning 14 aggregator families, 25+ US states, and REST/SOAP/SFTP protocols.",
  },
  {
    title: "Distributed & Event-Driven Systems",
    description:
      "At-least-once Pub/Sub & Eventarc pipelines, dead-letter handling, Redis cross-instance coordination, and 20+ batch crons.",
  },
  {
    title: "Compliance & Data Integrity",
    description:
      "Eliminating silent cursor drift, enforcing Decimal(8,6) precision, FEFO batch accounting, and HIPAA/PII minimization.",
  },
  {
    title: "Cloud Infrastructure (Terraform IaC)",
    description:
      "5-environment GCP management (dev/qa/stage/prod/DR), 60+ composite indexes, state drift recovery, and zero-downtime gateways.",
  },
  {
    title: "Performance & Cost Engineering",
    description:
      "O(1) cursor pagination over Firestore, redundant write elimination, and direct ID authorization lookups.",
  },
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      "Python (3.11–3.13)",
      "C# (.NET 10)",
      "TypeScript",
      "JavaScript (ES6+)",
      "HCL (Terraform)",
      "SQL",
    ],
  },
  {
    title: "Backend & Architecture",
    skills: [
      "ASP.NET Core Minimal APIs",
      "Flask & flask-restx",
      "FastAPI & Pydantic",
      "Next.js App Router & Server Actions",
      "Prisma ORM",
      "Roslyn Codegen & Arch Rules",
      "OpenAPI & Scalar",
      "NextAuth.js v5 / OIDC",
    ],
  },
  {
    title: "Frontend & UI",
    skills: [
      "React 18 / 19",
      "Next.js 16",
      "Tailwind CSS v4",
      "Ant Design 5",
      "shadcn/ui & Radix UI",
      "Apollo Client (GraphQL)",
      "Framer Motion",
      "Recharts & ReactFlow",
      "MDX",
    ],
  },
  {
    title: "Cloud & Infrastructure (GCP)",
    skills: [
      "Cloud Run (Services & Jobs)",
      "Google Firestore (60+ Indexes)",
      "Cloud Pub/Sub & Eventarc",
      "Terraform 1.9 (5 Envs + DR)",
      "API Gateway & Load Balancing",
      "Cloud Storage & BigQuery",
      "Secret Manager & IAM",
      "Cloud Scheduler",
      "Memorystore Redis & Memcached",
    ],
  },
  {
    title: "Data, DevOps & Tooling",
    skills: [
      "PostgreSQL",
      "System.CommandLine & Spectre.Console",
      "Docker & Docker Compose",
      "GitHub Actions & Azure Pipelines",
      "CalVer & GitVersion Releases",
      "Cloudflare (Pages, R2) & Coolify",
      "pg-boss",
      "Snyk SCA",
    ],
  },
  {
    title: "Testing, Observability & Integrations",
    skills: [
      "xUnit v3 (Unit, Golden, Emulator)",
      "pytest & coverage.py",
      "Jest & React Testing Library",
      "OpenTelemetry (OTLP)",
      "SFTP (Paramiko) & SOAP (Zeep)",
      "Okta SSO & Flagsmith",
      "Stripe Billing",
      "Claude & OpenAI APIs",
      "WhatsApp & Facebook Graph API",
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Challenges", href: "#challenges" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
