"use client";

import { motion } from "framer-motion";

const stats = [
  { num: "50", suffix: "+", label: "Projects Moderated" },
  { num: "3", suffix: "yr", label: "Web3 Experience" },
  { num: "10", suffix: "k+", label: "Community Members" },
  { num: "∞", suffix: "", label: "Impact Created" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-[clamp(80px,10vw,140px)] px-6 md:px-12 lg:px-[48px] bg-gradient-to-b from-black via-[#020508] to-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-[1200px] mx-auto">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label-line flex items-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.4em] text-[var(--blue-glow)] uppercase mb-5">
            01 — About
          </div>
          <h2 className="font-[var(--font-michroma)] text-[clamp(28px,4vw,48px)] font-normal tracking-[0.05em] leading-[1.1] text-chrome-gradient mb-10">
            Building Communities<br />Beyond Web2
          </h2>
          <p className="text-[16px] leading-[1.9] text-[rgba(200,212,224,0.7)] font-normal mb-7">
            I specialize in <strong className="text-chrome font-semibold">building and managing Web3 communities</strong> across Discord, Telegram, and X. Bridging the gap between cutting-edge technology and real human connection.
          </p>
          <p className="text-[16px] leading-[1.9] text-[rgba(200,212,224,0.7)] font-normal">
            Experienced in <strong className="text-chrome font-semibold">moderation, ambassador programs, community growth, AI content creation,</strong> and Web3 branding. Focused on creating impact at the intersection of AI and decentralized ecosystems.
          </p>
        </motion.div>

        {/* Right - Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 gap-[2px]"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-line relative p-7 bg-[var(--glass)] border border-[var(--glass-border)] overflow-hidden transition-colors duration-300 hover:border-[rgba(74,158,255,0.2)]"
            >
              <div className="font-[var(--font-michroma)] text-[36px] text-chrome leading-none mb-2">
                {stat.num}
                {stat.suffix && <span className="text-[var(--blue-glow)] text-[20px]">{stat.suffix}</span>}
              </div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
