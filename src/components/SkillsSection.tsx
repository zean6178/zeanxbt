"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Megaphone,
  Video,
  Palette,
  Globe,
  MessageCircle,
} from "lucide-react";

const skills = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Discord Moderation",
    description: "Managing communities, enforcing rules, and maintaining healthy discussions",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    title: "Telegram Management",
    description: "Growing and engaging Telegram communities with strategic activities",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community Growth",
    description: "Scaling communities from zero to thousands with proven strategies",
  },
  {
    icon: <Video className="w-5 h-5" />,
    title: "AI Video Editing",
    description: "Creating cinematic AI-generated content and short films",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Midjourney / AI Tools",
    description: "Leveraging AI tools for branding, design, and visual storytelling",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Web3 Marketing",
    description: "Campaign planning, ambassador programs, and ecosystem growth",
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Content Creation",
    description: "Thread writing, graphic design, and campaign content for Web3",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-neon-blue/3 cinematic-blur" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <h2 className="font-[var(--font-orbitron)] text-3xl md:text-4xl font-bold text-chrome tracking-wider mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-[2px] gradient-line" />
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="glass-card rounded-xl p-6 group"
            >
              <div className="w-12 h-12 rounded-lg bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-4 text-neon-blue group-hover:bg-neon-blue/20 group-hover:border-neon-blue/40 transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-2">
                {skill.title}
              </h3>
              <p className="text-silver-dark text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
