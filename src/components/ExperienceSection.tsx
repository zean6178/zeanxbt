"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Moderator",
    project: "Manta Network",
    period: "2022 - Present",
    active: true,
  },
  {
    role: "Ambassador",
    project: "Polyhedra Network",
    period: "2023 - 2025",
    active: false,
  },
  {
    role: "Ambassador",
    project: "Humanity Protocol",
    period: "2024 - Present",
    active: true,
  },
  {
    role: "Moderator",
    project: "Catizen",
    period: "2024",
    active: false,
  },
  {
    role: "Community Crew",
    project: "Coinfest Asia 2024",
    period: "2024",
    active: false,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-[1px] gradient-line" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-[1px] bg-white/10" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.project}-${exp.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] md:left-[26px] top-3 w-3 h-3 rounded-full border-2 border-white/30 bg-[#0a0a0f]">
                  {exp.active && (
                    <span className="absolute inset-0 rounded-full bg-green-400/50 animate-pulse" />
                  )}
                </div>

                {/* Card */}
                <div className="p-5 rounded-xl border border-white/5 bg-[#12121a]/50 card-hover">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                        <Briefcase className="w-4 h-4 text-[#c0c0c8]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base">
                          {exp.role}
                        </h3>
                        <p className="text-[#8a8a96] text-sm">{exp.project}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {exp.active && (
                        <span className="w-2 h-2 rounded-full bg-green-400" />
                      )}
                      <span className="text-xs text-[#c0c0c8]/60 font-mono">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
