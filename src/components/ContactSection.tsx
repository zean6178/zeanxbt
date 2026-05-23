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
    <section id="contact" className="py-[clamp(100px,12vw,160px)] bg-gradient-to-b from-black via-[#020508] to-black">
      <div className="w-[min(1400px,92%)] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label-line flex items-center justify-center gap-4 font-[var(--font-michroma)] text-[10px] tracking-[0.35em] text-[var(--blue-glow)] uppercase mb-6">
            05 — Contact
          </div>
          <h2 className="font-[var(--font-michroma)] text-[clamp(26px,3.5vw,44px)] font-normal tracking-[0.04em] leading-[1.15] text-chrome-gradient mb-8">
            Let&apos;s Build<br />The Future
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-[var(--font-michroma)] text-[clamp(12px,2vw,16px)] tracking-[0.1em] text-chrome opacity-50 mb-14"
        >
          // Available for Web3 & AI collaborations
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 font-[var(--font-rajdhani)] text-[12px] font-bold tracking-[0.15em] uppercase text-[rgba(200,212,224,0.5)] no-underline bg-[rgba(255,255,255,0.02)] border border-[rgba(200,212,224,0.04)] rounded-sm transition-all duration-300 flex items-center gap-2.5 hover:text-chrome hover:border-[rgba(74,158,255,0.2)] hover:bg-[rgba(74,158,255,0.03)]"
            >
              <span className="text-[14px] opacity-60">{link.icon}</span> {link.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
