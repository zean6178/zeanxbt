"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <div className="font-[var(--font-orbitron)] text-sm font-bold tracking-[0.2em]">
            <span className="text-white">ZEAN</span>
            <span className="text-neon-blue">XBT</span>
          </div>

          {/* Tagline */}
          <p className="text-silver-dark text-xs tracking-wider uppercase">
            Moderator • Ambassador • AI Creator
          </p>

          {/* Copyright */}
          <p className="text-silver-dark/50 text-xs">
            &copy; 2025 ZEANXBT. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
