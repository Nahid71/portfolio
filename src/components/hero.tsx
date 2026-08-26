"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { personalInfo } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-purple/15 rounded-full blur-[128px] animate-float-delayed" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        <motion.p
          variants={item}
          className="text-accent font-mono text-sm mb-4"
        >
          Hi, my name is
        </motion.p>

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
          className="text-muted text-lg max-w-2xl mx-auto mb-10"
        >
          {personalInfo.subtitle}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent/10 text-accent border border-accent/30 hover:bg-accent/20 transition-all duration-200 font-medium"
          >
            <FolderOpen size={18} />
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg glass hover:bg-white/10 transition-all duration-200 text-foreground font-medium"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted hover:text-accent transition-colors">
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
