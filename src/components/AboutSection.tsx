"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-neon-blue/3 cinematic-blur" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-chrome tracking-wider mb-4">
            About Me
          </h2>
          <div className="w-24 h-[2px] gradient-line" />
        </motion.div>

        {/* Bio content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <p className="text-silver-light text-lg md:text-xl leading-relaxed">
              I specialize in building and managing{" "}
              <span className="text-neon-blue font-semibold">Web3 communities</span>{" "}
              across Discord, Telegram, and X.
            </p>
            <p className="text-silver text-base md:text-lg leading-relaxed">
              Experienced in moderation, ambassador programs, community growth,{" "}
              <span className="text-white font-medium">AI content creation</span>, and Web3 branding.
            </p>
            <p className="text-silver-dark text-base leading-relaxed">
              With over 3 years of full-time experience, I&apos;ve contributed to growing communities from zero to thousands of members, led campaigns reaching 100K+ participants, and served as Web3 Community Crew at Coinfest Asia 2024 in Bali.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: "3+", label: "Years in Web3" },
              { value: "5M+", label: "User Growth" },
              { value: "100K+", label: "Campaign Reach" },
              { value: "7K+", label: "Community Built" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="text-center p-4"
              >
                <div className="font-[var(--font-orbitron)] text-2xl md:text-3xl font-bold text-neon-blue text-glow mb-1">
                  {stat.value}
                </div>
                <div className="text-silver-dark text-xs tracking-wider uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
