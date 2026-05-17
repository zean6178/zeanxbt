"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#8a8a96] text-sm mb-2">
            <span className="text-white font-medium">zeanXBT</span> ×{" "}
            <span className="text-[#c0c0c8]">AI × Web3 × Future</span>
          </p>
          <p className="text-[#8a8a96]/60 text-xs">
            © 2025 zeanXBT. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
