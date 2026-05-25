"use client";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-text reveal">
          <div className="section-label">01 — About</div>
          <h2 className="section-title">ZeanDarren</h2>
          <p>
            I&apos;m <strong>ZeanDarren</strong>, widely known in the Web3 space. With a background as a Community Builder, I have over <strong>3 years of experience</strong> as a full-time Web3 Moderator and Ambassador.
          </p>
          <p>
            I also contributed as a <strong>Web3 Community Crew at Coinfest Asia 2024</strong> in Bali. My expertise lies in community building and moderation — engaging users, resolving issues, and fostering active Web3 communities at scale.
          </p>
        </div>
        <div className="about-stats reveal">
          <div className="stat-card">
            <div className="stat-num">5<span>M+</span></div>
            <div className="stat-label">Users Reached Globally</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">3<span>yr+</span></div>
            <div className="stat-label">Full-time Web3 Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">7<span>K</span></div>
            <div className="stat-label">Community Built in 1 Month</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">100<span>K+</span></div>
            <div className="stat-label">Campaign Participants</div>
          </div>
        </div>
      </div>
    </section>
  );
}
