"use client";

const skills = [
  "Thread Writing",
  "Graphic Design",
  "Running Node",
  "Campaign Planning",
  "Event Hosting",
  "Community Moderation",
  "Discord Management",
  "Telegram Management",
  "Ambassador Program",
  "AMA Hosting",
  "Community Growth",
  "Web3 Ecosystem",
];

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-label reveal">03 — Skills</div>
      <h2 className="section-title reveal">Skills &amp; Expertise</h2>
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
