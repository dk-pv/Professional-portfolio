/**
 * GridBackground
 * A single, fully static background for the whole site.
 * No motion, no CSS `filter: blur()`, no repaint-on-scroll — the glows are
 * plain radial-gradients (painted once) and the whole layer is `fixed`, so
 * scrolling never touches it. This is the key to a locked 60fps.
 */
export default function GridBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "#09090b" }}
    >
      {/* Elegant top lighting + accent glows (cheap radial-gradients).
          Drifts ultra-slowly on a GPU layer — movement is barely perceptible. */}
      <div
        className="bg-drift absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(60% 45% at 50% -8%, rgba(99,102,241,0.12), transparent 70%)",
            "radial-gradient(45% 40% at 82% 12%, rgba(139,92,246,0.08), transparent 70%)",
            "radial-gradient(50% 45% at 12% 88%, rgba(99,102,241,0.06), transparent 70%)",
          ].join(","),
        }}
      />

      {/* Very subtle grid, faded toward the edges for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px)," +
            "linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 55%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, #000 55%, transparent 100%)",
        }}
      />

      {/* Almost-invisible film grain (rendered once, static) */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.022,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px 160px",
        }}
      />

      {/* Soft edge vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 80% at 50% 45%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
