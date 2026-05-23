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
    <section id="about" className="py-[clamp(100px,12vw,160px)] px-6 md:px-12 lg:px-16 xl:px-24 bg-gradient-to-b from-black via-[#020508] to-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1200px] mx-auto">
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label-line flex items-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.35em] text-[var(--blue-glow)] uppercase mb-6">
            01 — About
          </div>

          <h2 className="font-[var(--font-michroma)] text-[clamp(26px,3.5vw,44px)] font-normal tracking-[0.04em] leading-[1.15] text-chrome-gradient mb-10">
            Building Communities<br />Beyond Web2
          </h2>
          <p className="text-[15px] leading-[2] text-[rgba(200,212,224,0.6)] font-normal mb-7">
            I specialize in <strong className="text-chrome font-semibold">building and managing Web3 communities</strong> across Discord, Telegram, and X. Bridging the gap between cutting-edge technology and real human connection.
          </p>
          <p className="text-[15px] leading-[2] text-[rgba(200,212,224,0.6)] font-normal">
            Experienced in <strong className="text-chrome font-semibold">moderation, ambassador programs, community growth, AI content creation,</strong> and Web3 branding. Focused on creating impact at the intersection of AI and decentralized ecosystems.
          </p>
        </motion.div>

        {/* Right - Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 gap-5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-line relative p-8 md:p-9 bg-[rgba(255,255,255,0.02)] border border-[rgba(200,212,224,0.04)] rounded-sm overflow-hidden transition-all duration-300 hover:border-[rgba(74,158,255,0.15)]"
            >
              <div className="font-[var(--font-michroma)] text-[clamp(28px,4vw,40px)] text-chrome leading-none mb-3">
                {stat.num}
                {stat.suffix && <span className="text-[var(--blue-glow)] text-[18px] ml-0.5">{stat.suffix}</span>}
              </div>
              <div className="text-[11px] tracking-[0.12em] uppercase text-[rgba(200,212,224,0.4)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
