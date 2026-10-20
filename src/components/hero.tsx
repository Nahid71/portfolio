"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen, Wrench } from "lucide-react";
import { personalInfo, heroStats } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/15 rounded-full blur-[128px] animate-float-delayed" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-accent font-mono text-xs mb-6 border border-accent/20"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>
            Enterprise Healthcare Compliance (.NET 10 / Python / GCP) &amp; Multi-Tenant AI SaaS
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4"
        >
          {personalInfo.name}
          <span className="gradient-text">.</span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        <motion.p
          variants={item}
          className="text-muted text-lg max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mb-14"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-all duration-200 font-medium"
          >
            <FolderOpen size={18} />
            Explore 7 Production Systems
          </a>
          <a
            href="#challenges"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/10 transition-all duration-200 text-foreground font-medium"
          >
            <Wrench size={18} className="text-accent" />
            28 Engineering Case Studies
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/10 transition-all duration-200 text-muted hover:text-foreground font-medium"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-left"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text font-mono">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-muted mt-0.5 leading-snug">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="text-muted hover:text-accent transition-colors"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
