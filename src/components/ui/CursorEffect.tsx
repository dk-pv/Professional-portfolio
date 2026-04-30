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

      // CSS vars for spotlight
      document.documentElement.style.setProperty("--x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--y", `${e.clientY}px`);

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      // Ring follows with lag
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(animate);

    // Scale ring on hoverable elements
    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "50px";
        ringRef.current.style.height = "50px";
        ringRef.current.style.borderColor = "#06b6d4";
        ringRef.current.style.opacity = "0.8";
      }
    };
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "#f59e0b";
        ringRef.current.style.opacity = "0.5";
      }
    };

    const hoverables = document.querySelectorAll("a, button, [data-hover]");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Small amber dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          background: "#f59e0b",
          boxShadow: "0 0 8px #f59e0b, 0 0 16px #f59e0b80",
          transition: "transform 0.02s linear",
          willChange: "transform",
        }}
      />

      {/* Lagging cyan ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9998]"
        style={{
          border: "1.5px solid #f59e0b",
          opacity: 0.5,
          transition: "width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s",
          willChange: "transform",
        }}
      />
    </>
  );
}