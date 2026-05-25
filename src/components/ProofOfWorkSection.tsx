"use client";

const proofItems = [
  {
    image: "/Tombak Emas.jpg",
    tag: "Graphic Design · Manta Network",
    title: "Manta Network Indonesia T-Shirt",
    desc: "Custom merchandise design created for Manta Indonesia community — one of many design contributions during the moderation run.",
    link: "https://x.com/zeandrn/status/1744648272541893017",
  },
  {
    image: "/StoryChain.jpg",
    tag: "Campaign Art · StoryChain",
    title: "StoryChain Community Campaign",
    desc: "Visual campaign artwork produced for StoryChain. Part of the campaigns that attracted 100K+ participants and drove 100%+ growth on Telegram Mini App.",
    link: "https://t.me/yogiczbaeng/54832",
  },
  {
    image: "/amb talk.jpg",
    tag: "Event · Ambassador Talk EP.1",
    title: "Web3: Karir dan Masa Depan",
    desc: "Featured as speaker at Ambassador Talk EP.1 representing Polyhedra Network — alongside ambassadors from Manta, Puffer, Cyber, and Quai Network. 18 September 2024.",
    link: "https://x.com/PufferFams_ID/status/1835675025891835988",
  },
  {
    image: "/cf.jpg",
    tag: "Certificate · Coinfest Asia 2024",
    title: "Certificate of Appreciation",
    desc: "Official Certificate of Appreciation from Coinfest Asia 2024 as Freelance Crew — Bali, 22–23 August 2024, by Coinvestasi.",
    link: "https://drive.google.com/file/d/1OJrtroMzlKhYnPYuyvznOb42CS89PUFq/view?pli=1",
  },
];

export default function ProofOfWorkSection() {
  return (
    <section id="proofofwork">
      <div className="section-label reveal">05 — Proof of Work</div>
      <h2 className="section-title reveal">Real Evidence</h2>
      <div className="pow-grid">
        {proofItems.map((item) => (
          <div className="pow-card reveal" key={item.title}>
            <div className="pow-img-wrap">
              <img src={item.image} alt={item.title} loading="lazy" />
            </div>
            <div className="pow-info">
              <div className="pow-tag">{item.tag}</div>
              <div className="pow-title">{item.title}</div>
              <div className="pow-desc">{item.desc}</div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="pow-link">
                View →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
