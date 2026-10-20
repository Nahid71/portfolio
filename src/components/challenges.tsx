"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Code2,
  Compass,
  Flame,
  Lightbulb,
  Search,
  ShieldAlert,
  Sparkles,
  Wrench,
} from "lucide-react";
import {
  challenges,
  problemSolvingPatterns,
  motivations,
  type ChallengeCategory,
} from "@/lib/data";

const categories: Array<{ label: string; value: "All" | ChallengeCategory }> = [
  { label: "All (28)", value: "All" },
  { label: "Production Incidents (5)", value: "Production Incidents" },
  {
    label: "Data Integrity & Compliance (7)",
    value: "Data Integrity & Compliance",
  },
  { label: "Multi-State Integration (5)", value: "Multi-State Integration" },
  { label: "Architecture & Design (5)", value: "Architecture & Design" },
  {
    label: "Full-Stack Delivery (4)",
    value: "Full-Stack Feature Delivery",
  },
  { label: "Security (2)", value: "Security Vulnerabilities" },
];

const platforms: Array<{
  label: string;
  value: "All" | "WellSky EVV" | "Dekhval ERP";
}> = [
  { label: "All Platforms (28)", value: "All" },
  { label: "WellSky EVV (19)", value: "WellSky EVV" },
  { label: "Dekhval ERP (9)", value: "Dekhval ERP" },
];

export default function Challenges() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | ChallengeCategory
  >("All");
  const [selectedPlatform, setSelectedPlatform] = useState<
    "All" | "WellSky EVV" | "Dekhval ERP"
  >("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({
    1: true,
    17: true,
  });

  const filteredChallenges = useMemo(() => {
    return challenges.filter((c) => {
      const matchesCategory =
        selectedCategory === "All" || c.category === selectedCategory;
      const matchesPlatform =
        selectedPlatform === "All" || c.platform === selectedPlatform;
      const q = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.problem.toLowerCase().includes(q) ||
        c.rootCause.toLowerCase().includes(q) ||
        c.impact.toLowerCase().includes(q) ||
        c.component.toLowerCase().includes(q);
      return matchesCategory && matchesPlatform && matchesQuery;
    });
  }, [selectedCategory, selectedPlatform, searchQuery]);

  const visibleChallenges = showAll
    ? filteredChallenges
    : filteredChallenges.slice(0, 8);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="challenges" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Engineering Challenges &amp; Problem-Solving
            <span className="gradient-text">.</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted text-sm max-w-3xl mb-10">
            28 real-world production incidents, silent compliance defects,
            multi-state integration edge cases, and architectural bottlenecks I
            diagnosed and resolved across WellSky EVV and Dekhval ERP — along
            with the engineering principles that guide my work.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <div className="glass rounded-2xl p-4 sm:p-6 mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-3 justify-between">
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <button
                  key={p.value}
                  type="button"
                  onClick={() => {
                    setSelectedPlatform(p.value);
                    setShowAll(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedPlatform === p.value
                      ? "bg-accent text-background font-semibold"
                      : "bg-white/5 text-muted hover:text-foreground border border-white/10"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search
                size={15}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowAll(false);
                }}
                placeholder="Search gRPC, SFTP, DCI, Prisma, XSS..."
                className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-glass-border">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.value);
                  setShowAll(false);
                }}
                className={`px-3 py-1.5 rounded-full text-xs transition-all ${
                  selectedCategory === cat.value
                    ? "bg-accent/20 text-accent border border-accent/40 font-medium"
                    : "bg-white/5 text-muted hover:text-foreground border border-white/10"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Challenge Cards */}
        <div className="space-y-4 mb-8">
          {visibleChallenges.map((challenge) => {
            const isExpanded = !!expandedIds[challenge.id];

            return (
              <div
                key={challenge.id}
                className="glass rounded-xl p-5 sm:p-6 hover:bg-white/[0.06] transition-colors"
              >
                <div
                  className="flex items-start justify-between gap-4 cursor-pointer"
                  onClick={() => toggleExpand(challenge.id)}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-accent">
                        #{String(challenge.id).padStart(2, "0")}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                          challenge.platform === "WellSky EVV"
                            ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                            : "bg-purple-500/10 text-purple-300 border-purple-500/30"
                        }`}
                      >
                        {challenge.platform}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 text-muted border border-white/10">
                        {challenge.category}
                      </span>
                      <span className="text-xs text-muted hidden sm:inline">
                        · {challenge.component}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-semibold text-foreground">
                      {challenge.title}
                    </h3>

                    {!isExpanded && (
                      <p className="text-xs sm:text-sm text-muted line-clamp-2">
                        {challenge.impact}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    aria-label={
                      isExpanded ? "Collapse challenge" : "Expand challenge"
                    }
                    className="p-1.5 rounded-lg bg-white/5 text-muted hover:text-accent shrink-0 mt-1"
                  >
                    {isExpanded ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-5 pt-5 border-t border-glass-border space-y-4 text-xs sm:text-sm">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                            <div className="flex items-center gap-2 font-semibold text-foreground mb-1.5">
                              <AlertTriangle
                                size={15}
                                className="text-amber-400"
                              />
                              <span>The Problem</span>
                            </div>
                            <p className="text-muted leading-relaxed">
                              {challenge.problem}
                            </p>
                          </div>

                          <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                            <div className="flex items-center gap-2 font-semibold text-foreground mb-1.5">
                              <ShieldAlert
                                size={15}
                                className="text-rose-400"
                              />
                              <span>Root Cause Diagnosis</span>
                            </div>
                            <p className="text-muted leading-relaxed">
                              {challenge.rootCause}
                            </p>
                          </div>
                        </div>

                        <div className="bg-white/[0.03] rounded-xl p-4 border border-white/5">
                          <div className="flex items-center gap-2 font-semibold text-foreground mb-2">
                            <Wrench size={15} className="text-accent" />
                            <span>Engineered Solution</span>
                          </div>
                          <ul className="space-y-1.5">
                            {challenge.solution.map((step, i) => (
                              <li
                                key={i}
                                className="text-muted leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-accent mt-1 shrink-0">
                                  ▹
                                </span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>

                          {challenge.codeSnippet && (
                            <div className="mt-3 rounded-lg bg-black/50 border border-white/10 p-3.5 overflow-x-auto">
                              <div className="flex items-center gap-1.5 text-[11px] font-mono text-accent mb-1.5">
                                <Code2 size={13} />
                                <span>{challenge.codeSnippet.language}</span>
                              </div>
                              <pre className="text-xs font-mono text-foreground/90 leading-relaxed">
                                <code>{challenge.codeSnippet.code}</code>
                              </pre>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <div className="flex-1 flex items-start gap-2.5 bg-accent/10 border border-accent/25 rounded-xl p-3.5">
                            <CheckCircle2
                              size={16}
                              className="text-accent shrink-0 mt-0.5"
                            />
                            <div>
                              <span className="font-semibold text-foreground block text-xs uppercase tracking-wider mb-0.5">
                                Production Impact
                              </span>
                              <span className="text-muted">
                                {challenge.impact}
                              </span>
                            </div>
                          </div>

                          {challenge.lessonLearned && (
                            <div className="flex-1 flex items-start gap-2.5 bg-purple-500/10 border border-purple-500/25 rounded-xl p-3.5">
                              <Lightbulb
                                size={16}
                                className="text-purple-300 shrink-0 mt-0.5"
                              />
                              <div>
                                <span className="font-semibold text-foreground block text-xs uppercase tracking-wider mb-0.5">
                                  Architectural Takeaway
                                </span>
                                <span className="text-muted">
                                  {challenge.lessonLearned}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {filteredChallenges.length > 8 && (
          <div className="text-center mb-20">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-all text-sm font-medium"
            >
              <span>
                {showAll
                  ? "Show Fewer Case Studies"
                  : `Show All ${filteredChallenges.length} Case Studies`}
              </span>
              {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        )}

        {/* 7 Problem-Solving Patterns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-2.5 mb-2">
            <Compass size={22} className="text-accent" />
            <h3 className="text-2xl font-bold">
              7 Engineering &amp; Problem-Solving Principles
            </h3>
          </div>
          <p className="text-muted text-sm mb-6 max-w-2xl">
            Consistent engineering habits forged across 28 production incidents,
            compliance audits, and platform migrations.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {problemSolvingPatterns.map((pattern) => (
              <div
                key={pattern.number}
                className="glass rounded-xl p-5 hover:bg-white/[0.07] transition-colors"
              >
                <div className="text-xs font-mono text-accent mb-1">
                  PATTERN {pattern.number}
                </div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  {pattern.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {pattern.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What Motivates Me */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2.5 mb-2">
            <Flame size={22} className="text-accent" />
            <h3 className="text-2xl font-bold">What Drives My Engineering</h3>
          </div>
          <p className="text-muted text-sm mb-6 max-w-2xl">
            Why I care deeply about high-stakes healthcare reliability,
            root-cause diagnosis, and structural correctness.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {motivations.map((m) => (
              <div
                key={m.title}
                className="glass rounded-xl p-6 border-l-2 border-l-accent/60 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={15} className="text-accent shrink-0" />
                  <h4 className="font-semibold text-base text-foreground">
                    {m.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

