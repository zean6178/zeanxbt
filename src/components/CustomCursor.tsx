"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 4 + "px";
      cursor.style.top = my - 4 + "px";
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx - 16 + "px";
      ring.style.top = ry - 16 + "px";
      animId = requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", onMove);
    animId = requestAnimationFrame(animateRing);

    const interactives = document.querySelectorAll("a, button");
    const onEnter = () => {
      cursor.style.transform = "scale(2)";
      ring.style.transform = "scale(1.5)";
      ring.style.borderColor = "rgba(42,122,223,0.8)";
    };
    const onLeave = () => {
      cursor.style.transform = "scale(1)";
      ring.style.transform = "scale(1)";
      ring.style.borderColor = "rgba(42,122,223,0.4)";
    };

    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
