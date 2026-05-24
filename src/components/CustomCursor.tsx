"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mx - 4 + "px";
        cursorRef.current.style.top = my - 4 + "px";
      }
    };

    const animateRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = rx - 16 + "px";
        ringRef.current.style.top = ry - 16 + "px";
      }
      requestAnimationFrame(animateRing);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animateRing();

    const handleEnter = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(2)";
      if (ringRef.current) {
        ringRef.current.style.transform = "scale(1.5)";
        ringRef.current.style.borderColor = "rgba(74,158,255,0.8)";
      }
    };
    const handleLeave = () => {
      if (cursorRef.current) cursorRef.current.style.transform = "scale(1)";
      if (ringRef.current) {
        ringRef.current.style.transform = "scale(1)";
        ringRef.current.style.borderColor = "rgba(74,158,255,0.4)";
      }
    };

    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor" id="cursor"></div>
      <div ref={ringRef} className="cursor-ring" id="cursor-ring"></div>
    </>
  );
}
