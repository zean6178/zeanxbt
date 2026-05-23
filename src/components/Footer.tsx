"use client";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(200,212,224,0.04)]">
      <div className="w-[min(1400px,92%)] mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-[var(--font-michroma)] text-[14px] tracking-[0.12em] text-metallic">
          zeanXBT
        </div>
        <div className="text-[11px] tracking-[0.1em] text-[rgba(200,212,224,0.2)] uppercase">
          &copy; 2025 zeanXBT — All rights reserved
        </div>
        <div className="font-[var(--font-michroma)] text-[9px] tracking-[0.15em] text-[rgba(74,158,255,0.35)] uppercase">
          AI × WEB3 × FUTURE
        </div>
      </div>
    </footer>
  );
}
