"use client";

import { motion } from "framer-motion";

const skills = [
  { label: "COMMUNITY BUILDING", description: "Building and growing engaged Web3 communities from the ground up" },
  { label: "MODERATION", description: "Maintaining healthy community standards and resolving issues" },
  { label: "AMBASSADOR", description: "Representing and advocating for Web3 protocols and ecosystems" },
  { label: "ENGAGEMENT", description: "Fostering active participation and supportive community culture" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-[1px] gradient-line" />
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center text-center mb-16"
        >
          <div className="text-[#c0c0c8] text-lg leading-relaxed max-w-2xl space-y-4">
            <p>
              I&apos;m <span className="text-white font-semibold">ZeanDarren</span>, widely known in the Web3 space. With a background as a Community Builder, I have over <span className="text-white font-semibold">3 years of experience</span> as a full-time Web3 Moderator and Ambassador.
            </p>
            <p>
              I also contributed as a <span className="text-white font-semibold">Web3 Community Crew at Coinfest Asia 2024</span> in Bali.
            </p>
            <p>
              My expertise lies in community building and moderation, where I focus on engaging users, resolving community issues, and fostering a supportive and active Web3 community.
            </p>
          </div>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {skills.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 rounded-xl border border-white/5 bg-[#12121a]/50 card-hover"
            >
              <h3 className="text-white font-semibold tracking-wider text-sm mb-2">
                {item.label}
              </h3>
              <p className="text-[#8a8a96] text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
