"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Placeholder data - kamu bisa ganti nanti dengan video asli
const videos = [
  {
    id: 1,
    title: "Cyberpunk Cityscape",
    description: "AI-generated cinematic scene of futuristic metropolis",
    date: "Coming Soon",
    tag: "Cinematic",
  },
  {
    id: 2,
    title: "Digital Dreams",
    description: "Abstract AI visualization of consciousness",
    date: "Coming Soon",
    tag: "Abstract",
  },
  {
    id: 3,
    title: "Neon Nights",
    description: "Neon-lit streets through AI imagination",
    date: "Coming Soon",
    tag: "Cinematic",
  },
  {
    id: 4,
    title: "Future Vision",
    description: "What the world looks like through AI eyes",
    date: "Coming Soon",
    tag: "Experimental",
  },
  {
    id: 5,
    title: "The Machine",
    description: "AI-powered mechanical beauty in motion",
    date: "Coming Soon",
    tag: "Motion",
  },
  {
    id: 6,
    title: "Beyond Reality",
    description: "Pushing the limits of AI generation",
    date: "Coming Soon",
    tag: "Experimental",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            AI Video Portfolio
          </h2>
          <div className="w-20 h-[1px] gradient-line mx-auto mb-4" />
          <p className="text-[#8a8a96] text-base">
            Karya-karya AI video yang dibuat dengan teknologi generative AI
          </p>
        </motion.div>

        {/* Launch announcement */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-[#c0c0c8]">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Launching 26–28 Mei 2025
          </span>
        </motion.div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative rounded-xl overflow-hidden border border-white/5 bg-[#12121a] card-hover cursor-pointer"
            >
              {/* Thumbnail area */}
              <div className="relative aspect-video bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center">
                {/* Grid pattern for placeholder */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Play button */}
                <div className="relative z-10 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300">
                  <Play className="w-5 h-5 text-white/70 group-hover:text-white" />
                </div>

                {/* Tag */}
                <span className="absolute top-3 left-3 px-2 py-1 text-xs rounded bg-white/10 text-[#c0c0c8] backdrop-blur-sm">
                  {video.tag}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="text-white font-medium mb-1">{video.title}</h3>
                <p className="text-[#8a8a96] text-sm mb-2">
                  {video.description}
                </p>
                <span className="text-xs text-[#c0c0c8]/60">{video.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
