"use client";

import { motion } from "framer-motion";

const portfolioItems = [
  { type: "AI Video", title: "Cinematic AI Reels", sub: "Web3 Brand Visuals", bg: 1, featured: true },
  { type: "Branding", title: "Web3 Visual Identity", sub: "Logo & Brand System", bg: 2, featured: false },
  { type: "Community", title: "Ambassador Campaign", sub: "Growth & Outreach", bg: 3, featured: false },
  { type: "Social Media", title: "Discord Moderation", sub: "Server Management", bg: 1, featured: false },
  { type: "Content", title: "Social Media Design", sub: "X & Twitter Campaigns", bg: 2, featured: false },
  { type: "Strategy", title: "Community Growth", sub: "10K+ Members Onboarded", bg: 3, featured: false },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-[clamp(80px,10vw,140px)] px-6 md:px-12 lg:px-[48px] bg-black">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[1200px] mx-auto"
      >
        <div className="section-label-line flex items-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.4em] text-[var(--blue-glow)] uppercase mb-5">
          04 — Portfolio
        </div>
        <h2 className="font-[var(--font-michroma)] text-[clamp(28px,4vw,48px)] font-normal tracking-[0.05em] leading-[1.1] text-chrome-gradient mb-12">
          Selected Work
        </h2>
      </motion.div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1200px] mx-auto auto-rows-[200px] md:auto-rows-[220px]">
        {portfolioItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className={`group relative bg-[var(--glass)] border border-[var(--glass-border)] overflow-hidden cursor-pointer transition-all duration-300 hover:border-[rgba(74,158,255,0.3)] hover:-translate-y-1 ${
              item.featured
                ? "md:col-span-2 md:row-span-2"
                : i === 1
                ? "lg:col-span-2"
                : ""
            }`}
          >
            {/* Background */}
            <div className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${
              item.bg === 1 ? "bg-gradient-to-br from-[#0a1628] via-[#050d1a] to-[#020810]" :
              item.bg === 2 ? "bg-gradient-to-br from-[#080f20] via-[#040c1a] to-[#020810]" :
              "bg-gradient-to-br from-[#060e1e] via-[#040a16] to-[#020810]"
            }`}>
              {/* Visual element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`rounded-full border border-[rgba(74,158,255,0.12)] animate-[spin_20s_linear_infinite] ${
                  item.featured ? "w-[180px] h-[180px]" : "w-[100px] h-[100px]"
                }`} />
                <div className={`absolute rounded-full border border-[rgba(74,158,255,0.2)] animate-[spin_12s_linear_infinite_reverse] ${
                  item.featured ? "w-[120px] h-[120px]" : "w-[60px] h-[60px]"
                }`} />
                {item.featured && (
                  <div className="absolute w-[60px] h-[60px] rounded-full border border-[rgba(74,158,255,0.25)] animate-[spin_8s_linear_infinite]" />
                )}
              </div>
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-7">
              {item.featured && (
                <div className="absolute top-5 right-5 px-3 py-1 bg-[rgba(74,158,255,0.15)] border border-[rgba(74,158,255,0.3)] rounded-sm">
                  <span className="font-[var(--font-michroma)] text-[8px] tracking-[0.3em] text-[var(--blue-glow)] uppercase">Featured</span>
                </div>
              )}
              <div className="font-[var(--font-michroma)] text-[9px] tracking-[0.3em] text-[var(--blue-glow)] uppercase mb-2">
                {item.type}
              </div>
              <div className={`font-[var(--font-michroma)] text-chrome tracking-[0.05em] mb-1 ${
                item.featured ? "text-[20px]" : "text-[15px]"
              }`}>
                {item.title}
              </div>
              <div className="text-[12px] text-muted tracking-[0.08em]">
                {item.sub}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
