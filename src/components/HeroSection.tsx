"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,rgba(30,70,140,0.12)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_70%_35%,rgba(74,158,255,0.06)_0%,transparent_50%),linear-gradient(180deg,#000_0%,#020408_50%,#000_100%)]" />

      {/* Animated grid - subtle */}
      <div className="hero-grid" />

      {/* Content - Two Column */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-24 pt-[160px] md:pt-[140px] pb-[100px] max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-16 lg:gap-12 items-center">
        {/* Left - Text Content */}
        <div className="max-w-[600px]">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hero-tag-line flex items-center gap-3 font-[var(--font-rajdhani)] text-[11px] font-semibold tracking-[0.3em] text-[var(--blue-glow)] uppercase mb-10"
          >
            // VERSION 2.0 &nbsp;&nbsp; ONLINE
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="glitch font-[var(--font-michroma)] text-[clamp(52px,7vw,96px)] font-normal leading-[0.9] tracking-[-0.02em] mb-6"
            data-text="zeanXBT"
          >
            <span className="text-chrome">z</span>
            <span className="text-ean-gradient">ean</span>
            <span className="text-blue-gradient">XBT</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-[var(--font-rajdhani)] text-[14px] font-medium tracking-[0.2em] text-muted uppercase mb-14"
          >
            <span className="text-[var(--blue-glow)]">AI</span> ×{" "}
            <span className="text-[var(--blue-glow)]">WEB3</span> ×{" "}
            <span className="text-[var(--blue-glow)]">FUTURE</span>
          </motion.div>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col gap-4 mb-16"
          >
            {["Web3 Moderator & Ambassador", "AI Video Creator", "Web3 Community Builder"].map((role) => (
              <div key={role} className="flex items-center gap-4 text-[16px] font-normal tracking-[0.04em] text-[rgba(200,212,224,0.65)]">
                <span className="w-5 h-[1px] bg-[var(--blue-glow)] opacity-50" />
                {role}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex gap-5 flex-wrap"
          >
            <a
              href="#portfolio"
              className="clip-btn btn-primary-gradient px-12 py-[18px] font-[var(--font-rajdhani)] text-[13px] font-bold tracking-[0.2em] uppercase text-black no-underline inline-flex items-center gap-2"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="clip-btn btn-secondary-glow px-12 py-[18px] font-[var(--font-rajdhani)] text-[13px] font-bold tracking-[0.2em] uppercase text-[var(--silver)] no-underline border border-[rgba(200,212,224,0.15)] bg-transparent inline-flex items-center gap-2 transition-all duration-300 hover:text-chrome"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right - Holographic Data Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-full max-w-[420px] aspect-square">
            {/* Orbiting rings */}
            <div className="absolute inset-0 rounded-full border border-[rgba(74,158,255,0.08)] animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-[8%] rounded-full border border-[rgba(74,158,255,0.12)] animate-[spin_25s_linear_infinite_reverse]" />
            <div className="absolute inset-[16%] rounded-full border border-[rgba(74,158,255,0.06)] animate-[spin_18s_linear_infinite]" />

            {/* Center panel */}
            <div className="absolute inset-[22%] rounded-xl bg-[rgba(2,4,8,0.8)] border border-[rgba(74,158,255,0.12)] backdrop-blur-md flex flex-col justify-center px-8 py-7 overflow-hidden">
              {/* Panel header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[rgba(74,158,255,0.08)]">
                <div className="w-2 h-2 rounded-full bg-[var(--blue-glow)] shadow-[0_0_6px_var(--blue-glow)]" />
                <span className="font-[var(--font-michroma)] text-[9px] tracking-[0.2em] text-[rgba(200,212,224,0.4)] uppercase">System Status</span>
                <span className="ml-auto font-[var(--font-rajdhani)] text-[10px] font-semibold text-[#4ade80] tracking-wider">● LIVE</span>
              </div>

              {/* Data rows */}
              <div className="space-y-5 flex-1 flex flex-col justify-center">
                {[
                  { key: "projects", val: "50+", color: "text-[var(--blue-glow)]" },
                  { key: "community", val: "10K+", color: "text-[var(--blue-glow)]" },
                  { key: "experience", val: "3 yrs", color: "text-[var(--blue-glow)]" },
                  { key: "status", val: "BUILDING", color: "text-[#4ade80]" },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between">
                    <span className="text-[12px] tracking-[0.1em] text-[rgba(200,212,224,0.4)] font-[var(--font-rajdhani)] font-medium">{item.key}</span>
                    <span className={`text-[14px] font-bold font-[var(--font-rajdhani)] ${item.color}`}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-[12%] right-[15%] w-1.5 h-1.5 bg-[var(--blue-glow)] rounded-full shadow-[0_0_8px_var(--blue-glow)] animate-[pulse-shape_3s_ease_infinite]" />
            <div className="absolute bottom-[18%] left-[12%] w-1 h-1 bg-[var(--blue-glow)] rounded-full shadow-[0_0_6px_var(--blue-glow)] animate-[pulse-shape_4s_ease_infinite_1s]" />
            <div className="absolute top-[55%] right-[8%] w-1 h-1 bg-[rgba(74,158,255,0.5)] rounded-full animate-[pulse-shape_5s_ease_infinite_2s]" />
          </div>
        </motion.div>
      </div>

      {/* Status bar - bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-6 md:left-12 lg:left-16 flex gap-12 items-center"
      >
        {[
          { label: "Focus", value: "SHARP" },
          { label: "Status", value: "BUILDING" },
          { label: "Mission", value: "FREEDOM" },
        ].map((item) => (
          <div key={item.label} className="font-[var(--font-michroma)] text-[9px] tracking-[0.12em] text-[rgba(200,212,224,0.25)] uppercase">
            {item.label}
            <span className="block text-[var(--blue-glow)] text-[13px] font-[var(--font-rajdhani)] font-semibold mt-1">
              {item.value}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
