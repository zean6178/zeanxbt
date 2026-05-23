"use client";

import { motion } from "framer-motion";

const skillGroups = [
  { category: "Community", items: ["Discord Moderation", "Telegram Management", "Community Growth", "Ambassador Programs"] },
  { category: "Creative", items: ["AI Video Editing", "Midjourney / AI Tools", "Content Creation", "Brand Identity Design"] },
  { category: "Strategy", items: ["Web3 Marketing", "X / Twitter Growth", "Event Coordination", "Alpha Research"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-[clamp(100px,12vw,160px)] bg-gradient-to-b from-black via-[#020508] to-black">
      <div className="w-[min(1400px,92%)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="section-label-line flex items-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.35em] text-[var(--blue-glow)] uppercase mb-6">
            03 — Skills
          </div>
          <h2 className="font-[var(--font-michroma)] text-[clamp(26px,3.5vw,44px)] font-normal tracking-[0.04em] leading-[1.15] text-chrome-gradient">
            Core Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="font-[var(--font-michroma)] text-[10px] tracking-[0.25em] text-[var(--blue-glow)] uppercase mb-7 opacity-70">
                {group.category}
              </div>
              <div className="flex flex-col">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="group relative py-5 px-5 border-b border-[rgba(200,212,224,0.04)] last:border-b-0 flex items-center gap-4 transition-all duration-200 hover:bg-[rgba(74,158,255,0.03)] hover:pl-7"
                  >
                    <div className="w-1 h-1 bg-[var(--blue-glow)] rounded-full opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_6px_var(--blue-glow)] transition-all duration-200 shrink-0" />
                    <div className="font-[var(--font-rajdhani)] text-[14px] font-medium tracking-[0.06em] text-[rgba(200,212,224,0.6)] group-hover:text-[var(--silver)] transition-colors duration-200">
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
