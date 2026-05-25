"use client";

export default function PortfolioSection() {
  return (
    <section id="portfolio">
      <div className="section-label reveal">04 — Portfolio</div>
      <h2 className="section-title reveal">Projects &amp; Work</h2>
      <div className="portfolio-grid">
        {/* Card 1 - Manta Network */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-1">
            <div className="p-visual">
              <div className="p-circle"></div>
              <div className="p-circle"></div>
              <div className="p-hex"></div>
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Moderation &middot; 2022–Present</div>
            <div className="portfolio-title">Manta Network</div>
            <div className="portfolio-sub">0 → 7K Indonesia community in 1 month &middot; 5M+ global users</div>
          </div>
        </div>

        {/* Card 2 - Polyhedra */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-2">
            <div className="p-visual">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.35 }}>
                <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" stroke="#2a64d2" strokeWidth="0.5" />
                <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" stroke="#2a64d2" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Ambassador &middot; 2023–2025</div>
            <div className="portfolio-title">Polyhedra Network</div>
            <div className="portfolio-sub">Global user growth from thousands to 5 million</div>
          </div>
        </div>

        {/* Card 3 - StoryChain */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-3">
            <div className="p-visual">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" style={{ opacity: 0.35 }}>
                <path d="M0 30 Q30 5 60 30 Q90 55 120 30" stroke="#2a64d2" strokeWidth="0.8" fill="none" />
                <path d="M0 30 Q30 55 60 30 Q90 5 120 30" stroke="#2a64d2" strokeWidth="0.4" fill="none" opacity="0.5" />
                <circle cx="60" cy="30" r="8" stroke="#2a64d2" strokeWidth="0.5" fill="none" />
              </svg>
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Moderation &middot; 2024–Present</div>
            <div className="portfolio-title">StoryChain</div>
            <div className="portfolio-sub">100K+ campaign participants &middot; 100%+ Telegram Mini App growth</div>
          </div>
        </div>

        {/* Card 4 - Nesa & Privasea */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-1">
            <div className="p-visual" style={{ fontFamily: "Michroma, sans-serif", fontSize: "13px", color: "rgba(42,100,210,0.25)", letterSpacing: "0.15em", textAlign: "center", lineHeight: "2.2" }}>
              AI<br />FHE<br />NESA
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Ambassador &middot; 2024–Present</div>
            <div className="portfolio-title">Nesa &amp; Privasea</div>
            <div className="portfolio-sub">AI &amp; FHE technology education &middot; team-community bridge</div>
          </div>
        </div>

        {/* Card 5 - Content Creation */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-2">
            <div className="p-visual">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", width: "80px", opacity: 0.4 }}>
                <div style={{ width: "16px", height: "16px", background: "rgba(42,100,210,0.6)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(42,100,210,0.3)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(42,100,210,0.5)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(42,100,210,0.2)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(42,100,210,0.2)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(42,100,210,0.7)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(42,100,210,0.3)" }}></div>
                <div style={{ width: "16px", height: "16px", background: "rgba(42,100,210,0.5)" }}></div>
              </div>
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Thread Writing &amp; Design &middot; InfoFi</div>
            <div className="portfolio-title">Content Creation</div>
            <div className="portfolio-sub">Web3 threads, graphic design &amp; social content</div>
          </div>
        </div>

        {/* Card 6 - Coinfest Asia */}
        <div className="portfolio-card reveal">
          <div className="portfolio-bg portfolio-bg-3">
            <div className="p-visual" style={{ fontFamily: "Michroma, sans-serif", fontSize: "11px", color: "rgba(42,100,210,0.3)", letterSpacing: "0.2em", textAlign: "center", lineHeight: "2" }}>
              BALI<br />2024<br />WEB3
            </div>
          </div>
          <div className="portfolio-overlay">
            <div className="portfolio-type">Community Crew &middot; 2024</div>
            <div className="portfolio-title">Coinfest Asia 2024</div>
            <div className="portfolio-sub">Community event &middot; cross-project AMA host &middot; Bali</div>
          </div>
        </div>
      </div>
    </section>
  );
}
