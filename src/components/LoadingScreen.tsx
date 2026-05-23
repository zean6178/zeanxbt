"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 600);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center gap-6 transition-opacity duration-600 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div
        className="font-[var(--font-michroma)] text-[32px] tracking-[0.15em] animate-pulse"
        style={{
          background: "linear-gradient(135deg, #4a9eff, #c8d4e0, #e8eef5)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        zeanXBT
      </div>
      <div className="w-[200px] h-[1px] bg-[rgba(74,158,255,0.15)] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full shadow-[0_0_6px_var(--blue-glow)]"
          style={{
            background: "linear-gradient(90deg, transparent, var(--blue-glow), transparent)",
            animation: "loadProgress 1.5s ease forwards",
          }}
        />
      </div>
      <div className="font-[var(--font-michroma)] text-[9px] tracking-[0.5em] text-[rgba(74,158,255,0.5)] uppercase">
        // initializing
      </div>
    </div>
  );
}
