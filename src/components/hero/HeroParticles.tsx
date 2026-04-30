"use client";

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

export default function HeroParticles() {

  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 z-0" // ⚠️ fixed z-index
      options={{
        fullScreen: false,

        particles: {
          number: { value: 70 },

          move: {
            enable: true,
            speed: 0.5,
            outModes: { default: "bounce" },
          },

          color: {
            value: ["#f59e0b", "#06b6d4"],
          },

          links: {
            enable: true,
            distance: 130,
            color: "#f59e0b",
            opacity: 0.12,
          },

          opacity: {
            value: { min: 0.2, max: 0.7 },
          },

          size: {
            value: { min: 1, max: 3 },
          },
        },

        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
          },
        },

        detectRetina: true,
      }}
    />
  );
}