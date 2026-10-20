"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Cpu,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    "evv-next": true,
  });

  const toggleProject = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Production Systems &amp; Architecture
            <span className="gradient-text">.</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-4" />
          <p className="text-muted text-sm max-w-3xl mb-10">
            End-to-end systems I have architected, built, and operated in
            production — spanning a spec-driven .NET 10 healthcare compliance
            platform, a 14-vendor Python compliance engine across 25+ US states,
            a 5-environment GCP Terraform footprint, and a 37-module multi-tenant
            SaaS ERP.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExpanded = !!expandedIds[project.id];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                  project.featured
                    ? "border-accent/30 bg-white/[0.06]"
                    : "hover:bg-white/[0.07]"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      {project.badge && (
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono ${
                            project.featured
                              ? "bg-accent/20 text-accent border border-accent/40"
                              : "bg-white/10 text-foreground/80 border border-white/15"
                          }`}
                        >
                          {project.featured && <Sparkles size={12} />}
                          {project.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono text-muted">
                        {project.scale}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-accent/90 font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleProject(project.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-mono bg-white/5 hover:bg-accent/15 text-foreground hover:text-accent border border-white/10 hover:border-accent/30 transition-all shrink-0 self-start"
                    aria-expanded={isExpanded}
                  >
                    <span>
                      {isExpanded
                        ? "Hide Architecture & Details"
                        : "Inspect Architecture & Capabilities"}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={15} />
                    ) : (
                      <ChevronDown size={15} />
                    )}
                  </button>
                </div>

                <p className="text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-start sm:items-center gap-2 text-accent text-xs sm:text-sm mb-5 bg-accent/5 border border-accent/20 rounded-lg px-3.5 py-2.5">
                  <TrendingUp size={16} className="shrink-0 mt-0.5 sm:mt-0" />
                  <span className="font-medium">{project.outcome}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent/90 border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-glass-border grid md:grid-cols-2 gap-6">
                        <div>
                          <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                            <Cpu size={16} className="text-accent" />
                            <span>Architecture &amp; System Design</span>
                          </div>
                          <ul className="space-y-2.5">
                            {project.architecture.map((item, i) => (
                              <li
                                key={i}
                                className="text-xs sm:text-sm text-muted leading-relaxed flex items-start gap-2"
                              >
                                <span className="text-accent mt-1 shrink-0">
                                  ▹
                                </span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                              <CheckCircle2 size={16} className="text-accent" />
                              <span>Key Capabilities Built</span>
                            </div>
                            <ul className="space-y-2.5">
                              {project.capabilities.map((item, i) => (
                                <li
                                  key={i}
                                                                  className="text-xs sm:text-sm text-muted leading-relaxed flex items-start gap-2"
                                >
                                  <span className="text-accent mt-1 shrink-0">
                                    ▹
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {project.qualityAndDelivery &&
                            project.qualityAndDelivery.length > 0 && (
                              <div>
                                <div className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
                                  <ShieldCheck
                                    size={16}
                                    className="text-accent"
                                  />
                                  <span>
                                    Delivery, Compliance &amp; Quality Engineering
                                  </span>
                                </div>
                                <ul className="space-y-2.5">
                                  {project.qualityAndDelivery.map((item, i) => (
                                    <li
                                      key={i}
                                      className="text-xs sm:text-sm text-muted leading-relaxed flex items-start gap-2"
                                    >
                                      <span className="text-accent mt-1 shrink-0">
                                        ▹
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
