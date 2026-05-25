"use client";

const skills = [
  "Discord Moderation",
  "Telegram Management",
  "Community Growth",
  "AI Video Editing",
  "Midjourney / AI Tools",
  "Web3 Marketing",
  "Content Creation",
  "X / Twitter Growth",
  "Ambassador Programs",
  "Brand Identity Design",
  "Event Coordination",
  "Alpha Research",
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-label reveal">03 — Skills</div>
      <h2 className="section-title reveal">Core Capabilities</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-item reveal" key={skill}>
            <div className="skill-dot"></div>
            <div className="skill-name">{skill}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
