"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.png"
          alt="Futuristic cityscape"
          fill
          className="object-cover opacity-40"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Cinematic ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-neon-blue/5 cinematic-blur" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-blue/3 cinematic-blur" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,black_80%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Profile Avatar */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden glow-ring-strong border-2 border-neon-blue/30">
              <Image
                src="/profile-avatar.jpg"
                alt="ZeanDarren"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs tracking-[0.2em] uppercase text-silver-dark">
              <span className="w-2 h-2 rounded-full bg-neon-blue neon-pulse" />
              Available for Web3 Projects
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-[var(--font-orbitron)] text-5xl sm:text-6xl md:text-8xl font-bold tracking-wider mb-6"
          >
            <span className="text-chrome">ZEAN</span>
            <span className="text-neon-blue text-glow">XBT</span>
          </motion.h1>

          {/* Tagline row */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-silver-dark tracking-[0.3em] uppercase mb-8"
          >
            <span>AI</span>
            <span className="text-neon-blue">×</span>
            <span>Web3</span>
            <span className="text-neon-blue">×</span>
            <span>Future</span>
          </motion.div>

          {/* Role descriptions */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col gap-2 text-silver text-base md:text-lg mb-12 max-w-2xl"
          >
            <p>Full-time Web3 Moderator & Ambassador</p>
            <p className="text-silver-dark">
              AI Video Creator • Web3 Community Builder
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#portfolio"
              className="btn-neon px-8 py-3 rounded-lg font-medium tracking-wider text-sm uppercase"
            >
              <span>View Portfolio</span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-lg font-medium tracking-wider text-sm uppercase border border-white/20 text-white hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] text-silver-dark tracking-[0.3em] uppercase">
                Scroll
              </span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-neon-blue to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
