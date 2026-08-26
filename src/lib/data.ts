export const personalInfo = {
  name: "Nahid Babu",
  title: "Senior Software Engineer",
  subtitle: "Building scalable systems from Dhaka to Geneva",
  location: "8 Rue Charles-Humbert, Geneva",
  availableFrom: "September 2026",
  email: "nahidjahid8698@gmail.com",
  phone: "+41 77 943 59 42",
  linkedin: "https://linkedin.com/in/nahidbabu",
  github: "https://github.com/Nahid71",
  about: [
    "I'm a Senior Software Engineer with nearly 7 years of experience architecting, building, and scaling cloud-native web applications. I specialize in creating robust backend and full-stack platforms using Python, Node.js, React, and serverless AWS/GCP infrastructure.",
    "Currently engineering scalable clinical data microservices at WellSky, I've driven core features to AWS serverless architecture — reducing latency and maintaining 99.9% uptime for US health-tech operations.",
    "Having already worked in Geneva developing European compliance and real-time streaming tools, I'm excited to return to Switzerland and contribute to innovative engineering teams in the region.",
  ],
};

export const experiences = [
  {
    company: "WellSky",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    location: "Remote (US Health-Tech)",
    achievements: [
      "Engineered scalable clinical data microservices handling millions of patient records",
      "Transitioned core features to AWS serverless architecture (Lambda, ECS, S3)",
      "Achieved and maintained 99.9% uptime across all critical services",
      "Led clean code practices, unit testing, and agile CI/CD pipelines across distributed teams",
    ],
  },
  {
    company: "Uberry",
    role: "Software Engineer",
    period: "2020 — 2022",
    location: "Geneva, Switzerland",
    achievements: [
      "Developed 'Priveo' — a GDPR compliance management platform for European businesses",
      "Built asynchronous WebSocket architectures for real-time dynamic data processing",
      "Designed high-performance database solutions with PostgreSQL and Redis",
      "Collaborated with cross-functional European teams in an agile environment",
    ],
  },
  {
    company: "Previous Roles",
    role: "Software Engineer",
    period: "2019 — 2020",
    location: "Dhaka, Bangladesh",
    achievements: [
      "Built full-stack web applications using Django REST Framework and React",
      "Designed and optimized relational databases with PostgreSQL and MySQL",
      "Implemented RESTful APIs serving thousands of concurrent users",
      "Established CI/CD pipelines and automated testing workflows",
    ],
  },
];

export const projects = [
  {
    title: "Clinical Data Platform",
    description:
      "Scalable microservices architecture for processing and managing clinical patient data across US healthcare networks. Engineered for 99.9% uptime with AWS serverless.",
    tech: ["Python", "FastAPI", "AWS Lambda", "PostgreSQL", "Docker"],
    outcome: "Reduced API p95 latency by 85% through serverless migration",
  },
  {
    title: "Priveo — GDPR Platform",
    description:
      "European compliance management platform enabling businesses to handle GDPR data subject requests, consent management, and privacy audits seamlessly.",
    tech: ["Django REST", "React", "PostgreSQL", "Redis", "WebSocket"],
    outcome: "Served 50+ European businesses with automated compliance workflows",
  },
  {
    title: "Real-Time Streaming Engine",
    description:
      "Asynchronous WebSocket architecture for processing dynamic data streams in real-time. Built for high throughput and low-latency data delivery.",
    tech: ["Node.js", "WebSocket", "Redis", "Docker", "GCP"],
    outcome: "Handled 10K+ concurrent connections with sub-100ms latency",
  },
  {
    title: "Healthcare Analytics Dashboard",
    description:
      "Interactive analytics dashboard providing real-time insights into clinical operations, patient outcomes, and resource utilization across healthcare facilities.",
    tech: ["React", "Next.js", "TypeScript", "D3.js", "REST API"],
    outcome: "Enabled data-driven decisions across 20+ healthcare facilities",
  },
];

export const skillCategories = [
  {
    title: "Backend",
    skills: ["Python", "Django REST", "FastAPI", "Flask", "Node.js"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS ECS", "S3", "GCP", "Docker", "CI/CD"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Redis", "MySQL"],
  },
  {
    title: "Tools & Practices",
    skills: ["Git", "Microservices", "REST APIs", "WebSockets", "Agile/Scrum"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
