"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "10%", dur: "9s", delay: "0s", drift: "30px" },
  { left: "20%", dur: "12s", delay: "2s", drift: "-20px" },
  { left: "35%", dur: "8s", delay: "4s", drift: "15px" },
  { left: "55%", dur: "14s", delay: "1s", drift: "-35px" },
  { left: "70%", dur: "10s", delay: "3s", drift: "25px" },
  { left: "85%", dur: "11s", delay: "5s", drift: "-15px" },
  { left: "45%", dur: "7s", delay: "6s", drift: "40px" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(30,70,140,0.15)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_75%_35%,rgba(74,158,255,0.08)_0%,transparent_50%),linear-gradient(180deg,#000_0%,#020408_50%,#000_100%)]" />

      {/* Animated grid */}
      <div className="hero-grid" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              ["--dur" as string]: p.dur,
              ["--delay" as string]: p.delay,
              ["--drift" as string]: p.drift,
            }}
          />
        ))}
      </div>

      {/* Content - Two Column Layout */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-[48px] pt-[140px] md:pt-[120px] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left - Text Content */}
        <div>
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-tag-line flex items-center gap-3 font-[var(--font-rajdhani)] text-[11px] font-semibold tracking-[0.3em] text-[var(--blue-glow)] uppercase mb-8"
          >
            // VERSION 2.0 &nbsp;&nbsp; ONLINE
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glitch font-[var(--font-michroma)] text-[clamp(48px,7vw,88px)] font-normal leading-[0.95] tracking-[-0.02em] mb-4"
            data-text="zeanXBT"
          >
            <span className="text-chrome">z</span>
            <span className="text-ean-gradient">ean</span>
            <span className="text-blue-gradient">XBT</span>
          </motion.h1>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-[var(--font-rajdhani)] text-[14px] font-medium tracking-[0.25em] text-muted uppercase mb-12"
          >
            <span className="text-[var(--blue-glow)]">AI</span> ×{" "}
            <span className="text-[var(--blue-glow)]">WEB3</span> ×{" "}
            <span className="text-[var(--blue-glow)]">FUTURE</span>
          </motion.div>

          {/* Roles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col gap-3 mb-14"
          >
            {["Web3 Moderator & Ambassador", "AI Video Creator", "Web3 Community Builder"].map((role) => (
              <div key={role} className="flex items-center gap-3 text-[15px] font-normal tracking-[0.08em] text-[rgba(200,212,224,0.7)]">
                <span className="font-[var(--font-michroma)] text-[10px] text-[var(--blue-glow)] opacity-70">//</span>
                {role}
              </div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex gap-6 flex-wrap"
          >
            <a
              href="#portfolio"
              className="clip-btn btn-primary-gradient px-10 py-4.5 font-[var(--font-rajdhani)] text-[13px] font-bold tracking-[0.25em] uppercase text-black no-underline inline-flex items-center gap-2"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="clip-btn btn-secondary-glow px-10 py-4.5 font-[var(--font-rajdhani)] text-[13px] font-bold tracking-[0.25em] uppercase text-[var(--silver)] no-underline border border-[rgba(200,212,224,0.2)] bg-transparent inline-flex items-center gap-2 transition-all duration-300 hover:text-chrome"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right - Visual Element (Hologram/Terminal Widget) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:flex items-center justify-center relative"
        >
          <div className="relative w-[380px] h-[380px]">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border border-[rgba(74,158,255,0.12)] animate-[spin_30s_linear_infinite]" />
            {/* Middle ring */}
            <div className="absolute inset-6 rounded-full border border-[rgba(74,158,255,0.18)] animate-[spin_20s_linear_infinite_reverse]" />
            {/* Inner ring */}
            <div className="absolute inset-12 rounded-full border border-[rgba(74,158,255,0.1)] animate-[spin_15s_linear_infinite]" />

            {/* Center content - Terminal widget */}
            <div className="absolute inset-16 rounded-lg bg-[rgba(0,0,0,0.6)] border border-[rgba(74,158,255,0.15)] backdrop-blur-sm flex flex-col justify-center p-6 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-[rgba(74,158,255,0.6)]" />
                <div className="w-2 h-2 rounded-full bg-[rgba(74,158,255,0.3)]" />
                <div className="w-2 h-2 rounded-full bg-[rgba(74,158,255,0.15)]" />
                <span className="ml-auto font-[var(--font-michroma)] text-[8px] tracking-[0.2em] text-[rgba(74,158,255,0.4)]">LIVE</span>
              </div>
              {/* Terminal lines */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[var(--blue-glow)] text-[10px] font-[var(--font-michroma)]">▸</span>
                  <span className="text-[11px] tracking-[0.15em] text-[rgba(200,212,224,0.5)] font-[var(--font-rajdhani)]">projects.moderated</span>
                  <span className="ml-auto text-[var(--blue-glow)] text-[12px] font-semibold font-[var(--font-rajdhani)]">50+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--blue-glow)] text-[10px] font-[var(--font-michroma)]">▸</span>
                  <span className="text-[11px] tracking-[0.15em] text-[rgba(200,212,224,0.5)] font-[var(--font-rajdhani)]">community.members</span>
                  <span className="ml-auto text-[var(--blue-glow)] text-[12px] font-semibold font-[var(--font-rajdhani)]">10K+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--blue-glow)] text-[10px] font-[var(--font-michroma)]">▸</span>
                  <span className="text-[11px] tracking-[0.15em] text-[rgba(200,212,224,0.5)] font-[var(--font-rajdhani)]">experience.years</span>
                  <span className="ml-auto text-[var(--blue-glow)] text-[12px] font-semibold font-[var(--font-rajdhani)]">3+</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--blue-glow)] text-[10px] font-[var(--font-michroma)]">▸</span>
                  <span className="text-[11px] tracking-[0.15em] text-[rgba(200,212,224,0.5)] font-[var(--font-rajdhani)]">status</span>
                  <span className="ml-auto text-[#4ade80] text-[12px] font-semibold font-[var(--font-rajdhani)]">ONLINE</span>
                </div>
              </div>
            </div>

            {/* Floating accent dots */}
            <div className="absolute top-[15%] right-[10%] w-1.5 h-1.5 bg-[var(--blue-glow)] rounded-full shadow-[0_0_8px_var(--blue-glow)] animate-[pulse-shape_3s_ease_infinite]" />
            <div className="absolute bottom-[20%] left-[8%] w-1 h-1 bg-[var(--blue-glow)] rounded-full shadow-[0_0_6px_var(--blue-glow)] animate-[pulse-shape_4s_ease_infinite_0.5s]" />
            <div className="absolute top-[60%] right-[5%] w-1 h-1 bg-[rgba(74,158,255,0.6)] rounded-full shadow-[0_0_4px_var(--blue-glow)] animate-[pulse-shape_5s_ease_infinite_1s]" />
          </div>
        </motion.div>
      </div>

      {/* Status bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-10 left-6 md:left-12 flex gap-10 items-center"
      >
        {[
          { label: "Focus", value: "SHARP" },
          { label: "Status", value: "BUILDING" },
          { label: "Mission", value: "FREEDOM" },
        ].map((item) => (
          <div key={item.label} className="font-[var(--font-michroma)] text-[10px] tracking-[0.15em] text-[rgba(200,212,224,0.3)] uppercase">
            {item.label}
            <span className="block text-[var(--blue-glow)] text-[14px] font-[var(--font-rajdhani)] font-semibold">
              {item.value}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
