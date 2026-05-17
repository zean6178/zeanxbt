"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Circular glow behind avatar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.05] opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/[0.08]" />

      <div className="relative z-10 text-center px-6">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] border border-white/10 flex items-center justify-center glow-ring">
              <span className="text-4xl font-bold text-white">Z</span>
            </div>
            {/* Ring animation */}
            <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-white text-glow">zean</span>
          <span className="text-[#c0c0c8]">XBT</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-sm md:text-base text-[#8a8a96] tracking-[0.3em] uppercase mb-8"
        >
          <span>AI</span>
          <span className="text-[#c0c0c8]">×</span>
          <span>Web3</span>
          <span className="text-[#c0c0c8]">×</span>
          <span>Future</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#8a8a96] text-lg md:text-xl max-w-xl mx-auto mb-12"
        >
          Creating cinematic AI-generated videos that push the boundaries of
          creativity and technology.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            className="px-6 py-3 bg-white text-[#0a0a0f] font-medium rounded-lg hover:bg-[#c0c0c8] transition-colors duration-200"
          >
            View Portfolio
          </a>
          <a
            href="#social"
            className="px-6 py-3 border border-white/20 text-white rounded-lg hover:border-white/50 transition-colors duration-200"
          >
            Connect
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
