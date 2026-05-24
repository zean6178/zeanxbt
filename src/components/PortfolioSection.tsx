"use client";

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="section-label reveal">04 — Portfolio</div>
      <h2 className="section-title reveal">Selected Work</h2>
      <div className="portfolio-grid">
        {/* Card 1 */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-1">
            <div className="p-visual">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-hex"></div>
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">AI Video</div>
            <div className="portfolio-title">Cinematic AI Reels</div>
            <div className="portfolio-sub">Web3 Brand Visuals</div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-2">
            <div className="p-visual">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.2 }}>
                <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="#4a9eff" strokeWidth="0.5"/>
                <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" stroke="#4a9eff" strokeWidth="0.5"/>
                <line x1="50" y1="5" x2="50" y2="20" stroke="#4a9eff" strokeWidth="0.5"/>
                <line x1="95" y1="27.5" x2="80" y2="35" stroke="#4a9eff" strokeWidth="0.5"/>
                <line x1="95" y1="72.5" x2="80" y2="65" stroke="#4a9eff" strokeWidth="0.5"/>
                <line x1="50" y1="95" x2="50" y2="80" stroke="#4a9eff" strokeWidth="0.5"/>
                <line x1="5" y1="72.5" x2="20" y2="65" stroke="#4a9eff" strokeWidth="0.5"/>
                <line x1="5" y1="27.5" x2="20" y2="35" stroke="#4a9eff" strokeWidth="0.5"/>
              </svg>
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Branding</div>
            <div className="portfolio-title">Web3 Visual Identity</div>
            <div className="portfolio-sub">Logo &amp; Brand System</div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-3">
            <div className="p-visual">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" style={{ opacity: 0.2 }}>
                <path d="M0 30 Q30 5 60 30 Q90 55 120 30" stroke="#4a9eff" strokeWidth="0.8" fill="none"/>
                <path d="M0 30 Q30 55 60 30 Q90 5 120 30" stroke="#4a9eff" strokeWidth="0.4" fill="none" opacity="0.5"/>
                <circle cx="60" cy="30" r="8" stroke="#4a9eff" strokeWidth="0.5" fill="none"/>
              </svg>
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Community</div>
            <div className="portfolio-title">Ambassador Campaign</div>
            <div className="portfolio-sub">Growth &amp; Outreach</div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-1">
            <div className="p-visual" style={{ fontFamily: "var(--font-display), Michroma, sans-serif", fontSize: "36px", color: "rgba(74,158,255,0.15)", letterSpacing: "0.1em" }}>
              DM
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Social Media</div>
            <div className="portfolio-title">Discord Moderation</div>
            <div className="portfolio-sub">Server Management</div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-2">
            <div className="p-visual">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", width: "80px", opacity: 0.3 }}>
                <div style={{ width: "16px", height: "16px", background: "rgba(74,158,255,0.6)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(74,158,255,0.3)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(74,158,255,0.5)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(74,158,255,0.2)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(74,158,255,0.2)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(74,158,255,0.7)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(74,158,255,0.3)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(74,158,255,0.5)" }}></div>
              </div>
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Content</div>
            <div className="portfolio-title">Social Media Design</div>
            <div className="portfolio-sub">X &amp; Twitter Campaigns</div>
          </div>
        </div>
        {/* Card 6 */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-3">
            <div className="p-visual" style={{ fontFamily: "var(--font-display), Michroma, sans-serif", fontSize: "11px", color: "rgba(74,158,255,0.25)", letterSpacing: "0.2em", textAlign: "center", lineHeight: 2 }}>
              FOCUS<br />BUILD<br />FREEDOM<br />CREATE IMPACT
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Strategy</div>
            <div className="portfolio-title">Community Growth</div>
            <div className="portfolio-sub">10K+ Members Onboarded</div>
          </div>
        </div>
      </div>
    </section>
  );
}
