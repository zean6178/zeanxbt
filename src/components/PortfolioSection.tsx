"use client";

import { motion } from "framer-motion";
import { ExternalLink, Play, Image, Users } from "lucide-react";

const portfolioItems = [
  {
    title: "AI Video Content",
    category: "AI Creator",
    description: "Cinematic AI-generated short films and visual stories",
    icon: <Play className="w-5 h-5" />,
    link: "https://x.com/zeandrn",
    tag: "Video",
  },
  {
    title: "Thread Writing & Graphic Design",
    category: "Content",
    description: "InfoFi-driven threads and graphic design showcased to the Web3 world",
    icon: <Image className="w-5 h-5" />,
    link: "https://x.com/zeandrn",
    tag: "Design",
  },
  {
    title: "Manta Indonesia Community",
    category: "Community",
    description: "Built from 0 to 7K members within one month as part of the Manta Indonesia Team",
    icon: <Users className="w-5 h-5" />,
    link: "https://t.me/yogiczbaeng/54832",
    tag: "Growth",
  },
  {
    title: "StoryChain Campaigns",
    category: "Campaign",
    description: "Led campaigns attracting 100K+ participants and 100% growth in Mini App sign-ups",
    icon: <Users className="w-5 h-5" />,
    link: "https://x.com/zeandrn",
    tag: "Campaign",
  },
  {
    title: "Coinfest Asia 2024",
    category: "Event",
    description: "Web3 Community Crew in Bali — hosted cross-project AMAs and community events",
    icon: <Users className="w-5 h-5" />,
    link: "https://x.com/zeandrn/status/1744648272541893017",
    tag: "Event",
  },
  {
    title: "Running Blockchain Nodes",
    category: "Technical",
    description: "Running and maintaining blockchain nodes across multiple networks",
    icon: <ExternalLink className="w-5 h-5" />,
    link: "https://x.com/zeandrn",
    tag: "Node",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-neon-blue/3 cinematic-blur" />

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
            Portfolio
          </h2>
          <div className="w-24 h-[2px] gradient-line mb-4" />
          <p className="text-silver-dark text-base max-w-lg">
            AI video, branding, community campaigns, and ambassador work
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-card rounded-xl p-6 group cursor-pointer block"
            >
              {/* Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-medium bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                  {item.tag}
                </span>
                <ExternalLink className="w-4 h-4 text-silver-dark group-hover:text-neon-blue transition-colors" />
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-silver group-hover:text-neon-blue group-hover:border-neon-blue/30 transition-all duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-white font-semibold text-base mb-1">
                {item.title}
              </h3>
              <p className="text-silver-dark text-xs uppercase tracking-wider mb-3">
                {item.category}
              </p>
              <p className="text-silver-dark text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
