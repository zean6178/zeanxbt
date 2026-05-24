"use client";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-text reveal">
          <div className="section-label">01 — About</div>
          <h2 className="section-title">Building Communities<br />Beyond Web2</h2>
          <p>I specialize in <strong>building and managing Web3 communities</strong> across Discord, Telegram, and X. Bridging the gap between cutting-edge technology and real human connection.</p>
          <p>Experienced in <strong>moderation, ambassador programs, community growth, AI content creation,</strong> and Web3 branding. Focused on creating impact at the intersection of AI and decentralized ecosystems.</p>
        </div>
        <div className="about-stats reveal">
          <div className="stat-card">
            <div className="stat-num">50<span>+</span></div>
            <div className="stat-label">Projects Moderated</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">3<span>yr</span></div>
            <div className="stat-label">Web3 Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">10<span>k+</span></div>
            <div className="stat-label">Community Members</div>
          </div>
          <div className="stat-card">
            <div className="stat-num">&infin;</div>
            <div className="stat-label">Impact Created</div>
          </div>
        </div>
      </div>
    </section>
  );
}
