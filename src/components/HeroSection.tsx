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

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 pt-[100px] max-w-[700px]">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-tag-line flex items-center gap-3 font-[var(--font-rajdhani)] text-[11px] font-semibold tracking-[0.4em] text-[var(--blue-glow)] uppercase mb-6"
        >
          // VERSION 2.0 &nbsp;&nbsp; ONLINE
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glitch font-[var(--font-michroma)] text-[clamp(52px,8vw,96px)] font-normal leading-[0.95] tracking-[-0.02em] mb-2"
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
          className="font-[var(--font-rajdhani)] text-[14px] font-medium tracking-[0.35em] text-muted uppercase mb-10"
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
          className="flex flex-col gap-2 mb-12"
        >
          {["Web3 Moderator & Ambassador", "AI Video Creator", "Web3 Community Builder"].map((role) => (
            <div key={role} className="flex items-center gap-3 text-[15px] font-normal tracking-[0.1em] text-[rgba(200,212,224,0.7)]">
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
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#portfolio"
            className="clip-btn btn-primary-gradient px-8 py-3.5 font-[var(--font-rajdhani)] text-[12px] font-bold tracking-[0.3em] uppercase text-black no-underline inline-flex items-center gap-2"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="clip-btn btn-secondary-glow px-8 py-3.5 font-[var(--font-rajdhani)] text-[12px] font-bold tracking-[0.3em] uppercase text-[var(--silver)] no-underline border border-[rgba(200,212,224,0.2)] bg-transparent inline-flex items-center gap-2 transition-all duration-300 hover:text-chrome"
          >
            Contact Me
          </a>
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
          <div key={item.label} className="font-[var(--font-michroma)] text-[10px] tracking-[0.2em] text-[rgba(200,212,224,0.3)] uppercase">
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
