"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Globe } from "lucide-react";
import { personalInfo } from "@/lib/data";

const highlights = [
  { icon: Briefcase, label: "~7 Years Experience" },
  { icon: Globe, label: "International Teams" },
  { icon: MapPin, label: "Geneva, Switzerland" },
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
            About Me<span className="gradient-text">.</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            {personalInfo.about.map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed">
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
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
