"use client";

const experiences = [
  {
    icon: "2022 — PRESENT",
    title: "Moderator · Manta Network",
    desc: "Part of the Manta Indonesia Team. Grew the Manta Indonesia community from 0 to 7,000 members within one month, while helping achieve global user growth from thousands to 5 million.",
  },
  {
    icon: "2023 — 2025",
    title: "Ambassador · Polyhedra Network",
    desc: "Helped drive user growth on a global scale. Played an active role in expanding the Polyhedra ecosystem and representing the project to the broader Web3 community.",
  },
  {
    icon: "2024 — PRESENT",
    title: "Moderator · StoryChain",
    desc: "Led campaigns that attracted over 100,000 participants and drove more than 100% growth in new sign-ups on the Telegram Mini App. Managed community moderation and user engagement end-to-end.",
  },
  {
    icon: "2024 — PRESENT",
    title: "Ambassador · Nesa & Privasea",
    desc: "Helped introduce AI and FHE (Fully Homomorphic Encryption) technology to the community, while bridging clear communication between the core team and members.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="section-label reveal">02 — Experience</div>
      <h2 className="section-title reveal">Work Experience</h2>
      <div className="exp-grid">
        {experiences.map((exp) => (
          <div className="exp-card reveal" key={exp.title}>
            <div className="exp-icon">{exp.icon}</div>
            <div className="exp-title">{exp.title}</div>
            <div className="exp-desc">{exp.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
