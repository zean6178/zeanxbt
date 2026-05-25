"use client";

const experiences = [
  {
    icon: "[ 01 ]",
    title: "Web3 Moderator",
    desc: "Community moderation across Discord and Telegram. Enforcing rules, onboarding members, and maintaining healthy ecosystem dynamics for Web3 projects.",
  },
  {
    icon: "[ 02 ]",
    title: "Community Manager",
    desc: "Strategic community growth and engagement. Building loyal communities from the ground up, coordinating events, AMAs, and campaigns.",
  },
  {
    icon: "[ 03 ]",
    title: "Ambassador Programs",
    desc: "Representing Web3 protocols as official ambassador. Brand advocacy, content creation, regional outreach, and ecosystem expansion.",
  },
  {
    icon: "[ 04 ]",
    title: "AI Video Creator",
    desc: "Creating cinematic AI-powered video content for Web3 brands and personal branding. Leveraging cutting-edge AI tools to produce futuristic visuals.",
  },
  {
    icon: "[ 05 ]",
    title: "AI Branding Designer",
    desc: "Crafting futuristic brand identities using Midjourney and AI tools. Chrome aesthetics, dark UI, cyberpunk visual identity design.",
  },
  {
    icon: "[ 06 ]",
    title: "Web3 Marketing",
    desc: "Go-to-market strategies for crypto projects. X/Twitter campaigns, alpha sharing, KOL coordination, and community-driven growth hacking.",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience">
      <div className="section-label reveal">02 — Experience</div>
      <h2 className="section-title reveal">What I Do</h2>
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
