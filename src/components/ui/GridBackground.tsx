"use client";

export default function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">

      {/* amber tinted grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(245,158,11,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,158,11,0.07) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
          opacity: 0.6,
        }}
      />

      {/* diagonal accent lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, transparent, transparent 100px, rgba(6,182,212,0.03) 100px, rgba(6,182,212,0.03) 101px)",
        }}
      />

      {/* amber glow — top left */}
      <div
        className="absolute rounded-full"
        style={{
          width: "700px",
          height: "700px",
          background: "radial-gradient(circle, #f59e0b, transparent 70%)",
          filter: "blur(180px)",
          opacity: 0.18,
          top: "-20%",
          left: "-10%",
        }}
      />

      {/* cyan glow — bottom right */}
      <div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          filter: "blur(180px)",
          opacity: 0.14,
          bottom: "-10%",
          right: "-10%",
        }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)",
        }}
      />
    </div>
  );
}