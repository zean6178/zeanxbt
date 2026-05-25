"use client";

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="section-label reveal">05 — Contact</div>
        <h2 className="section-title reveal">Let&apos;s Build<br />The Future</h2>
        <div className="contact-email reveal">// Open for moderation, ambassador &amp; community roles</div>
        <div className="contact-links reveal">
          <a href="https://t.me/zeanxbt" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">&#9992;</span> Telegram
          </a>
          <a href="https://x.com/zeanxbt" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">&#10005;</span> Twitter/X
          </a>
          <a href="https://discord.com/users/zeanxbt" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-link-icon">&#9670;</span> Discord
          </a>
          <a href="mailto:zeandrn@gmail.com" className="contact-link">
            <span className="contact-link-icon">@</span> Email
          </a>
        </div>

        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            opacity: 0.35,
            fontFamily: "'Michroma', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.4em",
            textTransform: "uppercase" as const,
            color: "#2a3d60",
          }}
        >
          <span>MODERATE</span>
          <span>BUILD</span>
          <span>GROW</span>
          <span>IMPACT</span>
        </div>
      </div>
    </section>
  );
}
