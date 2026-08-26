"use client";

import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Experience<span className="gradient-text">.</span>
          </h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-glass-border" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-12 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
              } pl-12 md:pl-0`}
            >
              <div
                className={`absolute top-6 w-3 h-3 rounded-full bg-accent border-2 border-background ${
                  index % 2 === 0
                    ? "left-[10px] md:left-auto md:-right-[1.85rem]"
                    : "left-[10px] md:-left-[1.85rem]"
                }`}
              />

              <div className="glass rounded-xl p-6 hover:bg-white/[0.07] transition-colors duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <Building2 size={20} className="text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">{exp.company}</h3>
                    <p className="text-accent text-sm">{exp.role}</p>
                    <p className="text-muted text-xs mt-1">
                      {exp.period} · {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="text-muted text-sm flex items-start gap-2"
                    >
                      <span className="text-accent mt-1.5 shrink-0">▹</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
