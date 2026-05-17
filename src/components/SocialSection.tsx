"use client";

import { motion } from "framer-motion";

const socials = [
  {
    name: "X (Twitter)",
    handle: "@zeanXBT",
    url: "https://x.com/zeanXBT",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    description: "First drop always on X",
  },
  {
    name: "YouTube",
    handle: "@zeanXBT",
    url: "https://youtube.com/@zeanXBT",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    description: "Full AI short films & visual stories",
  },
  {
    name: "Instagram",
    handle: "@zeanxbt",
    url: "https://instagram.com/zeanxbt",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    description: "Visual stories & behind the scenes",
  },
  {
    name: "TikTok",
    handle: "@zeanxbt",
    url: "https://tiktok.com/@zeanxbt",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    description: "Short AI clips & experimental content",
  },
  {
    name: "Threads",
    handle: "@zeanxbt",
    url: "https://threads.com/@zeanxbt",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.26 1.33-3.036.88-.74 2.108-1.177 3.542-1.258 1.644-.093 3.139.156 4.467.722-.04-.96-.26-1.758-.653-2.377-.536-.846-1.398-1.29-2.562-1.322-.996.008-1.85.26-2.413.712-.523.42-.786.987-.786 1.693h-2.08c.02-1.235.532-2.283 1.482-3.034.912-.722 2.12-1.137 3.476-1.186l.186-.003c1.735.012 3.123.574 4.01 1.624.786.93 1.2 2.195 1.239 3.763.003.156.003.315 0 .473.424.248.793.54 1.105.874.98 1.05 1.483 2.466 1.494 4.202.01 1.085-.225 2.083-.698 2.965-.91 1.696-2.546 2.835-4.863 3.382-1.09.258-2.27.368-3.532.33zm-1.199-8.695c-.897.05-1.629.263-2.107.617-.457.339-.633.761-.607 1.22.03.533.282.95.752 1.236.515.313 1.193.47 1.952.43 1.078-.06 1.917-.47 2.492-1.215.447-.58.753-1.39.862-2.388-1.065-.377-2.229-.564-3.344-.499v-.001z" />
      </svg>
    ),
    description: "Thoughts & discussions",
  },
];

export default function SocialSection() {
  return (
    <section id="social" className="relative py-32 px-6">
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
            Connect With Me
          </h2>
          <div className="w-20 h-[1px] gradient-line mb-4" />
          <p className="text-[#8a8a96] text-base">
            Follow my journey across platforms
          </p>
        </motion.div>

        {/* Social links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group w-full p-5 rounded-xl border border-white/5 bg-[#12121a]/50 card-hover flex items-start gap-4"
            >
              <div className="text-[#8a8a96] group-hover:text-white transition-colors duration-200 mt-0.5">
                {social.icon}
              </div>
              <div>
                <h3 className="text-white font-medium text-sm mb-0.5">
                  {social.name}
                </h3>
                <p className="text-[#c0c0c8] text-xs mb-1">{social.handle}</p>
                <p className="text-[#8a8a96] text-xs">{social.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
