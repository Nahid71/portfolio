"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Briefcase,
  Globe,
  Layers,
  ShieldCheck,
} from "lucide-react";
import {
  personalInfo,
  platformContributions,
  competencies,
} from "@/lib/data";

const highlights = [
  { icon: Briefcase, label: "7+ Years Engineering Experience" },
  { icon: ShieldCheck, label: "#1 EVV Compliance Contributor" },
  { icon: Globe, label: "US Healthcare & European Teams" },
  { icon: MapPin, label: "Based in Geneva, Switzerland" },
  { icon: Calendar, label: `Available ${personalInfo.availableFrom}` },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            About &amp; Impact<span className="gradient-text">.</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            {personalInfo.about.map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed text-[15px]">
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="glass rounded-xl p-4 flex items-center gap-3"
              >
                <Icon size={20} className="text-accent shrink-0" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Platform Contributions at a Glance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <Layers size={20} className="text-accent" />
            <h3 className="text-xl font-semibold">
              Platform Contributions at a Glance
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {platformContributions.map((item) => (
              <div
                key={item.system}
                className="glass rounded-xl p-5 flex flex-col justify-between hover:bg-white/[0.07] transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="font-semibold text-sm text-foreground">
                      {item.system}
                    </h4>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-accent/15 text-accent border border-accent/30 shrink-0">
                      {item.commits}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-accent/90 mb-1">
                    {item.role}
                  </p>
                  <p className="text-xs text-muted mb-3">{item.scope}</p>
                </div>
                <p className="text-xs text-muted/90 leading-relaxed border-t border-glass-border pt-3">
                  {item.highlight}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-5">
            Core Engineering Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((comp) => (
              <div
                key={comp.title}
                className="glass rounded-xl p-5 hover:border-accent/30 transition-colors"
              >
                <h4 className="text-sm font-semibold text-accent mb-1.5">
                  {comp.title}
                </h4>
                <p className="text-xs text-muted leading-relaxed">
                  {comp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
