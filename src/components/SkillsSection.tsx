"use client";

import { motion } from "framer-motion";

const skills = [
  "Discord Moderation",
  "Telegram Management",
  "Community Growth",
  "AI Video Editing",
  "Midjourney / AI Tools",
  "Web3 Marketing",
  "Content Creation",
  "X / Twitter Growth",
  "Ambassador Programs",
  "Brand Identity Design",
  "Event Coordination",
  "Alpha Research",
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-[100px] px-6 md:px-12 bg-gradient-to-b from-black via-[#020508] to-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-label-line flex items-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.5em] text-[var(--blue-glow)] uppercase mb-4">
          03 — Skills
        </div>
        <h2 className="font-[var(--font-michroma)] text-[clamp(28px,4vw,48px)] font-normal tracking-[0.05em] leading-[1.1] text-chrome-gradient mb-[60px]">
          Core Capabilities
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[2px] max-w-[1200px]">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="skill-bar relative p-5 bg-[var(--glass)] border border-[var(--glass-border)] flex items-center gap-3.5 transition-all duration-300 overflow-hidden hover:border-[rgba(74,158,255,0.2)]"
          >
            <div className="w-1.5 h-1.5 bg-[var(--blue-glow)] rounded-full shadow-[0_0_8px_var(--blue-glow)] shrink-0" />
            <div className="font-[var(--font-rajdhani)] text-[13px] font-semibold tracking-[0.15em] uppercase text-[var(--silver)]">
              {skill}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
