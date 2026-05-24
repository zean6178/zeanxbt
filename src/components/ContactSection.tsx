"use client";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-label reveal">05 — Contact</div>
        <h2 className="section-title reveal">Let&apos;s Build<br />The Future</h2>
        <div className="contact-email reveal">// Available for Web3 &amp; AI collaborations</div>
        <div className="contact-links reveal">
          <a href="https://t.me/zeanxbt" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">✈</span> Telegram
          </a>
          <a href="https://x.com/zeanxbt" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">✕</span> Twitter/X
          </a>
          <a href="https://discord.com/users/zeanxbt" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">◈</span> Discord
          </a>
          <a href="mailto:zeanxbt@gmail.com" className="contact-link">
            <span className="contact-link-icon">@</span> Email
          </a>
        </div>

        <div className="reveal" style={{ display: "flex", justifyContent: "center", gap: "32px", opacity: 0.3, fontFamily: "var(--font-display), Michroma, sans-serif", fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase" as const }}>
          <span>FOCUS</span>
          <span>BUILD</span>
          <span>FREEDOM</span>
          <span>CREATE IMPACT</span>
        </div>
      </div>
    </section>
  );
}
