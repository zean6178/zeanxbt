"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    num: "01",
    title: "Web3 Moderator",
    desc: "Community moderation across Discord and Telegram. Enforcing rules, onboarding members, and maintaining healthy ecosystem dynamics for Web3 projects.",
  },
  {
    num: "02",
    title: "Community Manager",
    desc: "Strategic community growth and engagement. Building loyal communities from the ground up, coordinating events, AMAs, and campaigns.",
  },
  {
    num: "03",
    title: "Ambassador Programs",
    desc: "Representing Web3 protocols as official ambassador. Brand advocacy, content creation, regional outreach, and ecosystem expansion.",
  },
  {
    num: "04",
    title: "AI Video Creator",
    desc: "Creating cinematic AI-powered video content for Web3 brands and personal branding. Leveraging cutting-edge AI tools to produce futuristic visuals.",
  },
  {
    num: "05",
    title: "AI Branding Designer",
    desc: "Crafting futuristic brand identities using Midjourney and AI tools. Chrome aesthetics, dark UI, cyberpunk visual identity design.",
  },
  {
    num: "06",
    title: "Web3 Marketing",
    desc: "Go-to-market strategies for crypto projects. X/Twitter campaigns, alpha sharing, KOL coordination, and community-driven growth hacking.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-[100px] px-6 md:px-12 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="section-label-line flex items-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.5em] text-[var(--blue-glow)] uppercase mb-4">
          02 — Experience
        </div>
        <h2 className="font-[var(--font-michroma)] text-[clamp(28px,4vw,48px)] font-normal tracking-[0.05em] leading-[1.1] text-chrome-gradient mb-[60px]">
          What I Do
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] max-w-[1200px]">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="clip-card relative p-9 bg-[var(--glass)] border border-[var(--glass-border)] overflow-hidden transition-all duration-400 hover:border-[rgba(74,158,255,0.25)] hover:-translate-y-1 group"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(74,158,255,0.06)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="relative z-10">
              <div className="font-[var(--font-michroma)] text-[10px] tracking-[0.3em] text-[var(--blue-glow)] mb-5 opacity-70">
                [ {exp.num} ]
              </div>
              <div className="font-[var(--font-michroma)] text-[16px] text-chrome tracking-[0.05em] mb-3">
                {exp.title}
              </div>
              <div className="text-[14px] leading-[1.7] text-[rgba(200,212,224,0.55)] font-normal">
                {exp.desc}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
