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
    <section id="experience" className="py-[clamp(100px,12vw,160px)] px-6 md:px-12 lg:px-16 xl:px-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[1200px] mx-auto mb-14"
      >
        <div className="section-label-line flex items-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.35em] text-[var(--blue-glow)] uppercase mb-6">
          02 — Experience
        </div>
        <h2 className="font-[var(--font-michroma)] text-[clamp(26px,3.5vw,44px)] font-normal tracking-[0.04em] leading-[1.15] text-chrome-gradient">
          What I Do
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-7 max-w-[1200px] mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative rounded-sm bg-[rgba(255,255,255,0.02)] border border-[rgba(200,212,224,0.04)] p-9 md:p-10 lg:p-11 overflow-hidden transition-all duration-300 hover:border-[rgba(74,158,255,0.15)] hover:bg-[rgba(74,158,255,0.02)]"
          >
            {/* Top accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--blue-glow)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

            <div className="font-[var(--font-michroma)] text-[10px] tracking-[0.2em] text-[var(--blue-glow)] mb-7 opacity-60">
              {exp.num}
            </div>
            <div className="font-[var(--font-michroma)] text-[15px] text-chrome tracking-[0.04em] mb-5 leading-[1.3]">
              {exp.title}
            </div>
            <div className="text-[14px] leading-[1.85] text-[rgba(200,212,224,0.5)] font-normal">
              {exp.desc}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
