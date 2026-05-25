"use client";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      {/* Particles */}
      <div className="particles">
        <div className="particle" style={{ left: "10%", "--dur": "9s", "--delay": "0s", "--drift": "30px" } as React.CSSProperties}></div>
        <div className="particle" style={{ left: "20%", "--dur": "12s", "--delay": "2s", "--drift": "-20px" } as React.CSSProperties}></div>
        <div className="particle" style={{ left: "35%", "--dur": "8s", "--delay": "4s", "--drift": "15px" } as React.CSSProperties}></div>
        <div className="particle" style={{ left: "55%", "--dur": "14s", "--delay": "1s", "--drift": "-35px" } as React.CSSProperties}></div>
        <div className="particle" style={{ left: "70%", "--dur": "10s", "--delay": "3s", "--drift": "25px" } as React.CSSProperties}></div>
        <div className="particle" style={{ left: "85%", "--dur": "11s", "--delay": "5s", "--drift": "-15px" } as React.CSSProperties}></div>
        <div className="particle" style={{ left: "45%", "--dur": "7s", "--delay": "6s", "--drift": "40px" } as React.CSSProperties}></div>
      </div>

      <div className="hero-content">
        <div className="hero-tag">// VERSION 2.0 &nbsp;&nbsp; ONLINE</div>

        <h1 className="hero-name glitch" data-text="zeanXBT">
          <span className="z">z</span>
          <span className="ean">ean</span>
          <span className="xbt">XBT</span>
        </h1>

        <div className="hero-tagline">
          <span>AI</span> &times; <span>WEB3</span> &times; <span>FUTURE</span>
        </div>

        <div className="hero-roles">
          <div className="hero-role">Web3 Moderator &amp; Ambassador</div>
          <div className="hero-role">AI Video Creator</div>
          <div className="hero-role">Web3 Community Builder</div>
        </div>

        <div className="hero-cta">
          <a href="#portfolio" className="btn-primary">View Portfolio</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </div>

      <div className="hero-status">
        <div className="status-item">
          Focus<span>SHARP</span>
        </div>
        <div className="status-item">
          Status<span>BUILDING</span>
        </div>
        <div className="status-item">
          Mission<span>FREEDOM</span>
        </div>
      </div>
    </section>
  );
}
