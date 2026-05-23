"use client";

import { motion } from "framer-motion";

const contactLinks = [
  { icon: "✈", label: "Telegram", href: "https://t.me/zeandrn" },
  { icon: "✕", label: "Twitter/X", href: "https://x.com/zeandrn" },
  { icon: "◈", label: "Discord", href: "https://discord.com/users/1035001460582273144" },
  { icon: "@", label: "Email", href: "mailto:jyl.zeandrn@gmail.com" },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-[clamp(80px,10vw,140px)] px-6 md:px-12 lg:px-[48px] bg-gradient-to-b from-black via-[#020508] to-black text-center">
      <div className="max-w-[700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label-line flex items-center justify-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.4em] text-[var(--blue-glow)] uppercase mb-5">
            05 — Contact
          </div>
          <h2 className="font-[var(--font-michroma)] text-[clamp(28px,4vw,48px)] font-normal tracking-[0.05em] leading-[1.1] text-chrome-gradient mb-10 text-center">
            Let&apos;s Build<br />The Future
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-[var(--font-michroma)] text-[clamp(12px,2vw,18px)] tracking-[0.1em] text-chrome opacity-60 mb-12"
        >
          // Available for Web3 & AI collaborations
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-[2px] mb-20 flex-wrap"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-[var(--font-rajdhani)] text-[12px] font-bold tracking-[0.2em] uppercase text-muted no-underline bg-[var(--glass)] border border-[var(--glass-border)] transition-all duration-300 flex items-center gap-2 hover:text-chrome hover:border-[rgba(74,158,255,0.3)] hover:bg-[rgba(74,158,255,0.04)]"
            >
              <span className="text-[14px]">{link.icon}</span> {link.label}
            </a>
          ))}
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center gap-8 opacity-30 font-[var(--font-michroma)] text-[10px] tracking-[0.25em] uppercase flex-wrap"
        >
          <span>FOCUS</span>
          <span>BUILD</span>
          <span>FREEDOM</span>
          <span>CREATE IMPACT</span>
        </motion.div>
      </div>
    </section>
  );
}
