"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // CSS vars for spotlight usage in globals
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);

      // Amber dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const loop = () => {
      // Ring lags behind with lerp
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(loop);

    // Expand ring on interactive elements
    const enter = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = "52px";
      ringRef.current.style.height = "52px";
      ringRef.current.style.borderColor = "#06b6d4";
      ringRef.current.style.opacity = "0.85";
    };
    const leave = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width = "36px";
      ringRef.current.style.height = "36px";
      ringRef.current.style.borderColor = "#f59e0b";
      ringRef.current.style.opacity = "0.5";
    };

    const els = document.querySelectorAll("a, button, [data-hover]");
    els.forEach((el) => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      els.forEach((el) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
    };
  }, []);

  return (
    <>
      {/* Amber dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          background: "#f59e0b",
          boxShadow: "0 0 8px #f59e0b, 0 0 20px #f59e0b80",
          willChange: "transform",
        }}
      />
      {/* Cyan lagging ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998]"
        style={{
          width: 36,
          height: 36,
          border: "1.5px solid #f59e0b",
          opacity: 0.5,
          transition: "width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}