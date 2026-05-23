"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Web3 Moderator",
    project: "Manta Network",
    period: "2022 - Present",
    active: true,
    description:
      "Part of Manta Indonesia Team. Grew Manta Indonesia community from 0 to 7K members within one month. Helped achieve user growth from thousands to 5 million globally.",
  },
  {
    role: "Ambassador",
    project: "Polyhedra Network",
    period: "2023 - 2025",
    active: false,
    description:
      "Helping achieved user growth in global from thousand to 5 million. Led campaigns that attracted over 100,000 participants.",
  },
  {
    role: "Ambassador",
    project: "Nesa & Privasea",
    period: "2024 - Present",
    active: true,
    description:
      "Helping introduce AI and FHE technology to the community while bridging communication between the team and members in a clear and easily understandable way.",
  },
  {
    role: "Moderator",
    project: "StoryChain",
    period: "2024 - Present",
    active: true,
    description:
      "Led campaigns that attracted over 100,000 participants, drove more than 100% growth in new sign-ups Mini App on Telegram.",
  },
  {
    role: "Community Crew",
    project: "Coinfest Asia 2024",
    period: "2024",
    active: false,
    description:
      "Helping community events and discussions at Coinfest Asia 2024 in Bali, and hosted cross-projects AMA's with various Web3 projects.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-neon-blue/3 cinematic-blur" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-chrome tracking-wider mb-4">
            Experience
          </h2>
          <div className="w-24 h-[2px] gradient-line" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] gradient-line-vertical" />

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.project}-${exp.role}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] md:left-[26px] top-6 w-3 h-3 rounded-full border-2 border-neon-blue/50 bg-black">
                  {exp.active && (
                    <span className="absolute inset-[-2px] rounded-full bg-neon-blue/30 animate-ping" />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card rounded-xl p-6">
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-neon-blue" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base">
                          {exp.role}
                        </h3>
                        <p className="text-neon-blue text-sm font-medium">
                          {exp.project}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.active && (
                        <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                      )}
                      <span className="text-xs text-silver-dark font-mono tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-silver-dark text-sm leading-relaxed pl-13">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
