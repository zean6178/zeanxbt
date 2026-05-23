"use client";

import { motion } from "framer-motion";

const portfolioItems = [
  { type: "AI Video", title: "Cinematic AI Reels", sub: "Web3 Brand Visuals", bg: 1, size: "large" },
  { type: "Branding", title: "Web3 Visual Identity", sub: "Logo & Brand System", bg: 2, size: "medium" },
  { type: "Community", title: "Ambassador Campaign", sub: "Growth & Outreach", bg: 3, size: "medium" },
  { type: "Social Media", title: "Discord Moderation", sub: "Server Management", bg: 1, size: "small" },
  { type: "Content", title: "Social Media Design", sub: "X & Twitter Campaigns", bg: 2, size: "small" },
  { type: "Strategy", title: "Community Growth", sub: "10K+ Members Onboarded", bg: 3, size: "small" },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-[clamp(100px,12vw,160px)] px-6 md:px-12 lg:px-16 xl:px-24 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[1200px] mx-auto mb-14"
      >
        <div className="section-label-line flex items-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.35em] text-[var(--blue-glow)] uppercase mb-6">
          04 — Portfolio
        </div>
        <h2 className="font-[var(--font-michroma)] text-[clamp(26px,3.5vw,44px)] font-normal tracking-[0.04em] leading-[1.15] text-chrome-gradient">
          Selected Work
        </h2>
      </motion.div>

      {/* Bento Grid - proper layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1200px] mx-auto">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className={`group relative overflow-hidden rounded-sm border border-[rgba(200,212,224,0.04)] cursor-pointer transition-all duration-300 hover:border-[rgba(74,158,255,0.2)] hover:-translate-y-0.5 ${
              item.size === "large"
                ? "md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[280px] lg:min-h-[460px]"
                : item.size === "medium"
                ? "min-h-[240px]"
                : "min-h-[200px]"
            }`}
          >
            {/* Background */}
            <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03] ${
              item.bg === 1 ? "bg-gradient-to-br from-[#0a1628] via-[#050d1a] to-[#020810]" :
              item.bg === 2 ? "bg-gradient-to-br from-[#080f20] via-[#040c1a] to-[#020810]" :
              "bg-gradient-to-br from-[#060e1e] via-[#040a16] to-[#020810]"
            }`}>
              {/* Visual element */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                <div className={`rounded-full border border-[rgba(74,158,255,0.08)] animate-[spin_25s_linear_infinite] ${
                  item.size === "large" ? "w-[200px] h-[200px]" : "w-[100px] h-[100px]"
                }`} />
                <div className={`absolute rounded-full border border-[rgba(74,158,255,0.12)] animate-[spin_15s_linear_infinite_reverse] ${
                  item.size === "large" ? "w-[130px] h-[130px]" : "w-[60px] h-[60px]"
                }`} />
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 lg:p-9">
              {item.size === "large" && (
                <div className="absolute top-6 right-6 px-3 py-1.5 bg-[rgba(74,158,255,0.1)] border border-[rgba(74,158,255,0.2)] rounded-sm">
                  <span className="font-[var(--font-michroma)] text-[8px] tracking-[0.25em] text-[var(--blue-glow)] uppercase">Featured</span>
                </div>
              )}
              <div className="font-[var(--font-michroma)] text-[9px] tracking-[0.25em] text-[var(--blue-glow)] uppercase mb-3 opacity-80">
                {item.type}
              </div>
              <div className={`font-[var(--font-michroma)] text-chrome tracking-[0.03em] mb-2 ${
                item.size === "large" ? "text-[22px]" : "text-[15px]"
              }`}>
                {item.title}
              </div>
              <div className="text-[13px] text-[rgba(200,212,224,0.4)] tracking-[0.05em]">
                {item.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
